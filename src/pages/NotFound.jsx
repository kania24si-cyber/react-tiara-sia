import { Link } from "react-router-dom";

export default function NotFound({ dark }) {
  // Kita tambahkan sedikit logika warna jika dark mode aktif agar tidak terlalu kontras
  return (
    <div className={`flex items-center justify-center min-h-screen overflow-hidden px-4 transition-colors duration-500 ${
      dark ? "bg-[#1a1c2c]" : "bg-[#fff5f8]"
    }`}>
      
      {/* Background Ornaments (Bulatan Pastel yang Lembut) */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>

      <div className="relative text-center max-w-md z-10">
        
        {/* Karakter/Icon dengan Animasi Floating */}
        <div className="relative inline-block animate-bounce duration-[2000ms]">
            <span className="text-8xl block drop-shadow-xl">✨</span>
            <div className="absolute top-0 -right-2 text-4xl animate-pulse">💖</div>
            <div className="text-8xl mt-2 drop-shadow-lg">☁️🧸☁️</div>
        </div>

        {/* Title dengan font lucu */}
        <h1 className={`mt-6 text-7xl font-black tracking-tighter drop-shadow-sm ${
          dark ? "text-pink-300" : "text-pink-400"
        }`}>
          4<span className="inline-block hover:rotate-12 transition-transform cursor-default">0</span>4
        </h1>

        {/* Subtitle Manis */}
        <p className={`mt-4 text-2xl font-bold italic ${
          dark ? "text-purple-200" : "text-purple-500"
        }`}>
          "Hwaaa... halamannya ilang!" 🐾
        </p>

        {/* Description */}
        <p className={`mt-3 text-sm font-medium leading-relaxed ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}>
          Mungkin dia lagi bobo siang atau lagi main bareng kelinci di awan. <br />
          Ayo balik, nanti kamu dicariin loh! 🌸
        </p>

        {/* Button Super Kiyowo */}
        <div className="mt-8">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-pink-300 rounded-full shadow-[0_8px_0_rgb(244,180,200)] hover:shadow-[0_4px_0_rgb(244,180,200)] hover:translate-y-[4px] active:scale-95 overflow-hidden"
          >
            <span className="relative flex items-center gap-2">
              Kembali ke Pelukan 🏡 
              <span className="group-hover:translate-x-1 transition-transform">✨</span>
            </span>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
           — Don't cry, it's just a 404 —
        </p>
      </div>

      {/* Decorative Floating Stars */}
      <div className="absolute top-1/4 left-10 text-pink-200 animate-spin-slow text-2xl">⭐</div>
      <div className="absolute bottom-1/4 right-10 text-purple-200 animate-bounce text-2xl">⭐</div>
    </div>
  );
}