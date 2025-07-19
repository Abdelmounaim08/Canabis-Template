"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Leaf, Users, MapPin, Award, Clock, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types
interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  alt: string;
}

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

// Constantes
const SLIDE_DURATION = 5000;

const slides: Slide[] = [
  {
    title: "Explorez le Voyage du Cannabis",
    subtitle: "Plongez dans le voyage fascinant du cannabis, de la petite graine au produit final élégant. Découvrez chaque étape de notre processus méticuleux qui garantit qualité et pureté à chaque étape.",
    buttonText: "Découvrir le Processus",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Culture de cannabis en serre"
  },
  {
    title: "Cultivation Biologique Premium",
    subtitle: "Nos méthodes de culture respectueuses de l'environnement garantissent des produits de la plus haute qualité. Nous utilisons uniquement des techniques naturelles pour préserver la pureté de nos plants.",
    buttonText: "Voir nos Méthodes",
    image: "https://www.lagazettefrance.fr/thumbs/1368%C3%971026/articles/2024/07/364U6BQ.jpg",
    alt: "Méthodes de cultivation biologique"
  },
  {
    title: "Innovation & Recherche",
    subtitle: "Notre équipe de chercheurs travaille constamment pour développer de nouvelles variétés et améliorer nos processus. L'innovation est au cœur de notre mission pour l'excellence.",
    buttonText: "Notre Laboratoire",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Laboratoire de recherche cannabis"
  }
];

const stats: Stat[] = [
  { number: "150+", label: "Employés", icon: Users },
  { number: "75+", label: "Hectares", icon: MapPin },
  { number: "300+", label: "Partenaires", icon: Award },
  { number: "25+", label: "Années d'expérience", icon: Clock }
];

// Composant pour les indicateurs de slides
const SlideIndicators = memo(({ 
  total, 
  current, 
  onSelect 
}: { 
  total: number; 
  current: number; 
  onSelect: (index: number) => void; 
}) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
    {Array.from({ length: total }, (_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === current 
            ? 'bg-emerald-400 scale-125' 
            : 'bg-white/50 hover:bg-white/80'
        }`}
        aria-label={`Aller au slide ${index + 1}`}
      />
    ))}
  </div>
));

SlideIndicators.displayName = 'SlideIndicators';

// Composant pour les statistiques
const StatCard = memo(({ stat }: { stat: Stat }) => {
  const IconComponent = stat.icon;
  
  return (
    <div className="text-center text-white">
      <div className="flex justify-center mb-4">
        <IconComponent className="w-8 h-8 text-emerald-200" aria-hidden="true" />
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
        {stat.number}
      </div>
      <div className="text-sm sm:text-base md:text-lg font-medium text-emerald-100">
        {stat.label}
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';

// Composant principal
const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Navigation functions avec useCallback pour éviter les re-renders
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Pause/Resume autoplay on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Auto-slide avec pause/resume
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative">
      {/* Hero Slider Section */}
      <div 
        className="relative h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Carrousel d'images hero"
      >
        {/* Background Images avec Next.js Image */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-6">
                <Leaf className="w-16 h-16 mx-auto text-emerald-400 mb-4" aria-hidden="true" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
                {slides[currentSlide].subtitle}
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                aria-label={slides[currentSlide].buttonText}
              >
                {slides[currentSlide].buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6" aria-hidden="true" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Slide Indicators */}
        <SlideIndicators
          total={slides.length}
          current={currentSlide}
          onSelect={goToSlide}
        />
      </div>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={`${stat.label}-${index}`} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HeroSection);