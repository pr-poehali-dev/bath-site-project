const BANYA_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/107df2a0-1daa-4fbd-aea0-6dbe9f288aca.jpg';
const SRUB_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/99dc5e3a-e879-4eb5-b762-c02ce249bfd3.jpg';
const FOREST_BG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/fde652fb-37c4-4a16-bd09-1d420b8a6286.jpg';

const photos = [
  { src: 'https://cdn.poehali.dev/files/32ed958a-f2c1-4953-98ef-90658a214447.jpg', caption: 'Сруб в сборке — наша работа' },
  { src: 'https://cdn.poehali.dev/files/effca485-e9f9-4923-a710-df86241626b0.jpg', caption: 'Готовая баня из дикого леса' },
  { src: 'https://cdn.poehali.dev/files/89d60fa9-3785-422e-bcf6-4c38822b2efb.jpg', caption: 'Угловое соединение ручной рубки' },
  { src: 'https://cdn.poehali.dev/files/5ea204e1-8e47-441c-b9e7-aeeb35a870c0.jpg', caption: 'Заготовка сруба зимой' },
  { src: 'https://cdn.poehali.dev/files/54ea1b44-59c6-43dd-8ac4-32326b0978f3.jpg', caption: 'Сруб бани из дикого леса' },
  { src: BANYA_IMG, caption: 'Традиционная баня' },
  { src: SRUB_IMG, caption: 'Жилой сруб' },
  { src: FOREST_BG, caption: 'Работа в лесу' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#2a1a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Наши работы</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5efe6] mb-4">Галерея</h2>
          <p className="text-[#c8956a] text-lg">
            Каждый объект — результат кропотливого ручного труда
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-[#f5efe6] text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-10">
          <div className="text-center mb-8">
            <div className="text-[#c8956a] text-sm tracking-[0.3em] uppercase mb-3">Отделка</div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#f5efe6] mb-3">Браширование поверхности</h3>
            <p className="text-[#c8956a] text-base max-w-xl mx-auto">
              Ручная обработка металлической щёткой — текстура дерева раскрывается, поверхность приобретает рельеф и благородный вид
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://cdn.poehali.dev/files/5aa556fd-46a5-46ba-b9a2-0c4d8c33e93c.jpg', caption: 'Браширование — рельефная поверхность' },
              { src: 'https://cdn.poehali.dev/files/d282eaf6-e247-4d26-b780-b5a0d1871276.jpg', caption: 'Брашированная доска после обработки' },
              { src: 'https://cdn.poehali.dev/files/589e397b-6bc7-447e-a5a5-f5612e589484.jpg', caption: 'Текстура дерева после браширования' },
              { src: 'https://cdn.poehali.dev/files/8ead7183-54ed-41d0-9299-38302f0af134.jpg', caption: 'Угловой стык — брашированный сруб' },
              { src: 'https://cdn.poehali.dev/files/340b8133-ef36-4743-8e13-f5e56b1c4195.jpg', caption: 'Состаренное дерево — вид крупно' },
            ].map((photo, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-[#f5efe6] text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#e8d5b7] text-sm">
            Больше фотографий — обращайтесь напрямую к мастеру
          </p>
          <a
            href="#contacts"
            className="mt-4 inline-block border border-[#c8956a] text-[#c8956a] hover:bg-[#c8956a] hover:text-[#3d2510] font-bold px-6 py-2 rounded transition-colors duration-200"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}