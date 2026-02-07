import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Icon from "./ui/icon";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-sentient mb-6">
              Свяжитесь <i className="font-light">с нами</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 mb-8">
              Готовы начать работу? Напишите нам, и мы подберём идеальное
              решение для вашей компании
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/60 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@roomsaggregator.ru"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    info@roomsaggregator.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/60 mb-1">
                    Телефон
                  </p>
                  <a
                    href="tel:+74951234567"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Clock" className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/60 mb-1">
                    Время работы
                  </p>
                  <p className="text-foreground">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border">
            <form className="space-y-6">
              <div>
                <label className="font-mono text-xs text-foreground/80 mb-2 block">
                  Имя
                </label>
                <Input placeholder="Ваше имя" />
              </div>

              <div>
                <label className="font-mono text-xs text-foreground/80 mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="font-mono text-xs text-foreground/80 mb-2 block">
                  Компания
                </label>
                <Input placeholder="Название компании" />
              </div>

              <div>
                <label className="font-mono text-xs text-foreground/80 mb-2 block">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите о ваших потребностях..."
                  rows={4}
                />
              </div>

              <Button className="w-full">Отправить заявку</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
