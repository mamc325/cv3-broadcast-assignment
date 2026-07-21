import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "라방바 방송 리스트",
  description: "라방바 데이터랩 방송 리스트 (CV3 기술과제)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
