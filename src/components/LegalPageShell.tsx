import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalPageShellProps = {
  children: ReactNode;
};

export default function LegalPageShell({ children }: LegalPageShellProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-16 px-4 bg-background">
        {children}
      </main>
      <Footer />
    </>
  );
}
