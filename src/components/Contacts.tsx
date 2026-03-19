import Icon from '@/components/ui/icon';

const contacts = [
  {
    icon: 'Phone',
    label: 'Телефон',
    value: '+7 (920) 626-04-61',
    href: 'tel:+79206260461',
  },
  {
    icon: 'Send',
    label: 'Telegram',
    value: '+7 (901) 192-66-87',
    href: 'https://t.me/+79011926687',
  },
  {
    icon: 'MessageCircle',
    label: 'Max',
    value: '+7 (901) 192-66-87',
    href: 'https://max.ru/+79011926687',
  },
  {
    icon: 'Mail',
    label: 'Email',
    value: 'lechei90@mail.ru',
    href: 'mailto:lechei90@mail.ru',
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-[#f5efe6] wood-texture">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Свяжитесь с нами</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2510] mb-4">Контакты</h2>
          <p className="text-[#6b4226] text-lg">
            Готов ответить на все вопросы и обсудить ваш проект
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="bg-[#3d2510] rounded-lg p-8 text-center mb-6">
              <div className="text-5xl mb-4">🪓</div>
              <h3 className="text-2xl font-bold text-[#f5efe6] mb-2">
                Алексей Владимирович Козлов
              </h3>
              <p className="text-[#c8956a] text-sm mb-6">Мастер-плотник, изготовитель срубов и бань</p>

              <div className="space-y-4">
                {contacts.map(c => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 bg-[#6b3d1e]/40 hover:bg-[#6b3d1e]/70 rounded-lg px-5 py-4 transition-colors duration-200 group"
                  >
                    <div className="text-[#c8956a]">
                      <Icon name={c.icon} size={22} />
                    </div>
                    <div className="text-left">
                      <div className="text-[#c8956a] text-xs uppercase tracking-wide">{c.label}</div>
                      <div className="text-[#f5efe6] font-semibold group-hover:text-[#c8956a] transition-colors">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#3d2510]/10 border border-[#d4b896] rounded-lg p-5">
              <h4 className="font-bold text-[#3d2510] mb-3">Как мы работаем:</h4>
              <ol className="space-y-2 text-[#5a3820] text-sm">
                <li><span className="text-[#c8956a] font-bold">1.</span> Обсуждаем проект и ваши пожелания</li>
                <li><span className="text-[#c8956a] font-bold">2.</span> Согласовываем размеры и эскиз</li>
                <li><span className="text-[#c8956a] font-bold">3.</span> Определяем стоимость и сроки</li>
                <li><span className="text-[#c8956a] font-bold">4.</span> Заключаем договор</li>
                <li><span className="text-[#c8956a] font-bold">5.</span> Изготавливаем от 1 месяца</li>
              </ol>
            </div>
          </div>

          <div className="bg-white border border-[#d4b896] rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3d2510] mb-6">Оставить заявку</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-[#5a3820] mb-1">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванович"
                  className="w-full border border-[#d4b896] rounded px-4 py-3 text-[#3d2510] focus:outline-none focus:border-[#c8956a] bg-[#fdf8f2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5a3820] mb-1">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-[#d4b896] rounded px-4 py-3 text-[#3d2510] focus:outline-none focus:border-[#c8956a] bg-[#fdf8f2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5a3820] mb-1">Что интересует?</label>
                <select className="w-full border border-[#d4b896] rounded px-4 py-3 text-[#3d2510] focus:outline-none focus:border-[#c8956a] bg-[#fdf8f2]">
                  <option>Баня</option>
                  <option>Сруб / дом</option>
                  <option>По моему проекту</option>
                  <option>Хочу узнать цену</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5a3820] mb-1">Комментарий</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full border border-[#d4b896] rounded px-4 py-3 text-[#3d2510] focus:outline-none focus:border-[#c8956a] bg-[#fdf8f2] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8956a] hover:bg-[#b07a52] text-[#3d2510] font-bold py-4 rounded text-lg transition-colors duration-200"
              >
                Отправить заявку
              </button>
              <p className="text-[#8a7060] text-xs text-center">
                Свяжемся с вами в течение дня
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}