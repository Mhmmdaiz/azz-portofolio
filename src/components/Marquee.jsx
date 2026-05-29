/**
 * KOMPONEN: Marquee
 * DESKRIPSI: Banner horizontal berwarna hijau bertuliskan teks berjalan secara terus-menerus (infinite marquee scroll).
 * FITUR:
 *   - Menggunakan animasi CSS murni `@keyframes marquee` yang dideklarasikan di globals.css.
 *   - Merender teks pengulangan berturut-turut agar perpindahan scrolling terasa tak terputus.
 */

export default function Marquee() {
  const marqueeText = "Collections & Updates From azz PORTFOLIO ☺";
  
  return (
    <div className="w-full bg-han-green border-b-4 border-black py-2.5 overflow-hidden z-40 relative select-none mt-[72px]">
      <div className="animate-marquee flex items-center gap-8 text-black font-pixel text-xs sm:text-sm uppercase tracking-wider font-bold">
        {/* Render tulisan sebanyak 10 kali secara horizontal untuk mengisi ruang layar lebar */}
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index}>{marqueeText}</span>
        ))}
      </div>
    </div>
  );
}
