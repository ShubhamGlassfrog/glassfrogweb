import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LTXJVZTED2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LTXJVZTED2');
            `,
          }}
        ></script>

        {/* Microsoft Clarity Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "p0ffuu413a");
            `,
          }}
        ></script>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      !function () {
        var reb2b = window.reb2b = window.reb2b || [];
        if (reb2b.invoked) return;
        reb2b.invoked = true;
        reb2b.methods = ["identify", "collect"];
        reb2b.factory = function (method) {
          return function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            reb2b.push(args);
            return reb2b;
          };
        };
        for (var i = 0; i < reb2b.methods.length; i++) {
          var key = reb2b.methods[i];
          reb2b[key] = reb2b.factory(key);
        }
        reb2b.load = function (key) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/DNXY8HKY75O0.js.gz";
          var first = document.getElementsByTagName("script")[0];
          first.parentNode.insertBefore(script, first);
        };
        reb2b.SNIPPET_VERSION = "1.0.1";
        reb2b.load("DNXY8HKY75O0");
      }();
    `,
  }}
></script>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
