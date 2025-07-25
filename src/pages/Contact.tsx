import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Lokasi",
      value: "Jl.Sukolilo Regency Blok E-46, Sukolilo, Surabaya",
      action: () => {
        window.open("https://maps.google.com/?q=Jl.Sukolilo+Regency+Blok+E-46,+Sukolilo,+Surabaya", "_blank");
      }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      value: "0895-2816-4600",
      action: () => {
        window.open("https://wa.me/6289528164600", "_blank");
      }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mirzasp841@gmail.com",
      action: () => {
        window.open("mailto:mirzasp841@gmail.com", "_blank");
      }
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@satuhikmah",
      action: () => {
        window.open("https://instagram.com/satuhikmah", "_blank");
      }
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontak & Sosial Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mari terhubung dengan kami dan bergabung dalam perjalanan menuju hikmah bersama
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className="cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
              onClick={contact.action}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Embed */}
        <Card className="mb-12 overflow-hidden shadow-elegant">
          <CardContent className="p-0">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4961942474896!2d112.7969!3d-7.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1323221975%3A0x306c3c99adedb258!2sSukolilo%20Regency!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SatuHikmah"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-subtle rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Jangan biarkan kesempatan untuk bertumbuh bersama komunitas yang tepat terlewat begitu saja. 
              Mari mulai perjalanan menuju hikmah dan makna hidup yang lebih dalam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Gabung WhatsApp Group
              </Button>
              
              <Button
                onClick={() => window.open("https://instagram.com/satuhikmah", "_blank")}
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Instagram
              </Button>
            </div>
          </div>

          {/* Contact Form Alternative */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Punya Pertanyaan?
              </h3>
              <p className="text-foreground mb-4">
                Jangan ragu untuk menghubungi kami melalui platform yang paling nyaman untuk Anda. 
                Tim kami siap membantu menjawab pertanyaan dan memberikan informasi lebih lanjut tentang program-program SatuHikmah.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => window.open("https://wa.me/6289528164600", "_blank")}
                  variant="outline"
                  size="sm"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => window.open("mailto:mirzasp841@gmail.com", "_blank")}
                  variant="outline"
                  size="sm"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button
                  onClick={() => window.open("https://instagram.com/satuhikmah", "_blank")}
                  variant="outline"
                  size="sm"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram DM
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;