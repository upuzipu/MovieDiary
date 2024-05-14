import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React from "react";
import {Providers} from "@/app/components/providers/Providers";

const font = Roboto({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="myDark">
        <Providers>
            <body className={font.className}>{children}</body>
        </Providers>
        </html>
    );
}
