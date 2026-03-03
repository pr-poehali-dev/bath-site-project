const reviews = [
  {
    name: 'Сергей М.',
    location: 'Москва',
    text: 'Заказывали баню 5×6. Алексей Владимирович — настоящий мастер! Рубил вручную, всё объяснил, привёз качественный лес. Баня стоит уже 3 года — никаких проблем. Рекомендую всем!',
    rating: 5,
  },
  {
    name: 'Андрей К.',
    location: 'Нижний Новгород',
    text: 'Строили сруб по нашему проекту. Козлов Алексей учёл все наши пожелания, предложил хорошие решения. Качество рубки на высочайшем уровне. Всё сделано точно в срок.',
    rating: 5,
  },
  {
    name: 'Татьяна Р.',
    location: 'Владимир',
    text: 'Долго искали мастера, который работает по традиционной технологии. Нашли Алексея — и не пожалели. Баня из настоящего дикого леса, рубленая топором. Пар держит отлично!',
    rating: 5,
  },
  {
    name: 'Виктор Д.',
    location: 'Ярославль',
    text: 'Брали маленькую баньку для дачи. Цена справедливая, работа аккуратная. Все стыки плотные, никаких щелей. Уже второй год паримся с удовольствием.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#2a1a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Что говорят клиенты</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5efe6] mb-4">Отзывы</h2>
          <p className="text-[#c8956a] text-lg">
            Более 200 довольных клиентов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#3d2510]/60 border border-[#6b3d1e] rounded-lg p-6 hover:border-[#c8956a]/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#c8956a] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#e8d5b7] leading-relaxed mb-5 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c8956a]/30 flex items-center justify-center text-[#c8956a] font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-[#f5efe6] font-semibold">{r.name}</div>
                  <div className="text-[#c8956a] text-sm">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
