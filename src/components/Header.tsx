import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <a href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "Комнаты", href: "#rooms" },
            { label: "Дизайны", href: "#designs" },
            { label: "Тарифы", href: "#pricing" },
            { label: "Контакты", href: "#contact" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 max-lg:hidden">
          <a
            className="uppercase transition-colors ease-out duration-150 font-mono text-foreground/60 hover:text-foreground/100"
            href="/active"
          >
            Активные комнаты
          </a>
          <a
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-mono text-sm uppercase font-bold shadow-lg transition-all duration-150 flex items-center gap-2"
            href="/premium"
          >
            <span className="text-yellow-300">👑</span> Premium
          </a>
        </div>
        <MobileMenu />
      </header>
    </div>
  );
};