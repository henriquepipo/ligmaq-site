import { Phone } from 'lucide-react';
import logoImage from 'figma:asset/ab2d4a8280fcd8e7c4f6f7e2353ce3704eadaec3.png';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Ligmaq" className="h-12" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-700 hover:text-[#2E00B8] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-[#2E00B8] transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-[#2E00B8] transition-colors">
              Contato
            </a>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <div className="flex flex-col text-sm">
                <span>Emergência?</span>
                <span>Ligue: (11) 3904-4944</span>
              </div>
            </div>
            <a 
              href="https://wa.me/5511997811972?text=Ol%C3%A1%21%20Estou%20visitando%20o%20site%20da%20Ligmaq%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4B57FF] text-white px-6 py-2.5 rounded-lg hover:bg-[#3E23D1] transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
