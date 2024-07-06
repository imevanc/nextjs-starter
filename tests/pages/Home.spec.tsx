// @ts-nocheck
import {screen} from "@testing-library/react";
import {test} from "@jest/globals";
import Home from "@/app/page";
import {renderPage} from "../utils/renderPage";

test("render the Homepage", async () => {
  renderPage(<Home />);

  expect(screen.getByRole("button",{name: /button 1/i})).toBeVisible();
});
