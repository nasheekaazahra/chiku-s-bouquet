// Filter koleksi
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags;
      if (filter === 'semua' || tags.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Ukuran & harga dinamis
document.querySelectorAll('.card').forEach(card => {
  const basePrice = parseInt(card.dataset.price, 10);
  const priceEl = card.querySelector('.price');
  const sizeBtns = card.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const mult = parseFloat(btn.dataset.mult);
      const newPrice = Math.round((basePrice * mult) / 1000) * 1000;
      priceEl.textContent = 'Rp' + newPrice.toLocaleString('id-ID');
    });
  });
});

// Tambah ke keranjang - micro feedback
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Ditambahkan ✓';
    setTimeout(() => { btn.textContent = original; }, 1400);
  });
});