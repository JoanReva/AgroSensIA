export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Productor de Aguacate",
      location: "Michoacán, México",
      testimonial: "Desde que implementamos AgroSensIA, hemos reducido el uso de agua en un 30% y aumentado la productividad en un 25%. La plataforma es intuitiva y los datos son exactos.",
      rating: 5,
      avatar: "👨‍🌾"
    },
    {
      id: 2,
      name: "María González",
      role: "Agricultora Orgánica",
      location: "Cundinamarca, Colombia",
      testimonial: "Los sensores de AgroSensIA me han permitido obtener la certificación orgánica más fácilmente. El sistema de trazabilidad es exactamente lo que necesitaba.",
      rating: 5,
      avatar: "👩‍🌾"
    },
    {
      id: 3,
      name: "Antonio Silva",
      role: "Gerente de Finca",
      location: "São Paulo, Brasil",
      testimonial: "Excelente herramienta para gestionar múltiples cultivos. Las alertas tempranas nos han ahorrado miles de dólares en pérdidas por plagas y enfermedades.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ]

  const stats = [
    { number: "500+", label: "Agricultores activos" },
    { number: "15,000+", label: "Hectáreas monitoreadas" },
    { number: "35%", label: "Aumento promedio en productividad" },
    { number: "25%", label: "Reducción en uso de agua" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5FDF5] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Estadísticas */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            Resultados que hablan por sí solos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00C851] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Historias reales de productores que han transformado su agricultura con AgroSensIA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              {/* Testimonial */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.testimonial}
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#E9F7E5] rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#333333]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-[#00C851]">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#333333] mb-4">
            ¿Listo para ser el próximo caso de éxito?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Únete a cientos de productores que ya están optimizando sus cultivos con AgroSensIA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="bg-[#00C851] hover:bg-[#007E33] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Solicitar Demo Gratuita</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}