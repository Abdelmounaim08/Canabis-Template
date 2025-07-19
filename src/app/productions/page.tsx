import React from 'react';
import { Leaf, Thermometer, Droplets, Sun, Shield, Microscope, Factory, Truck, Timer, Settings, ChevronRight, Award, CheckCircle, Activity, Users, Target } from 'lucide-react';
import NavigationBar from '@/components/header';

const ProductionPage = () => {
  const productionStages = [
    {
      icon: Leaf,
      title: "Sélection Génétique",
      description: "Sélection rigoureuse de variétés CBD premium avec profils cannabinoïdes optimisés pour applications thérapeutiques.",
      details: ["35 variétés en catalogue", "Stabilité génétique >98%", "Taux CBD: 15-25%", "THC <0.2% certifié"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Sun,
      title: "Culture Contrôlée",
      description: "Serres high-tech de 75 hectares avec environnement totalement maîtrisé et systèmes d'automatisation avancés.",
      details: ["Température: 22-26°C", "Hygrométrie: 50-65%", "Éclairage LED spectre complet", "Cycle 18h/6h optimisé"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Droplets,
      title: "Irrigation Précise",
      description: "Système d'irrigation goutte-à-goutte automatisé avec solutions nutritives organiques personnalisées.",
      details: ["Capteurs d'humidité sol", "pH maintenu 6.0-6.8", "EC contrôlée 1.2-1.8", "Recyclage eau 95%"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Protection Biologique",
      description: "Protection 100% biologique via auxiliaires naturels, aucun pesticide de synthèse utilisé.",
      details: ["Lutte intégrée IPM", "Auxiliaires prédateurs", "Huiles essentielles", "Certification Bio EU"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Timer,
      title: "Récolte Optimisée",
      description: "Récolte au pic de maturité avec analyses trichomes et timing précis pour maximiser les cannabinoïdes.",
      details: ["Récolte manuelle", "Contrôle trichomes", "Timing optimal CBD", "Fraîcheur préservée"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Thermometer,
      title: "Séchage Contrôlé",
      description: "Séchage lent en chambres climatisées pour préserver arômes, terpènes et principes actifs.",
      details: ["14-21 jours séchage", "Température 18-20°C", "Hygrométrie 50-60%", "Ventilation optimisée"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const facilities = [
    {
      icon: Factory,
      title: "Serres de Production",
      surface: "75 hectares",
      description: "Complexe de serres ultra-modernes avec contrôle climatique intégral",
      features: ["Structures verre trempé", "Système chauffage/refroidissement", "Éclairage LED dernière génération", "Automatisation complète"]
    },
    {
      icon: Microscope,
      title: "Laboratoire R&D",
      surface: "2,000 m²",
      description: "Centre de recherche et développement pour innovation variétale",
      features: ["Équipements analyse avancée", "Culture in-vitro", "Sélection assistée marqueurs", "12 chercheurs dédiés"]
    },
    {
      icon: Settings,
      title: "Unité Transformation",
      surface: "5,000 m²",
      description: "Installation de transformation et conditionnement aux normes pharmaceutiques",
      features: ["Chambres propres ISO 7", "Extraction CO2 supercritique", "Ligne conditionnement automatisée", "Traçabilité blockchain"]
    },
    {
      icon: Truck,
      title: "Centre Logistique",
      surface: "3,000 m²",
      description: "Entrepôt sécurisé avec zones de stockage température contrôlée",
      features: ["Stockage réfrigéré", "Système sécurité 24h/7j", "Préparation commandes robotisée", "Expédition Europe"]
    }
  ];

  const qualityMetrics = [
    { metric: "Rendement Moyen", value: "450g/m²", icon: Target },
    { metric: "Taux de CBD", value: "15-25%", icon: Activity },
    { metric: "Stabilité Génétique", value: ">98%", icon: Shield },
    { metric: "Pureté Microbiologique", value: "99.9%", icon: Microscope }
  ];

  const productionCycle = [
    { phase: "Germination", duration: "7-10 jours", description: "Germination en substrat stérilisé sous conditions contrôlées" },
    { phase: "Croissance Végétative", duration: "4-6 semaines", description: "Développement racinaire et foliaire optimisé" },
    { phase: "Pré-floraison", duration: "1-2 semaines", description: "Transition photopériodique et identification sexuelle" },
    { phase: "Floraison", duration: "8-10 semaines", description: "Formation et maturation des inflorescences CBD" },
    { phase: "Récolte & Séchage", duration: "3-4 semaines", description: "Récolte manuelle et séchage contrôlé" },
    { phase: "Affinage & Test", duration: "2-3 semaines", description: "Affinage final et contrôles qualité complets" }
  ];

  const certifications = [
    "Agriculture Biologique EU",
    "Good Manufacturing Practice (GMP)",
    "ISO 22000 - Sécurité Alimentaire", 
    "GACP - Bonnes Pratiques Agricoles",
    "ISO 17025 - Laboratoire d'Analyses"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="w-16 h-16 mx-auto text-emerald-200 mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Notre Production
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            De la graine au produit fini, découvrez nos installations de pointe et nos processus de production du cannabis thérapeutique le plus pur d'Europe.
          </p>
        </div>
      </div>

      {/* Production Overview */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Excellence & Innovation
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Nos installations de <strong>75 hectares</strong> combinent tradition agricole et technologies de pointe pour produire annuellement <strong>25 tonnes</strong> de cannabis CBD de qualité pharmaceutique. Chaque étape de production est minutieusement contrôlée et optimisée.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  De la sélection génétique à l'emballage final, nous appliquons les protocoles les plus stricts de l'industrie pharmaceutique, garantissant une traçabilité complète et une qualité constante de nos produits.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">25T</div>
                    <div className="text-sm text-gray-600">Production Annuelle</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">450g</div>
                    <div className="text-sm text-gray-600">Rendement par m²</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Serres de production CannaBio"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Stages */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Processus de Production
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six étapes clés pour une production de cannabis CBD d'excellence thérapeutique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {productionStages.map((stage, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <stage.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {stage.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {stage.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
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

      {/* Facilities Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Installations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complexe industriel de 85 hectares équipé des technologies les plus avancées
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <facility.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {facility.title}
                        </h3>
                        <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                          {facility.surface}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {facility.description}
                      </p>
                      <ul className="space-y-2">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                            {feature}
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

      {/* Quality Metrics */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Indicateurs Qualité
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Performance et excellence mesurées quotidiennement
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center text-white">
                <metric.icon className="w-12 h-12 mx-auto text-emerald-200 mb-4" />
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-200">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base font-medium">
                  {metric.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Cycle */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cycle de Production
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la germination à la commercialisation : 16 à 24 semaines de processus rigoureux
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-emerald-200"></div>
              
              {productionCycle.map((phase, index) => (
                <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="text-sm font-medium text-emerald-600 mb-2">
                        {phase.duration}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {phase.phase}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {phase.description}
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
              Certifications Production
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos processus respectent les standards internationaux les plus exigeants
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 hover:bg-emerald-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {cert}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="w-16 h-16 mx-auto text-emerald-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Visitez Nos Installations
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez nos serres high-tech et laboratoires de recherche. Visites guidées sur rendez-vous pour professionnels et partenaires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Réserver une Visite
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
              Documentation Technique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionPage;