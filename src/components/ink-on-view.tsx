// "use client";
// import { useEffect } from "react";

// export default function InkOnView() {
//   useEffect(() => {
//     const els = document.querySelectorAll<HTMLElement>(".js-ink");
//     const io = new IntersectionObserver((entries) => {
//       entries.forEach((e) => {
//         if (e.isIntersecting) {
//           e.target.classList.add("u-ink");  // tambahkan trigger animasi
//           io.unobserve(e.target);
//         }
//       });
//     }, { rootMargin: "0px 0px -10% 0px" });
//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);
//   return null;
// }

"use client";
import { useEffect } from "react";

export default function InkOnView() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".js-ink");

    // Observer: hanya jalan di client
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // tambahkan class animasi hanya sekali
            e.target.classList.add("u-ink");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
