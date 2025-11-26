import type { Metadata } from 'next';
import Header from '../components/Layout/Header'
import './globals.css';

export const metadata: Metadata = {
  title: 'Signature Business Plans',
  description: 'Jump start your business with Signature Business Plans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
