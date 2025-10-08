export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Beneficios de la Agricultura de Precisión",
      excerpt: "Descubre cómo la tecnología IoT está revolucionando la forma en que gestionamos los cultivos y optimizamos los recursos.",
      date: "15 Sep 2025",
      category: "Tecnología",
      image: "🌱",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Sensores de Humedad: Guía Completa 2025",
      excerpt: "Todo lo que necesitas saber sobre sensores de humedad del suelo para maximizar el rendimiento de tus cultivos.",
      date: "12 Sep 2025",
      category: "Guías",
      image: "💧",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Casos de Éxito: Productores que Triplicaron su Rendimiento",
      excerpt: "Historias reales de agricultores que transformaron su producción utilizando tecnología AgroSensIA.",
      date: "08 Sep 2025",
      category: "Casos de Éxito",
      image: "📈",
      readTime: "6 min"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold">
            Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Conocimiento que impulsa tu productividad
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mantente actualizado con las últimas tendencias, consejos y casos de éxito en agricultura inteligente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-[#E9F7E5] text-[#00C851] px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="text-4xl">{post.image}</div>
                </div>
                
                <h3 className="text-xl font-bold text-[#333333] mb-3 leading-tight hover:text-[#00C851] transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="mt-6">
                  <button className="text-[#00C851] hover:text-[#007E33] font-semibold flex items-center space-x-2 group transition-colors">
                    <span>Leer más</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#00C851] hover:bg-[#007E33] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2">
            <span>Ver todos los artículos</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}