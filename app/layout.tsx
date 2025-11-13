import React from 'react';

export const metadata = {
  title: 'BloomShield',
  description: 'Digital Content Protection Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
