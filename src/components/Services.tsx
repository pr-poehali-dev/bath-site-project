import Icon from '@/components/ui/icon';

const BANYA_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/107df2a0-1daa-4fbd-aea0-6dbe9f288aca.jpg';
const SRUB_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/99dc5e3a-e879-4eb5-b762-c02ce249bfd3.jpg';

const services = [
  {
    img: BANYA_IMG,
    title: 'Рубленые бани',
    desc: 'Традиционные русские бани, срубленные вручную топором из дикого леса. Каждое бревно подбирается и обрабатывается мастером.',
    features: ['Рубка топором', 'Дикий лес', 'Без машинной обработки', 'Срок от 1 месяца'],
    icon: 'Flame',
  },
  {
    img: SRUB_IMG,
    title: 'Срубы домов',
    desc: 'Жилые срубы и постройки в традиционном стиле. Изготовление по вашему проекту и эскизам — оплата договорная.',
    features: ['По проекту заказчика', 'По эскизам', 'Индивидуальный подход', 'Договорная оплата'],
    icon: 'Home',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f5efe6] wood-texture">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Чем занимаемся</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2510] mb-4">Наши услуги</h2>
          <p className="text-[#6b4226] text-lg max-w-xl mx-auto">
            Работаем только вручную — так, как делали наши предки столетиями.
            Это гарантия качества и долговечности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#d4b896] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2510]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-[#f5efe6]">
                  <Icon name={s.icon} size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3d2510] mb-3">{s.title}</h3>
                <p className="text-[#6b4226] mb-5 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#5a3820]">
                      <span className="text-[#c8956a]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className="mt-6 block text-center bg-[#3d2510] hover:bg-[#6b3d1e] text-[#f5efe6] font-bold py-3 rounded transition-colors duration-200"
                >
                  Узнать цену
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-4">
          <div className="text-center mb-8">
            <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Дополнительно</div>
            <h3 className="text-3xl font-bold text-[#3d2510]">Дополнительные услуги</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/c0b046e4-aa32-4638-b436-ccd53057ca69.jpg',
                title: 'Браширование',
                desc: 'Текстурирование поверхности древесины металлической щёткой — выявляет природный рисунок дерева',
              },
              {
                img: 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/e4f9f4c4-cf25-4335-a92c-562d61e76521.jpg',
                title: 'Обжиг',
                desc: 'Обжиг древесины для защиты и выразительного декоративного эффекта',
              },
              {
                img: 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/3514900c-c8a9-459d-8ead-d4a22cf76a99.jpg',
                title: 'Внутренняя отделка',
                desc: 'Чистовая отделка внутреннего пространства бани или сруба',
              },
              {
                img: 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/5cab296e-b313-4818-a4e6-e3f445a3647a.jpg',
                title: 'Пропитка',
                desc: 'Натуральными составами для долговечности и защиты от атмосферных осадков',
              },
              {
                img: 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/4e14b122-acaf-421e-a207-608fb17f118e.jpg',
                title: 'Мебель',
                desc: 'Изготовление деревянной мебели в едином стиле с постройкой',
              },
            ].map(item => (
              <div key={item.title} className="bg-white border border-[#d4b896] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#3d2510] mb-2 text-sm">{item.title}</h4>
                  <p className="text-[#8a7060] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#3d2510] rounded-lg p-8 text-center">
          <div className="text-3xl mb-3">🪓</div>
          <h3 className="text-2xl font-bold text-[#f5efe6] mb-3">Работа по проекту заказчика</h3>
          <p className="text-[#e8d5b7] max-w-2xl mx-auto">
            Возможно изготовление бани и сруба по вашему проекту и эскизам.
            Согласование проекта входит в стоимость. Оплата договорная — обсуждаем индивидуально.
          </p>
          <a
            href="#contacts"
            className="mt-6 inline-block bg-[#c8956a] hover:bg-[#b07a52] text-[#3d2510] font-bold px-8 py-3 rounded transition-colors duration-200"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
}