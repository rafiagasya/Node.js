// ======= Makanan Favorit =======
const makananFavorit = () => {
    console.log("== Makanan Favorit ==");
  
    const makanan1 = "Nasi Goreng";
    const makanan2 = "Sushi";
    const makanan3 = "Pizza";
    const makanan4 = "Burger";
    const makanan5 = "Rendang";
  
    console.log("Makanan Favorit 1:", makanan1);
    console.log("Makanan Favorit 2:", makanan2);
    console.log("Makanan Favorit 3:", makanan3);
    console.log("Makanan Favorit 4:", makanan4);
    console.log("Makanan Favorit 5:", makanan5);
  };
  
  // ======= Nutrisi dan Kalori Makanan =======
  const nutrisiKalori = () => {
    console.log("\n== Nutrisi dan Kalori Makanan ==");
  
    const nasiGorengKalori = 300; // kalori per porsi
    const sushiKalori = 250;
    const pizzaKalori = 285;
    const burgerKalori = 350;
    const rendangKalori = 400;
  
    console.log("Kalori Nasi Goreng:", nasiGorengKalori, "kalori");
    console.log("Kalori Sushi:", sushiKalori, "kalori");
    console.log("Kalori Pizza:", pizzaKalori, "kalori");
    console.log("Kalori Burger:", burgerKalori, "kalori");
    console.log("Kalori Rendang:", rendangKalori, "kalori");
  };
  
  // ======= Jenis Makanan Berdasarkan Kategori =======
  const kategoriMakanan = () => {
    console.log("\n== Kategori Makanan ==");
  
    const makananMakananBerat = ["Nasi Goreng", "Rendang", "Pizza", "Burger"];
    const makananRingan = ["Sushi", "Salad", "Roti Bakar", "Kentang Goreng"];
    const makananPenutup = ["Es Krim", "Kue", "Puding", "Cokelat"];
  
    console.log("Makanan Berat:", makananMakananBerat.join(", "));
    console.log("Makanan Ringan:", makananRingan.join(", "));
    console.log("Makanan Penutup:", makananPenutup.join(", "));
  };
  
  // ======= Makanan Sehat =======
  const makananSehat = () => {
    console.log("\n== Makanan Sehat ==");
  
    const makananSehatList = [
      { nama: "Salad Sayur", kalori: 150 },
      { nama: "Smoothie Bowl", kalori: 200 },
      { nama: "Ayam Panggang", kalori: 250 },
      { nama: "Sushi Salmon", kalori: 220 },
      { nama: "Tumis Brokoli", kalori: 120 }
    ];
  
    makananSehatList.forEach(makanan => {
      console.log(`${makanan.nama} - Kalori: ${makanan.kalori} kalori`);
    });
  };
  
  // ======= Membuat Menu Makanan Sederhana =======
  const menuMakanan = () => {
    console.log("\n== Menu Makanan ==");
  
    const menu = {
      sarapan: "Roti Bakar dengan Telur",
      makanSiang: "Nasi Goreng dengan Ayam",
      makanMalam: "Pizza Margherita",
      camilan: "Popcorn",
      penutup: "Es Krim Cokelat"
    };
  
    console.log("Menu Sarapan:", menu.sarapan);
    console.log("Menu Makan Siang:", menu.makanSiang);
    console.log("Menu Makan Malam:", menu.makanMalam);
    console.log("Menu Camilan:", menu.camilan);
    console.log("Menu Penutup:", menu.penutup);
  };
  
  // Menjalankan semua fungsi
  makananFavorit();
  nutrisiKalori();
  kategoriMakanan();
  makananSehat();
  menuMakanan();
  