import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conseils trail & running, nutrition, prévention des blessures et préparation mentale par votre coach.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative py-32 bg-forest topo-texture text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="inline-block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-4">
            Ressources
          </span>
          <h1 className="font-oswald font-bold text-white text-5xl sm:text-6xl mb-4">BLOG</h1>
          <p className="font-montserrat text-white/70 text-base">
            Conseils entraînement, nutrition, récupération et performance par votre coach.
          </p>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured article */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
              <h2 className="font-oswald text-2xl font-bold text-forest">À LA UNE</h2>
            </div>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-orange text-white font-montserrat font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 font-montserrat text-xs text-anthracite/50 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {blogPosts[0].readTime} de lecture · {blogPosts[0].date}
                </div>
                <h3 className="font-oswald font-bold text-forest text-3xl uppercase mb-3 group-hover:text-orange transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="font-montserrat text-sm text-anthracite/65 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-montserrat font-bold text-xs uppercase tracking-widest text-orange group-hover:gap-3 transition-all">
                  Lire l&apos;article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Other articles */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-orange rounded-full flex-shrink-0" />
            <h2 className="font-oswald text-2xl font-bold text-forest">DERNIERS ARTICLES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-orange text-white font-montserrat font-bold text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 font-montserrat text-xs text-anthracite/40 mb-2">
                    <Clock className="w-3 h-3" />
                    {post.readTime} · {post.date}
                  </div>
                  <h3 className="font-oswald font-bold text-forest text-xl uppercase mb-2 group-hover:text-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-montserrat text-xs text-anthracite/60 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}

            {/* Placeholder for more articles */}
            <div className="bg-forest/5 border-2 border-dashed border-forest/20 rounded-[12px] flex items-center justify-center p-6 text-center min-h-[280px]">
              <div>
                <div className="font-oswald font-bold text-forest/40 text-xl uppercase mb-2">
                  D&apos;autres articles arrivent
                </div>
                <p className="font-montserrat text-xs text-anthracite/40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
