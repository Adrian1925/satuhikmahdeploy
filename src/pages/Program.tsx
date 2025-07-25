import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Smartphone, 
  Briefcase, 
  Users, 
  Heart, 
  Target,
  Clock,
  MapPin,
  Lightbulb,
  Shield,
  BookOpen
} from "lucide-react";

const Program = () => {
  const programs = [
    {
      title: "KEMBARA HIKMAH",
      subtitle: "Youth Identity Camp",
      description: "Camp 2 hari 1 malam yang dirancang untuk:",
      features: [
        "Menemukan kembali jati diri sebagai Muslim",
        "Mengurai tekanan sosial dan digital",
        "Membangun koneksi dengan Allah & sesama"
      ],
      highlights: [
        "Digital Detox & Journaling",
        "Tadabbur alam dan refleksi malam",
        "Diskusi: \"Siapa aku di hadapan Allah?\"",
        "Api unggun & curhat iman bareng mentor"
      ],
      icon: <Mountain className="w-8 h-8" />,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "DIGITAL MINDFULNESS SERIES",
      subtitle: "Seri Sesi Daring-Luring",
      description: "Seri sesi daring-luring untuk:",
      features: [
        "Mengenali dampak dunia digital terhadap hati dan pikiran",
        "Melatih screen-time yang sehat",
        "Membangun kesadaran spiritual di era scroll"
      ],
      highlights: [
        "Tantangan puasa medsos",
        "Workshop konten Islami",
        "Journaling reflektif: \"Apa yang aku konsumsi, membentuk siapa aku\""
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "YOUTH PURPOSE & CAREER WORKSHOP",
      subtitle: "Kolaborasi Spiritual dan Visi Karier",
      description: "Program spesial berbasis kurikulum Sekolah Karir: membantu pemuda menata ulang arah hidup dan karier dengan fondasi nilai Islam.",
      features: [
        "Mengenal passion & potensi diri (Passion Mapping)",
        "Menyusun Vision Board Karier Islami",
        "Digital reputation & personal branding",
        "Emotional intelligence & time management",
        "Islamic values dalam dunia profesional"
      ],
      highlights: [
        "Simulasi interview kerja",
        "Sesi \"Karier Halal, Hati Tenang\"",
        "Coaching 1-on-1 dengan mentor inspiratif"
      ],
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-400 to-red-500"
    }
  ];

  const getFeatureIcon = (index: number, programIndex: number) => {
    const icons = [
      [<Users className="w-5 h-5" />, <Heart className="w-5 h-5" />, <Target className="w-5 h-5" />],
      [<Shield className="w-5 h-5" />, <Clock className="w-5 h-5" />, <Lightbulb className="w-5 h-5" />],
      [<MapPin className="w-5 h-5" />, <Target className="w-5 h-5" />, <BookOpen className="w-5 h-5" />, <Heart className="w-5 h-5" />, <Shield className="w-5 h-5" />]
    ];
    return icons[programIndex]?.[index] || <Target className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Program Unggulan Tahun Ini
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Program-program transformatif yang dirancang khusus untuk pengembangan generasi muda Muslim yang berkarakter
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-12">
          {programs.map((program, programIndex) => (
            <Card key={programIndex} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${program.color} p-1`}>
                  <div className="bg-background p-8">
                    {/* Program Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`text-white bg-gradient-to-r ${program.color} p-4 rounded-xl shadow-lg`}>
                        {program.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                          {program.title}
                        </h2>
                        <Badge variant="secondary" className="mb-4">
                          {program.subtitle}
                        </Badge>
                        <p className="text-lg text-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                          <Target className="w-6 h-6 mr-2 text-secondary" />
                          Tujuan Program
                        </h3>
                        <ul className="space-y-3">
                          {program.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="text-secondary mt-1">
                                {getFeatureIcon(index, programIndex)}
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                          <Lightbulb className="w-6 h-6 mr-2 text-accent" />
                          {program.title === "YOUTH PURPOSE & CAREER WORKSHOP" ? "Bonus" : "Highlight Kegiatan"}
                        </h3>
                        <ul className="space-y-3">
                          {program.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                              <span className="text-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                          Tertarik mengikuti program ini?
                        </p>
                        <a
                          href="https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                        >
                          <Users className="w-5 h-5 mr-2" />
                          Daftar Sekarang
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Siap Bergabung dengan Komunitas SatuHikmah?
          </h3>
          <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
            Jadilah bagian dari gerakan pemuda Muslim yang berkomitmen untuk tumbuh bersama dalam nilai-nilai Islam yang membumi dan relevan.
          </p>
          <a
            href="https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-hero text-background rounded-lg hover:shadow-glow transition-all duration-300 font-semibold text-lg"
          >
            <Users className="w-6 h-6 mr-3" />
            Gabung Komunitas WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Program;