import { montserrat } from './ui/fonts';
import './ui/globals.css';

export const metadata = {
  title: "TradingPro - Hector Matías",
  description: "Web creada para el curso de TradingPro de Hector Matías",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
