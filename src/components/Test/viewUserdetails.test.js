import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
// import ViewBus from "../Admin/ViewBus";
import ViewUserDetails from "../Admin/ViewUserDetails";
import "@testing-library/jest-dom";

describe("view packages unit testing", () => {
    test("packcges view testing", () => {
      render(
        <Router>
          <ViewUserDetails/>
        </Router>
      );
      screen.debug();
    });

    // test("seach name type should be a txt", () => {
    //   const { getByPlaceholderText } = render(
    //     <Router>
    //       <ViewUserDetails />
    //     </Router>
    //   );
    //   const Search = getByPlaceholderText("Search by name");
    //   expect(Search).toBeInTheDocument();
    //   const input = getByPlaceholderText("Search by name");
    //   expect(input).toHaveAttribute("type", "text");
      
    // });
});