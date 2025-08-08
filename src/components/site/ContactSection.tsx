import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Twitter } from "lucide-react";


const ContactSection = () => {
  const email = "you@example.com";


  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Feel free to reach out.
        </p>
        <div className="mt-8">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3 items-center">
              <Button variant="brand" asChild>
                <a href={`mailto:${email}`} aria-label="Send an email to Lior Greenspoon">
                  <Mail className="mr-2" /> Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" aria-label="Twitter profile">
                  <Twitter className="mr-2" /> Twitter
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
