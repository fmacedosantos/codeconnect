import './globals.css'

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para desenvolvedores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
