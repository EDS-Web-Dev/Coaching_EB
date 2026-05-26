import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="relative py-20 bg-orange overflow-hidden text-center">
      {/* Topo overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'%3E%3Cellipse cx='300' cy='200' rx='280' ry='150'/%3E%3Cellipse cx='300' cy='200' rx='220' ry='110'/%3E%3Cellipse cx='300' cy='200' rx='160' ry='74'/%3E%3Cellipse cx='300' cy='200' rx='100' ry='40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h2 className="font-oswald font-bold text-white text-4xl sm:text-5xl mb-4">
          PRÊT À FRANCHIR LA CRÊTE ?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-orange font-montserrat font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-off-white transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
        >
          Prendre rendez-vous →
        </Link>
      </div>
    </section>
  );
}
