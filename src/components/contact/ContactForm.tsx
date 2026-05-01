"use client";

import { useState } from "react";

type FormState = {
  nom: string;
  email: string;
  objectif: string;
  niveau: string;
  blessures: string;
  disponibilite: string;
  message: string;
};

const initial: FormState = {
  nom: "", email: "", objectif: "", niveau: "",
  blessures: "", disponibilite: "5", message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[24px] p-10 shadow-xl text-center">
        <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🏔️</span>
        </div>
        <h3 className="font-oswald text-2xl font-bold text-forest uppercase mb-2">
          Message envoyé !
        </h3>
        <p className="font-montserrat text-sm text-anthracite/60">
          Merci {form.nom}. Je reviens vers vous sous 24h pour organiser votre appel découverte.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-xl">
      <h3 className="font-oswald font-bold text-forest uppercase tracking-wide text-xl mb-6">
        PRÊT À DÉMARRER ? (QUALIFICATION)
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
              Nom *
            </label>
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all"
            />
          </div>
          <div>
            <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
              Email *
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="votre@email.fr"
              className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all"
            />
          </div>
        </div>

        {/* Objectif Principal */}
        <div>
          <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
            Objectif Principal *
          </label>
          <select
            name="objectif"
            value={form.objectif}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all appearance-none cursor-pointer"
          >
            <option value="">Sélectionner votre objectif…</option>
            <option value="trail">Trail — Compétition / Ultra</option>
            <option value="route">Route — Marathon / Semi</option>
            <option value="sante">Santé — Reprise / Bien-être</option>
            <option value="decouverte">Découverte de la course à pied</option>
          </select>
          <p className="font-montserrat text-xs text-anthracite/40 mt-1">
            Pour cibler le bon programme d&apos;entraînement.
          </p>
        </div>

        {/* Expérience Actuelle */}
        <div>
          <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
            Expérience Actuelle *
          </label>
          <select
            name="niveau"
            value={form.niveau}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all appearance-none cursor-pointer"
          >
            <option value="">Sélectionner votre niveau…</option>
            <option value="debutant">Débutant — Je commence</option>
            <option value="intermediaire">Intermédiaire — Je cours régulièrement</option>
            <option value="confirme">Confirmé — Je participe à des compétitions</option>
            <option value="elite">Élite — Je vise le podium</option>
          </select>
          <p className="font-montserrat text-xs text-anthracite/40 mt-1">
            Pour ajuster la charge de travail initiale.
          </p>
        </div>

        {/* Antécédents médicaux */}
        <div>
          <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-2">
            Antécédents médicaux / Blessures passées
          </label>
          <div className="flex flex-wrap gap-3 mb-3">
            {["Aucun", "Genou", "Cheville", "Dos / Hanche", "Autre"].map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="blessures"
                  value={v.toLowerCase()}
                  onChange={handleChange}
                  className="accent-orange"
                />
                <span className="font-montserrat text-sm text-anthracite/70 group-hover:text-anthracite transition-colors">
                  {v}
                </span>
              </label>
            ))}
          </div>
          {form.blessures && form.blessures !== "aucun" && (
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Précisez vos antécédents médicaux si nécessaire…"
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all resize-none"
            />
          )}
          <p className="font-montserrat text-xs text-anthracite/40 mt-1">
            Pour sécuriser la pratique.
          </p>
        </div>

        {/* Disponibilité */}
        <div>
          <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-2">
            Disponibilité — <span className="text-orange">{form.disponibilite}h / semaine</span>
          </label>
          <input
            type="range"
            name="disponibilite"
            min={2}
            max={20}
            value={form.disponibilite}
            onChange={handleChange}
            className="w-full accent-orange h-2 cursor-pointer"
          />
          <div className="flex justify-between font-montserrat text-xs text-anthracite/40 mt-1">
            <span>2h min</span>
            <span>20h max</span>
          </div>
          <p className="font-montserrat text-xs text-anthracite/40 mt-1">
            Pour adapter le planning à votre vie pro/perso.
          </p>
        </div>

        {/* Message libre */}
        {!form.blessures || form.blessures === "aucun" ? (
          <div>
            <label className="block font-montserrat text-xs font-bold uppercase tracking-widest text-forest mb-1.5">
              Message libre
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Parlez-moi de votre projet, vos courses cibles, vos contraintes…"
              className="w-full px-4 py-3 border border-gray-200 rounded-[12px] font-montserrat text-sm text-anthracite bg-off-white focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-all resize-none"
            />
          </div>
        ) : null}

        <p className="font-montserrat text-xs text-anthracite/40">
          * Champs obligatoires. Vos données restent confidentielles.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange hover:bg-orange-hover disabled:opacity-70 text-white font-montserrat font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange/30"
        >
          {loading ? "Envoi en cours…" : "ENVOYER MA DEMANDE →"}
        </button>
      </form>
    </div>
  );
}
