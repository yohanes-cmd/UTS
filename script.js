// Menunggu dokumen HTML selesai dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Definisi Elemen ---
  const linkHome = document.getElementById("nav-home");
  const linkPortfolio = document.getElementById("nav-portfolio");

  const sectionHome = document.getElementById("beranda");
  const sectionPortfolio = document.getElementById("portofolio");

  const menuToggle = document.getElementById("menu-toggle");

  // --- 2. Fungsi Pindah Halaman ---

  // Aksi saat tombol "Beranda" diklik
  linkHome.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload/jump link standar

    // Tampilkan Beranda (gunakan flex agar layout .intro tetap rapi)
    sectionHome.style.display = "flex";

    // Sembunyikan Portofolio
    sectionPortfolio.style.display = "none";

    // Tutup menu mobile (burger) jika sedang terbuka
    menuToggle.checked = false;

    // (Opsional) Scroll ke paling atas
    window.scrollTo(0, 0);
  });

  // Aksi saat tombol "Portofolio" diklik
  linkPortfolio.addEventListener("click", (e) => {
    e.preventDefault();

    // Sembunyikan Beranda
    sectionHome.style.display = "none";

    // Tampilkan Portofolio (gunakan block untuk layout standar)
    sectionPortfolio.style.display = "block";

    // Tutup menu mobile (burger) jika sedang terbuka
    menuToggle.checked = false;

    // (Opsional) Scroll ke paling atas
    window.scrollTo(0, 0);
  });
});
