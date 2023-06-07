'use client'

import '../globals.css';
import { MetaMaskProvider } from 'metamask-react';

export const metadata = {
  title: 'guestBook',
  description: 'accept donation in crypto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaMaskProvider>
      <body>{children}</body>
      </MetaMaskProvider>
    </html>
  );
}
