'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import TestimonialsSection from './components/TestimonialsSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { contactConfig } from './config/contact'

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizacion: '',
    pais: '',
    message: ''
  })

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus('')
        setStatusType('')
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [status])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactConfig.emailjs) {
      console.error('Falta la configuración de EmailJS en contactConfig')
      setStatus('Error de configuración. Contacte al administrador.')
      setStatusType('error')
      return
    }

    if (!formRef.current) return

    setIsSending(true)
    setStatus('Enviando mensaje...')
    setStatusType('')

    emailjs
      .sendForm(
        contactConfig.emailjs.serviceId,
        contactConfig.emailjs.templateId,
        formRef.current,
        contactConfig.emailjs.publicKey
      )
      .then(
        () => {
          setIsSending(false)
          setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.')
          setStatusType('success')
          setFormData({
            name: '',
            email: '',
            phone: '',
            organizacion: '',
            pais: '',
            message: ''
          })
          formRef.current?.reset()
        },
        (error) => {
          console.error('Error al enviar:', error)
          setIsSending(false)
          setStatus('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.')
          setStatusType('error')
        }
      )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-20 lg:pt-24 bg-gradient-to-br from-[#F0F9F0] via-[#E9F7E5] to-[#DFF6DF] min-h-screen lg:h-screen flex items-center relative overflow-hidden scroll-mt-24">
        {/* Fondo con curvas topográficas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,100 Q200,50 300,100 T500,100 T700,100 T900,100" stroke="#00C851" strokeWidth="2" fill="none"/>
            <path d="M100,200 Q200,150 300,200 T500,200 T700,200 T900,200" stroke="#00C851" strokeWidth="2" fill="none"/>
            <path d="M100,300 Q200,250 300,300 T500,300 T700,300 T900,300" stroke="#00C851" strokeWidth="2" fill="none"/>
            <path d="M100,400 Q200,350 300,400 T500,400 T700,400 T900,400" stroke="#00C851" strokeWidth="2" fill="none"/>
            <path d="M100,500 Q200,450 300,500 T500,500 T700,500 T900,500" stroke="#00C851" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Efecto de luz ambiental */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-4 lg:px-6 max-w-7xl grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8 text-center md:text-left animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight tracking-tight">
              Monitorea, digitaliza y mejora tu producción agrícola 
              <span className="text-[#00C851] inline-block"> en tiempo real</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Con AgroSensIA, controla tus cultivos, tus viveros desde cualquier lugar, 
              optimiza recursos y cumple con la trazabilidad de manera simple y sin complicaciones.
            </p>
            
            <div className="space-y-4 flex flex-col items-center md:items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <a 
                href="#contacto" 
                className="group inline-flex items-center space-x-3 bg-[#00C851] hover:bg-[#007E33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg cursor-pointer relative z-20 shadow-[0_10px_20px_-10px_rgba(0,200,81,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(0,200,81,0.6)] transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                </svg>
                <span>Solicita una demo</span>
              </a>
              
              <p className="text-gray-500 font-medium text-sm tracking-wide">
                Únete a los productores que ya toman decisiones en tiempo real
              </p>
            </div>
          </div>
          
          {/* Ilustración del lado derecho */}
          <div className="relative flex justify-center items-center mt-12 md:mt-0 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {/* Círculo decorativo de fondo */}
            <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-white/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <div className="relative w-[240px] h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px] xl:w-[320px] xl:h-[640px] transition-transform duration-700 hover:scale-105 hover:rotate-1">
              <Image
                src="/AgrosensiaApp.jpg"
                alt="AgroSensIA App - Monitorización en tiempo real"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Íconos flotantes - Mejorados */}
            <div className="hidden md:flex absolute top-1/4 left-0 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float z-20 border border-white/50 items-center gap-4 hover:scale-110 transition-transform duration-300">
              <div className="bg-green-100 p-3 rounded-xl">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm font-bold text-[#333333]">Toma de decisiones</span>
            </div>

            <div className="hidden md:flex absolute top-1/4 right-0 transform translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float z-20 border border-white/50 items-center gap-4 hover:scale-110 transition-transform duration-300" style={{animationDelay: '1.5s'}}>
              <div className="bg-yellow-100 p-3 rounded-xl">
                <span className="text-2xl">⚠️</span>
              </div>
              <span className="text-sm font-bold text-[#333333]">Avisos y alertas</span>
            </div>

            <div className="hidden md:flex absolute bottom-1/4 left-0 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float z-20 border border-white/50 items-center gap-4 hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.8s'}}>
              <div className="bg-blue-100 p-3 rounded-xl">
                <span className="text-2xl">🔗</span>
              </div>
              <span className="text-sm font-bold text-[#333333]">Integración</span>
            </div>

            <div className="hidden md:flex absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float z-20 border border-white/50 items-center gap-4 hover:scale-110 transition-transform duration-300" style={{animationDelay: '2.2s'}}>
              <div className="bg-purple-100 p-3 rounded-xl">
                <span className="text-2xl">🧾</span>
              </div>
              <span className="text-sm font-bold text-[#333333]">Trazabilidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Qué ofrecemos? */}
      <section id="que-ofrecemos" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
              ¿Qué ofrecemos?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
              Herramientas para un mejor control de tus costos y mejora en tu producción
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              AgroSensIA es una plataforma de gestión agrícola que permite a los agricultores digitalizar su campo. 
              Solución simple y fácil de usar, enfocada en personas del agro para proveerles información en tiempo real 
              de sus cultivos y procesos agrícolas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Sensores y monitoreo */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:shadow-xl hover:bg-gray-50">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#E9F7E5] rounded-full flex items-center justify-center group-hover:bg-[#00C851] transition-colors duration-300 shadow-sm">
                <svg className="w-12 h-12 text-[#00C851] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Sensores y monitoreo</h3>
              <p className="text-gray-700 leading-relaxed">
                Disponemos de sensores inalámbricos de largo alcance para medir variables ambientales y de suelo 
                como humedad, temperatura, CO₂, conductividad eléctrica, PH, luminosidad, etc.
              </p>
            </div>
            
            {/* Plataforma */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:shadow-xl hover:bg-gray-50">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#E9F7E5] rounded-full flex items-center justify-center group-hover:bg-[#00C851] transition-colors duration-300 shadow-sm">
                <svg className="w-12 h-12 text-[#00C851] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Plataforma</h3>
              <p className="text-gray-700 leading-relaxed">
                Sistema que desde un solo panel permite tener una visión global de la operación 
                y tomar decisiones en tiempo real.
              </p>
            </div>
            
            {/* Trazabilidad */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:shadow-xl hover:bg-gray-50">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#E9F7E5] rounded-full flex items-center justify-center group-hover:bg-[#00C851] transition-colors duration-300 shadow-sm">
                <svg className="w-12 h-12 text-[#00C851] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v-4h2v4zM1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Trazabilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Módulos de trazabilidad de cosecha, post cosecha, fitosanitaria y de semillas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Cómo funciona? */}
      <section id="como-funciona" className="py-20 bg-[#F5FDF5] scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
              ¿Cómo funciona?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
              Adaptando la tecnología a la realidad de tu entorno agrícola
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Una plataforma donde pueden integrarse muchas variables del entorno agrícola 
              y generar relaciones entre ellas para mejorar la productividad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Imagen del dispositivo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00C851] to-[#007E33] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">📡</div>
                  <h3 className="text-2xl font-bold text-[#333333]">AgroSens Sensor</h3>
                  <p className="text-gray-600 mt-2">Dispositivo IoT de largo alcance</p>
                </div>
              </div>
            </div>
            
            {/* Bloques de características */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#E9F7E5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00C851]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Tiempo real</h3>
                  <p className="text-gray-700">Monitoreo continuo de variables críticas con datos actualizados constantemente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#E9F7E5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00C851]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Análisis</h3>
                  <p className="text-gray-700">Procesamiento inteligente de datos para generar insights accionables.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#E9F7E5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00C851]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Alertas</h3>
                  <p className="text-gray-700">Notificaciones automáticas cuando los parámetros salen de los rangos óptimos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#E9F7E5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00C851]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Integración de datos</h3>
                  <p className="text-gray-700">Conectividad con múltiples fuentes de información para una visión completa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección ¿Qué hacemos? */}
      <section id="que-hacemos" className="py-20 bg-gradient-to-br from-[#E9F7E5] to-[#DFF6DF] scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
            ¿Qué hacemos?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Impulsamos la agricultura del futuro
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Transformamos la manera en que los productores agrícolas gestionan sus cultivos, 
            proporcionando tecnología accesible para mejorar la productividad y sostenibilidad.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/50">
              <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">🚀</div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Productividad</h3>
              <p className="text-gray-700">Optimizamos los recursos y procesos para maximizar el rendimiento de los cultivos.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/50">
              <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">🌱</div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Sostenibilidad</h3>
              <p className="text-gray-700">Promovemos prácticas agrícolas responsables con el medio ambiente.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/50">
              <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">🤖</div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Automatización</h3>
              <p className="text-gray-700">Reducimos el trabajo manual mediante sistemas inteligentes y automatizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
                Nosotros
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
                Somos un equipo dedicado a la innovación agrícola
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-[#00C851]">Misión:</strong> Democratizar el acceso a la tecnología agrícola, 
                  proporcionando herramientas simples y efectivas que permitan a los productores tomar 
                  decisiones informadas y mejorar sus resultados.
                </p>
                <p>
                  <strong className="text-[#00C851]">Visión:</strong> Ser la plataforma líder en digitalización 
                  agrícola en América Latina, transformando la manera en que se gestiona la producción de alimentos.
                </p>
                <p>
                  <strong className="text-[#00C851]">Valores:</strong> Innovación, simplicidad, sostenibilidad 
                  y compromiso con el sector agrícola. Creemos en la tecnología como herramienta para construir 
                  un futuro alimentario más seguro y eficiente.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E9F7E5] to-[#DFF6DF] rounded-3xl p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">🌾</div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-4">Agricultura Inteligente</h3>
                  <p className="text-gray-700">Conectando la tradición agrícola con la innovación tecnológica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-20 bg-[#F5FDF5] scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00C851] text-white px-6 py-3 rounded-full mb-6 font-semibold shadow-md">
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
              ¿Listo para digitalizar tu campo?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Contáctanos y descubre cómo AgroSensIA puede transformar tu producción agrícola.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Información de contacto */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#333333] mb-6 text-center">Contacto rápido</h3>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {contactConfig.phone && (
                  <a 
                    href={`https://wa.me/${contactConfig.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-md flex items-center justify-center space-x-4 p-4 bg-[#E9F7E5] rounded-lg hover:bg-[#00C851] hover:text-white transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <svg className="w-6 h-6 text-[#00C851] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                    </svg>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                )}
                
                <a 
                  href={`mailto:${contactConfig.email}`}
                  className="flex-1 max-w-md flex items-center justify-center space-x-4 p-4 bg-[#E9F7E5] rounded-lg hover:bg-[#00C851] hover:text-white transition-all duration-200 group shadow-sm hover:shadow-md"
                >
                  <svg className="w-6 h-6 text-[#00C851] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-medium">{contactConfig.email}</span>
                </a>
              </div>
            </div>            {/* Formulario */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#333333] font-medium mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-[#333333] font-medium mb-2">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-[#333333] font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+52 123 456 7890"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] font-medium mb-2">Organización (opcional)</label>
                  <input
                    type="text"
                    name="organizacion"
                    value={formData.organizacion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Empresa, cooperativa, institución, etc."
                  />
                </div>

                <div>
                  <label className="block text-[#333333] font-medium mb-2">País *</label>
                  <select
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecciona un país</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="EC">Ecuador</option>
                    <option value="SV">El Salvador</option>
                    <option value="GT">Guatemala</option>
                    <option value="HN">Honduras</option>
                    <option value="NI">Nicaragua</option>
                    <option value="PA">Panamá</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="UY">Uruguay</option>
                    <option value="VE">Venezuela</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="OTHER">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[#333333] font-medium mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C851] focus:border-transparent outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    required
                    placeholder="Cuéntanos sobre tu interés en AgroSensIA..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#00C851] hover:bg-[#007E33] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-wait shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>{isSending ? 'Enviando...' : 'Enviar mensaje'}</span>
                  {!isSending && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  )}
                </button>

                {status && (
                  <div 
                    className={`mt-4 p-3 rounded-lg text-center ${
                      statusType === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* <BlogSection /> */}

      <Footer />
      
      <FloatingWhatsApp />
    </div>
  )
}
