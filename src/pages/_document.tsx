import { NavBar } from '@/components/Navbar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <div className="h-12" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
