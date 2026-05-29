/**
 * KOMKOMEN: VinylCard
 * DESKRIPSI: Kartu piringan hitam interaktif tunggal untuk mewakili satu proyek karya.
 * FITUR:
 *   - Hover Effect: Saat kursor diposisikan di atas kartu, piringan hitam (vinyl disc) 
 *     akan ditarik/bergeser ke atas secara interaktif dari dalam jaket album (album sleeve).
 *   - Gambar album sleeve di-grayscale dan akan menyala berwarna saat di-hover.
 * 
 * PROPS:
 *   - title: String (Nama/Judul proyek).
 *   - subtitle: String (Deskripsi singkat atau sub-kategori).
 *   - image: String (URL gambar sampul album).
 *   - badgeText: String (Nomor & kategori piringan hitam, contoh: "Vinyl 01 / Brand").
 *   - badgeBg: String (Class warna latar badge, contoh: "bg-han-yellow").
 *   - discLabel: String (Tulisan di pusat label piringan hitam, contoh: "SEPULTURA").
 *   - discLabelBg: String (Warna latar label piringan hitam).
 *   - discTextColor: String (Warna tulisan di label piringan hitam, default: "text-black").
 *   - onInspect: Function (Callback ketika tombol "Inspect Sleeve" diklik untuk membuka modal).
 */

export default function VinylCard({
  title,
  subtitle,
  image,
  badgeText,
  badgeBg,
  discLabel,
  discLabelBg,
  discTextColor = "text-black",
  onInspect,
}) {
  return (
    <div className="group relative bg-zinc-900 brutal-border p-6 hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center select-none">
      {/* Sleeve Album (Sampul Depan) */}
      {/* group-hover:-translate-y-6 menggeser sampul ke bawah sedikit saat di-hover */}
      <div className="relative w-72 h-72 overflow-hidden bg-black brutal-border shadow-2xl z-20 group-hover:-translate-y-6 transition-transform duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div
          className={`absolute bottom-4 left-4 ${badgeBg} text-black px-3 py-1 font-pixel text-[8px] uppercase tracking-wider border border-black`}
        >
          {badgeText}
        </div>
      </div>

      {/* Vinyl Disc / Piringan Hitam yang ditarik keluar */}
      {/* group-hover:-translate-y-20 menarik piringan hitam ke atas secara elegan saat di-hover */}
      <div className="absolute top-6 w-64 h-64 rounded-full bg-black border-2 border-zinc-700 flex items-center justify-center z-10 group-hover:-translate-y-20 transition-transform duration-500 pointer-events-none shadow-xl">
        <div
          className={`w-24 h-24 rounded-full ${discLabelBg} border-2 border-black flex items-center justify-center`}
        >
          <span className={`font-pixel text-[8px] ${discTextColor} font-bold`}>
            {discLabel}
          </span>
        </div>
      </div>

      {/* Metadata Karya di bagian bawah kartu */}
      <div className="mt-8 text-center w-full z-30">
        <h3 className="font-retro text-4xl font-extrabold text-white">
          {title}
        </h3>
        <p className="font-sans text-xs text-zinc-400 mt-2">
          {subtitle}
        </p>
        <button
          onClick={onInspect}
          className={`mt-4 font-pixel text-[9px] ${badgeBg} hover:opacity-90 text-black px-4 py-2 border-2 border-black brutal-shadow-yellow transition-all`}
        >
          Inspect Sleeve
        </button>
      </div>
    </div>
  );
}
