import image_2f027fef4dfafd7648c6bf848ec270ed1ed96f1c from 'figma:asset/2f027fef4dfafd7648c6bf848ec270ed1ed96f1c.png';
import image_7255519035461d031b1ad2230262452f014e3316 from 'figma:asset/7255519035461d031b1ad2230262452f014e3316.png';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function WhatsAppSection() {
  return (
    <section className="grid md:grid-cols-2">
      {/* Left Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <ImageWithFallback
          src={image_2f027fef4dfafd7648c6bf848ec270ed1ed96f1c}
          alt="Contato via WhatsApp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="bg-[#2E00B8] text-white flex items-center px-8 md:px-20 py-16">
        <div className="max-w-xl">
          <p className="mb-8 text-white/90 leading-relaxed text-[50px] font-bold">
            Estamos prontos para ajudar! Fale conosco pelo WhatsApp.
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
    </section>
  );
}
