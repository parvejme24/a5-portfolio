import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import GradiantImage from '@/public/images/gradiant-bg.png'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            {/* navbar  */}
            <Navbar />

            {/* gradiant  */}
            <div aria-hidden="true">
              {/* Bottom Left Image */}
              {/* <img
                src="/images/gradiant-bg.png"
                alt=""
                className="w-full fixed block opacity-100 -bottom-[20%] -left-[30%] md:-bottom-[30%] md:-left-[30%] z-10"
              /> */}

              {/* center center Image */}
              {/* <img
                src="/images/gradiant-bg.png"
                alt=""
                className="block md:hidden w-full fixed opacity-70 top-[40] left-[40] z-10 rotate-180"
              /> */}

              {/* Top Right Image */}
              {/* <img
                src="/images/gradiant-bg.png"
                alt=""
                className="w-full fixed block opacity-70 -top-[20%] -right-[30%] md:-top-[50%] md:-right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-10 rotate-12"
              /> */}
            </div>

            {/* children  */}
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>

            {/* footer  */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
