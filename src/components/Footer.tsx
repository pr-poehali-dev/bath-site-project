export default function Footer() {
  return (
    <footer className="bg-[#1a0f05] border-t border-[#3d2510] py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-[#c8956a] text-2xl mb-2">🪵</div>
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
