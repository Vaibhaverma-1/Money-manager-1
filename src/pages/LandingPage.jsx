import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProductShowcase from "../components/ProductShowcase.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <ProductShowcase />
      </main>
    </div>
  );
};

export default LandingPage;
