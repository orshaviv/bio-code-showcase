import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Pub = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
};

const pubs: Pub[] = [
  {
    title: "Integrative modeling of single-cell multi-omics reveals regulatory programs",
    authors: "Your Name, et al.",
    venue: "Nature Methods",
    year: "2024",
  },
  {
    title: "Bayesian fine-mapping improves interpretation of rare variants",
    authors: "Your Name, et al.",
    venue: "Bioinformatics",
    year: "2023",
  },
  {
    title: "Graph neural networks for genotype–phenotype prediction",
    authors: "Your Name, et al.",
    venue: "NeurIPS",
    year: "2022",
  },
];

const PublicationsPreview = () => {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected publications</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          A few representative works. I will add the full list with links shortly.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {pubs.map((p) => (
            <Card key={p.title} className="group card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{p.venue}</Badge>
                  <Badge variant="outline">{p.year}</Badge>
                </div>
                <CardTitle className="mt-3 text-xl group-hover:text-foreground/90 transition-colors">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {p.authors}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
