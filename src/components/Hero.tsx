const FOREST_BG = 'https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/files/fde652fb-37c4-4a16-bd09-1d420b8a6286.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${FOREST_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-[#1a0f05]/50 to-[#1a0f05]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-32">
        <div className="inline-block border border-[#c8956a]/50 px-6 py-2 mb-6 text-[#c8956a] text-sm tracking-[0.3em] uppercase">
          Традиционное мастерство
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#f5efe6] mb-6 leading-tight">
          Бани и срубы <br />
          <span className="text-[#c8956a]">ручной работы</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#e8d5b7] mb-4 max-w-2xl mx-auto leading-relaxed">
          Изготавливаем традиционным способом — методом рубки топором,
          без машинной обработки. Из дикого леса.
        </p>

        <p className="text-[#c8956a] text-lg mb-10">
          Срок изготовления от 1 месяца
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacts"
            className="bg-[#c8956a] hover:bg-[#b07a52] text-[#3d2510] font-bold px-8 py-4 rounded text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Обсудить проект
          </a>
          <a
            href="#services"
            className="border-2 border-[#c8956a] text-[#f5efe6] hover:bg-[#c8956a]/20 font-bold px-8 py-4 rounded text-lg transition-all duration-300"
          >
            Наши услуги
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { num: '15+', label: 'лет опыта' },
            { num: '200+', label: 'объектов' },
            { num: '100%', label: 'ручная работа' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#c8956a]">{stat.num}</div>
              <div className="text-[#e8d5b7] text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c8956a] animate-bounce">
        <div className="text-2xl">↓</div>
      </div>
    </section>
  );
}
