export default function Footer() {
  return (
    <footer className="bg-[#1a0f05] border-t border-[#3d2510] py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <img
          src="https://cdn.poehali.dev/projects/ad2c1449-2335-45e9-9660-4995e30f954d/bucket/bdec2847-bfcb-4868-8128-2eccbeca9f39.jpg"
          alt="Леший"
          className="w-16 h-16 object-contain mx-auto mb-2"
          style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(10deg)' }}
        />
        <div className="text-[#f5efe6] font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
          Козлов & Бани
        </div>
        <p className="text-[#8a7060] text-sm mb-4">
          Рубленые бани и срубы ручной работы из дикого леса
        </p>
        <div className="flex justify-center gap-6 text-sm text-[#6b4226]">
          <a href="#home" className="hover:text-[#c8956a] transition-colors">Главная</a>
          <a href="#services" className="hover:text-[#c8956a] transition-colors">Услуги</a>
          <a href="#price" className="hover:text-[#c8956a] transition-colors">Прайс</a>
          <a href="#contacts" className="hover:text-[#c8956a] transition-colors">Контакты</a>
        </div>
        <div className="mt-6 text-[#4a3020] text-xs">
          © {new Date().getFullYear()} Алексей Владимирович Козлов. Все права защищены.
        </div>
      </div>
    </footer>
  );
}