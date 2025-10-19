import { ImageWithFallback } from './figma/ImageWithFallback';
import plastificadoraImage from 'figma:asset/117babcc6c63fd47761b16ee99df7db79824b422.png';
import calculadoraImage from 'figma:asset/32c4ed83d5bfcdb89b7b507e54c9895e9160193f.png';
import fragmentadoraImage from 'figma:asset/8c9e061bd2f543004b7d71e37d04565febf9dff9.png';
import climatizadorImage from 'figma:asset/9daf7ae8adb24a2fbf95951b04d643e084dde545.png';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

function ServiceCard({ title, description, imageUrl, imageAlt }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-4">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="mb-3 text-gray-900 font-bold text-[20px]">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-[16px]">{description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: 'Climatizadores e Umidificadores Elgin',
      description: 'Assistência técnica autorizada de climatizadores e umidificadores da marca Elgin.',
      imageUrl: climatizadorImage,
      imageAlt: 'Climatizador',
    },
    {
      title: 'Fragmentadoras',
      description: 'Conserto e manutenção de fragmentadoras da marca Aurora e Tilibra. Empresa autorizada.',
      imageUrl: fragmentadoraImage,
      imageAlt: 'Fragmentadora',
    },
    {
      title: 'Calculadora de Mesa',
      description: 'Conserto e manutenção de calculadora de mesa profissional. Todas as marcas. Empresa autorizada Procalc.',
      imageUrl: calculadoraImage,
      imageAlt: 'Calculadora',
    },
    {
      title: 'Plastificadora Aurora',
      description: 'Conserto e manutenção de plastificadoras da marca Aurora. Empresa autorizada e especializada.',
      imageUrl: plastificadoraImage,
      imageAlt: 'Plastificadora',
    },
  ];

  return (
    <section id="servicos" className="bg-[#F8FAFC] py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <h2 className="text-center mb-12 text-gray-900 text-[36px] font-bold">Nossos serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
