import React from 'react';
import { Leaf, Users, Award, Target, Heart, Shield, Lightbulb, Globe, CheckCircle, Star, Calendar, MapPin, Microscope, Truck } from 'lucide-react';
import NavigationBar from '@/components/header';

const AboutUsPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Agriculture Biologique",
      description: "Cultivation 100% biologique sans pesticides ni produits chimiques, respectant les cycles naturels de la plante.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Sécurité & Traçabilité",
      description: "Contrôle strict à chaque étape, de la graine au produit fini, avec traçabilité complète de nos cultures.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Thérapeutique",
      description: "Développement de variétés spécialement conçues pour les applications médicales et thérapeutiques.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Recherche permanente en génétique végétale et techniques de cultivation pour optimiser les rendements.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Prix Excellence Cannabis Europe",
      description: "Récompensé pour la qualité exceptionnelle de nos variétés CBD premium et notre engagement environnemental."
    },
    {
      year: "2023", 
      title: "Certification Bio EU Étendue",
      description: "Extension de notre certification biologique européenne à toutes nos installations de production."
    },
    {
      year: "2022",
      title: "Leader Innovation France",
      description: "Reconnu comme entreprise la plus innovante du secteur cannabis thérapeutique français."
    },
    {
      year: "2021",
      title: "Partenariat Recherche CNRS",
      description: "Collaboration avec le CNRS pour le développement de nouvelles variétés thérapeutiques."
    },
    {
      year: "2020",
      title: "Expansion Internationale",
      description: "Ouverture de nos premiers centres de distribution en Allemagne, Italie et Espagne."
    },
    {
      year: "2019",
      title: "Licence Production Élargie",
      description: "Obtention des autorisations pour la production de cannabis à usage médical en France."
    }
  ];

  const activities = [
    {
      icon: Leaf,
      title: "Culture & Production",
      description: "75 hectares de cultures en serre climatisées avec systèmes d'irrigation automatisés et contrôle environnemental de pointe.",
      details: ["15 variétés CBD certifiées", "Production annuelle: 25 tonnes", "Rendement: 450g/m²"]
    },
    {
      icon: Microscope,
      title: "Recherche & Développement",
      description: "Laboratoire de 2000m² dédié à la recherche génétique, analyse phytochimique et développement de nouvelles variétés.",
      details: ["12 chercheurs spécialisés", "8 brevets déposés", "35 variétés en développement"]
    },
    {
      icon: Shield,
      title: "Contrôle Qualité",
      description: "Tests rigoureux sur chaque lot: cannabinoïdes, terpènes, métaux lourds, pesticides, microbiologie.",
      details: ["Laboratoire accrédité ISO 17025", "500+ analyses mensuelles", "Traçabilité blockchain"]
    },
    {
      icon: Truck,
      title: "Distribution & Logistique",
      description: "Réseau de distribution couvrant 15 pays européens avec entrepôts sécurisés et transport spécialisé.",
      details: ["3 centres logistiques", "Livraison 24-48h", "800+ points de vente partenaires"]
    }
  ];

  const stats = [
    { number: "2008", label: "Année de Création", icon: Calendar },
    { number: "150+", label: "Employés Experts", icon: Users },
    { number: "75", label: "Hectares de Culture", icon: MapPin },
    { number: "15", label: "Pays Desservis", icon: Globe }
  ];

  const certifications = [
    {
      title: "BIO EU Organic",
      description: "Certification agriculture biologique européenne pour toutes nos cultures",
      year: "Depuis 2015"
    },
    {
      title: "GMP (Good Manufacturing Practice)",
      description: "Bonnes pratiques de fabrication pharmaceutique pour nos extractions",
      year: "Depuis 2018"
    },
    {
      title: "ISO 22000",
      description: "Système de management de la sécurité alimentaire",
      year: "Depuis 2019"
    },
    {
      title: "GACP (Good Agricultural Collection Practice)",
      description: "Bonnes pratiques agricoles et de collecte pour plantes médicinales",
      year: "Depuis 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <NavigationBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto text-emerald-200 mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            CannaBio France
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Leader européen du cannabis biologique thérapeutique depuis 2008. Pionniers de l'innovation et de l'excellence dans la culture, recherche et distribution de cannabis médical.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre Entreprise
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>CannaBio France</strong> est une entreprise spécialisée dans la culture, transformation et distribution de cannabis à usage thérapeutique. Fondée en 2008 à Lyon par une équipe de botanistes et pharmacologues, nous sommes aujourd'hui le plus grand producteur de cannabis biologique certifié en France.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Nos 75 hectares de cultures high-tech produisent annuellement plus de 25 tonnes de cannabis de qualité pharmaceutique, distribuées dans 15 pays européens. Nous employons 150 experts passionnés: cultivateurs, chercheurs, pharmaciens, ingénieurs agronomes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">€45M</div>
                    <div className="text-sm text-gray-600">Chiffre d'affaires 2023</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">25T</div>
                    <div className="text-sm text-gray-600">Production annuelle</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Installations CannaBio France"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Activités
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De la graine au produit fini, nous maîtrisons toute la chaîne de valeur du cannabis thérapeutique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      <ul className="space-y-2">
                        {activity.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Engagements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre piliers fondamentaux qui guident notre approche et garantissent l'excellence de nos produits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              CannaBio en Chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto text-emerald-200 mb-4" />
                <div className="text-4xl sm:text-5xl font-bold mb-2 text-emerald-200">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Timeline */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Palmarès
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15 années d'innovations, de récompenses et de reconnaissance dans l'industrie du cannabis thérapeutique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-emerald-200"></div>
              
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certifications & Agréments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos certifications garantissent la conformité et la qualité de nos produits selon les standards les plus exigeants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900">
                          {cert.title}
                        </h3>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 mx-auto text-emerald-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            L'Excellence du Cannabis Thérapeutique Français
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits CBD premium et nos solutions personnalisées pour professionnels de santé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Catalogue Produits
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
              Devenir Partenaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;