import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

export default function MainLayout({
  children,
  rootClassName,
  fluid = false,
}: {
  children: React.ReactNode;
  rootClassName?: string;
  fluid?: boolean;
}) {
  return (
    <div className={rootClassName}>
      <Header />
      <div className={`mx-auto ${!fluid && "container py-5 lg:py-14"}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
