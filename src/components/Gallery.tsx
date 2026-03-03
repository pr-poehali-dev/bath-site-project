const BANYA_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/107df2a0-1daa-4fbd-aea0-6dbe9f288aca.jpg';
const SRUB_IMG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/99dc5e3a-e879-4eb5-b762-c02ce249bfd3.jpg';
const FOREST_BG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/fde652fb-37c4-4a16-bd09-1d420b8a6286.jpg';

const photos = [
  { src: BANYA_IMG, caption: 'Рубленая баня из дикого леса' },
  { src: SRUB_IMG, caption: 'Сруб ручной рубки' },
  { src: FOREST_BG, caption: 'Наши материалы — дикий лес' },
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
