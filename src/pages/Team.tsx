import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const founders = [
    {
      name: "Mirza Rahmat Hakim",
      role: "Co-Founder SatuHikmah | Aktivis Pemuda | Mahasiswa Teknik K3 PPNS",
      image: "/public/lovable-uploads/Gambar 3.png",
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
      image: "/mnt/data/Gambar 4.svg",
      description: `Fadhil adalah sosok pembelajar yang tumbuh di tengah dinamika kampus dan semangat perubahan. Saat ini menempuh studi di Teknik Industri ITS, ia aktif dalam berbagai aktivitas kemahasiswaan, kebijakan kampus, literasi media, dan kepemimpinan organisasi Islam.

Di tengah kesibukannya sebagai Editor ITS Online, Ketua Masyarakat Studi Islam Ulul Ilmi, dan Direktur Kebijakan Publik BEM ITS, Fadhil tetap konsisten membawa semangat literasi, keadilan sosial, dan spiritualitas dalam setiap ruang yang ia jalani.

Fadhil dikenal sebagai pemuda dengan ketajaman analisis, kepekaan sosial, dan semangat kolaborasi lintas bidang. Baginya, SatuHikmah bukan sekadar komunitas—tetapi ruang aman bagi anak muda untuk bertumbuh, berpikir jernih, dan memberi manfaat.`,
    },
  ];

  const advisors = [
    {
      name: "Ario Muhammad, PhD",
      role: "Advisor SatuHikmah | Founder Edufic.id | Peneliti, Penulis, dan Mentor Pemuda",
      image: "/mnt/data/Gambar 5.svg",
      description: `Lahir dan besar di pelosok Halmahera, Maluku Utara, Ario Muhammad tumbuh dalam keterbatasan—baik ekonomi, akses pendidikan, maupun luka keluarga. Namun dari ruang-ruang sunyi itu, ia menapaki jalan panjang hingga meraih gelar Ph.D. dari Inggris, setelah menyelesaikan studi Master di Taiwan, seluruhnya dengan beasiswa penuh.

Ario dikenal sebagai founder Edufic.id, sebuah platform edukasi kreatif yang telah menjangkau ratusan ribu pelajar dan orang tua, dengan lebih dari 129.000 pengikut di Instagram. Ia juga telah menulis 14 buku, membimbing ratusan mahasiswa, dan aktif berbicara di berbagai forum nasional dan internasional, terutama dalam isu-isu kepemudaan, pendidikan, trauma pengasuhan, dan spiritualitas.

Sebagai advisor SatuHikmah, Ario membawa pendekatan yang utuh: memadukan ilmu, empati, nilai Islam, dan pengalaman hidup untuk mendampingi anak muda agar menemukan jati diri, menyembuhkan luka, dan bertumbuh jadi versi terbaik dari diri mereka—tak hanya cerdas, tapi juga kuat secara emosi dan berarti bagi masyarakat.`,
    },
    {
      name: "Muhammad Yorga Permana, PhD",
      role: "Advisor SatuHikmah | Peneliti, Dosen, dan Pengamat Sosial | Alumni LSE & Universiteit van Amsterdam",
      image: "/mnt/data/Gambar 6.svg",
      description: `Dr. Muhammad Yorga Permana adalah seorang intelektual muda yang aktif dalam kajian ilmu sosial, politik, dan perkembangan masyarakat Muslim kontemporer. Ia menyelesaikan pendidikan doktoralnya di London School of Economics (LSE) dan sebelumnya meraih gelar Master dari Universiteit van Amsterdam, Belanda.

Fokus keilmuannya mencakup isu-isu keadilan sosial, civil society, Islam dan kewargaan, serta dinamika kelas menengah Muslim di Indonesia. Dengan kombinasi ketajaman akademik dan kepekaan sosial, Yorga kerap menjadi narasumber dalam forum kajian, seminar, dan media yang membahas isu-isu transformasi sosial dan generasi muda Muslim.

Sebagai advisor SatuHikmah, Yorga memberi kontribusi penting dalam merumuskan arah gerakan intelektual dan sosial yang membumi, reflektif, dan kritis—mendorong pemuda Muslim untuk tidak hanya taat secara spiritual, tetapi juga peka terhadap realitas sosial dan berani mengambil peran perubahan.`,
    },
    {
      name: "Eko Kurniawan",
      role: "Advisor SatuHikmah | Praktisi Teknologi dan Inovasi Sosial | CTO",
      image: "/mnt/data/Gambar 7.svg",
      description: `Eko Kurniawan adalah seorang praktisi teknologi dengan pengalaman lebih dari 15 tahun di berbagai perusahaan teknologi global dan startup lintas negara. Ia pernah berkontribusi di posisi strategis di berbagai perusahaan internasional di bidang cloud infrastructure, data engineering, dan product development, termasuk pengalaman bekerja lintas budaya di Asia Tenggara, Eropa, dan Amerika.

Sebagai founder dan CTO, Eko dikenal tidak hanya andal secara teknis, tetapi juga memiliki visi kuat dalam membangun tim teknologi yang agile, kolaboratif, dan berdampak. Pengalaman internasionalnya menjadikannya mentor yang berpandangan luas namun tetap membumi, terutama dalam membimbing generasi muda untuk siap menghadapi tantangan global.

Sebagai advisor SatuHikmah, Eko memberi kontribusi pada aspek digitalisasi, inovasi strategis, serta bagaimana membangun ekosistem pembinaan yang mampu menjangkau anak muda lintas batas—secara geografis maupun teknologi—tanpa kehilangan nilai dan arah.`,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tim founder dan advisor yang berdedikasi membangun generasi Muslim yang tangguh dan berintegritas
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((member, index) => (
              <Card key={index} className="relative overflow-visible shadow-lg transition-all duration-300 pt-16 rounded-lg bg-[#F9F9F9] text-black">
                <CardContent className="p-6 pt-24">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-yellow-400 flex items-center justify-center shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#FF8C00] font-medium mb-4 text-center">
                    {member.role}
                  </p>
                  <p className="leading-relaxed whitespace-pre-line text-justify text-lg">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            Advisor Team
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Para mentor berpengalaman yang membimbing visi dan misi SatuHikmah
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="relative overflow-visible shadow-lg transition-all duration-300 pt-16 rounded-lg bg-[#FF8C00] text-white">
                <CardContent className="p-6 pt-24">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-yellow-400 flex items-center justify-center shadow-xl">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {advisor.name}
                  </h3>
                  <p className="text-yellow-400 font-medium text-sm mb-4 text-center">
                    {advisor.role}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-justify">
                    {advisor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
