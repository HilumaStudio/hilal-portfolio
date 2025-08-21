import HeroBlob from "@/components/hero-blob";
import PortfolioCard from "@/components/portfolio-card";
import { projects } from "@/data/projects";
import InkOnView from "@/components/ink-on-view";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main>
      <InkOnView />
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur
                        dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-extrabold tracking-tight">Hilal A.<span className="sr-only"> Home</span></a>

          {/* kanan: nav + toggle dalam satu grup */}
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm sm:flex">
              <a className="opacity-70 hover:opacity-100" href="#craft">Behind the Craft</a>
              <a className="opacity-70 hover:opacity-100" href="#work">Works</a>
              <a className="opacity-70 hover:opacity-100" href="#contact">Let’s Build</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>


      {/* HERO */}
      <section id="home" className="relative scroll-mt-24 min-h-screen grid place-items-center -mt-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:py-24">
          <div className="order-1 md:order-2 md:col-span-5"><HeroBlob/></div>

          <div className="order-2 md:order-1 md:col-span-7">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Design meets <span className="u u-thick js-ink">purpose</span>
            </h1>
            <p className="mt-6 max-w-prose text-zinc-600 dark:text-zinc-300 md:text-lg">
              Halo, saya <strong>Hilal Abdullah</strong>, web developer dan logo designer. Saya suka bikin tampilan rapi, cepat dipahami, dan enak dipakai. Intinya, desain yang bantu orang lain.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">Lihat karya</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-zinc-900 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-zinc-100">Hubungi saya</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-zinc-500  dark:text-zinc-400" aria-label="Capabilities">
              <li>Logo Design</li>
              <li>Visual Identity</li>
              <li>Web Design</li>
              <li>WordPress</li>
              <li>Frontend Dev</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="craft" className="relative border-y border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 cursor-default">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Behind the Craft</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Bikin yang <span className="u u-thick  js-ink">simpel</span>, jelas, dan bikin tenang</h2>
            <p className="mt-5 text-zinc-600 dark:text-zinc-300 md:text-lg">Buat saya, desain itu cerita yang rapi. Logo, identitas, sampai website, semuanya diarahkan supaya orang paham dan betah. Fokusnya sederhana: membantu brand terlihat meyakinkan.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
              <h3 className="text-lg font-semibold">01 • Clarity</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tipografi bersih, hierarki jelas, dan layout yang memandu mata. Pesan sampai tanpa ribet.</p>
            </article>
            <article className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
              <h3 className="text-lg font-semibold">02 • Consistency</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Dari logo ke media sosial, semua seragam rasanya. Jadi lebih mudah diingat.</p>
            </article>
            <article className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
              <h3 className="text-lg font-semibold">03 • Craft</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Detail kecil seperti grid, spasi, kontras, feel itu penting. Sederhana tapi ada karakternya.</p>
            </article>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="work" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Selected Works</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Proyek <span className="u u-thick js-ink">Pilihan</span></h2>
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Klik kartu untuk lihat detail</div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => <PortfolioCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Let&#39;s Build Something</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Ceritakan idemu, ayo kita <span className="u u-thick js-ink">wujudkan</span>
          </h2>
          <p className="mt-5 text-zinc-600 dark:text-zinc-300">Paling cepat lewat WhatsApp. Klik tombol di bawah, ceritakan kebutuhanmu.</p>
          <div className="mt-8">
            <a href="https://wa.me/6282140811952?text=Halo%20Hilal,%20saya%20tertarik%20dengan%20jasa%20desain/website."
               className="inline-flex items-center justify-center rounded-xl border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
              Chat di WhatsApp
            </a>
          </div>
          <div className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">Email juga: <a className="underline" href="mailto:hilal@hilumastudio.com">hilal@hilumastudio.com</a></div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-sm">© 2025 Hilal Abdullah - Portfolio</p>
          <p className="text-xs text-zinc-400">Great design feels simple and right.</p>
        </div>
      </footer>
    </main>
  );
}
