import type { Metadata } from "next";
import localFont from "next/font/local";
// import { cookies } from "next/headers";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import Navigation from "../components/navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Uttama Blog",
  description: "Uttama Blog",
};

const InitialThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          const theme = localStorage.getItem('theme');
          const darkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
          if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        })();
      `,
    }}
  />
);

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // const cookieStore = await cookies();
  // const theme = cookieStore.get('theme')?.value ?? '';

  return (
    // <html lang="en" className={theme}>
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <InitialThemeScript />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
