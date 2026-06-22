import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Récit de ma Diagonale des Fous 2025",
  description: "Quatre ans et demi de préparation pour finisher la mythique Diagonale des Fous 2025. Le récit d'Éric Bitsch.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Le déclic",
    content: `Début 2021. Mon Philou me lance :
« J'ai envie de faire la DIAG… tu viens avec moi ? »
Sans réfléchir, je dis oui.
Puis je réfléchis. Souvent. Et je me dis :
« Tu es un grand malade… comment peux-tu imaginer faire une telle course ? C'est de la folie pure ! »
Moi, qui n'avais jamais couru plus de 42 km… Mais impossible de revenir en arrière. 😱`,
  },
  {
    title: "Le plan",
    content: `Je décide de mettre toutes les chances de mon côté. Je contacte Erik Clavery, une référence dans le monde du trail. Je lui demande :
« En deux ans et demi, tu peux me préparer ? »
On discute. Il dit oui. Et on commence à bosser ensemble.
Les distances montent : 50, 60, 65… puis 74 km en avril 2023.
Janvier 2023, on tente l'inscription. Échec. On se dit : « On essaiera en janvier 2024. »`,
  },
  {
    title: "Le coup dur",
    content: `12 avril 2023. Patatrac. Deux abrutis mettent un frein à ma belle prépa.
Huit mois d'arrêt. Plus de course à pied. Reprise début janvier 2024.
On décale le projet à 2025, ça me laissera un an et 10 mois pour être au top.
Je me fais accompagner par Mohamed Anas Bachir pour me faire des jambes en béton.
Je reprends doucement : 21 km, puis 30, puis 42 km en 2024.`,
  },
  {
    title: "L'inscription : un ultra avant l'ultra",
    content: `Cette année, ils mettent trois dates à une semaine d'intervalle pour obtenir les packs.
15 janvier. On est installés avec 4 PC. À 11h pétantes, on clique.
Résultat : 950e pour 350 packs. Raté. 😉

Semaine suivante. Philou est sur la route. Il s'arrête. Moi chez moi. 11h00. Clic.
Philou est bon, il se connecte, commence la réservation… et là, panne de 4G. Tout s'effondre. 😢

Troisième semaine. On se la joue scientifique. On contacte un informaticien :
« Le site est sûrement en France. Du Maroc, vous avez 3 à 4 secondes de retard. »
Plan d'attaque : 4 PC. Le premier à 11h moins 4", le deuxième à moins 3", le troisième à moins 2", le dernier à moins 1".
Cette fois, c'est la bonne. Mercredi 29 janvier 2025, nous avons nos dossards. C'est concret. 😱😱`,
  },
  {
    title: "La montée en puissance",
    content: `Maintenant, ça ne rigole plus. Il reste 10 mois. Ça paraît loin… mais c'est tout près.
Entraînement 7/7 : muscu, VTT, CAP.
Un week-end par mois à la montagne avec les UB pour bouffer du dénivelé.

Les distances montent :
• Avril 2025 : mon premier 90 km et 4 500 m de dénivelé positif à Amizmiz.
• Août 2025 : mon premier 96 km et 7 200 m de dénivelé positif à l'Échappée Belle en Savoie.

Chaque sortie est une marche vers ce rêve fou. Chaque goutte de sueur, un pas de plus vers la Redoute.

Quatre ans et demi de préparation. Des hauts, des bas, des galères, des joies. Et maintenant, le compte à rebours est lancé. La Diagonale des Fous nous attend. Et cette fois… on est prêts.`,
  },
  {
    title: "La Diagonale des Fous : l'aventure commence",
    content: `Jeudi matin. Je prépare mon sac. Tout est prêt… enfin presque. Craaaac. La fermeture lâche. Catastrophe. À quelques heures du départ, tout s'effondre.
Je cours – littéralement – à 200 mètres de notre logement. Un magasin de trail. Une chance inespérée. Un sac flambant neuf. Ouf. La course peut commencer.`,
  },
  {
    title: "Le départ : un frisson",
    content: `Sur la ligne, le cœur bat fort. La Diagonale des Fous… rien que le nom donne des frissons. SAS 4. Je me glisse dans les derniers rangs. Je n'aime pas les bousculades.
Le coup de feu. La foule hurle. L'ambiance est électrique, presque irréelle.
Après 500 mètres, nos femmes sont là. On s'arrête, on s'embrasse. Et soudain… nous voilà derniers. J'entends : « Les derniers ! » Et la foule nous acclame comme des héros. Je souris. C'est fou. Cette chaleur humaine va nous porter des kilomètres durant.
Et cette ambiance… elle dure. Kilomètre après kilomètre. Une vague d'énergie qui ne s'arrête jamais.`,
  },
  {
    title: "Ma méthode : avancer sans voir trop loin",
    content: `Je découpe la course en étapes. CP après CP. À chaque point, je regarde la distance, l'heure limite. Pas de pression, juste finir.
Sur WhatsApp, près de 100 personnes nous suivent. Nos femmes postent des infos. Manon lâche :
« Papa, il est intelligent. Eric, c'est une IA, il fonctionne comme un robot ! »
Je ris intérieurement. Peut-être qu'elle n'a pas tort.

Aux ravitos, Philippe prend son temps : douche, changement, repas, discussions, il danse même sur le stade au PC à Cilaos. Moi ? Je remplis mes flasques, contrôle ma poche à eau, mes gels, je mange un peu… et je repars.
Delphine me voit, surprise : je suis dans ma bulle. Pas un mot de trop. Je ne suis pas là pour briller. Je veux juste franchir la ligne.`,
  },
  {
    title: "Comparaison avec d'autres courses",
    content: `Techniquement, j'ai trouvé l'Échappée Belle plus dure que la DIAG.
Sur le 42 km de l'UTAT, j'ai vraiment galéré.
Sur la DIAG, je n'ai jamais eu de moment « au bout de ma vie » comme sur ces deux courses. Peut-être qu'avec ma petite expérience je gère différemment. Bien sûr, la fatigue s'accumule, mais rien de catastrophique.`,
  },
  {
    title: "Les montées : un pas après l'autre",
    content: `Je savais que j'arriverais en haut. J'arrive toujours en haut, ce n'est qu'une question de temps.
Je trouve mon rythme. Un pas, puis un autre. Je me répète ce que m'a dit mon coach Erik Clavery :
« Tant que tu avances, c'est bon »
Et ça marche. La montée du Maïdo ? Redoutée par tous. Pour moi, elle passe. Pas facile, mais pas impossible.
Je me fais doubler par des fusées… puis je les retrouve, épuisés, arrêtés. Moi, je continue. Lentement, mais sûrement.
La montée Kerveguen, le Maïdo… tout le monde les trouve horribles. Moi ? Elles passent crème. Enfin… façon de parler.`,
  },
  {
    title: "Les descentes : mon enfer",
    content: `Le Bloc vers Cilaos… un cauchemar.
Chemin Ratineau Kalla ? Pire encore.
Je suis fatigué, c'est la dernière nuit, les jambes commencent à être lourdes. Je tombe. Fort. Sur le dos. Le souffle coupé. Une seconde d'angoisse. Puis je repars. Rien de cassé. Mais je le sens encore aujourd'hui.`,
  },
  {
    title: "La surprise : Philippe revient",
    content: `À Aurère, 105 km. Je finis mon ravito quand j'entends :
« Ririiii ! »
Je cherche, y a-t-il un autre Riri que moi sur ce PC. Et non, c'est mon Philou qui arrive !
Il a dormi 2h30 au lieu de 20 minutes, il a oublié de mettre son réveil. Je l'avais doublé sans le voir.
On rit. On repart ensemble. Chacun a vécu sa partie seul. Maintenant, on affronte la fin côte à côte.
Et cette arrivée à la Redoute… indescriptible. Les larmes, les cris de nos femmes. On l'a fait. Ensemble.`,
  },
  {
    title: "Les détails qui comptent",
    content: `• Sommeil : trois micro-siestes de 5 min la première nuit, une fois 20 min et une fois 30 min la dernière nuit. Pas eu besoin de plus.
• Alimentation : trop chargé au départ, mais réglé à Cilaos.
• Ampoules : fidèles au poste après 80 km. NOK ou pas, elles viennent.
• Hydratation : nickel, toujours 2L d'eau sur moi.
• Ambiance : magique. Chaque village, chaque sourire, chaque musique… un carburant pour l'âme.`,
  },
  {
    title: "Les points noirs",
    content: `Le Trail du Bourbon sur le même parcours ? Une plaie.
Au début, sympa de voir passer les premiers… mais après, quelle galère !
Dans la montée du Taïbit, 1 000 coureurs frais comme des gardons veulent passer. Moi, 24h dans les jambes. Je m'écarte, je perds du temps et je n'en ai pas tant que ça.
Les bouchons ? Ça fait partie du jeu. Mais j'ai été agréablement surpris, c'est moins catastrophique que je ne l'imaginais.
Les gens qui bouchonnent sans s'écarter… un peu chiant. Mais bon, ça fait partie de l'aventure.`,
  },
];

const conclusion = `La Diagonale des Fous n'est pas qu'une course. C'est une aventure humaine. Une leçon de patience, de persévérance, et de joie brute.
Je suis allé au bout. Pas pour la gloire. Pour moi. Pour ce frisson unique quand tu franchis la ligne et que tu sais : je l'ai fait, je suis finisher de la DIAG.

On me pose beaucoup une question : la referas-tu un jour ?
J'y ai bien réfléchi et, non, je ne la referai pas.
J'ai vécu des moments exceptionnels pendant cette course et je veux que ça reste unique.`;

export default function DiagonalePage() {
  return (
    <>
      {/* Spacer under fixed navbar */}
      <div className="h-[80px] bg-forest" />

      {/* Hero */}
      <section className="relative h-[420px] flex items-end overflow-hidden">
        <Image src="/images/logograndraid.png" alt="" fill className="object-contain object-center bg-forest p-16" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-12 w-full">
<span className="block font-montserrat text-xs font-bold uppercase tracking-widest text-orange mb-2">
            Ultra-trail · 198 km · 11 000m D+ · Octobre 2025
          </span>
          <h1 className="font-oswald font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            RÉCIT DE MA<br />DIAGONALE DES FOUS 2025
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <Link href="/medias/recits" className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-orange hover:text-orange-hover transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Récits
          </Link>

          {/* Intro badge */}
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
              <span className="font-oswald font-bold text-orange text-sm">EB</span>
            </div>
            <div>
              <p className="font-montserrat text-sm font-bold text-anthracite">Éric Bitsch</p>
              <p className="font-montserrat text-xs text-anthracite/40">Octobre 2025 · 10 min de lecture</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-orange rounded-full flex-shrink-0" />
                  <h2 className="font-oswald font-bold text-forest text-2xl uppercase">{s.title}</h2>
                </div>
                <div className="pl-4 border-l border-gray-100">
                  {s.content.split("\n").map((line, i) =>
                    line.trim() === "" ? (
                      <br key={i} />
                    ) : (
                      <p key={i} className="font-montserrat text-anthracite/75 leading-relaxed text-base mb-2">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 bg-forest rounded-[16px] p-8">
            {conclusion.split("\n").map((line, i) =>
              line.trim() === "" ? (
                <br key={i} />
              ) : (
                <p key={i} className="font-montserrat text-white/85 leading-relaxed text-base mb-2 italic">
                  {line}
                </p>
              )
            )}
            <p className="font-oswald font-bold text-orange text-xl mt-4">— Éric Bitsch</p>
          </div>

        </div>
      </article>

      <CtaStrip />
    </>
  );
}
