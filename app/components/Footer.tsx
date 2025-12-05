import { contactConfig } from '../config/contact';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div>
            <div className="text-2xl font-bold mb-4 relative">
              AgroSens
              <span className="relative">
                I
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 text-[#00C851]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </span>
              A
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Plataforma de gestión agrícola que permite digitalizar tu campo con información en tiempo real.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-[#00C851]">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-[#00C851] transition-colors">Inicio</a></li>
              <li><a href="#que-ofrecemos" className="text-gray-300 hover:text-[#00C851] transition-colors">¿Qué ofrecemos?</a></li>
              <li><a href="#como-funciona" className="text-gray-300 hover:text-[#00C851] transition-colors">¿Cómo funciona?</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-[#00C851] transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-[#00C851] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-[#00C851]">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-[#00C851]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactConfig.email}`} className="hover:text-[#00C851] transition-colors">
                  {contactConfig.email}
                </a>
              </li>
              {contactConfig.phone && (
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-[#00C851]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${contactConfig.phone}`} className="hover:text-[#00C851] transition-colors">
                    {contactConfig.phone}
                  </a>
                </li>
              )}
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-[#00C851]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgroSensIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}