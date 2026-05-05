// @widgets/Metrica.tsx
"use client"; // Обязательно, так как метрика работает с браузерным window

import Script from "next/script";

export const Metrica = () => {
  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

           ym(109026169, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true, // Добавил вебвизор (запись экрана), в твоем коде его не было, но это мастхэв
                ecommerce:"dataLayer"
           });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/109026169"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
