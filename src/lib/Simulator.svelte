<script>
  import { pelanggaran, dampakOpsi, jenisHukuman, tingkatMeta } from './data.js';

  let pilihan = $state('3c');
  let dampak = $state('unit');

  const item = $derived(pelanggaran.find((p) => p.id === pilihan));
  const tingkat = $derived(item.map[dampak]);
  const kelompok = ['Kewajiban', 'Larangan'];
</script>

<section>
  <h2>Simulator tingkat hukuman</h2>
  <p class="ket">Tingkat hukuman bergantung pada jenis pelanggaran dan dampak negatifnya.</p>

  <div class="form">
    <label for="pel">Pelanggaran</label>
    <select id="pel" bind:value={pilihan}>
      {#each kelompok as g}
        <optgroup label={g}>
          {#each pelanggaran.filter((p) => p.kelompok === g) as p}
            <option value={p.id}>{p.label}</option>
          {/each}
        </optgroup>
      {/each}
    </select>
    <p class="pasal">{item.pasal}</p>

    <fieldset>
      <legend>Dampak negatif pelanggaran</legend>
      {#each dampakOpsi as d}
        <label class="opsi" class:on={dampak === d.id}>
          <input type="radio" name="dampak" value={d.id} bind:group={dampak} />
          <span><b>{d.label}</b><small>{d.ket}</small></span>
        </label>
      {/each}
    </fieldset>
  </div>

  <div class="hasil {tingkat ?? 'none'}" aria-live="polite">
    {#if tingkat}
      <span class="badge">{tingkatMeta[tingkat].nama}</span>
      <p class="h">Salah satu dari:</p>
      <ul>
        {#each jenisHukuman[tingkat] as j}<li>{j}</li>{/each}
      </ul>
      <p class="pasal">Pejabat yang Berwenang Menghukum memilih jenis hukuman dengan mempertimbangkan latar belakang dan dampak pelanggaran. Khusus absensi, gunakan kalkulator.</p>
    {:else}
      <span class="badge">Tidak diatur</span>
      <p class="h">PP 94/2021 tidak mengatur hukuman untuk kombinasi ini.</p>
      <p class="pasal">Pelanggaran ini hanya dirinci pada tingkat dampak lain. Coba pilih dampak yang berbeda.</p>
    {/if}
  </div>
</section>

<style>
  h2 { font-size: 1.4rem; }
  .ket { color: var(--muted); margin: 4px 0 20px; }
  .form { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 20px; display: grid; gap: 8px; }
  label[for] { font-weight: 700; }
  select { width: 100%; padding: 10px; border: 1px solid var(--line); border-radius: 8px; background: #fff; }
  .pasal { color: var(--muted); font-size: 0.9rem; }
  fieldset { border: 0; padding: 0; margin: 12px 0 0; display: grid; gap: 8px; }
  legend { font-weight: 700; padding: 0; margin-bottom: 8px; }
  .opsi { display: flex; gap: 12px; align-items: flex-start; padding: 12px; border: 1px solid var(--line); border-radius: 8px; cursor: pointer; }
  .opsi.on { border-color: var(--teal); background: #eaf4f4; }
  .opsi input { margin-top: 4px; accent-color: var(--teal); }
  .opsi small { display: block; color: var(--muted); }
  .hasil { margin-top: 18px; padding: 18px 20px; border-radius: 10px; border-left: 8px solid var(--line); background: var(--none-bg); }
  .hasil.ringan { background: var(--ringan-bg); border-color: var(--ringan); }
  .hasil.sedang { background: var(--sedang-bg); border-color: var(--sedang); }
  .hasil.berat { background: var(--berat-bg); border-color: var(--berat); }
  .badge { font-size: 0.85rem; font-weight: 700; }
  .ringan .badge { color: var(--ringan); } .sedang .badge { color: var(--sedang); } .berat .badge { color: var(--berat); }
  .h { font-weight: 700; font-size: 1.15rem; margin: 4px 0; }
  ul { margin: 6px 0 12px; padding-left: 20px; }
</style>
