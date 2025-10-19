import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h3 className="mb-8 text-[#2E00B8]">Ligmaq</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2E00B8] mt-1" />
                <div>
                  <p className="text-gray-900 mb-1">Telefones</p>
                  <p className="text-gray-600">(11) 3904-4944</p>
                  <p className="text-gray-600">(11) 99781-1972 (WhatsApp)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2E00B8] mt-1" />
                <div>
                  <p className="text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">ligmaq@hotmail.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2E00B8] mt-1" />
                <div>
                  <p className="text-gray-900 mb-1">Horário de Funcionamento</p>
                  <p className="text-gray-600">Segunda a Sexta: 09:00 - 18:00</p>
                  <p className="text-gray-600">Sábado e Domingo: Fechado</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2E00B8] mt-1" />
                <div>
                  <p className="text-gray-900 mb-1">Endereço</p>
                  <p className="text-gray-600">
                    R. Clemente Álvares, 350 – S/L. Salas 01/02<br />
                    Lapa, São Paulo – SP<br />
                    CEP: 05074-050
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.697!2d-46.7063!3d-23.5289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8b3e36c6d4b%3A0x7c99fcfe92c7b9a8!2sR.%20Clemente%20%C3%81lvares%2C%20350%20-%20Lapa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005074-050!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ligmaq"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-6">
          <p className="text-center text-sm text-gray-600">
            Copyright © 2025 Ligmaq | Por Ligmaq
          </p>
        </div>
      </div>
    </footer>
  );
}
