import type { Metadata } from "next";
import "./globals.scss";
import StoreProvider from "@/store/StoreProvider";
import Layout from "@/layout/Layout";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import HooksProvider from "@/providers/HooksProvider";
import AuthProvider from "@/providers/AuthProvider";
import ToasterProvider from "@/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel made with NextJs and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <HooksProvider>
            <AuthProvider>
              <ToasterProvider />
              <Layout
                styles={
                  "flex h-screen bg-bodydark1 dark:bg-boxdark-2 dark:text-bodydark"
                }
              >
                <Aside />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden min-h-screen">
                  <Header />
                  {children}
                </div>
              </Layout>
            </AuthProvider>
          </HooksProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
