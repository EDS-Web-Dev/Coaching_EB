const socials = [
  {
    name: "Instagram",
    handle: "@coach.eric",
    description: "Coulisses des entraînements, conseils quotidiens et lifestyle trail.",
    href: "#",
    color: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Coach Eric",
    description: "Vidéos techniques, analyses de courses et programmes complets.",
    href: "#",
    color: "from-[#ff0000] to-[#cc0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Strava",
    handle: "/coach-eric",
    description: "Suivez mes sorties, segments et activités en temps réel.",
    href: "#",
    color: "from-[#fc4c02] to-[#e03d00]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M15 3l-4 9h3l-4 9 9-12h-4z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SocialBanner() {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Restez connectés
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-white/20" />
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-forest">
              SUIVEZ L&apos;AVENTURE
            </h2>
            <div className="w-12 h-px bg-forest/20" />
          </div>
          <p className="font-montserrat text-anthracite/50 text-sm max-w-md mx-auto">
            Conseils quotidiens, coulisses des entraînements et contenu exclusif sur les réseaux.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-gray-100 rounded-[20px] p-8 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[20px]`} />

              {/* Icon */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {s.icon}
                </div>
                <div className="font-oswald font-bold text-forest text-xl uppercase mb-1">{s.name}</div>
                <div className="font-montserrat text-xs text-orange font-semibold">{s.handle}</div>
              </div>

              <p className="font-montserrat text-anthracite/60 text-sm leading-relaxed text-center">{s.description}</p>

              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-anthracite/30 group-hover:text-forest transition-colors">
                  Suivre →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
