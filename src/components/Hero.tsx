import { WINDOWS_DOWNLOAD_URL } from "@/lib/downloads";
import { DownloadIcon } from "./icons";
import { SiteHeader } from "./SiteHeader";
import { VaultPortal } from "./VaultPortal";

export function Hero() {
  return (
    <div className="relative min-h-[900px] overflow-hidden">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />

      <SiteHeader />

      <main className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 pt-6 pb-[72px] min-[961px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="relative z-[2] flex flex-col gap-7">
          <h1 className="m-0 font-display text-[clamp(42px,6vw,84px)] leading-[.98] font-extrabold tracking-[-0.02em] uppercase">
            Há mais do <span className="text-gold">outro lado.</span>
          </h1>
          <p className="m-0 max-w-[480px] text-lg leading-[1.6] text-muted">
            Call com o squad, um feed do que a galera está jogando e clipes da sua jogatina salvos na hora. Tudo num lugar só. Só falta abrir o cofre.
          </p>
          <div id="baixar" className="flex flex-wrap gap-3.5 pt-1">
            <a
              href={WINDOWS_DOWNLOAD_URL}
              className="inline-flex min-h-14 items-center gap-3 rounded-xl bg-gold px-7 text-base font-extrabold text-gold-ink shadow-[0_10px_40px_rgb(209_164_88/.25)] transition-colors hover:bg-gold-hover"
            >
              <DownloadIcon size={20} />
              Baixar para Windows
            </a>
            <a
              href="#"
              className="inline-flex min-h-14 items-center gap-2.5 rounded-xl border border-line px-6 text-base font-bold text-ink transition-colors hover:border-gold"
            >
              Outras plataformas
            </a>
          </div>
        </div>

        <VaultPortal />
      </main>
    </div>
  );
}
