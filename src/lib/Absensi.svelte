<script>
  import { absensi, absensiBerturut, tingkatMeta } from './data.js';

  let hari = $state(0);
  let berturut = $state(false);

  const tier = $derived(absensi.find((t) => hari >= t.min && hari <= t.max));
  const hasil = $derived(
    berturut
      ? absensiBerturut
      : hari === 0
        ? { tingkat: 'none', hukuman: 'Belum ada ketidakhadiran tanpa alasan sah', pasal: '' }
        : tier
  );
  const rentang = (t) => (t.max === Infinity ? `${t.min}+` : t.min === t.max ? `${t.min}` : `${t.min}–${t.max}`);
</script>

<section>
  <h2>Hari tidak masuk kerja tanpa alasan yang sah</h2>
  <p class="ket">Dihitung kumulatif selama satu tahun berjalan (Januari–Desember).</p>

  <div class="kontrol">
    <label for="hari">Jumlah hari kerja</label>
    <output class="angka">{hari}{hari === 30 ? '+' : ''}</output>
    <input id="hari" type="range" min="0" max="30" bind:value={hari} aria-describedby="hasil" />
    <label class="cek">
      <input type="checkbox" bind:checked={berturut} />
      Tidak masuk 10 hari kerja secara terus menerus
    </label>
  </div>

  <div id="hasil" class="hasil {hasil.tingkat}" aria-live="polite">
    <span class="badge">{tingkatMeta[hasil.tingkat].nama}</span>
    <p class="h">{hasil.hukuman}</p>
    {#if hasil.pasal}<p class="pasal">{hasil.pasal}</p>{/if}
  </div>

  <ol class="tangga" aria-label="Tangga hukuman berdasarkan jumlah hari">
    {#each absensi as t}
      <li class={t.tingkat} class:aktif={!berturut && hari > 0 && t === tier}>
        <button onclick={() => (hari = Math.min(t.min, 30))} aria-label={`Atur ke ${t.min} hari`}>
          <span class="r">{rentang(t)} hari</span>
          <span class="n">{t.hukuman}</span>
        </button>
      </li>
    {/each}
  </ol>
  <p class="cat">Hukuman ringan dalam tabel ini berlaku untuk pelanggaran yang berdampak pada Unit Kerja (Pasal 9 ayat (2) huruf b).</p>
</section>

<style>
  h2 { font-size: 1.4rem; }
  .ket { color: var(--muted); margin: 4px 0 20px; }
  .kontrol { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 20px; display: grid; grid-template-columns: 1fr auto; gap: 6px 16px; align-items: end; }
  .kontrol label[for] { font-weight: 700; }
  .angka { font-size: 3rem; font-weight: 800; line-height: 1; text-align: right; font-variant-numeric: tabular-nums; }
  input[type='range'] { grid-column: 1 / -1; width: 100%; accent-color: var(--teal); height: 32px; }
  .cek { grid-column: 1 / -1; display: flex; gap: 10px; align-items: center; margin-top: 6px; cursor: pointer; }
  .cek input { width: 18px; height: 18px; accent-color: var(--teal); }
  .hasil { margin: 18px 0; padding: 18px 20px; border-radius: 10px; border-left: 8px solid var(--line); background: var(--none-bg); }
  .hasil.ringan { background: var(--ringan-bg); border-color: var(--ringan); }
  .hasil.sedang { background: var(--sedang-bg); border-color: var(--sedang); }
  .hasil.berat { background: var(--berat-bg); border-color: var(--berat); }
  .badge { font-size: 0.85rem; font-weight: 700; color: var(--muted); }
  .ringan .badge { color: var(--ringan); } .sedang .badge { color: var(--sedang); } .berat .badge { color: var(--berat); }
  .h { font-size: 1.3rem; font-weight: 700; margin: 4px 0; }
  .pasal { color: var(--muted); font-size: 0.9rem; }
  .tangga { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  .tangga li { border-radius: 8px; border-left: 6px solid var(--line); background: var(--card); }
  .tangga li.ringan { border-color: var(--ringan); } .tangga li.sedang { border-color: var(--sedang); } .tangga li.berat { border-color: var(--berat); }
  .tangga li.aktif { outline: 3px solid var(--ink); background: #fff; }
  .tangga button { all: unset; box-sizing: border-box; display: grid; grid-template-columns: 110px 1fr; gap: 12px; width: 100%; padding: 10px 14px; cursor: pointer; }
  .tangga button:focus-visible { outline: 3px solid var(--teal); }
  .r { font-weight: 700; font-variant-numeric: tabular-nums; }
  .cat { margin-top: 12px; font-size: 0.85rem; color: var(--muted); }
  @media (max-width: 520px) { .tangga button { grid-template-columns: 1fr; gap: 0; } }
</style>
