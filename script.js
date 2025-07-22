// Fungsi untuk menghitung subtotal setiap produk
function hitungSubtotal(produk) {
  const jumlah = parseInt(document.getElementById(produk).value) || 0;
  const harga = (parseInt(document.getElementById(`harga-${produk}`).value) || 0) * 1000;
  const subtotal = jumlah * harga;
  
  document.getElementById(`subtotal-${produk}`).textContent = `Rp${subtotal.toLocaleString("id-ID")}`;
  hitungTotal();
}

// Fungsi untuk menghitung total keseluruhan
function hitungTotal() {
  const produkList = ["jumbo", "lite", "big", "mini", "sprjmbo", "custom1", "custom2"];
  let total = 0;
  let totalOrder = 0;

  produkList.forEach(p => {
    const jumlah = parseInt(document.getElementById(p).value) || 0;
    const harga = (parseInt(document.getElementById(`harga-${p}`).value) || 0) * 1000;
    total += jumlah * harga;
    totalOrder += jumlah;
  });

  // Kurangi dengan refund/saldo
  const refund = (parseInt(document.getElementById("refund").value) || 0) * 1000;
  total -= refund;

  document.getElementById("total").textContent = `Rp${total.toLocaleString("id-ID")}`;
  document.getElementById("total-order").textContent = totalOrder;
}

// Fungsi untuk mengirim rekapan ke WhatsApp
function kirimWhatsApp() {
  const tanggal = document.getElementById("tanggal").value;
  
  if (!tanggal) {
    alert("Mohon pilih tanggal terlebih dahulu!");
    return;
  }
  
  const produkList = ["jumbo", "lite", "big", "mini", "sprjmbo", "custom1", "custom2"];
  const produkNames = {
    jumbo: "JUMBO",
    lite: "LITE",
    big: "BIG",
    mini: "MINI",
    sprjmbo: "SPR-JMBO",
    custom1: document.getElementById("custom1-name").value || "Produk Custom 1",
    custom2: document.getElementById("custom2-name").value || "Produk Custom 2"
  };

  let pesan = `📆 Tanggal: ${formatTanggal(tanggal)}\n📦 REKAPAN ORDER HR STORE:\n`;
  let totalPenjualan = 0;
  let totalOrder = 0;
  let adaProduk = false;

  produkList.forEach(p => {
    const jumlah = parseInt(document.getElementById(p).value) || 0;
    const harga = (parseInt(document.getElementById(`harga-${p}`).value) || 0) * 1000;
    
    if (jumlah > 0) {
      const subtotal = jumlah * harga;
      pesan += `\n• ${produkNames[p]}: ${jumlah} x Rp ${harga.toLocaleString("id-ID")} = Rp ${subtotal.toLocaleString("id-ID")}`;
      totalPenjualan += subtotal;
      totalOrder += jumlah;
      adaProduk = true;
    }
  });

  if (!adaProduk) {
    alert("Mohon masukkan minimal satu produk dengan jumlah dan harga!");
    return;
  }

  // Tambahkan refund/saldo jika ada
  const refund = (parseInt(document.getElementById("refund").value) || 0) * 1000;
  if (refund > 0) {
    pesan += `\n\n↩ REFUND/SALDO: -Rp ${refund.toLocaleString("id-ID")}`;
  }

  const totalAkhir = totalPenjualan - refund;
  pesan += `\n\n💰 TOTAL PENJUALAN: Rp ${totalPenjualan.toLocaleString("id-ID")}`;
  pesan += `\n💰 TOTAL KESELURUHAN: *Rp ${totalAkhir.toLocaleString("id-ID")}*`;
  pesan += `\n🧾 Total Transaksi: ${totalOrder}`;
  pesan += `\n\n💳 INFORMASI PEMBAYARAN:`;
  pesan += `\n🏦 SEABANK: 901516847602`;
  pesan += `\n💳 DANA: 082236625627`;
  pesan += `\n👤 A.N: AHMAD KHAIRUDIN`;
  pesan += `\n📱 QRIS: rebrand.ly/QRIS-HR`;
  pesan += `\n\nTerima kasih! 🙏`;

  const encodedMessage = encodeURIComponent(pesan);
  const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
  
  // Buka WhatsApp di tab baru
  window.open(whatsappURL, '_blank');
}

// Fungsi untuk memformat tanggal ke format Indonesia
function formatTanggal(tanggal) {
  const date = new Date(tanggal);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('id-ID', options);
}

// Fungsi untuk reset form
function resetForm() {
  if (confirm("Apakah Anda yakin ingin mereset semua data?")) {
    document.getElementById("sales-form").reset();
    
    // Reset semua subtotal
    const produkList = ["jumbo", "lite", "big", "mini", "sprjmbo", "custom1", "custom2"];
    produkList.forEach(p => {
      document.getElementById(`subtotal-${p}`).textContent = "Rp0";
    });
    
    // Reset total
    document.getElementById("total").textContent = "Rp0";
    document.getElementById("total-order").textContent = "0";
    
    // Set tanggal hari ini setelah reset
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("tanggal").value = today;
  }
}

// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Set tanggal hari ini sebagai default
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("tanggal").value = today;
  
  // Setup event listeners untuk semua input
  setupEventListeners();
});

// Fungsi untuk setup event listeners
function setupEventListeners() {
  const produkList = ["jumbo", "lite", "big", "mini", "sprjmbo", "custom1", "custom2"];
  
  produkList.forEach(produk => {
    // Event listener untuk input jumlah
    const inputJumlah = document.getElementById(produk);
    if (inputJumlah) {
      // Hapus event listener lama jika ada
      inputJumlah.removeEventListener('input', handleInputChange);
      inputJumlah.removeEventListener('keyup', handleInputChange);
      inputJumlah.removeEventListener('change', handleInputChange);
      
      // Tambah event listener baru
      inputJumlah.addEventListener('input', function() {
        hitungSubtotal(produk);
      });
      inputJumlah.addEventListener('keyup', function() {
        hitungSubtotal(produk);
      });
      inputJumlah.addEventListener('change', function() {
        hitungSubtotal(produk);
      });
    }
    
    // Event listener untuk input harga
    const inputHarga = document.getElementById(`harga-${produk}`);
    if (inputHarga) {
      // Hapus event listener lama jika ada
      inputHarga.removeEventListener('input', handleInputChange);
      inputHarga.removeEventListener('keyup', handleInputChange);
      inputHarga.removeEventListener('change', handleInputChange);
      
      // Tambah event listener baru
      inputHarga.addEventListener('input', function() {
        hitungSubtotal(produk);
      });
      inputHarga.addEventListener('keyup', function() {
        hitungSubtotal(produk);
      });
      inputHarga.addEventListener('change', function() {
        hitungSubtotal(produk);
      });
    }
  });

  // Event listener untuk refund input
  const refundInput = document.getElementById("refund");
  if (refundInput) {
    refundInput.addEventListener('input', hitungTotal);
    refundInput.addEventListener('keyup', hitungTotal);
    refundInput.addEventListener('change', hitungTotal);
  }
}

// Handler untuk input change (untuk cleanup)
function handleInputChange() {
  // Placeholder function untuk cleanup event listeners
}

// Keyboard shortcuts (hanya untuk reset)
document.addEventListener('keydown', function(e) {
  // Ctrl + R untuk reset
  if (e.ctrlKey && e.key === 'r') {
    e.preventDefault();
    resetForm();
  }
  
  // Enter untuk kirim WhatsApp jika fokus pada tombol
  if (e.key === 'Enter' && e.target.classList.contains('whatsapp-button')) {
    e.preventDefault();
    kirimWhatsApp();
  }
});

// Fungsi untuk clear localStorage jika ada data lama
function clearOldData() {
  localStorage.removeItem('rekapanPenjualan');
  localStorage.removeItem('rekapanPenjualanAuto');
}

// Clear data lama saat aplikasi dimuat
clearOldData();

