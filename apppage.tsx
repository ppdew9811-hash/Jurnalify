"use client";

import { useState } from "react";
import {
  BookOpen,
  Upload,
  GitCompare,
  BarChart3,
  MessageSquare,
  Trophy,
  Check,
  ChevronDown,
  Sparkles,
  Video,
  FileText,
  Presentation,
  GraduationCap,
  Zap,
  Target
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Jurnalify
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#fitur" className="text-gray-700 hover:text-sky-600 transition-colors">Fitur</a>
              <a href="#pricing" className="text-gray-700 hover:text-sky-600 transition-colors">Harga</a>
              <a href="#testimoni" className="text-gray-700 hover:text-sky-600 transition-colors">Testimoni</a>
              <a href="#faq" className="text-gray-700 hover:text-sky-600 transition-colors">FAQ</a>
              <a href="/demo" className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                Coba Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 rounded-full">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-medium text-sky-700">Platform AI untuk Peneliti</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Learn the Paper,
                </span>
                <br />
                <span className="text-gray-800">Not the Pain.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Platform berbasis AI yang membantu mahasiswa dan peneliti memahami jurnal akademik dengan cepat dan mudah.
                Meringkas, menjelaskan, dan memvisualisasikan isi jurnal dalam hitungan detik.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/demo" className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                  <span>Coba Demo Gratis</span>
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a href="#pricing" className="px-8 py-4 bg-white text-sky-600 rounded-xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300 font-semibold text-center">
                  Langganan Pro
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-sky-600">10K+</div>
                  <div className="text-sm text-gray-600">Jurnal Dianalisis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-600">5K+</div>
                  <div className="text-sm text-gray-600">Mahasiswa Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-600">98%</div>
                  <div className="text-sm text-gray-600">Kepuasan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-sky-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <img src="https://thumbs.dreamstime.com/b/teacher-woman-avatar-icon-illustration-vector-style-teacher-woman-avatar-icon-illustration-vector-style-generative-ai-287704964.jpg" alt="AI Lecturer" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">AI Lecturer</div>
                    <div className="text-sm text-gray-500">Siap membantu Anda</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-sky-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Upload jurnal Anda</div>
                    <div className="w-full h-32 border-2 border-dashed border-sky-300 rounded-lg flex items-center justify-center bg-white">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Drop PDF di sini</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <div className="flex-1 h-2 bg-sky-500 rounded-full"></div>
                    <div className="flex-1 h-2 bg-sky-300 rounded-full"></div>
                    <div className="flex-1 h-2 bg-sky-200 rounded-full"></div>
                  </div>

                  <div className="text-sm text-center text-gray-500">
                    Analisis AI dalam progress...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Fitur Unggulan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk memahami jurnal akademik dengan lebih mudah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Upload & Analisis Otomatis",
                description: "Upload jurnal PDF dan dapatkan ringkasan 'Simplified Summary' dan 'Explain Like a Lecturer' secara instan",
                color: "from-sky-400 to-blue-500"
              },
              {
                icon: <GitCompare className="w-8 h-8" />,
                title: "Compare Jurnal",
                description: "Bandingkan dua penelitian sekaligus untuk melihat perbedaan metodologi, hasil, dan kesimpulan",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Visualisasi Interaktif",
                description: "Transformasi data kompleks menjadi grafik dan diagram yang mudah dipahami",
                color: "from-cyan-400 to-sky-500"
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Video Penjelasan AI",
                description: "Dapatkan video penjelasan otomatis dengan AI lecturer yang menjelaskan konsep sulit",
                color: "from-sky-500 to-blue-600"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Tanya Jawab Kontekstual",
                description: "Tanya apa saja tentang jurnal dan AI akan menjawab berdasarkan konteks penelitian",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Gamifikasi & EduPoints",
                description: "Kerjakan kuis, kumpulkan poin, dan track progress pembelajaran Anda",
                color: "from-cyan-500 to-sky-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-sky-100 hover:border-sky-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Pilihan Harga
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-100 hover:border-sky-300 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Free</h3>
                <div className="text-4xl font-bold text-sky-600 mb-2">Gratis</div>
                <p className="text-gray-600 text-sm">Untuk mencoba</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Ringkasan teks pendek",
                  "5 jurnal per bulan",
                  "Fitur dasar Q&A",
                  "Akses komunitas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors font-semibold">
                Mulai Gratis
              </button>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                POPULER
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                <div className="text-4xl font-bold text-white mb-2">Rp50K</div>
                <p className="text-sky-100 text-sm">/bulan</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Semua fitur Free",
                  "Unlimited jurnal",
                  "Video penjelasan AI",
                  "Visualisasi interaktif",
                  "Export PPT & PDF",
                  "Priority support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-white text-sky-600 rounded-lg hover:shadow-lg transition-all font-semibold">
                Langganan Pro
              </button>
            </div>

            {/* Student Pass */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Student Pass</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Rp120K</div>
                <p className="text-gray-600 text-sm">/semester (6 bulan)</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Semua fitur Pro",
                  "Hemat 60%",
                  "Study group tools",
                  "Collaborative notes",
                  "Campus integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-semibold">
                Pilih Student
              </button>
            </div>

            {/* Pay Per Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Pay Per Use</h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">Mulai</div>
                <p className="text-gray-600 text-sm">Rp30K/jurnal</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Explain This Paper: Rp30-75K",
                  "Presentation Pack: Rp100-200K",
                  "Tanpa komitmen",
                  "Bayar sesuai kebutuhan"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-cyan-100 text-cyan-700 rounded-lg hover:bg-cyan-200 transition-colors font-semibold">
                Pesan Sekarang
              </button>
            </div>
          </div>

          {/* Campus License */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Lisensi Kampus</h3>
                </div>
                <p className="text-blue-100 max-w-2xl">
                  Solusi enterprise untuk universitas. Akses unlimited untuk seluruh mahasiswa dan dosen dengan harga spesial.
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-lg transition-all font-semibold whitespace-nowrap">
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Kata Mereka
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Dipercaya oleh ribuan mahasiswa dan peneliti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Amelia",
                role: "Mahasiswa S2 Psikologi",
                avatar: "https://thumbs.dreamstime.com/b/teacher-woman-avatar-icon-illustration-vector-style-teacher-woman-avatar-icon-illustration-vector-style-generative-ai-287704964.jpg",
                text: "Jurnalify benar-benar membantu saya memahami jurnal kompleks dalam waktu singkat. Fitur video penjelasannya sangat membantu!"
              },
              {
                name: "Ahmad Rizki",
                role: "Peneliti Teknik Informatika",
                avatar: "https://thumbs.dreamstime.com/b/teacher-woman-avatar-icon-illustration-vector-style-generative-ai-teacher-woman-avatar-icon-illustration-vector-style-287618185.jpg",
                text: "Fitur compare jurnal sangat berguna untuk literature review. Hemat waktu saya hingga 70% dalam membaca paper!"
              },
              {
                name: "Dina Kartika",
                role: "Mahasiswa S1 Kedokteran",
                avatar: "https://thumbs.dreamstime.com/b/teacher-woman-avatar-icon-illustration-vector-style-generative-ai-287617353.jpg",
                text: "Visualisasi interaktif membuat data statistik jadi mudah dipahami. Nilai thesis saya naik berkat Jurnalify!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-sky-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-sky-300"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Bagaimana cara kerja Jurnalify?",
                a: "Cukup upload file PDF jurnal Anda, dan AI kami akan menganalisis, meringkas, dan menjelaskan isi jurnal dalam format yang mudah dipahami. Anda juga bisa bertanya langsung tentang isi jurnal."
              },
              {
                q: "Apakah data jurnal saya aman?",
                a: "Ya, sangat aman. Kami menggunakan enkripsi end-to-end dan tidak menyimpan konten jurnal Anda setelah analisis selesai. Privacy Anda adalah prioritas kami."
              },
              {
                q: "Bahasa apa saja yang didukung?",
                a: "Saat ini kami mendukung jurnal dalam Bahasa Indonesia dan Bahasa Inggris. Kami sedang mengembangkan dukungan untuk bahasa lainnya."
              },
              {
                q: "Bagaimana dengan akurasi ringkasan AI?",
                a: "AI kami dilatih dengan ribuan jurnal akademik dan memiliki akurasi 95%+. Namun kami tetap merekomendasikan untuk membaca jurnal asli sebagai referensi."
              },
              {
                q: "Apakah ada garansi uang kembali?",
                a: "Ya, kami memberikan garansi 14 hari uang kembali untuk semua paket berbayar. Jika tidak puas, Anda bisa request refund tanpa pertanyaan."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-sky-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sky-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'py-4 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Memahami Jurnal dengan Lebih Mudah?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan mahasiswa dan peneliti yang sudah merasakan manfaat Jurnalify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="px-8 py-4 bg-white text-sky-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
              <span>Mulai Gratis Sekarang</span>
              <Target className="w-5 h-5" />
            </a>
            <a href="/demo" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-sky-600 transition-all duration-300 font-semibold text-center">
              Lihat Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Jurnalify</span>
              </div>
              <p className="text-sm text-gray-400">
                Platform AI untuk memahami jurnal akademik dengan mudah dan cepat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Produk</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Fitur</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Karir</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Dukungan</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Jurnalify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
