import { Logo } from "./Logo";
import Icon from "./ui/icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    platform: [
      { label: "Комнаты", href: "#rooms" },
      { label: "Дизайны", href: "#designs" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Документация", href: "#docs" },
    ],
    company: [
      { label: "О нас", href: "#about" },
      { label: "Блог", href: "#blog" },
      { label: "Вакансии", href: "#careers" },
      { label: "Контакты", href: "#contact" },
    ],
    legal: [
      { label: "Политика конфиденциальности", href: "#privacy" },
      { label: "Условия использования", href: "#terms" },
      { label: "Безопасность", href: "#security" },
    ],
  };

  const social = [
    { icon: "Mail", href: "mailto:info@roomsaggregator.ru", label: "Email" },
    { icon: "Phone", href: "tel:+74951234567", label: "Телефон" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Logo className="w-[120px] mb-4" />
            <p className="font-mono text-sm text-foreground/60 max-w-sm mb-6">
              Премиальная платформа для аренды виртуальных комнат
              видеоконференций
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label={item.label}
                >
                  <Icon name={item.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase text-foreground/80 mb-4">
              Платформа
            </h3>
            <ul className="space-y-3">
              {links.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase text-foreground/80 mb-4">
              Компания
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase text-foreground/80 mb-4">
              Правовая информация
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-foreground/60">
              © {currentYear} ROOMS. Все права защищены.
            </p>
            <p className="font-mono text-xs text-foreground/60">
              Сделано с ❤️ в России
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
