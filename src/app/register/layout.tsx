import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-['Pretendard']">
        <div className="w-full">
          <div className="mx-auto w-1200px">
            <div className="flex justify-center items-center pt-24 mb-8">
              <Link className="text-32px font-extrabold" key="home" href={"/"}>
                LOL.FIGHT
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-525px flex flex-col border border-gray-200 rounded-md p-20 w-540px">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
