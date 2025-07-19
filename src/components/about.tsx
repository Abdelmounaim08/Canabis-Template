"use client";
import React, { useState } from 'react';
import { 
  Leaf, 
  Award, 
  Target, 
  Users, 
  Shield, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Globe,
  Star,
  TreePine,
  Microscope,
  Factory
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSections = () => {
  const [activeTab, setActiveTab] = useState('about');

  const certificates = [
    {
      title: "Certification Biologique",
      issuer: "Ecocert France",
      year: "2024",
      description: "Certification pour la production biologique de cannabis thérapeutique",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      title: "ISO 9001:2015",
      issuer: "Bureau Veritas",
      year: "2023",
      description: "Système de management de la qualité certifié",
      icon: Award,
      color: "text-blue-600"
    },
    {
      title: "GMP Pharmaceutique",
      issuer: "ANSM",
      year: "2024",
      description: "Bonnes Pratiques de Fabrication pharmaceutique",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "Certification HACCP",
      issuer: "SGS Group",
      year: "2023",
      description: "Analyse des dangers et contrôle des points critiques",
      icon: CheckCircle,
      color: "text-orange-600"
    }
  ];

  const objectives = [
    {
      title: "Excellence Qualité",
      description: "Maintenir les plus hauts standards de qualité dans tous nos processus de production",
      icon: Star,
      progress: 95
    },
    {
      title: "Durabilité Environnementale",
      description: "Réduire notre empreinte carbone de 40% d'ici 2025",
      icon: TreePine,
      progress: 78
    },
    {
      title: "Innovation Scientifique",
      description: "Développer 5 nouvelles variétés thérapeutiques par an",
      icon: Microscope,
      progress: 82
    },
    {
      title: "Expansion Géographique",
      description: "Étendre nos opérations à 3 nouveaux pays européens",
      icon: Globe,
      progress: 65
    }
  ];

  const locations = [
    {
      name: "Siège Social - Paris",
      address: "123 Avenue des Champs-Élysées, 75008 Paris",
      phone: "+33 1 42 56 78 90",
      email: "contact@cannabis-premium.fr",
      hours: "Lun-Ven: 9h-18h",
      type: "Siège"
    },
    {
      name: "Centre de Production - Provence",
      address: "456 Route de Lavande, 84000 Avignon",
      phone: "+33 4 90 12 34 56",
      email: "production@cannabis-premium.fr",
      hours: "Lun-Ven: 8h-17h",
      type: "Production"
    },
    {
      name: "Laboratoire R&D - Lyon",
      address: "789 Boulevard de la Science, 69007 Lyon",
      phone: "+33 4 72 98 76 54",
      email: "recherche@cannabis-premium.fr",
      hours: "Lun-Ven: 9h-17h",
      type: "Recherche"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Section À Propos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de Cannabis Premium
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pionniers dans l'industrie du cannabis thérapeutique depuis plus de 25 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-emerald-100">
                  Fournir des produits cannabis de qualité pharmaceutique pour améliorer 
                  la qualité de vie des patients tout en respectant l'environnement et 
                  les réglementations les plus strictes.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <Leaf className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir le leader européen du cannabis thérapeutique en combinant 
                  innovation scientifique, pratiques durables et excellence opérationnelle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Cannabis cultivation"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Années d'expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Certificats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Nos standards de qualité reconnus par les organismes les plus exigeants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <cert.icon className={`w-16 h-16 ${cert.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {cert.description}
                </p>
                <div className="text-center">
                  <span className="text-sm font-semibold text-emerald-600">
                    {cert.issuer} • {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Objectifs 2024-2025
            </h2>
            <p className="text-xl text-gray-600">
              Des ambitions concrètes pour un avenir durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <objective.icon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">{objective.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{objective.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Progression</span>
                    <span className="text-sm font-bold text-emerald-600">{objective.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${objective.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Cartes/Localisations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Localisations
            </h2>
            <p className="text-xl text-gray-600">
              Présents dans toute la France pour mieux vous servir
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    {location.type === 'Siège' && <Users className="w-6 h-6 text-emerald-600" />}
                    {location.type === 'Production' && <Factory className="w-6 h-6 text-emerald-600" />}
                    {location.type === 'Recherche' && <Microscope className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                    <span className="text-sm text-emerald-600 font-medium">{location.type}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{location.email}</p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
                  variant="default"
                >
                  Voir sur la carte
                </Button>
              </div>
            ))}
          </div>

          {/* Carte interactive placeholder */}
          {/* <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Carte interactive des localisations
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Intégration Google Maps ou OpenStreetMap
                </p>
              </div>
            </div>
          </div> */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33068.18881365638!2d-4.870829!3d35.003645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f6b63acb4efb3%3A0xbcd3e7cb9e7d2e2c!2sBab%20Berred!5e0!3m2!1sfr!2sma!4v1721133248990!5m2!1sfr!2sma"
    width="100%"
    height="450"
    loading="lazy"
    allowFullScreen
    className="w-full h-[400px] md:h-[450px] border-0"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </div>
      </section>
    </div>
  );
};

export default AboutSections;