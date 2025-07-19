"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Building, Users, Truck, Microscope, ChevronRight, Award, Globe, Calendar } from 'lucide-react';
import NavigationBar from '@/components/header';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      contactType: 'general'
    });
  };

  const contactTypes = [
    {
      id: 'general',
      icon: MessageCircle,
      title: 'Renseignements Généraux',
      description: 'Questions générales sur nos produits et services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Partenariats Commerciaux',
      description: 'Devenir distributeur ou partenaire commercial',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'medical',
      icon: Microscope,
      title: 'Professionnels de Santé',
      description: 'Informations techniques et formations médicales',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Commandes & Logistique',
      description: 'Suivi de commandes et questions logistiques',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Siège Social",
      content: "125 Avenue des Sciences\n69100 Villeurbanne, France",
      additional: "Métro Flachet - Parking disponible"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 (0)4 72 44 85 96",
      additional: "Du lundi au vendredi : 8h30 - 18h00"
    },
    {
      icon: Mail,
      title: "Email Principal",
      content: "contact@cannabio-france.com",
      additional: "Réponse sous 24h ouvrées"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven : 8h30 - 18h00\nSam : 9h00 - 12h00",
      additional: "Fermé dimanches et jours fériés"
    }
  ];

  const departments = [
    {
      department: "Direction Générale",
      contact: "direction@cannabio-france.com",
      phone: "+33 (0)4 72 44 85 90",
      manager: "Dr. Marie Dubois, PDG"
    },
    {
      department: "Commercial & Ventes",
      contact: "commercial@cannabio-france.com", 
      phone: "+33 (0)4 72 44 85 91",
      manager: "Jean-Luc Martin, Dir. Commercial"
    },
    {
      department: "Recherche & Développement",
      contact: "recherche@cannabio-france.com",
      phone: "+33 (0)4 72 44 85 92",
      manager: "Prof. Antoine Roussel, Dir. R&D"
    },
    {
      department: "Qualité & Conformité",
      contact: "qualite@cannabio-france.com",
      phone: "+33 (0)4 72 44 85 93",
      manager: "Dr. Sophie Laurent, Dir. Qualité"
    },
    {
      department: "Logistique & Distribution",
      contact: "logistique@cannabio-france.com",
      phone: "+33 (0)4 72 44 85 94",
      manager: "Pierre Moreau, Dir. Logistique"
    },
    {
      department: "Support Technique",
      contact: "support@cannabio-france.com",
      phone: "+33 (0)4 72 44 85 95",
      manager: "Dr. Thomas Leroy, Support Tech."
    }
  ];

  const locations = [
    {
      city: "Lyon (Siège)",
      address: "125 Avenue des Sciences, 69100 Villeurbanne",
      type: "Direction & R&D",
      employees: "85 personnes"
    },
    {
      city: "Marseille",
      address: "Zone Industrielle Les Paluds, 13400 Aubagne", 
      type: "Production & Transformation",
      employees: "45 personnes"
    },
    {
      city: "Paris",
      address: "15 Rue de la Paix, 75002 Paris",
      type: "Bureau Commercial",
      employees: "12 personnes"
    },
    {
      city: "Strasbourg",
      address: "Port du Rhin, 67100 Strasbourg",
      type: "Centre Logistique Europe",
      employees: "8 personnes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto text-emerald-200 mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions sur le cannabis thérapeutique et nos solutions personnalisées.
          </p>
        </div>
      </div>

      {/* Contact Types */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choisissez votre Contact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez le département approprié pour une réponse rapide et personnalisée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactTypes.map((type) => (
              <div key={type.id} className="group cursor-pointer" onClick={() => setFormData(prev => ({...prev, contactType: type.id}))}>
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${formData.contactType === type.id ? 'border-emerald-500' : 'border-transparent'}`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envoyez-nous un Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Société
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Nom de votre société"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+33 X XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Informations de Contact
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.additional}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-800 mb-3">
                    Engagement de Réponse
                  </h3>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Réponse sous 2h pour urgences
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Réponse sous 24h pour demandes standard
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Support technique 7j/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contacts Départements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contactez directement le bon département pour une réponse spécialisée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">
                  {dept.department}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-emerald-500" />
                    <a href={`mailto:${dept.contact}`} className="hover:text-emerald-600 transition-colors">
                      {dept.contact}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-emerald-500" />
                    <a href={`tel:${dept.phone}`} className="hover:text-emerald-600 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                  {dept.manager}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Implantations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CannaBio France présent dans 4 villes stratégiques en France
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-emerald-500" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {location.city}
                      </h3>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                      {location.employees}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {location.address}
                  </p>
                  <div className="flex items-center text-sm text-emerald-600 font-medium">
                    <Building className="w-4 h-4 mr-2" />
                    {location.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto text-emerald-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rendez-vous & Visites
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Planifiez une rencontre avec nos experts ou visitez nos installations de production sur rendez-vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Prendre Rendez-vous
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300">
              Demander une Visite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;