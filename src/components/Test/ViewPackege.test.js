import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
// import ViewBus from "../Admin/ViewBus";
import ViewPackege from "../Admin/AddPackege";
import "@testing-library/jest-dom";

describe("view packages unit testing", () => {
    test("packcges view testing", () => {
      render(
        <Router>
          <ViewPackege/>
        </Router>
      );
      screen.debug();
    });

    // test("seach name type should be a txt", () => {
    //   const { getByPlaceholderText } = render(
    //     <Router>
    //       <AddPackege />
    //     </Router>
    //   );
    //   const Search = getByPlaceholderText("Search by name");
    //   expect(Search).toBeInTheDocument();
    //   const input = getByPlaceholderText("Search by name");
    //   expect(input).toHaveAttribute("type", "text");
      
    // });
});