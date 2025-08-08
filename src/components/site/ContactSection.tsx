import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, GraduationCap } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const email = "you@example.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast("Email copied to clipboard");
    } catch {
      toast("Couldn't copy email, please use the button to open your mail app");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Happy to chat about collaborations, methods, or mentoring.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3 items-center">
              <Button variant="brand" asChild>
                <a href={`mailto:${email}`}>Write an email</a>
              </Button>
              <Button variant="outline" onClick={copy}>Copy address</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand" /> Scholar & GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3 items-center">
              <Button variant="outline" asChild>
                <a href="#" aria-label="Google Scholar profile">Google Scholar</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" aria-label="GitHub profile"><Github className="mr-2" /> GitHub</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
