/**
 * KOMPONEN: GrainOverlay
 * DESKRIPSI: Lapisan tekstur pasir / grain retro Y2K yang menutupi seluruh halaman web.
 * FITUR:
 *   - Menggunakan filter SVG inline (fractalNoise) untuk merender tekstur pasir halus secara dinamis.
 *   - Tidak memakai file gambar eksternal (mengurangi load time halaman).
 *   - Menggunakan CSS fixed positioning dengan pointer-events-none agar tidak mengganggu klik mouse.
 */

export default function GrainOverlay() {
  return (
    <div
      className="grain-overlay"
      style={{
        // Inline SVG berformat base64 yang berisi turbulensi fractal kebisingan (noise grain filter)
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
