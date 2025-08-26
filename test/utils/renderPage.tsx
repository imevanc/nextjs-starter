import { ReactNode } from "react";
import { render } from "@testing-library/react";

type Overrides = {};

export const renderPage = (children: ReactNode, overrides?: Overrides) => {
  // You can update the componet props with the overrides here
  console.log("overrides", overrides);
  render(children);
};
