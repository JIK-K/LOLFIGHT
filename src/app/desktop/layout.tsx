import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOL.FIGHT.DESKTOP",
  description: "Create and join League of Legends tournaments.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-['Pretendard']">
        {/* <div className="w-full"> */}
        {/* <div className="mx-auto w-1200px"> */}
        {children}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
