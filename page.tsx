"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Upload,
  FileText,
  Sparkles,
  MessageSquare,
  BarChart3,
  Video,
  Download,
  ArrowLeft,
  CheckCircle,
  Loader2,
  BookOpen,
  Brain,
  Lightbulb,
  FileQuestion
} from "lucide-react";

type AnalysisTab = "summary" | "lecturer" | "qa" | "visualize";

export default function DemoPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<AnalysisTab>("summary");
  const [isDragging, setIsDragging] = useState(false);
  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ type: "user" | "ai", text: string }>>([]);

  const handleFileUpload = (file: File) => {
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
      setIsAnalyzing(true);
      setAnalysisComplete(false);

      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const handleAskQuestion = () => {
    if (!question.trim()) return;

    setChatMessages([...chatMessages,
      { type: "user", text: question },
      { type: "ai", text: "Berdasarkan analisis jurnal, " + question + " dijelaskan dalam metodologi penelitian yang menggunakan pendekatan kualitatif dengan sampel 100 responden. Hasil menunjukkan korelasi positif sebesar 0.85 (p<0.05)." }
    ]);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Jurnalify
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-sky-700">Demo Interaktif</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Coba Analisis Jurnal AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload jurnal PDF Anda dan lihat bagaimana AI kami menganalisisnya dalam hitungan detik
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Upload className="w-6 h-6 text-sky-600" />
                <span>Upload Jurnal</span>
              </h2>

              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                className={`relative border-2 border-dashed rounded-xl p-12 transition-all duration-300 ${
                  isDragging
                    ? "border-sky-500 bg-sky-50"
                    : "border-sky-300 bg-gradient-to-br from-sky-50 to-blue-50"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isAnalyzing}
                />

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>

                  {uploadedFile ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">{uploadedFile.name}</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg font-semibold text-gray-800 mb-2">
                        Drag & Drop PDF di sini
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        atau klik untuk browse file
                      </p>
                      <p className="text-xs text-gray-500">
                        Max 10MB • Format: PDF
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-center space-x-3 text-sky-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold">Menganalisis jurnal...</span>
                  </div>

                  <div className="space-y-2">
                    {["Membaca dokumen", "Ekstraksi teks", "Analisis AI", "Membuat ringkasan"].map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${idx <= 2 ? "bg-sky-500" : "bg-gray-300"}`} />
                        <span className={`text-sm ${idx <= 2 ? "text-gray-700" : "text-gray-400"}`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: "75%" }} />
                  </div>
                </div>
              )}

              {/* Try Sample Button */}
              {!uploadedFile && !isAnalyzing && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      const sampleFile = new File(["sample"], "sample-paper.pdf", { type: "application/pdf" });
                      handleFileUpload(sampleFile);
                    }}
                    className="text-sky-600 hover:text-sky-700 font-semibold text-sm underline"
                  >
                    Atau coba dengan jurnal contoh
                  </button>
                </div>
              )}
            </div>

            {/* Features Info */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Fitur yang Anda dapatkan:</h3>
              <ul className="space-y-3">
                {[
                  { icon: <Brain className="w-5 h-5" />, text: "Ringkasan otomatis dengan AI" },
                  { icon: <Lightbulb className="w-5 h-5" />, text: "Penjelasan seperti dosen mengajar" },
                  { icon: <MessageSquare className="w-5 h-5" />, text: "Tanya jawab tentang isi jurnal" },
                  { icon: <BarChart3 className="w-5 h-5" />, text: "Visualisasi data interaktif" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisComplete ? (
              <>
                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-xl border border-sky-100 overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    {[
                      { id: "summary", icon: <FileText className="w-4 h-4" />, label: "Ringkasan" },
                      { id: "lecturer", icon: <Video className="w-4 h-4" />, label: "Penjelasan" },
                      { id: "qa", icon: <MessageSquare className="w-4 h-4" />, label: "Q&A" },
                      { id: "visualize", icon: <BarChart3 className="w-4 h-4" />, label: "Visualisasi" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as AnalysisTab)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-4 font-semibold transition-colors ${
                          activeTab === tab.id
                            ? "bg-sky-50 text-sky-600 border-b-2 border-sky-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {tab.icon}
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-8">
                    {/* Summary Tab */}
                    {activeTab === "summary" && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-gray-800">Simplified Summary</h3>
                          <div className="prose prose-sky">
                            <p className="text-gray-700 leading-relaxed">
                              Penelitian ini membahas pengaruh teknologi AI dalam meningkatkan efisiensi
                              pembelajaran mahasiswa. Studi dilakukan terhadap 100 mahasiswa dari berbagai
                              jurusan selama 6 bulan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                              <strong>Temuan Utama:</strong> Penggunaan AI meningkatkan pemahaman konsep
                              sebesar 45% dan menghemat waktu belajar hingga 30%. Mahasiswa juga melaporkan
                              peningkatan motivasi belajar yang signifikan.
                            </p>
                          </div>
                        </div>

                        <div className="bg-sky-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-800 mb-3">Key Points:</h4>
                          <ul className="space-y-2">
                            {[
                              "Metodologi: Mixed-method research dengan survei dan wawancara",
                              "Sampel: 100 mahasiswa dari 5 universitas berbeda",
                              "Hasil: Peningkatan 45% dalam pemahaman, 30% efisiensi waktu",
                              "Kesimpulan: AI tools efektif untuk pembelajaran mandiri"
                            ].map((point, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Lecturer Tab */}
                    {activeTab === "lecturer" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                              <Video className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-800">AI Lecturer Mode</h3>
                              <p className="text-sm text-gray-600">Penjelasan seperti dosen mengajar</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                              Baik, mari kita pahami jurnal ini step-by-step. Bayangkan Anda sedang
                              mengerjakan skripsi dan ingin tahu bagaimana AI bisa membantu.
                            </p>

                            <div className="bg-white rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">📚 Latar Belakang</h4>
                              <p className="text-gray-700 text-sm">
                                Peneliti melihat banyak mahasiswa kesulitan memahami materi kompleks.
                                Mereka bertanya: apakah AI bisa jadi solusi?
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">🔬 Metode Penelitian</h4>
                              <p className="text-gray-700 text-sm">
                                Seperti eksperimen biasa, mereka membagi mahasiswa jadi 2 grup:
                                yang pakai AI dan yang tidak. Lalu dibandingkan hasilnya.
                              </p>
                            </div>

                            <div className="bg-white rounded-lg p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">💡 Hasil & Kesimpulan</h4>
                              <p className="text-gray-700 text-sm">
                                Ternyata grup yang pakai AI 45% lebih cepat paham! Ini seperti
                                punya tutor pribadi 24/7.
                              </p>
                            </div>
                          </div>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center space-x-2">
                          <Video className="w-5 h-5" />
                          <span>Tonton Video Penjelasan Lengkap</span>
                        </button>
                      </div>
                    )}

                    {/* Q&A Tab */}
                    {activeTab === "qa" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                          {chatMessages.length === 0 ? (
                            <div className="text-center py-8">
                              <FileQuestion className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                              <p className="text-gray-500">Tanya apa saja tentang jurnal ini</p>
                              <p className="text-sm text-gray-400 mt-2">
                                Contoh: "Apa metodologi yang digunakan?"
                              </p>
                            </div>
                          ) : (
                            chatMessages.map((msg, idx) => (
                              <div
                                key={idx}
                                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div
                                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                    msg.type === "user"
                                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                                      : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  <p className="text-sm leading-relaxed">{msg.text}</p>
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleAskQuestion()}
                            placeholder="Ketik pertanyaan Anda..."
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                          <button
                            onClick={handleAskQuestion}
                            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                          >
                            Kirim
                          </button>
                        </div>

                        <div className="bg-sky-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Pertanyaan Populer:</h4>
                          <div className="space-y-2">
                            {[
                              "Apa metodologi yang digunakan?",
                              "Berapa ukuran sampel penelitian?",
                              "Apa kesimpulan utama dari penelitian ini?"
                            ].map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => setQuestion(q)}
                                className="w-full text-left px-3 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-sky-100 transition-colors"
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visualize Tab */}
                    {activeTab === "visualize" && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-gray-800">Data Visualization</h3>

                          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 mb-4">
                            <h4 className="font-semibold text-gray-800 mb-4">Peningkatan Pemahaman</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-700">Dengan AI</span>
                                  <span className="text-sm font-semibold text-sky-600">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-3 rounded-full" style={{ width: "85%" }} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-700">Tanpa AI</span>
                                  <span className="text-sm font-semibold text-gray-600">40%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                  <div className="bg-gray-400 h-3 rounded-full" style={{ width: "40%" }} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { label: "Waktu Belajar", value: "-30%", color: "green" },
                              { label: "Motivasi", value: "+65%", color: "blue" },
                              { label: "Retensi Info", value: "+52%", color: "purple" },
                              { label: "Nilai Ujian", value: "+28%", color: "orange" }
                            ].map((stat, idx) => (
                              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                <p className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="w-full py-3 bg-white border-2 border-sky-300 text-sky-600 rounded-lg hover:bg-sky-50 transition-all font-semibold flex items-center justify-center space-x-2">
                          <Download className="w-5 h-5" />
                          <span>Download Visualisasi Lengkap</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Export Actions */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-sky-100">
                  <h3 className="font-bold text-gray-800 mb-4">Export Hasil Analisis</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">PDF</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all">
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">PPT</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-12 border border-sky-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Upload jurnal untuk melihat hasil
                </h3>
                <p className="text-gray-600">
                  Hasil analisis AI akan muncul di sini setelah proses upload selesai
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menggunakan Jurnalify?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Dapatkan akses unlimited ke semua fitur dengan paket Pro atau Student Pass
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="px-8 py-4 bg-white text-sky-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              Lihat Harga
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-sky-600 transition-all duration-300 font-semibold"
            >
              Mulai Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
