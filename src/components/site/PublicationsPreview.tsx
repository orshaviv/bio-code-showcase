import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { safeExternalUrl } from "@/lib/utils";

type Author = {
  first: string;
  last: string;
  orcid?: string;
};

type Pub = {
  title: string;
  authors: Author[];
  venue?: string;
  year?: string;
  link?: string;
  thumbnail?: string;
  abstract?: string;
};

type InPrepPub = {
  title: string;
  authors: Author[];
  status: "In prep" | "Under Revision";
};

const pubs: Pub[] = [
  {
    title: "The global biomass of wild mammals",
    authors: [
      {
        first: "Lior",
        last: "Greenspoon",
        orcid: "https://orcid.org/0000-0001-8385-4033",
      },
      { first: "Eyal", last: "Krieger" },
      {
        first: "Ron",
        last: "Sender",
        orcid: "https://orcid.org/0000-0002-1165-9818",
      },
      {
        first: "Yuval",
        last: "Rosenberg",
        orcid: "https://orcid.org/0000-0002-6681-8329",
      },
      {
        first: "Yinon M.",
        last: "Bar-On",
        orcid: "https://orcid.org/0000-0001-8477-609X",
      },
      { first: "Uri", last: "Moran" },
      {
        first: "Tomer",
        last: "Antman",
        orcid: "https://orcid.org/0000-0002-0454-9274",
      },
      {
        first: "Shai",
        last: "Meiri",
        orcid: "https://orcid.org/0000-0003-3839-6330",
      },
      {
        first: "Uri",
        last: "Roll",
        orcid: "https://orcid.org/0000-0002-5418-1164",
      },
      {
        first: "Elad",
        last: "Noor",
        orcid: "https://orcid.org/0000-0001-8776-4799",
      },
      { first: "Ron", last: "Milo" },
    ],
    venue: "PNAS",
    year: "2023",
    link: "https://www.pnas.org/doi/10.1073/pnas.2204892120",
    thumbnail: "/lovable-uploads/7d1112de-5875-4d7b-a048-79aadf8b0c1b.png",
    abstract:
      "Wild mammals are icons of conservation efforts, yet there is no rigorous estimate available for their overall global biomass. Biomass as a metric allows us to compare species with very different body sizes, and can serve as an indicator of wild mammal presence, trends, and impacts, on a global scale. Here, we compiled estimates of the total abundance (i.e., the number of individuals) of several hundred mammal species from the available data, and used these to build a model that infers the total biomass of terrestrial mammal species for which the global abundance is unknown. We present a detailed assessment, arriving at a total wet biomass of ≈20 million tonnes (Mt) for all terrestrial wild mammals (95% CI 13-38 Mt), i.e., ≈3 kg per person on earth. The primary contributors to the biomass of wild land mammals are large herbivores such as the white-tailed deer, wild boar, and African elephant. We find that even-hoofed mammals (artiodactyls, such as deer and boars) represent about half of the combined mass of terrestrial wild mammals. In addition, we estimated the total biomass of wild marine mammals at ≈40 Mt (95% CI 20-80 Mt), with baleen whales comprising more than half of this mass. In order to put wild mammal biomass into perspective, we additionally estimate the biomass of the remaining members of the class Mammalia. The total mammal biomass is overwhelmingly dominated by livestock (≈630 Mt) and humans (≈390 Mt). This work is a provisional census of wild mammal biomass on Earth and can serve as a benchmark for human impacts.",
  },
  {
    title:
      "A systematic exploration of bacterial form I rubisco maximal carboxylation rates",
    authors: [
      {
        first: "Benoit",
        last: "de Pins",
        orcid: "https://orcid.org/0000-0002-6779-8446",
      },
      {
        first: "Lior",
        last: "Greenspoon",
        orcid: "https://orcid.org/0000-0001-8385-4033",
      },
      {
        first: "Yinon M.",
        last: "Bar-On",
        orcid: "https://orcid.org/0000-0001-8477-609X",
      },
      {
        first: "Melina",
        last: "Shamshoum",
        orcid: "https://orcid.org/0009-0006-8148-7878",
      },
      { first: "Roee", last: "Ben-Nissan" },
      {
        first: "Eliya",
        last: "Milshtein",
        orcid: "https://orcid.org/0009-0005-3405-1054",
      },
      { first: "Dan", last: "Davidi" },
      {
        first: "Itai",
        last: "Sharon",
        orcid: "https://orcid.org/0000-0003-0705-2316",
      },
      {
        first: "Oliver",
        last: "Mueller-Cajar",
        orcid: "https://orcid.org/0000-0003-2866-5963",
      },
      {
        first: "Elad",
        last: "Noor",
        orcid: "https://orcid.org/0000-0001-8776-4799",
      },
      { first: "Ron", last: "Milo" },
    ],
    venue: "EMBO",
    year: "2024",
    link: "https://www.embopress.org/doi/full/10.1038/s44318-024-00119-z",
    thumbnail: "systematic-thumbnail.jpg",
    abstract:
      "Autotrophy is the basis for complex life on Earth. Central to this process is rubisco—the enzyme that catalyzes almost all carbon fixation on the planet. Yet, with only a small fraction of rubisco diversity kinetically characterized so far, the underlying biological factors driving the evolution of fast rubiscos in nature remain unclear. We conducted a high-throughput kinetic characterization of over 100 bacterial form I rubiscos, the most ubiquitous group of rubisco sequences in nature, to uncover the determinants of rubisco’s carboxylation velocity. We show that the presence of a carboxysome CO2 concentrating mechanism correlates with faster rubiscos with a median fivefold higher rate. In contrast to prior studies, we find that rubiscos originating from α-cyanobacteria exhibit the highest carboxylation rates among form I enzymes (≈10 s−1 median versus <7 s−1 in other groups). Our study systematically reveals biological and environmental properties associated with kinetic variation across rubiscos from nature.",
  },
];

const inPrep: InPrepPub[] = [
  {
    title: "The Global Biomass of Mammals Since 1850",
    authors: [
      { first: "Lior", last: "Greenspoon" },
      { first: "Noam", last: "Ramot" },
      { first: "Uri", last: "Moran" },
      { first: "Uri", last: "Roll" },
      { first: "Uriel", last: "Phillips" },
      { first: "Elad", last: "Noor" },
      { first: "Ron", last: "Milo" },
    ],
    status: "Under Revision",
  },
  {
    title: "The Global Biomass of Birds",
    authors: [
      { first: "Lior", last: "Greenspoon" },
      { first: "Shmuel", last: "Amar" },
      { first: "Adam", last: "Berryman" },
      { first: "Yuval", last: "Rosenberg" },
      { first: "Omer", last: "Amar" },
      { first: "Yaron", last: "Cristal" },
      { first: "Uri", last: "Moran" },
    ],
    status: "In prep",
  },
];

export const PublicationsPreview = () => {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-heading font-semibold text-content">Research</h2>
        <h3 className="text-xl font-medium text-content/80 mt-4">
          Selected publications
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {pubs.map((p) => (
            <Card key={p.title} className="group card-hover">
              <div className="md:flex md:items-stretch">
                {p.thumbnail ? (
                  <div className="p-6 pr-0 flex-none shrink-0">
                    <img
                      src={p.thumbnail}
                      alt={`${p.title} thumbnail (treemap visualization)`}
                      loading="lazy"
                      className="w-[152px] h-[152px] object-cover rounded-md border-0"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : null}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-secondary/90 transition-colors flex flex-wrap items-center">
                      <a
                        href={safeExternalUrl(p.link)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {p.title}
                      </a>
                      <span className="ml-2 flex items-center gap-2">
                        <Badge variant="outline">{p.venue}</Badge>
                        <Badge variant="outline">{p.year}</Badge>
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-primary">
                    <p className="text-sm text-secondary/70">
                      {p.authors.map((a, idx) => {
                        const initial =
                          a.first?.trim()?.[0]?.toUpperCase() ?? "";
                        const name = `${a.last} ${initial}.`;
                        const isLead = a.last === "Greenspoon";
                        return (
                          <span key={`${a.last}-${idx}`}>
                            {isLead ? <strong>{name}</strong> : name}
                            {idx < p.authors.length - 1 ? ", " : ""}
                          </span>
                        );
                      })}
                    </p>
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm" className="mt-4">
                          Abstract
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2">
                        <div className="text-sm leading-relaxed">
                          {p.abstract ? (
                            <p>{p.abstract}</p>
                          ) : (
                            <p>No abstract available.</p>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-medium text-content/80 mt-4">In prep</h3>
        <div className="mt-6 space-y-8">
          {inPrep.map((p) => (
            <div key={p.title}>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-medium text-content">{p.title}</span>
                <Badge variant="outline">{p.status}</Badge>
              </div>
              <p className="text-sm text-content/70 mt-1">
                {p.authors.map((a, idx) => {
                  const initial = a.first?.trim()?.[0]?.toUpperCase() ?? "";
                  const name = `${a.last} ${initial}.`;
                  const isLead = a.last === "Greenspoon";
                  return (
                    <span key={`${a.last}-${idx}`}>
                      {isLead ? <strong>{name}</strong> : name}
                      {idx < p.authors.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
