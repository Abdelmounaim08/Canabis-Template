"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUsSection() {
  return (
    <section className="bg-beige text-noir py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
          <p className="text-lg text-gray-700 mb-8">
            Vous avez des questions ou souhaitez en savoir plus sur nos produits au cannabis légal ? N&apos;hésitez pas à nous écrire ou à nous appeler.
          </p>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-emerald-600 w-6 h-6" />
              Avenue des Plantes, Meknès, Maroc
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-emerald-600 w-6 h-6" />
              +212 6 12 34 56 78
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-emerald-600 w-6 h-6" />
              contact@cannabismaroc.ma
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Nom
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <Button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
