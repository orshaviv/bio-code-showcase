import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { safeExternalUrl } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Pub = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  link?: string;
  thumbnail?: string;
};

const pubs: Pub[] = [
  {
    title: "The global biomass of wild mammals",
    authors: "",
    venue: "PNAS",
    year: "2022",
    link: "https://www.pnas.org/doi/10.1073/pnas.2204892120",
    thumbnail: "/lovable-uploads/7d1112de-5875-4d7b-a048-79aadf8b0c1b.png",
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
              <CardContent className="flex flex-col md:flex-row gap-4 items-start">
                <p className="text-sm text-muted-foreground flex-1">{p.authors || ""}</p>
                {p.thumbnail ? (
                  <div className="ml-auto w-32 md:w-40">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={p.thumbnail}
                        alt={`${p.title} thumbnail (treemap visualization)`}
                        loading="lazy"
                        className="h-full w-full object-cover rounded-md border"
                      />
                    </AspectRatio>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
