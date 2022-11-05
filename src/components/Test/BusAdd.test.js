// test('test',()=>{
//     expect(true).toBe(true);
// })
import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import AddBus from "../Admin/AddBus";
import "@testing-library/jest-dom";

describe("Bus Add form unit testing", () => {
    test("buss add testing", () => {
      render(
        <Router>
          <AddBus/>
        </Router>
      );
      screen.debug();
    });

    
    test("form route name type should be a txt", () => {
        const { getByPlaceholderText } = render(
          <Router>
            <AddBus />
          </Router>
        );
        const routeNo = getByPlaceholderText("Route Number");
        const startLocation = getByPlaceholderText("Start");
        const startTime = getByPlaceholderText("Start time");
        expect(routeNo).toBeInTheDocument();
        expect(startLocation).toBeInTheDocument();
        expect(startTime).toBeInTheDocument();
        const input = getByPlaceholderText("Route Number");
        expect(input).toHaveAttribute("type", "text");
        const input1 = getByPlaceholderText("Start time");
        // expect(input1).toHaveAttribute("type", "date");
        
      });

      test("Route Num input field should accept any text format", () => {
        render(
          <Router>
            <AddBus />
          </Router>
        );
        const RouteNO = screen.getByPlaceholderText("Route Number");
        userEvent.type(RouteNO, "222");
        expect(RouteNO.value).toMatch("222");
      });

      

      test("render the Add bus form from with 1 buttons", async () => {
        render(
          <Router>
            <AddBus />
          </Router>
        );
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
      });

});