import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core'
import { Sarabun } from 'next/font/google'

const sarabun = Sarabun({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['thai'],
})

export const metadata: Metadata = {
  title: "ThaiD Homework",
  description: "Homework for ThaiD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={sarabun.className}>
        <MantineProvider>
          <Container>
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
