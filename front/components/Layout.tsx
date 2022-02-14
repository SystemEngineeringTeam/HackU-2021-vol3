import { ReactNode, VFC } from "react";
import Header from "./Header";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
