<script>
  import { jenisHukuman, tingkatMeta } from './data.js';

  const ringkas = {
    ringan: 'Pasal 8 ayat (2). Umumnya untuk pelanggaran berdampak pada Unit Kerja.',
    sedang: 'Pasal 8 ayat (3). Umumnya untuk pelanggaran berdampak pada instansi.',
    berat: 'Pasal 8 ayat (4). Umumnya untuk pelanggaran berdampak pada negara/pemerintah.'
  };
  let buka = $state('ringan');
</script>

<section>
  <h2>Tiga tingkat, sembilan jenis hukuman</h2>
  <div class="daftar">
    {#each Object.keys(jenisHukuman) as t}
      <div class="blok {t}" class:buka={buka === t}>
        <button aria-expanded={buka === t} onclick={() => (buka = buka === t ? '' : t)}>
          <span>{tingkatMeta[t].nama}</span>
          <small>{jenisHukuman[t].length} jenis</small>
        </button>
        {#if buka === t}
          <div class="isi">
            <ul>{#each jenisHukuman[t] as j}<li>{j}</li>{/each}</ul>
            <p>{ringkas[t]}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  h2 { font-size: 1.4rem; margin-bottom: 18px; }
  .daftar { display: grid; gap: 10px; }
  .blok { border-radius: 10px; border-left: 8px solid var(--line); background: var(--card); overflow: hidden; }
  .blok.ringan { border-color: var(--ringan); } .blok.sedang { border-color: var(--sedang); } .blok.berat { border-color: var(--berat); }
  button { all: unset; box-sizing: border-box; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px 18px; cursor: pointer; font-weight: 700; font-size: 1.1rem; }
  button:focus-visible { outline: 3px solid var(--teal); outline-offset: -3px; }
  small { color: var(--muted); font-weight: 400; font-size: 0.9rem; }
  .isi { padding: 0 18px 18px; }
  ul { margin: 0 0 10px; padding-left: 20px; }
  li { padding: 2px 0; }
  p { color: var(--muted); font-size: 0.9rem; }
</style>
