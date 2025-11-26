import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EZ Business Plan',
  description: 'Get started generating your business plan today with EZ Business Plan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
