import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna, Network, Brain, Microscope } from "lucide-react";

const interests = [
  {
    icon: Dna,
    title: "Genomics",
    desc: "Statistical models for variant interpretation and gene regulation.",
  },
  {
    icon: Network,
    title: "Single-cell & Networks",
    desc: "Graph and latent-variable models for single-cell multi-omics.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Representation learning, uncertainty estimation, causal inference.",
  },
  {
    icon: Microscope,
    title: "Systems Biology",
    desc: "Integrative analyses to connect molecular changes to phenotypes.",
  },
];

const ResearchInterests = () => {
  return (
    <section id="research" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Research interests</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          I develop computational methods to interpret high-dimensional biological datasets and answer mechanistic questions.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
