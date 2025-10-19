import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from 'figma:asset/13dc05eb0744e418781da58390ddc40139107077.png';
import elginLogo from 'figma:asset/923cb997d4c711f4e72e726ce033d7e1266dd08c.png';
import tilibraLogo from 'figma:asset/db869d00219841e13a1c089aa4cb59cf47c89d1f.png';
import auroraLogo from 'figma:asset/e830e9c9b1dd75e0fb574ecbb2644962bf0d5448.png';

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Técnico profissional"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[rgb(16,24,40)] mb-4 text-[24px] uppercase">A Ligmaq</p>
            <h2 className="mb-6 text-gray-900 text-[36px] font-bold">
              Manutenção especializada com mais de 20 anos de experiência
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-[20px]">
              Somos assistência autorizada das marcas Aurora, Tilibra e Elgin. Especializados em manutenção de calculadoras, plastificadoras, fragmentadoras, climatizadores e umidificadores, garantimos serviços de alta qualidade para manter seus equipamentos em perfeito funcionamento. Confie em nossa expertise!
            </p>

            {/* Brand Logos */}
            <div className="flex items-center gap-8 flex-wrap">
              <div className="px-6 py-3 bg-gray-100 rounded-lg">
                <img src={auroraLogo} alt="Aurora" className="h-8" />
              </div>
              <div className="px-6 py-3 bg-gray-100 rounded-lg">
                <img src={tilibraLogo} alt="Tilibra" className="h-8" />
              </div>
              <div className="px-6 py-3 bg-gray-100 rounded-lg">
                <img src={elginLogo} alt="Elgin" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
