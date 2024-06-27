import { ReactNode } from "react";
import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";

type Overrides = {};

export const renderPage = (children: ReactNode, overrides?: Overrides) =>
  render(<RootLayout>{children}</RootLayout>);
