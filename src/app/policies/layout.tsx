import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOL.FIGHT",
  description: "Create and join League of Legends tournaments.",
  icons: {
    icon: "/icon-blue.ico",
  },
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-['Pretendard']">{children}</div>
    </>
  );
}
