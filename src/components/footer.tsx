"use client";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Colonne 1 : Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CannabisMaroc</h2>
          <p className="text-sm text-emerald-100">
            Cultivé avec soin au Maroc. Produits naturels, bio et certifiés. Votre partenaire bien-être.
          </p>
        </div>

        {/* Colonne 2 : Liens de navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/about" className="hover:underline">À propos</Link></li>
            <li><Link href="/products" className="hover:underline">Produits</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact + Réseaux */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@cannabismaroc.ma
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Bab Berred, Maroc
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-white/80" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-white/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-emerald-700 mt-10 pt-6 text-sm text-center text-emerald-200">
        © {new Date().getFullYear()} CannabisMaroc. Tous droits réservés.
      </div>
    </footer>
  );
}
