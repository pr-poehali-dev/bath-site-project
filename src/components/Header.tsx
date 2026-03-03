import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Прайс', href: '#price' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3d2510]/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-[#c8956a] text-3xl">🪵</div>
          <div>
            <div className="text-[#f5efe6] font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Козлов & Бани
            </div>
            <div className="text-[#c8956a] text-xs tracking-widest uppercase">Рубленые срубы</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e8d5b7] hover:text-[#c8956a] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:block bg-[#c8956a] hover:bg-[#b07a52] text-[#3d2510] font-bold px-4 py-2 rounded text-sm transition-colors duration-200"
        >
          Позвонить
        </a>

        <button
          className="md:hidden text-[#f5efe6]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#3d2510] border-t border-[#6b3d1e] px-4 py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e8d5b7] hover:text-[#c8956a] text-base py-1 border-b border-[#6b3d1e]/40"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
