"use client";

import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import {
  Leaf,
  Award,
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
  Factory,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types
interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface Objective {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
}

interface Location {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  type: 'Siège' | 'Production' | 'Recherche';
}

type TabType = 'about' | 'certificates' | 'objectives' | 'locations';

// Constantes
const certificates: Certificate[] = [
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

const objectives: Objective[] = [
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

const locations: Location[] = [
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

// Composants mémorisés
const CertificateCard = memo(({ certificate }: { certificate: Certificate }) => {
  const IconComponent = certificate.icon;
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-6">
        <IconComponent className={`w-16 h-16 ${certificate.color}`} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
        {certificate.title}
      </h3>
      <p className="text-gray-600 text-center mb-4">
        {certificate.description}
      </p>
      <div className="text-center">
        <span className="text-sm font-semibold text-emerald-600">
          {certificate.issuer} • {certificate.year}
        </span>
      </div>
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

const ObjectiveCard = memo(({ objective }: { objective: Objective }) => {
  const IconComponent = objective.icon;
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
      <div className="flex items-center mb-6">
        <IconComponent className="w-10 h-10 text-emerald-600 mr-4" aria-hidden="true" />
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
            role="progressbar"
            aria-valuenow={objective.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progression ${objective.title}: ${objective.progress}%`}
          />
        </div>
      </div>
    </div>
  );
});

ObjectiveCard.displayName = 'ObjectiveCard';

const LocationCard = memo(({ location, onViewMap }: { 
  location: Location; 
  onViewMap: (location: Location) => void; 
}) => {
  const getLocationIcon = (type: Location['type']) => {
    switch (type) {
      case 'Siège':
        return Users;
      case 'Production':
        return Factory;
      case 'Recherche':
        return Microscope;
      default:
        return MapPin;
    }
  };

  const IconComponent = getLocationIcon(location.type);

  const handleViewMap = useCallback(() => {
    onViewMap(location);
  }, [location, onViewMap]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <div className="bg-emerald-100 p-3 rounded-full mr-4">
          <IconComponent className="w-6 h-6 text-emerald-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
          <span className="text-sm text-emerald-600 font-medium">{location.type}</span>
        </div>
      </div>

      <address className="space-y-4 not-italic">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
          <p className="text-gray-600">{location.address}</p>
        </div>

        <div className="flex items-center">
          <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
          <a 
            href={`tel:${location.phone}`}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            {location.phone}
          </a>
        </div>

        <div className="flex items-center">
          <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
          <a 
            href={`mailto:${location.email}`}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            {location.email}
          </a>
        </div>

        <div className="flex items-center">
          <Clock className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
          <p className="text-gray-600">{location.hours}</p>
        </div>
      </address>

      <Button 
        className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        variant="default"
        onClick={handleViewMap}
        aria-label={`Voir ${location.name} sur la carte`}
      >
        Voir sur la carte
      </Button>
    </div>
  );
});

LocationCard.displayName = 'LocationCard';

const InteractiveMap = memo(() => (
  <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33068.18881365638!2d-4.870829!3d35.003645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f6b63acb4efb3%3A0xbcd3e7cb9e7d2e2c!2sBab%20Berred!5e0!3m2!1sfr!2sma!4v1721133248990!5m2!1sfr!2sma"
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
      className="w-full h-[400px] md:h-[450px] border-0"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localisation de nos sites"
    />
  </div>
));

InteractiveMap.displayName = 'InteractiveMap';

// Composant principal
const AboutSections: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<TabType>('about');

  const handleViewMap = useCallback((location: Location) => {
    // Logique pour centrer la carte sur la localisation
    console.log(`Viewing map for: ${location.name}`);
    // Ici, on pourrait implémenter la logique pour centrer la carte
    // ou ouvrir une modal avec une carte spécifique
  }, []);

  // const changeTab = useCallback((tab: TabType) => {
  //   setActiveTab(tab);
  // }, []);

  return (
    <div className="bg-gray-50">
      {/* Section À Propos */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de Cannabis Premium
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pionniers dans l&apos;industrie du cannabis thérapeutique depuis plus de 25 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl">
                <Users className="w-12 h-12 mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-emerald-100">
                  Fournir des produits cannabis de qualité pharmaceutique pour améliorer 
                  la qualité de vie des patients tout en respectant l&apos;environnement et 
                  les réglementations les plus strictes.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <Leaf className="w-12 h-12 text-emerald-600 mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir le leader européen du cannabis thérapeutique en combinant 
                  innovation scientifique, pratiques durables et excellence opérationnelle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Culture de cannabis en laboratoire"
                  width={2069}
                  height={1379}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  priority
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Années d&apos;expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Certificats */}
      <section className="py-20 bg-gray-50" id="certificates">
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
              <CertificateCard 
                key={`${cert.title}-${index}`} 
                certificate={cert} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-20 bg-white" id="objectives">
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
              <ObjectiveCard 
                key={`${objective.title}-${index}`} 
                objective={objective} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Localisations */}
      <section className="py-20 bg-gray-50" id="locations">
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
              <LocationCard 
                key={`${location.name}-${index}`} 
                location={location} 
                onViewMap={handleViewMap}
              />
            ))}
          </div>

          {/* Carte interactive */}
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};

export default memo(AboutSections);