import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
