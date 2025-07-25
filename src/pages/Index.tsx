import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  MessageCircle, 
  Users, 
  Target, 
  Brain, 
  Heart, 
  Compass,
  Mountain, 
  Smartphone, 
  Briefcase,
  MapPin, 
  Phone, 
  Mail, 
  Instagram,
  Clock,
  Lightbulb,
  Shield,
  BookOpen
} from "lucide-react";

const Index = () => {
  const handleWhatsAppJoin = () => {
    window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank");
  };

  // Team data
  const founders = [
    {
      name: "Mirza Rahmat Hakim",
      role: "Co-Founder SatuHikmah | Aktivis Pemuda | Mahasiswa Teknik K3 PPNS",
      image: "/lovable-uploads/d15e693e-f796-47d6-8beb-5f37ab57f0f7.png",
      description: `Berangkat dari pesantren dan pendidikan unggulan di MAN Insan Cendekia Sambas, Mirza tumbuh sebagai pemuda yang aktif, reflektif, dan haus akan perubahan. Saat ini ia menjalani studi di bidang Keselamatan dan Kesehatan Kerja (K3) di Politeknik Perkapalan Negeri Surabaya (PPNS), sambil terus memperluas kiprahnya di berbagai lini kepemimpinan dan gerakan kemahasiswaan nasional.

Mirza pernah memegang amanah strategis sebagai:
• Ketua Umum FSLDK Surabaya Raya (2024–2026)
• Ketua Umum SKI PPNS
• Ketua pelaksana berbagai pelatihan pengembangan diri dan public speaking

Ia juga aktif sebagai content creator, public speaker, dan telah menjadi narasumber serta EO di lebih dari 20 event pengembangan diri. Prestasinya mencakup juara nasional videografi dakwah dan dokumenter, serta finalis nasional lomba da'i.

Sebagai Co-Founder SatuHikmah, Mirza membawa semangat kepemudaan, ketangguhan lapangan, dan keberanian menyuarakan nilai. Ia percaya bahwa setiap anak muda bisa tumbuh utuh—dengan ruang yang tepat, komunitas yang sehat, dan nilai yang hidup.`,
    },
    {
      name: "Muhammad Fadhil Al-Faruqhi",
      role: "Co-Founder SatuHikmah | Mahasiswa Teknik Industri ITS",
      image: "/lovable-uploads/f93c80c5-0113-458d-a848-029d113ab280.png",
      description: `Fadhil adalah sosok pembelajar yang tumbuh di tengah dinamika kampus dan semangat perubahan. Saat ini menempuh studi di Teknik Industri ITS, ia aktif dalam berbagai aktivitas kemahasiswaan, kebijakan kampus, literasi media, dan kepemimpinan organisasi Islam.

Di tengah kesibukannya sebagai Editor ITS Online, Ketua Masyarakat Studi Islam Ulul Ilmi, dan Direktur Kebijakan Publik BEM ITS, Fadhil tetap konsisten membawa semangat literasi, keadilan sosial, dan spiritualitas dalam setiap ruang yang ia jalani.

Fadhil dikenal sebagai pemuda dengan ketajaman analisis, kepekaan sosial, dan semangat kolaborasi lintas bidang. Baginya, SatuHikmah bukan sekadar komunitas—tetapi ruang aman bagi anak muda untuk bertumbuh, berpikir jernih, dan memberi manfaat.`,
    },
  ];

  const advisors = [
    {
      name: "Ario Muhammad, PhD",
      role: "Advisor SatuHikmah | Founder Edufic.id | Peneliti, Penulis, dan Mentor Pemuda",
      image: "/lovable-uploads/bde82543-a305-41ba-89fd-dd86dc12895a.png",
      description: `Lahir dan besar di pelosok Halmahera, Maluku Utara, Ario Muhammad tumbuh dalam keterbatasan—baik ekonomi, akses pendidikan, maupun luka keluarga. Namun dari ruang-ruang sunyi itu, ia menapaki jalan panjang hingga meraih gelar Ph.D. dari Inggris, setelah menyelesaikan studi Master di Taiwan, seluruhnya dengan beasiswa penuh.

Ario dikenal sebagai founder Edufic.id, sebuah platform edukasi kreatif yang telah menjangkau ratusan ribu pelajar dan orang tua, dengan lebih dari 129.000 pengikut di Instagram. Ia juga telah menulis 14 buku, membimbing ratusan mahasiswa, dan aktif berbicara di berbagai forum nasional dan internasional, terutama dalam isu-isu kepemudaan, pendidikan, trauma pengasuhan, dan spiritualitas.

Sebagai advisor SatuHikmah, Ario membawa pendekatan yang utuh: memadukan ilmu, empati, nilai Islam, dan pengalaman hidup untuk mendampingi anak muda agar menemukan jati diri, menyembuhkan luka, dan bertumbuh jadi versi terbaik dari diri mereka—tak hanya cerdas, tapi juga kuat secara emosi dan berarti bagi masyarakat.`,
    },
    {
      name: "Muhammad Yorga Permana, PhD",
      role: "Advisor SatuHikmah | Peneliti, Dosen, dan Pengamat Sosial | Alumni LSE & Universiteit van Amsterdam",
      image: "/lovable-uploads/11d4e48c-36f4-4b0b-b7eb-7da71f1aef65.png",
      description: `Dr. Muhammad Yorga Permana adalah seorang intelektual muda yang aktif dalam kajian ilmu sosial, politik, dan perkembangan masyarakat Muslim kontemporer. Ia menyelesaikan pendidikan doktoralnya di London School of Economics (LSE) dan sebelumnya meraih gelar Master dari Universiteit van Amsterdam, Belanda.

Fokus keilmuannya mencakup isu-isu keadilan sosial, civil society, Islam dan kewargaan, serta dinamika kelas menengah Muslim di Indonesia. Dengan kombinasi ketajaman akademik dan kepekaan sosial, Yorga kerap menjadi narasumber dalam forum kajian, seminar, dan media yang membahas isu-isu transformasi sosial dan generasi muda Muslim.

Sebagai advisor SatuHikmah, Yorga memberi kontribusi penting dalam merumuskan arah gerakan intelektual dan sosial yang membumi, reflektif, dan kritis—mendorong pemuda Muslim untuk tidak hanya taat secara spiritual, tetapi juga peka terhadap realitas sosial dan berani mengambil peran perubahan.`,
    },
    {
      name: "Eko Kurniawan",
      role: "Advisor SatuHikmah | Praktisi Teknologi dan Inovasi Sosial | CTO",
      image: "/lovable-uploads/93517dc5-2d39-4b44-b4db-3ee7fca14d24.png",
      description: `Eko Kurniawan adalah seorang praktisi teknologi dengan pengalaman lebih dari 15 tahun di berbagai perusahaan teknologi global dan startup lintas negara. Ia pernah berkontribusi di posisi strategis di berbagai perusahaan internasional di bidang cloud infrastructure, data engineering, dan product development, termasuk pengalaman bekerja lintas budaya di Asia Tenggara, Eropa, dan Amerika.

Sebagai founder dan CTO, Eko dikenal tidak hanya andal secara teknis, tetapi juga memiliki visi kuat dalam membangun tim teknologi yang agile, kolaboratif, dan berdampak. Pengalaman internasionalnya menjadikannya mentor yang berpandangan luas namun tetap membumi, terutama dalam membimbing generasi muda untuk siap menghadapi tantangan global.

Sebagai advisor SatuHikmah, Eko memberi kontribusi pada aspek digitalisasi, inovasi strategis, serta bagaimana membangun ekosistem pembinaan yang mampu menjangkau anak muda lintas batas—secara geografis maupun teknologi—tanpa kehilangan nilai dan arah.`,
    },
  ];

  // About data
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

  // Program data
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

  // Contact data
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
    <div className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-yellow-50/30 to-blue-50/20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Satu Hikmah
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Menemani Generasi Muda Menemukan Arah, Makna, dan Cahaya Hikmah
          </h2>
          
          <p className="text-lg md:text-xl text-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Di tengah era distraksi dan kecemasan, SatuHikmah hadir sebagai ruang pertumbuhan spiritual, 
            intelektual, dan sosial. Menyiapkan generasi yang tangguh, jernih dalam berpikir, dan kokoh dalam nilai.
          </p>

          {/* Action Buttons */}
          <div className="space-y-8 max-w-lg mx-auto">
            {/* Primary CTA */}
            <Button 
              onClick={handleWhatsAppJoin}
              variant="gradient"
              size="lg"
              className="w-full h-14 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-primary-foreground border-0"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Gabung Komunitas WA Kami Sekarang
            </Button>
            
            {/* Secondary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  const element = document.querySelector('#program');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg"
                >
                  <Target className="mr-2 h-5 w-5" />
                  Lihat Program Kami
                </Button>
              </button>
              
              <button 
                onClick={() => {
                  const element = document.querySelector('#team');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full h-12 rounded-xl border-2 border-secondary/20 bg-background/50 backdrop-blur-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group-hover:shadow-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Tim Founder
                </Button>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Spiritual Growth</h3>
              <p className="text-muted-foreground">
                Menumbuhkan kekuatan spiritual dan keterhubungan dengan Allah SWT
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Intellectual Development</h3>
              <p className="text-muted-foreground">
                Mengasah kemampuan berpikir kritis dan jernih dalam menghadapi tantangan
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Social Impact</h3>
              <p className="text-muted-foreground">
                Membangun karakter yang aktif berkontribusi untuk masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tim founder dan advisor yang berdedikasi membangun generasi Muslim yang tangguh dan berintegritas
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary mb-12 text-center">
              Founders
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((member, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        {member.name}
                      </h4>
                      <p className="text-accent font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-foreground leading-relaxed whitespace-pre-line">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4 text-center">
              Advisor Team
            </h3>
            <p className="text-center text-muted-foreground mb-12">
              Para mentor berpengalaman yang membimbing visi dan misi SatuHikmah
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-primary mb-2">
                        {advisor.name}
                      </h4>
                      <p className="text-accent font-medium text-sm mb-4">
                        {advisor.role}
                      </p>
                      <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                        {advisor.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Challenges Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Tantangan Anak Muda Saat Ini
              </h2>
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
          </div>

          {/* Who We Are Section */}
          <div className="mb-20 bg-gradient-subtle rounded-2xl p-8 md:p-12">
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
          </div>

          {/* Logo Meaning Section */}
          <div className="mb-20">
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
          </div>

          {/* Values Section */}
          <div className="mb-20">
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
          </div>

          {/* Community Direction Section */}
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Arah Komunitas
            </h2>
            <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
              Kami bergerak dengan semangat membangun manusia seutuhnya—yang kuat secara spiritual, matang secara emosional, dan aktif berkontribusi dalam kehidupan sosial. Setiap program dirancang untuk menumbuhkan nilai-nilai Islam yang hidup, tanpa sekat sektarian, dengan pendekatan yang relevan bagi generasi masa kini.
            </p>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Program Unggulan Tahun Ini
            </h2>
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
                          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                            {program.title}
                          </h3>
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
                          <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-secondary" />
                            Tujuan Program
                          </h4>
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
                          <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                            <Lightbulb className="w-6 h-6 mr-2 text-accent" />
                            {program.title === "YOUTH PURPOSE & CAREER WORKSHOP" ? "Bonus" : "Highlight Kegiatan"}
                          </h4>
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
                          <Button
                            onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
                            variant="gradient"
                            size="lg"
                          >
                            <Users className="w-5 h-5 mr-2" />
                            Daftar Sekarang
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center bg-background rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Siap Bergabung dengan Komunitas SatuHikmah?
            </h3>
            <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari gerakan pemuda Muslim yang berkomitmen untuk tumbuh bersama dalam nilai-nilai Islam yang membumi dan relevan.
            </p>
            <Button
              onClick={() => window.open("https://chat.whatsapp.com/GBirJ9uEJXEEzZNBSPzhrd", "_blank")}
              variant="gradient"
              size="lg"
            >
              <Users className="w-6 h-6 mr-3" />
              Gabung Komunitas WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Kontak & Sosial Media
            </h2>
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
              <h3 className="text-2xl font-bold text-primary mb-4">
                Siap Bergabung dengan Kami?
              </h3>
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
                  variant="outline"
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
                <h4 className="text-xl font-bold text-primary mb-4">
                  Punya Pertanyaan?
                </h4>
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
      </section>

      <Footer />
    </div>
  );
};

export default Index;