import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerGradient?: string;
}

export default function PageLayout({ children, title, subtitle, headerGradient }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {(title || subtitle) && (
          <div className="bg-gradient-to-br from-[#E9F7E5] to-[#DFF6DF] py-16 px-4 text-center">
            <div className="container mx-auto">
              {title && <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">{title}</h1>}
              {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
