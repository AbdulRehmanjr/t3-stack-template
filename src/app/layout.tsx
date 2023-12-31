import "@/styles/globals.css";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";


export const metadata = {
  title: "Bicycle Admin",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <Toaster/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
