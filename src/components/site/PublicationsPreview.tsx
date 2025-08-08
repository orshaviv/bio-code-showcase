import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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

const pubs: Pub[] = [
  {
    title: "The global biomass of wild mammals",
    authors: [
      { first: "Lior", last: "Greenspoon", orcid: "https://orcid.org/0000-0001-8385-4033" },
      { first: "Eyal", last: "Krieger" },
      { first: "Ron", last: "Sender", orcid: "https://orcid.org/0000-0002-1165-9818" },
      { first: "Yuval", last: "Rosenberg", orcid: "https://orcid.org/0000-0002-6681-8329" },
      { first: "Yinon M.", last: "Bar-On", orcid: "https://orcid.org/0000-0001-8477-609X" },
      { first: "Uri", last: "Moran" },
      { first: "Tomer", last: "Antman", orcid: "https://orcid.org/0000-0002-0454-9274" },
      { first: "Shai", last: "Meiri", orcid: "https://orcid.org/0000-0003-3839-6330" },
      { first: "Uri", last: "Roll", orcid: "https://orcid.org/0000-0002-5418-1164" },
      { first: "Elad", last: "Noor", orcid: "https://orcid.org/0000-0001-8776-4799" },
      { first: "Ron", last: "Milo" },
    ],
    venue: "PNAS",
    year: "2023",
    link: "https://www.pnas.org/doi/10.1073/pnas.2204892120",
    thumbnail: "/lovable-uploads/7d1112de-5875-4d7b-a048-79aadf8b0c1b.png",
    abstract: `Wild mammals are icons of conservation efforts, yet there is no rigorous estimate available for their overall global biomass. Biomass as a metric allows us to compare species with very different body sizes, and can serve as an indicator of wild mammal presence, trends, and impacts, on a global scale. Here, we compiled estimates of the total abundance (i.e., the number of individuals) of several hundred mammal species from the available data, and used these to build a model that infers the total biomass of terrestrial mammal species for which the global abundance is unknown. We present a detailed assessment, arriving at a total wet biomass of ≈20 million tonnes (Mt) for all terrestrial wild mammals (95% CI 13-38 Mt), i.e., ≈3 kg per person on earth. The primary contributors to the biomass of wild land mammals are large herbivores such as the white-tailed deer, wild boar, and African elephant. We find that even-hoofed mammals (artiodactyls, such as deer and boars) represent about half of the combined mass of terrestrial wild mammals. In addition, we estimated the total biomass of wild marine mammals at ≈40 Mt (95% CI 20-80 Mt), with baleen whales comprising more than half of this mass. In order to put wild mammal biomass into perspective, we additionally estimate the biomass of the remaining members of the class Mammalia. The total mammal biomass is overwhelmingly dominated by livestock (≈630 Mt) and humans (≈390 Mt). This work is a provisional census of wild mammal biomass on Earth and can serve as a benchmark for human impacts.`,
  },
];

const PublicationsPreview = () => {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Publications</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Selected publications
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {pubs.map((p) => (
            <Card key={p.title} className="group card-hover">
              <div className="md:flex md:items-stretch">
                {p.thumbnail ? (
                  <div className="p-6 pr-0 w-full h-40 md:h-auto md:w-44 lg:w-52 flex-none">
                    <img
                      src={p.thumbnail}
                      alt={`${p.title} thumbnail (treemap visualization)`}
                      loading="lazy"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                ) : null}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{p.venue}</Badge>
                      <Badge variant="outline">{p.year}</Badge>
                    </div>
                    <CardTitle className="mt-3 text-xl group-hover:text-foreground/90 transition-colors">
                      <a href={safeExternalUrl(p.link)} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {p.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="mt-4">Abstract</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{p.title}</DialogTitle>
                          <DialogDescription>Abstract</DialogDescription>
                        </DialogHeader>
                        <div className="text-sm leading-relaxed">
                          {p.abstract ? <p>{p.abstract}</p> : <p>No abstract available.</p>}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
