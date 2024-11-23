// ======= Makanan Favorit =======
const minumanFavorit = () => {
    console.log("== Minuman Favorit ==");
  
    const minuman1 = "Nutrisari";
    const minuman2 = "Good Day";
    const minuman3 = "Kopi Kenangan";
    const minuman4 = "Kopi Fore";
    const minuman5 = "Kope Luwak";
  
    console.log("Minuman Favorit 1:", minuman1);
    console.log("Minuman Favorit 2:", minuman2);
    console.log("Minuman Favorit 3:", minuman3);
    console.log("Minuman Favorit 4:", minuman4);
    console.log("Minuman Favorit 5:", minuman5);
  };
  
  // ======= Nutrisi dan Kalori Makanan =======
  const kesehatanManfaat = () => {
    console.log("\n== Kesetahan dan manfaat Minuman ==");
  
    const Nutrisari = 680; // kalori per porsi
    const GoodDay = 890;
    const KopiKenangan = 120;
    const KopiFore = 460;
    const KopiLuwak = 670;
  
    console.log("Kalori Nasi Goreng:", Nutrisari, "Vitamin");
    console.log("Kalori Sushi:", GoodDay, "Vitamin");
    console.log("Kalori Pizza:", KopiKenangan, "Vitamin");
    console.log("Kalori Burger:", KopiFore, "Vitamin");
    console.log("Kalori Rendang:", KopiLuwak, "Vitamin");
  };
  
  // ======= Jenis Minuman Berdasarkan Kategori =======
  const kategoriMinuman = () => {
    console.log("\n== Kategori Minuman ==");
  
    const MinumanBerat = ["Nutrisari", "GoodDay", "KopiKenangan", "KopiFore"];
    const MinumanRingan = ["KopiLuwak", "Teh Jus", "JusMangga", "JusAlpukat"];
    const MinumanPenutup = ["Es Krim", "EsBuah", "Puding", "EsCoklat"];
  
    console.log("Minuman Berat:", MinumanBerat.join(", "));
    console.log("Minuman Ringan:", MinumanRingan.join(", "));
    console.log("Minuman Penutup:", MinumanPenutup.join(", "));
  };
  
  // ======= Minuman Sehat =======
  const MinumanSehat = () => {
    console.log("\n== Minuman Sehat ==");
  
    const MinumanSehatList = [
      { nama: "Jus Buah", vitamin: 680 },
      { nama: "Jus Mangga", vitamin: 890 },
      { nama: "Jus Alpukat", vitamin: 120 },
      { nama: "Jus Sirsak", vitamin: 460 },
      { nama: "Jus Wortel", vitamin: 670 }
    ];
  
    MinumanSehatList.forEach(minuman => {
      console.log(`${minuman.nama} - Vitamin: ${minuman.vitamin} vitamin`);
    });
  };
  
  // ======= Membuat Menu Makanan Sederhana =======
  const menuMakanan = () => {
    console.log("\n== Menu Makanan ==");
  
    const menu = {
      sarapan: "Martabak manis dengan Telur Bebek",
      makanSiang: "Nasi kuning dengan Oreg",
      makanMalam: "Nasi lengko dengan Toge",
      camilan: "Nasi uduk dengan Sambal",
      penutup: "Jus Buah dengan toping yang banyak Yumyyyy!"
    };
  
    console.log("Menu Sarapan:", menu.sarapan);
    console.log("Menu Makan Siang:", menu.makanSiang);
    console.log("Menu Makan Malam:", menu.makanMalam);
    console.log("Menu Camilan:", menu.camilan);
    console.log("Menu Penutup:", menu.penutup);
  };
  
  // Menjalankan semua fungsi
  minumanFavorit();
  kesehatanManfaat();
  kategoriMinuman();
  kategoriMinuman();
  menuMakanan();
  