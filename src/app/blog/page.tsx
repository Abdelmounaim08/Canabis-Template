'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Leaf,
  Calendar,
  User,
  Clock,
  Search,
  Tag,
  ArrowRight,
  Eye,
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Beaker,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import NavigationBar from '@/components/header';

const BlogPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));
  const [isLoading, setIsLoading] = useState(false);
  const articlesPerPage = 6;

  // Mise à jour de l'URL quand les filtres changent
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (searchQuery) params.set('search', searchQuery);
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
    router.replace(newUrl, { scroll: false });
  }, [selectedCategory, searchQuery, currentPage, router]);

const categories = [
    { id: 'all', name: 'Tous les articles', count: 24, color: 'bg-gray-100 text-gray-800' },
    { id: 'recherche', name: 'Recherche & Innovation', count: 8, color: 'bg-purple-100 text-purple-800' },
    { id: 'therapeutique', name: 'Cannabis Thérapeutique', count: 7, color: 'bg-rose-100 text-rose-800' },
    { id: 'agriculture', name: 'Agriculture Biologique', count: 5, color: 'bg-emerald-100 text-emerald-800' },
    { id: 'actualite', name: 'Actualités Secteur', count: 4, color: 'bg-blue-100 text-blue-800' }
];

const featuredArticles = [
  {
    id: 1,
    slug: 'nouvelle-variete-cbd-ultra-25-pourcent',
    title: "Nouvelle variété CBD Ultra : 25% de CBD naturel atteint",
    excerpt: "Notre équipe de recherche vient de développer une nouvelle variété révolutionnaire atteignant 25% de CBD naturellement, sans modification génétique.",
    category: "recherche",
    author: "Dr. Marie Dubois",
    authorSlug: "marie-dubois",
    date: "2025-07-15",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Nouvelle variété CBD Ultra développée par CannaBio France",
    views: 2847,
    likes: 124,
    comments: 18,
    featured: true,
    tags: ["CBD", "Recherche", "Innovation", "Génétique"],
    metaDescription: "Découvrez notre nouvelle variété CBD Ultra atteignant 25% de CBD naturellement développée par nos chercheurs."
  },
  {
    id: 2,
    slug: 'cannabis-douleur-chronique-etude-clinique-resultats',
    title: "Cannabis et douleur chronique : notre étude clinique révèle des résultats prometteurs",
    excerpt: "Les résultats de notre étude clinique de 2 ans sur 500 patients montrent une réduction significative de la douleur chronique avec nos variétés CBD.",
    category: "therapeutique",
    author: "Prof. Jean-Luc Martin",
    authorSlug: "jean-luc-martin",
    date: "2025-07-12",
    readTime: "12 min",
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Étude clinique sur le cannabis et la douleur chronique - CannaBio France",
    views: 4251,
    likes: 289,
    comments: 45,
    featured: true,
    tags: ["Douleur chronique", "Étude clinique", "Thérapeutique"],
    metaDescription: "Résultats de notre étude clinique de 2 ans sur l'efficacité du cannabis CBD contre la douleur chronique."
  }
];

const regularArticles = [
  {
    id: 3,
    slug: 'certification-bio-nouvelles-exigences-europeennes-2025',
    title: "Certification Bio : les nouvelles exigences européennes 2025",
    excerpt: "Découvrez les nouveaux critères de certification biologique européenne qui entreront en vigueur cette année pour le cannabis thérapeutique.",
    category: "agriculture",
    author: "Sophie Leroy",
    authorSlug: "sophie-leroy",
    date: "2025-07-10",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Nouvelles certifications bio européennes 2025 pour le cannabis",
    views: 1834,
    likes: 67,
    comments: 12,
    tags: ["Bio", "Certification", "Réglementation"],
    metaDescription: "Guide complet des nouvelles exigences de certification biologique européenne 2025 pour le cannabis thérapeutique."
  },
  {
    id: 4,
    slug: 'terpenes-molecules-aromatiques-vertus-therapeutiques',
    title: "Terpènes : les molécules aromatiques aux vertus thérapeutiques",
    excerpt: "Plongée dans l'univers des terpènes, ces composés naturels qui donnent leur arôme unique aux plantes de cannabis et leurs propriétés bénéfiques.",
    category: "recherche",
    author: "Dr. Antoine Rousseau",
    authorSlug: "antoine-rousseau",
    date: "2025-07-08",
    readTime: "10 min",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Terpènes du cannabis et leurs propriétés thérapeutiques",
    views: 2156,
    likes: 98,
    comments: 23,
    tags: ["Terpènes", "Aromathérapie", "Recherche"],
    metaDescription: "Découvrez les terpènes du cannabis, leurs propriétés aromatiques et leurs vertus thérapeutiques scientifiquement prouvées."
  },
  {
    id: 5,
    slug: 'avenir-cannabis-medical-france-perspectives-2025-2030',
    title: "L'avenir du cannabis médical en France : perspectives 2025-2030",
    excerpt: "Analyse des évolutions réglementaires et des opportunités de développement du marché français du cannabis thérapeutique.",
    category: "actualite",
    author: "Émilie Garneau",
    authorSlug: "emilie-garneau",
    date: "2025-07-05",
    readTime: "15 min",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Avenir du cannabis médical en France - perspectives 2025-2030",
    views: 3427,
    likes: 156,
    comments: 34,
    tags: ["France", "Réglementation", "Avenir"],
    metaDescription: "Analyse prospective du marché français du cannabis thérapeutique et évolutions réglementaires attendues 2025-2030."
  },
  {
    id: 6,
    slug: 'culture-serre-vs-outdoor-avantages-inconvenients',
    title: "Culture en serre vs culture outdoor : avantages et inconvénients",
    excerpt: "Comparaison détaillée entre nos méthodes de culture en serre contrôlée et les techniques de culture en extérieur pour le cannabis bio.",
    category: "agriculture",
    author: "Marc Villemagne",
    authorSlug: "marc-villemagne",
    date: "2025-07-03",
    readTime: "7 min",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Comparaison culture en serre vs outdoor pour cannabis bio",
    views: 1623,
    likes: 45,
    comments: 8,
    tags: ["Culture", "Serre", "Outdoor"],
    metaDescription: "Comparaison complète entre culture en serre et outdoor pour le cannabis biologique : avantages et inconvénients."
  },
  {
    id: 7,
    slug: 'cbd-anxiete-mecanismes-action-posologie-optimale',
    title: "CBD et anxiété : mécanismes d'action et posologie optimale",
    excerpt: "Notre guide complet sur l'utilisation du CBD pour gérer l'anxiété, basé sur les dernières recherches scientifiques.",
    category: "therapeutique",
    author: "Dr. Claire Bergeron",
    authorSlug: "claire-bergeron",
    date: "2025-07-01",
    readTime: "11 min",
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "CBD contre l'anxiété - mécanismes d'action et posologie",
    views: 2934,
    likes: 187,
    comments: 29,
    tags: ["CBD", "Anxiété", "Posologie"],
    metaDescription: "Guide scientifique complet sur l'utilisation du CBD contre l'anxiété : mécanismes d'action et posologie optimale."
  },
  {
    id: 8,
    slug: 'innovation-processus-extraction-co2-supercritique',
    title: "Innovation : notre nouveau processus d'extraction CO2 supercritique",
    excerpt: "Présentation de notre technologie d'extraction révolutionnaire qui préserve 98% des cannabinoïdes et terpènes naturels.",
    category: "recherche",
    author: "Ing. Thomas Lefevre",
    authorSlug: "thomas-lefevre",
    date: "2025-06-28",
    readTime: "9 min",
    image: "https://images.pexels.com/photos/954583/pexels-photo-954583.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Nouveau processus d'extraction CO2 supercritique CannaBio",
    views: 2176,
    likes: 112,
    comments: 16,
    tags: ["Extraction", "CO2", "Innovation"],
    metaDescription: "Découvrez notre nouvelle technologie d'extraction CO2 supercritique préservant 98% des cannabinoïdes naturels."
  },
  {
    id: 9,
    slug: 'partenariat-universite-lyon-formation-experts-cannabis',
    title: "Partenariat avec l'Université de Lyon : formation des futurs experts",
    excerpt: "Annonce de notre nouveau partenariat éducatif pour former la prochaine génération d'experts en cannabis thérapeutique.",
    category: "actualite",
    author: "Direction CannaBio",
    authorSlug: "direction-cannabio",
    date: "2025-06-25",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Partenariat CannaBio France - Université de Lyon formation cannabis",
    views: 1456,
    likes: 73,
    comments: 11,
    tags: ["Partenariat", "Formation", "Université"],
    metaDescription: "CannaBio France s'associe à l'Université de Lyon pour former les futurs experts en cannabis thérapeutique."
  },
  {
    id: 10,
    slug: 'developpement-durable-engagement-environnement',
    title: "Développement durable : notre engagement pour l'environnement",
    excerpt: "Découvrez nos initiatives écologiques : énergie solaire, recyclage de l'eau, et réduction de l'empreinte carbone de 40%.",
    category: "agriculture",
    author: "Élodie Moreau",
    authorSlug: "elodie-moreau",
    date: "2025-06-22",
    readTime: "8 min",
    image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Développement durable et engagement environnemental CannaBio",
    views: 1789,
    likes: 91,
    comments: 14,
    tags: ["Environnement", "Durable", "Écologie"],
    metaDescription: "Découvrez les initiatives écologiques de CannaBio France : énergie solaire, recyclage et réduction carbone."
  }
];
  const allArticles = [...featuredArticles, ...regularArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'recherche': return Beaker;
      case 'therapeutique': return Heart;
      case 'agriculture': return Leaf;
      case 'actualite': return Globe;
      default: return Tag;
    }
  };

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCategoryChange = (categoryId: React.SetStateAction<string>) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setIsLoading(true);
    setCurrentPage(page);
    setTimeout(() => setIsLoading(false), 300);
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto text-emerald-200 mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blog CannaBio
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Actualités, recherches et innovations dans l&apos;univers du cannabis thérapeutique biologique. 
            Découvrez les dernières avancées scientifiques et nos expertises.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                aria-label="Rechercher dans les articles"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category.id);
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                        : category.color + ' hover:shadow-md hover:scale-102'
                    }`}
                    aria-pressed={selectedCategory === category.id}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
        </div>
      )}

      {!isLoading && (
        <>
          {/* Featured Articles */}
          {selectedCategory === 'all' && (
            <section className="py-16 bg-gray-50" aria-labelledby="featured-articles">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 id="featured-articles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Articles à la Une
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Nos dernières découvertes et innovations qui font l&apos;actualité du cannabis thérapeutique
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredArticles.map((article) => {
                    const CategoryIcon = getCategoryIcon(article.category);
                    return (
                      <article key={article.id} className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <div className="relative">
                            <Link href={`/blog/${article.slug}`} aria-label={`Lire l'article: ${article.title}`}>
                              <Image
                                src={article.image}
                                alt={article.imageAlt}
                                width={800}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                              />
                            </Link>
                            <div className="absolute top-4 left-4">
                              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <CategoryIcon className="w-4 h-4 text-emerald-600" />
                                <span className="text-sm font-medium text-gray-800 capitalize">
                                  {categories.find(c => c.id === article.category)?.name}
                                </span>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                À la une
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-8">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <Link 
                                  href={`/auteurs/${article.authorSlug}`}
                                  className="hover:text-emerald-600 transition-colors"
                                >
                                  {article.author}
                                </Link>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={article.date}>{formatDate(article.date)}</time>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                              <Link href={`/blog/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {article.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tags de l'article">
                              {article.tags.map((tag, tagIndex) => (
                                <Link
                                  key={tagIndex}
                                  href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-xs bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-700 px-2 py-1 rounded-full transition-colors"
                                  role="listitem"
                                >
                                  #{tag}
                                </Link>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1" title="Nombre de vues">
                                  <Eye className="w-4 h-4" />
                                  <span>{article.views.toLocaleString('fr-FR')}</span>
                                </div>
                                <div className="flex items-center space-x-1" title="Nombre de likes">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{article.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1" title="Nombre de commentaires">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{article.comments}</span>
                                </div>
                              </div>
                              <Link
                                href={`/blog/${article.slug}`}
                                className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-2 transition-transform duration-300"
                              >
                                <span>Lire l&apos;article</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Regular Articles Grid */}
          <section className="py-16 bg-white" aria-labelledby="articles-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="articles-section" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedCategory === 'all' ? 'Derniers Articles' : `Articles : ${categories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                <p className="text-lg text-gray-600">
                  {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
                </p>
              </div>

              {paginatedArticles.length === 0 ? (
                <div className="text-center py-20">
                  <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-500">Essayez avec d&apos;autres mots-clés ou changez de catégorie.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedArticles.map((article) => {
                    const CategoryIcon = getCategoryIcon(article.category);
                    return (
                      <article key={article.id} className="group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                          <div className="relative">
                            <Link href={`/blog/${article.slug}`} aria-label={`Lire l'article: ${article.title}`}>
                              <Image
                                src={article.image}
                                alt={article.imageAlt}
                                width={600}
                                height={300}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                              />
                            </Link>
                            <div className="absolute top-3 left-3">
                              <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                <CategoryIcon className="w-3 h-3 text-emerald-600" />
                                <span className="text-xs font-medium text-gray-800">
                                  {categories.find(c => c.id === article.category)?.name.split(' ')[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <time dateTime={article.date}>{formatDate(article.date)}</time>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>

                            <h3 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                              <Link href={`/blog/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h3>
                            
                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <Link 
                                href={`/auteurs/${article.authorSlug}`}
                                className="font-medium hover:text-emerald-600 transition-colors"
                              >
                                {article.author}
                              </Link>
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1" title="Nombre de vues">
                                  <Eye className="w-3 h-3" />
                                  <span>{article.views.toLocaleString('fr-FR')}</span>
                                </div>
                                <div className="flex items-center space-x-1" title="Nombre de likes">
                                  <ThumbsUp className="w-3 h-3" />
                                  <span>{article.likes}</span>
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/blog/${article.slug}`}
                              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                            >
                              <span>Lire la suite</span>
                              <ArrowRight className="w-3 h-3" />
                              </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Page précédente"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>

                  <div className="flex space-x-1">
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-emerald-600 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          aria-label={`Page ${page}`}
                          aria-current={currentPage === page ? 'page' : undefined}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Page suivante"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800" aria-labelledby="newsletter-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 id="newsletter-section" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Restez informé
                </h2>
                <p className="text-xl text-emerald-100 mb-8">
                  Recevez nos dernières actualités et découvertes directement dans votre boîte mail
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-emerald-300 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                    aria-label="Adresse email pour la newsletter"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                  >
                    S&apos;abonner
                  </button>
                </form>
                
                <p className="text-sm text-emerald-200 mt-4">
                  Nous respectons votre vie privée. Désabonnement facile à tout moment.
                </p>
              </div>
            </div>
          </section>

          {/* Related Topics */}
          <section className="py-16 bg-gray-50" aria-labelledby="related-topics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="related-topics" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Explorez nos sujets
                </h2>
                <p className="text-lg text-gray-600">
                  Découvrez toutes nos thématiques d&apos;expertise
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.slice(1).map((category) => {
                  const IconComponent = getCategoryIcon(category.id);
                  return (
                    <div key={category.id} className="group">
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-left"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                            <IconComponent className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {category.count} articles
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {category.id === 'recherche' && "Innovations scientifiques et études cliniques"}
                          {category.id === 'therapeutique' && "Applications médicales et bienfaits thérapeutiques"}
                          {category.id === 'agriculture' && "Techniques de culture biologique durable"}
                          {category.id === 'actualite' && "Nouvelles du secteur et évolutions réglementaires"}
                        </p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BlogPage;