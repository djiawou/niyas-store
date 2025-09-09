import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline">Get in Touch</h1>
        <p className="mt-4 text-muted-foreground">
          Have a question or a comment? We'd love to hear from you.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
