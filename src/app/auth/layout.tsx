import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "300",
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${PoppinsFont.variable} h-screen flex p-3 gap-3`}>
      <div className="w-[40%] bg-red-500 rounded-md overflow-hidden">
        <Image
          sizes="100vw"
          className="w-full h-full object-cover"
          src={"/nike.png"}
          alt="sas"
          width={0}
          height={0}
        />
      </div>
      <div className="grow shadow-xl rounded-md">{children}</div>
    </main>
  );
}
