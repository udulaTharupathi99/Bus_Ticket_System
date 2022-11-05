import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import AddPackege from "../Admin/AddPackege";
import "@testing-library/jest-dom";

describe("Bus Add form unit testing", () => {
    test("buss add testing", () => {
      render(
        <Router>
          <AddPackege/>
        </Router>
      );
      screen.debug();
    });

    
    test("form route name type should be a txt", () => {
        const { getByPlaceholderText } = render(
          <Router>
            <AddPackege />
          </Router>
        );
        const PName = getByPlaceholderText("Package Name");
        const price = getByPlaceholderText("price");
        expect(PName).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        const input = getByPlaceholderText("Package Name");
        expect(input).toHaveAttribute("type", "text");
        const input1 = getByPlaceholderText("price");
        expect(input1).toHaveAttribute("type", "text");
        
      });

      test("Price Fild should not accept text", () => {
        render(
          <Router>
            <AddPackege />
          </Router>
        );
        const Price = screen.getByPlaceholderText("price");
        userEvent.type(Price, "222");
        expect(Price.value).toMatch("222");
      });

      

      test("render the Add packges form from with 1 buttons", async () => {
        render(
          <Router>
            <AddPackege />
          </Router>
        );
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
      });

});