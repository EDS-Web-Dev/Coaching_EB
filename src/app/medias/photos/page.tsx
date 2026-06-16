import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Photos de courses",
  description: "La galerie photos d'Éric Bitsch — trail, ultra-trail et marathon.",
  robots: { index: false, follow: false },
};

const photos = [
  "0498FB5E-A088-4149-8FB3-24B239FE7A3A_1_105_c.jpeg",
  "09D9295D-C761-4442-8094-DE0118FFA582_1_105_c.jpeg",
  "16B4C175-BDB1-4296-8C95-8B5211560D35.jpeg",
  "1AFBD64E-2488-4CD9-B40B-F4360D2C3A8C_4_5005_c.jpeg",
  "23FD371F-1512-4572-8A25-9EB210137FE3_1_105_c.jpeg",
  "254C0816-DBDA-441B-A08B-3F0853B1F851_1_102_o.jpeg",
  "27967B9D-66A0-4605-BE73-56098A1BFD6F_1_105_c.jpeg",
  "2E18DBE0-500A-4994-B4C4-1FA920A09378.jpeg",
  "33F6AF94-7C6E-4924-B93E-D2C8F60736C0_4_5005_c.jpeg",
  "387D8ADB-F09B-4486-8E74-82DB6FFB5E28_4_5005_c.jpeg",
  "3D94F4ED-AF87-4F3D-937E-A04E71ACCAF2.jpeg",
  "4E45D61A-2C34-452C-861B-F59D37CE9FB6_1_105_c.jpeg",
  "56BE42E8-24E6-47CD-8CF1-93CDA46672EC.jpeg",
  "6DE67B5D-0CE8-48C1-89B4-A1CB47F24636_1_105_c.jpeg",
  "7F7620A7-F065-4EDE-8EEA-47C9E626A002_1_105_c.jpeg",
  "84E73D4A-4543-4BFD-9330-4D6C89DED94D_4_5005_c.jpeg",
  "898A33FC-32EC-4177-99EA-178D3B74498B_1_105_c.jpeg",
  "8E6932FA-DB91-47D6-B725-FC78B5F40DCD_1_105_c.jpeg",
  "92724F39-027A-485F-9ED5-7385091CD99A_1_105_c.jpeg",
  "95C9C307-0450-4B10-9685-460DFF712307_1_105_c.jpeg",
  "B33A75A4-CF1C-4A75-B660-5FE1B63581FC_1_105_c.jpeg",
  "BE9BBB44-F8BD-41E9-A480-35E8862C3E5A_1_105_c.jpeg",
  "C37DB6B9-FF3C-4420-9BE5-1460BB52AC21_1_105_c.jpeg",
  "C5822E92-9842-4FE6-A0D7-35B90B7ED9C1_1_105_c.jpeg",
  "C895310D-3C05-45BD-AD1B-A09760A306DD_1_105_c.jpeg",
  "CC433C8A-3446-43CA-96DB-3BC5052E337A_1_105_c.jpeg",
  "D00D98B8-B335-49DD-9993-D6FD41B61E95_1_105_c.jpeg",
  "D30A5AEE-45CB-48DE-A569-482B174AE9FD_1_105_c.jpeg",
  "D4E82DEE-2911-45F3-B897-1FE6ED58757E_4_5005_c.jpeg",
  "D4EDEE95-4F7C-4B7F-AD88-31C3B412A962_4_5005_c.jpeg",
  "D5A8563D-619A-4305-8217-DAC451B0395A_1_105_c.jpeg",
  "DEBF6D46-8222-45AE-8E50-A5E6E79A2A28_1_105_c.jpeg",
  "E2EFBA15-B0ED-4735-941A-F632041194F9_4_5005_c.jpeg",
  "EC586232-07ED-440C-B727-A030533A0CE3.jpeg",
  "FA4949F1-9A17-459E-95F5-AC685EA2E9D8_1_105_c.jpeg",
  "FBD1EE4E-26C6-455A-BFF7-A8EA1F08069D_1_105_c.jpeg",
  "FBE8C08F-7643-4611-9029-BBA8FB13A7B2_1_105_c.jpeg",
  "photomedia.jpeg",
  "photos.jpeg",
  "photos2.jpeg",
  "podcast.jpeg",
  "recit.jpeg",
];

export default function PhotosPage() {
  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/images/medias/photomedia.jpeg" alt="" fill className="object-cover" style={{ objectPosition: "20% 70%" }} priority />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="font-oswald font-bold text-orange text-5xl sm:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>
            PHOTOS
          </h1>
        </div>
      </section>

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/medias" className="inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-widest text-orange hover:text-orange-hover transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" /> Médias
          </Link>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {photos.map((filename) => (
              <div key={filename} className="relative break-inside-avoid overflow-hidden rounded-lg mb-3">
                <Image
                  src={`/images/medias/${filename}`}
                  alt=""
                  width={800}
                  height={600}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
