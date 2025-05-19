
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LiveChat from "../UI/LiveChat";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default MainLayout;
