import { ArrowRight } from 'lucide-react';
import heroImage from 'figma:asset/4e854469375744700632b5d2ad9e05c57f35f35f.png';

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px]">
      {/* Left Content */}
      <div className="bg-[#2E00B8] text-white flex items-center px-8 md:px-20 py-16">
        <div className="max-w-xl">
          <h1 className="mb-6 text-[62px] font-bold">
            Assistência Técnica Autorizada Aurora, Tilibra e Elgin
          </h1>
          <p className="mb-8 text-white/90 text-[24px]">
            Há mais de 20 anos garantindo o perfeito funcionamento de calculadoras, 
            plastificadoras, fragmentadoras e climatizadores.
          </p>
          <a 
            href="https://wa.me/5511997811972?text=Ol%C3%A1%21%20Estou%20visitando%20o%20site%20da%20Ligmaq%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2E00B8] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative h-[400px] md:h-auto">
        <img
          src={heroImage}
          alt="Técnico realizando manutenção"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
