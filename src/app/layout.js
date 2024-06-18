import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16573743263"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16573743263');
            `,
          }}
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
