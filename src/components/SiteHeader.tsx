import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Baixar", href: "#baixar" },
  { label: "Novidades", href: "#" },
  { label: "Comunidade", href: "#" },
  { label: "Segurança", href: "#" },
  { label: "Suporte", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-7">
      <Link href="/" aria-label="Vault — início" className="flex items-center">
        <Image src={logo} alt="Vault" priority className="block h-7 w-auto" />
      </Link>

      <nav aria-label="Principal" className="hidden items-center gap-9 text-[15px] font-semibold min-[961px]:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="text-soft transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#"
        className="hidden min-h-11 items-center rounded-[10px] border border-line px-5 text-sm font-bold text-ink transition-colors hover:border-gold min-[561px]:inline-flex"
      >
        Entrar no Vault
      </a>
    </header>
  );
}
