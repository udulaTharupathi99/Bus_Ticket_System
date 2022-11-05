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

    
    // test("form password type should be a password", () => {
    //     const { getByPlaceholderText } = render(
    //       <Router>
    //         <Login />
    //       </Router>
    //     );
    //     const nameLabel = getByPlaceholderText("Enter IT number");
    //     const ageLabel = getByPlaceholderText("Enter Password");
    //     expect(nameLabel).toBeInTheDocument();
    //     expect(ageLabel).toBeInTheDocument();
    //     const input = getByPlaceholderText("Enter Password");
    //     expect(input).toHaveAttribute("type", "password");
    //   });

});