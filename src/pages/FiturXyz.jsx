import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function FiturXYz({ dark }) {
  const [showForm, setShowForm] = useState(false);

  // Data 10 Isu Hot Indonesia
  const hotIssues = [
    { no: 1, isu: "Bantahan Isu Resesi & Tren Ekonomi", sektor: "Ekonomi", deskripsi: "Viral narasi di medsos membandingkan ekonomi saat ini dengan krisis 1998. Kemenkeu mempertegas ekonomi RI justru tumbuh positif (~5.6%).", status: "Edukasi publik berbasis data historis." },
    { no: 2, isu: "Eksploitasi Anak di Jakarta", sektor: "Hukum & Sosial", deskripsi: "Kasus dugaan prostitusi anak di kawasan Lokasari, Jakarta Barat menjadi sorotan tajam setelah viral di media sosial.", status: "Polsek Tamansari & Sudin Sosial pendalaman jaringan." },
    { no: 3, isu: "Ancaman Cuaca Ekstrem", sektor: "Lingkungan", deskripsi: "BMKG rilis peringatan potensi hujan lebat, sirkulasi siklonik, dan angin kencang di masa pancaroba.", status: "Imbauan siaga bencana hidrometeorologi." },
    { no: 4, isu: "Gejolak Harga Energi Global", sektor: "Ekonomi / Hub. Internasional", deskripsi: "Konflik di Timur Tengah berdampak pada fluktuasi komoditas energi global yang mengancam subsidi domestik.", status: "Pemerintah perkuat strategi fiskal mitigasi inflasi." },
    { no: 5, isu: "Anggaran Makan Bergizi Gratis (MBG)", sektor: "Kebijakan Publik", deskripsi: "Alokasi APBN untuk program andalan pemerintahan baru mulai berjalan dan memicu lonjakan belanja K/L.", status: "Pengawasan ketat agar tetap tepat sasaran." },
    { no: 6, isu: "Dugaan Manipulasi Ekspor Sawit", sektor: "Hukum & Ekonomi", deskripsi: "Isu manipulasi data ekspor kelapa sawit yang berpotensi merugikan pendapatan negara jadi perhatian DPR.", status: "Evaluasi regulasi dan pengawasan sistem ekspor CPO." },
    { no: 7, isu: "Konsolidasi Presiden & TNI/Polri", sektor: "Politik & Pertahanan", deskripsi: "Kegiatan penguatan stabilitas nasional oleh Presiden Prabowo kepada seribu perwira siswa TNI dan Polri.", status: "Penyamaan visi pertahanan di bawah pimpinan baru." },
    { no: 8, isu: "Kesadaran Cedera Gym (Saraf Kejepit)", sektor: "Kesehatan", deskripsi: "Viral edukasi mengenai bahaya salah form saat olahraga di gym yang memicu kelumpuhan akibat saraf kejepit.", status: "Edukasi masif penguatan otot core oleh praktisi." },
    { no: 9, isu: "Pemberantasan Judi Online", sektor: "Hukum / Siber", deskripsi: "Sindikat judi online dan penipuan siber yang semakin meresahkan karena menyasar masyarakat ekonomi bawah.", status: "Satgas melakukan pemblokiran massal dan penangkapan." },
    { no: 10, isu: "Polemik RUU Penyiaran", sektor: "Hukum & Politik", deskripsi: "Draf revisi UU Penyiaran dinilai membatasi jurnalisme investigasi dan sensor ketat platform digital.", status: "Tahap audiensi panas antara DPR dan asosiasi pers." }
  ];

  return (
    <div className={dark ? "bg-gray-900 min-h-screen text-white" : "bg-gray-100 min-h-screen text-gray-800"}>
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Fitur Xyz"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Card Container */}
        <div className={`p-6 rounded-lg shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold">10 Isu Hot di Indonesia Saat Ini</h2>
              <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>Rangkuman dinamika sektor ekonomi, politik, hukum, dan sosial</p>
            </div>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {showForm ? "Sembunyikan Form" : "Tambah Isu Baru"}
            </button>
          </div>

          {/* Placeholder Form jika tombol diklik */}
          {showForm && (
            <div className={`p-4 mb-6 rounded-md border ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"}`}>
              <p className="text-sm italic">Fitur tambah data isu (Form Pengisian) dapat diletakkan di sini.</p>
            </div>
          )}

          {/* Tabel Komponen Responsif */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={dark ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider w-12">No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Isu / Topik</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sektor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Deskripsi & Dampak</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status / Tindak Lanjut</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${dark ? "divide-gray-700" : "divide-gray-200"}`}>
                {hotIssues.map((item) => (
                  <tr key={item.no} className={dark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">{item.no}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-500 dark:text-blue-400">{item.isu}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        dark ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-800"
                      }`}>
                        {item.sektor}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm max-w-xs md:max-w-md break-words">{item.deskripsi}</td>
                    <td className="px-6 py-4 text-sm max-w-xs italic text-emerald-600 dark:text-emerald-400">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}