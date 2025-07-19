"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Users, MapPin, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Explorez le Voyage du Cannabis",
      subtitle: "Plongez dans le voyage fascinant du cannabis, de la petite graine au produit final élégant. Découvrez chaque étape de notre processus méticuleux qui garantit qualité et pureté à chaque étape.",
      buttonText: "Découvrir le Processus",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Cultivation Biologique Premium",
      subtitle: "Nos méthodes de culture respectueuses de l'environnement garantissent des produits de la plus haute qualité. Nous utilisons uniquement des techniques naturelles pour préserver la pureté de nos plants.",
      buttonText: "Voir nos Méthodes",
      image: "https://www.lagazettefrance.fr/thumbs/1368%C3%971026/articles/2024/07/364U6BQ.jpg"
    },
    {
      title: "Innovation & Recherche",
      subtitle: "Notre équipe de chercheurs travaille constamment pour développer de nouvelles variétés et améliorer nos processus. L'innovation est au cœur de notre mission pour l'excellence.",
      buttonText: "Notre Laboratoire",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const stats = [
    { number: "150+", label: "Employés", icon: Users },
    { number: "75+", label: "Hectares", icon: MapPin },
    { number: "300+", label: "Partenaires", icon: Award },
    { number: "25+", label: "Années d'expérience", icon: Clock }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {/* Hero Slider Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-6">
                <Leaf className="w-16 h-16 mx-auto text-emerald-400 mb-4" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
                {slides[currentSlide].subtitle}
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {slides[currentSlide].buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-emerald-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-200" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-medium text-emerald-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;