import { ContactForm } from "@/components/contact/contact-form";
import { ContactHeader } from "@/components/contact/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7F8] to-white">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}