import { ReactNode } from "react";
import { render } from "@testing-library/react";

type Overrides = {};

export const renderPage = (children: ReactNode, overrides?: Overrides) =>
  render(children);
