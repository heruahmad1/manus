// Fungsi untuk menghitung subtotal setiap produk
function hitungSubtotal(produk) {
  const jumlah = parseInt(document.getElementById(produk).value) || 0;
  const harga = (parseInt(document.getElementById(`harga-${produk}`).value) || 0) * 1000;
  const subtotal = jumlah * harga;
  
  document.getElementById(`subtotal-${produk}`).textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
  hitungTotal();
}

// Fungsi untuk menghitung total keseluruhan
function hitungTotal() {
  const produkList = ["jumbo", "lite", "big", "mini", "custom1", "custom2", "custom3"];
  let total = 0;
  let totalOrder = 0;

  produkList.forEach(p => {
    const jumlah = parseInt(document.getElementById(p).value) || 0;
    const harga = (parseInt(document.getElementById(`harga-${p}`).value) || 0) * 1000;
    total += jumlah * harga;
    totalOrder += jumlah;
  });

  document.getElementById("total").textContent = `Rp ${total.toLocaleString("id-ID")}`;
  document.getElementById("total-order").textContent = totalOrder;
}

// Fungsi untuk mengirim rekapan ke WhatsApp
function kirimWhatsApp() {
  const tanggal = document.getElementById("tanggal").value;
  
  if (!tanggal) {
    alert("Mohon pilih tanggal terlebih dahulu!");
    return;
  }
  
  const produkList = ["jumbo", "lite", "big", "mini", "custom1", "custom2", "custom3"];
  const produkNames = {
    jumbo: "JUMBO",
    lite: "LITE",
    big: "BIG",
    mini: "MINI",
    custom1: document.getElementById("custom1-name").value || "Produk Lain 1",
    custom2: document.getElementById("custom2-name").value || "Produk Lain 2",
    custom3: document.getElementById("custom3-name").value || "Produk Lain 3"
  };

  let pesan = `📆 Tanggal: ${formatTanggal(tanggal)}\n📦 REKAPAN ORDER HR STORE:\n`;
  let total = 0;
  let totalOrder = 0;
  let adaProduk = false;

  produkList.forEach(p => {
    const jumlah = parseInt(document.getElementById(p).value) || 0;
    const harga = (parseInt(document.getElementById(`harga-${p}`).value) || 0) * 1000;
    
    if (jumlah > 0) {
      const subtotal = jumlah * harga;
      pesan += `\n• ${produkNames[p]}: ${jumlah} x Rp ${harga.toLocaleString("id-ID")} = Rp ${subtotal.toLocaleString("id-ID")}`;
      total += subtotal;
      totalOrder += jumlah;
      adaProduk = true;
    }
  });

  if (!adaProduk) {
    alert("Mohon masukkan minimal satu produk dengan jumlah dan harga!");
    return;
  }

  pesan += `\n\n💰 TOTAL: *Rp ${total.toLocaleString("id-ID")}*`;
  pesan += `\n🧾 Total Produk Terjual: ${totalOrder}`;
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
    const produkList = ["jumbo", "lite", "big", "mini", "custom1", "custom2", "custom3"];
    produkList.forEach(p => {
      document.getElementById(`subtotal-${p}`).textContent = "Rp 0";
    });
    
    // Reset total
    document.getElementById("total").textContent = "Rp 0";
    document.getElementById("total-order").textContent = "0";
  }
}

// Fungsi untuk menyimpan data ke localStorage
function simpanData() {
  const data = {
    tanggal: document.getElementById("tanggal").value,
    produk: {}
  };
  
  const produkList = ["jumbo", "lite", "big", "mini", "custom1", "custom2", "custom3"];
  produkList.forEach(p => {
    data.produk[p] = {
      jumlah: document.getElementById(p).value,
      harga: document.getElementById(`harga-${p}`).value
    };
    
    // Simpan nama custom produk
    if (p.startsWith('custom')) {
      data.produk[p].nama = document.getElementById(`${p}-name`).value;
    }
  });
  
  localStorage.setItem('rekapanPenjualan', JSON.stringify(data));
  alert("Data berhasil disimpan!");
}

// Fungsi untuk memuat data dari localStorage
function muatData() {
  const savedData = localStorage.getItem('rekapanPenjualan');
  
  if (savedData) {
    const data = JSON.parse(savedData);
    
    // Set tanggal
    if (data.tanggal) {
      document.getElementById("tanggal").value = data.tanggal;
    }
    
    // Set data produk
    Object.keys(data.produk).forEach(p => {
      if (data.produk[p].jumlah) {
        document.getElementById(p).value = data.produk[p].jumlah;
      }
      if (data.produk[p].harga) {
        document.getElementById(`harga-${p}`).value = data.produk[p].harga;
      }
      if (data.produk[p].nama && p.startsWith('custom')) {
        document.getElementById(`${p}-name`).value = data.produk[p].nama;
      }
      
      // Hitung subtotal
      hitungSubtotal(p);
    });
    
    alert("Data berhasil dimuat!");
  } else {
    alert("Tidak ada data tersimpan!");
  }
}

// Event listener untuk auto-save saat input berubah
document.addEventListener('DOMContentLoaded', function() {
  // Set tanggal hari ini sebagai default
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("tanggal").value = today;
  
  // Tambahkan event listener khusus untuk input jumlah dan harga
  const produkList = ["jumbo", "lite", "big", "mini", "custom1", "custom2", "custom3"];
  
  produkList.forEach(produk => {
    // Event listener untuk input jumlah
    const inputJumlah = document.getElementById(produk);
    if (inputJumlah) {
      inputJumlah.addEventListener('input', function() {
        hitungSubtotal(produk);
      });
      inputJumlah.addEventListener('change', function() {
        hitungSubtotal(produk);
      });
    }
    
    // Event listener untuk input harga
    const inputHarga = document.getElementById(`harga-${produk}`);
    if (inputHarga) {
      inputHarga.addEventListener('input', function() {
        hitungSubtotal(produk);
      });
      inputHarga.addEventListener('change', function() {
        hitungSubtotal(produk);
      });
    }
  });
  
  // Auto-save setiap kali ada perubahan input
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      // Debounce auto-save
      clearTimeout(window.autoSaveTimeout);
      window.autoSaveTimeout = setTimeout(() => {
        const data = {
          tanggal: document.getElementById("tanggal").value,
          produk: {}
        };
        
        produkList.forEach(p => {
          data.produk[p] = {
            jumlah: document.getElementById(p).value,
            harga: document.getElementById(`harga-${p}`).value
          };
          
          if (p.startsWith('custom')) {
            data.produk[p].nama = document.getElementById(`${p}-name`).value;
          }
        });
        
        localStorage.setItem('rekapanPenjualanAuto', JSON.stringify(data));
      }, 1000);
    });
  });
  
  // Muat auto-saved data jika ada
  const autoSavedData = localStorage.getItem('rekapanPenjualanAuto');
  if (autoSavedData) {
    const data = JSON.parse(autoSavedData);
    
    Object.keys(data.produk).forEach(p => {
      if (data.produk[p].jumlah) {
        document.getElementById(p).value = data.produk[p].jumlah;
      }
      if (data.produk[p].harga) {
        document.getElementById(`harga-${p}`).value = data.produk[p].harga;
      }
      if (data.produk[p].nama && p.startsWith('custom')) {
        document.getElementById(`${p}-name`).value = data.produk[p].nama;
      }
      
      hitungSubtotal(p);
    });
  }
});

// Fungsi untuk menambah baris produk baru (opsional untuk pengembangan)
function tambahProduk() {
  // Implementasi untuk menambah produk baru bisa ditambahkan di sini
  alert("Fitur ini akan dikembangkan selanjutnya!");
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl + S untuk simpan
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    simpanData();
  }
  
  // Ctrl + L untuk muat data
  if (e.ctrlKey && e.key === 'l') {
    e.preventDefault();
    muatData();
  }
  
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
