import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — Cheapest Towing 2013 NZ", description: "We cover the greater Auckland region — from the CBD and North Shore to South Auckland and the Waitakere Ranges — with nationwide recovery available 24/7.", path: "/service-areas", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Auckland CBD", "North Shore", "West Auckland", "South Auckland", "East Auckland", "Manukau", "Hamilton", "Tauranga", "Wellington", "Christchurch", "Dunedin", "Nationwide on request"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering Auckland, day and night" subtitle="Based in Auckland and covering every corner of the region, with long-distance recovery available nationwide across New Zealand." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
              <MapPin className="h-5 w-5 text-primary" /> <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}