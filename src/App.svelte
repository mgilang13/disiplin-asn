<script>
  import Absensi from './lib/Absensi.svelte';
  import Simulator from './lib/Simulator.svelte';
  import Hukuman from './lib/Hukuman.svelte';
  import Prosedur from './lib/Prosedur.svelte';

  const tabs = [
    { id: 'absensi', label: 'Kalkulator absensi', komponen: Absensi },
    { id: 'simulator', label: 'Simulator pelanggaran', komponen: Simulator },
    { id: 'hukuman', label: 'Jenis hukuman', komponen: Hukuman },
    { id: 'prosedur', label: 'Prosedur', komponen: Prosedur }
  ];

  let aktif = $state(location.hash.slice(1) || 'absensi');
  if (!tabs.some((t) => t.id === aktif)) aktif = 'absensi';

  function pilih(id) {
    aktif = id;
    history.replaceState(null, '', '#' + id);
  }

  const Aktif = $derived(tabs.find((t) => t.id === aktif).komponen);
</script>

<header>
  <div class="wrap">
    <p class="sumber">Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin PNS</p>
    <h1>Berapa hari tidak masuk, apa hukumannya?</h1>
    <p class="lede">Telusuri aturan disiplin PNS secara interaktif: hitung dampak absensi, simulasikan pelanggaran, dan pelajari prosedur penjatuhan hukuman.</p>
  </div>
</header>

<nav class="wrap" aria-label="Bagian">
  <div role="tablist">
    {#each tabs as t}
      <button
        role="tab"
        id={'tab-' + t.id}
        aria-selected={aktif === t.id}
        aria-controls="panel"
        class:on={aktif === t.id}
        onclick={() => pilih(t.id)}>{t.label}</button>
    {/each}
  </div>
</nav>

<main class="wrap" id="panel" role="tabpanel" aria-labelledby={'tab-' + aktif}>
  <Aktif />
</main>

<footer class="wrap">
  <p>
    Ringkasan ini disusun dari naskah PP 94/2021 dan bukan nasihat hukum. Pasal 42 menyatakan jenis hukuman sedang (pemotongan tunjangan kinerja) berlaku setelah peraturan pemerintah tentang gaji dan tunjangan berlaku. Periksa status terkini dan peraturan pelaksana dari BKN sebelum mengambil keputusan.
  </p>
</footer>

<style>
  .wrap { max-width: 920px; margin: 0 auto; padding: 0 20px; }
  header { background: var(--ink); color: #fff; padding: 40px 0 36px; }
  .sumber { color: #9fd3d0; font-size: 0.9rem; margin-bottom: 10px; }
  h1 { font-size: clamp(1.9rem, 5vw, 3rem); line-height: 1.1; font-weight: 800; letter-spacing: -0.02em; max-width: 18ch; }
  .lede { margin-top: 14px; max-width: 60ch; color: #cfd6df; }
  nav { position: sticky; top: 0; z-index: 5; background: var(--paper); border-bottom: 1px solid var(--line); max-width: none; padding: 0; }
  [role='tablist'] { max-width: 920px; margin: 0 auto; padding: 0 20px; display: flex; gap: 4px; overflow-x: auto; }
  [role='tab'] { background: none; border: 0; border-bottom: 3px solid transparent; padding: 14px 14px 11px; cursor: pointer; white-space: nowrap; color: var(--muted); font-weight: 500; }
  [role='tab']:hover { color: var(--ink); }
  [role='tab'].on { color: var(--ink); border-bottom-color: var(--teal); font-weight: 700; }
  main { padding-top: 28px; padding-bottom: 20px; min-height: 60vh; }
  footer { padding-top: 12px; padding-bottom: 48px; color: var(--muted); font-size: 0.85rem; }
</style>
