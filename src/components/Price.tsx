const prices = [
  {
    title: 'Баня малая',
    size: '4×3 м',
    desc: 'Классическая баня с предбанником и парной. Ручная рубка топором из дикого леса.',
    price: 'от 100 000 ₽',
    features: ['Предбанник', 'Парная', 'Мойка', 'Терраса по желанию'],
    popular: false,
  },
  {
    title: 'Баня стандарт',
    size: '4×6 м',
    desc: 'Просторная баня с полноценными комнатами. Самый популярный вариант.',
    price: 'от 350 000 ₽',
    features: ['Предбанник', 'Комната отдыха', 'Парная', 'Мойка', 'Терраса'],
    popular: true,
  },
  {
    title: 'Сруб / Дом',
    size: 'по проекту',
    desc: 'Жилой сруб или дом по вашим эскизам. Полностью индивидуальный проект.',
    price: 'договорная',
    features: ['По вашему проекту', 'По вашим эскизам', 'Согласование включено', 'Любой размер'],
    popular: false,
  },
];

export default function Price() {
  return (
    <section id="price" className="py-20 bg-[#f5efe6] wood-texture">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Стоимость</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2510] mb-4">Прайс</h2>
          <p className="text-[#6b4226] text-lg max-w-xl mx-auto">
            Точная стоимость определяется после согласования проекта.
            Цены указаны ориентировочно.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {prices.map(p => (
            <div
              key={p.title}
              className={`relative rounded-lg overflow-hidden border-2 ${
                p.popular
                  ? 'border-[#c8956a] shadow-xl shadow-[#c8956a]/20'
                  : 'border-[#d4b896]'
              } bg-white`}
            >
              {p.popular && (
                <div className="bg-[#c8956a] text-[#3d2510] text-xs font-bold text-center py-2 tracking-widest uppercase">
                  Популярный выбор
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-[#c8956a] font-medium mb-1">{p.size}</div>
                <h3 className="text-2xl font-bold text-[#3d2510] mb-3">{p.title}</h3>
                <p className="text-[#6b4226] text-sm mb-5 leading-relaxed">{p.desc}</p>
                <div className="text-3xl font-bold text-[#3d2510] mb-5">{p.price}</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#5a3820]">
                      <span className="text-[#c8956a] text-base">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`block text-center font-bold py-3 rounded transition-colors duration-200 ${
                    p.popular
                      ? 'bg-[#c8956a] hover:bg-[#b07a52] text-[#3d2510]'
                      : 'bg-[#3d2510] hover:bg-[#6b3d1e] text-[#f5efe6]'
                  }`}
                >
                  Обсудить заказ
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#3d2510]/10 border border-[#d4b896] rounded-lg p-6 text-center">
          <p className="text-[#5a3820]">
            <strong>Срок изготовления:</strong> от 1 месяца. Точные сроки согласовываются индивидуально в зависимости от объёма работ.
          </p>
        </div>
      </div>
    </section>
  );
}