import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Compass } from "lucide-react";

const About = () => {
  const challenges = [
    {
      title: "Kecanduan digital dan masalah kesehatan mental",
      description: "Kecanduan digital dan masalah kesehatan mental meningkat tajam—seperti kecemasan, kesepian, dan menurunnya kepuasan hidup (Dhamayanti et al., 2019; Twenge, 2023; UNICEF Indonesia, 2024).",
      image: "/lovable-uploads/de88f804-6000-481b-8b3f-7b55c94fad30.png",
      caption: "Data Depresi di Kalangan Pemuda Indonesia (Kementerian Kesehatan RI, 2024)"
    },
    {
      title: "Krisis Identitas",
      description: "Banyak pemuda Muslim mengalami krisis identitas—terpecah antara modernitas sekuler dan nilai-nilai Islam tradisional—yang memicu kebingungan dan disonansi moral (Pew Research Center, 2012; Slama, 2018). Meski partisipasi mereka dalam aktivitas keagamaan tergolong rendah, mereka ternyata masih sangat membutuhkan dukungan spiritual (lihat grafik di bawah).",
      image: "/lovable-uploads/29edcf51-0c72-4c1a-94e5-6b74e6449a8f.png",
      caption: "Keterputusan Spiritual di Kalangan Pemuda Muslim: Temuan dari Survei Internal Tahun 2024"
    },
    {
      title: "Tidak Siap Dengan Dunia Kerja",
      description: "Pemuda di Indonesia merasa belum siap menghadapi dunia kerja modern. Mereka menghadapi kesenjangan besar dalam keterampilan praktis, digital, dan sosial-emosional yang dibutuhkan untuk meraih kesuksesan di masa depan (UNICEF Indonesia & Pulse Lab Jakarta, 2020).",
      image: "/lovable-uploads/a9a893cc-0e60-4b62-87c5-d60f6de8b347.png",
      caption: "Skills Gap Analysis - Future Workforce Preparation"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Tadabbur dan refleksi makna hidup",
      description: "Mendorong perenungan mendalam tentang tujuan hidup dan makna keberadaan"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hikmah dan ilmu yang membumi",
      description: "Mengintegrasikan ilmu dengan aplikasi praktis dalam kehidupan sehari-hari"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pendekatan yang lembut, adaptif, dan kontekstual",
      description: "Memahami keunikan setiap individu dan menyesuaikan pendekatan sesuai konteks"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Pemberdayaan pemuda dan keberanian untuk memberi manfaat",
      description: "Membangun keberanian untuk berkontribusi positif kepada masyarakat"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Challenges Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Tantangan Anak Muda Saat Ini
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Indonesia memiliki populasi pemuda Muslim terbesar di dunia—lebih dari 64 juta jiwa berusia 15–24 tahun (BPS, 2021). 
              Namun, berbagai riset terbaru menunjukkan bahwa generasi muda Indonesia tengah menghadapi tantangan yang kompleks dan mendalam.
            </p>
          </div>

          <div className="space-y-16">
            {challenges.map((challenge, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {index + 1}. {challenge.title}
                      </h3>
                      <p className="text-foreground leading-relaxed mb-6">
                        {challenge.description}
                      </p>
                    </div>
                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="bg-muted rounded-lg p-4">
                        <img
                          src={challenge.image}
                          alt={challenge.caption}
                          className="w-full h-auto rounded"
                        />
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                          {challenge.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mb-20 bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Siapa Kami?
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Di tengah gempuran layar dan standar sosial yang tak menentu di atas, generasi muda membutuhkan ruang bertumbuh—bukan hanya cerdas secara akademik, tapi juga dewasa secara spiritual dan sosial.
            </p>
            <p className="text-xl font-semibold text-primary">
              SatuHikmah lahir untuk menjawab kegelisahan ini.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Kami adalah komunitas pembinaan remaja dan pemuda yang memadukan kekuatan nilai Islam, social learning yang solid, dan aksi nyata bagi masyarakat. SatuHikmah menjadi tempat bertumbuhnya generasi yang:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-foreground">
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>kuat secara ruhiyah,</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>jernih dalam berpikir,</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>kokoh dalam memegang nilai,</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>dan hadir untuk masyarakatnya</li>
            </ul>
          </div>
        </section>

        {/* Logo Meaning Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Makna Logo SatuHikmah
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img
                src="/lovable-uploads/b58d30de-2dc7-4daf-b5f8-851b854b943e.png"
                alt="Logo SatuHikmah"
                className="w-64 h-auto mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Logo SatuHikmah dirancang dengan filosofi mendalam yang mencerminkan nilai inti dari gerakan ini: ilmu, kebijaksanaan, kontemplasi, dan spiritualitas Islam.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">1. Simbol Setengah Lingkaran Tertutup</h4>
                  <p className="text-foreground leading-relaxed">
                    Bagian utama logo berbentuk setengah lingkaran yang tertutup, mengandung beberapa makna:
                  </p>
                  <ul className="mt-2 space-y-1 text-foreground ml-4">
                    <li>• <strong>Setetes Air:</strong> Melambangkan ilmu dan hikmah yang menetes pelan, menyegarkan hati dan jiwa.</li>
                    <li>• <strong>Mata Tertutup atau Menunduk:</strong> Simbol tadabbur, perenungan, dan kerendahan hati.</li>
                    <li>• <strong>Huruf "S" Abstrak:</strong> Menyimbolkan kesatuan arah, visi, dan tujuan.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">2. Lekukan di Atas Simbol</h4>
                  <p className="text-foreground leading-relaxed">
                    Lekukan melengkung di atas simbol utama menyerupai bulan sabit yang menghadap ke atas:
                  </p>
                  <ul className="mt-2 space-y-1 text-foreground ml-4">
                    <li>• <strong>Bulan Sabit:</strong> Ikon klasik dalam budaya Islam yang melambangkan harapan dan kebangkitan.</li>
                    <li>• <strong>Terbuka ke Arah Atas:</strong> Menandakan keterbukaan terhadap petualangan spiritual.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-secondary mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Direction Section */}
        <section className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Arah Komunitas
          </h2>
          <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
            Kami bergerak dengan semangat membangun manusia seutuhnya—yang kuat secara spiritual, matang secara emosional, dan aktif berkontribusi dalam kehidupan sosial. Setiap program dirancang untuk menumbuhkan nilai-nilai Islam yang hidup, tanpa sekat sektarian, dengan pendekatan yang relevan bagi generasi masa kini.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;