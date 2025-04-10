import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umami Amman",
  description: "A revolving tasting experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
