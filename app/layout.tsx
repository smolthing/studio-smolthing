import "./globals.css";

import GoogleFontKoh from "./common/font/GoogleFontKoh";

let title = "Studio Smolthing";
let description = "I make tech cute";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://smolthing.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GoogleFontKoh.variable}>{children}</body>
    </html>
  );
}
