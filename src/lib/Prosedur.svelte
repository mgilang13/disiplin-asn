<script>
  import { prosedur } from './data.js';
</script>

<section>
  <h2>Dari panggilan sampai hukuman berlaku</h2>
  <ol>
    {#each prosedur as p, i}
      <li>
        <details>
          <summary>
            <span class="no">{i + 1}</span>
            <span><b>{p.judul}</b><small>{p.ringkas}</small></span>
          </summary>
          <p>{p.rinci}</p>
          <p class="pasal">{p.pasal}</p>
        </details>
      </li>
    {/each}
  </ol>
</section>

<style>
  h2 { font-size: 1.4rem; margin-bottom: 18px; }
  ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; border-left: 3px solid var(--teal); margin-left: 15px; }
  li { padding-left: 24px; position: relative; padding-bottom: 10px; }
  details { background: var(--card); border: 1px solid var(--line); border-radius: 10px; }
  summary { display: flex; gap: 14px; align-items: center; padding: 14px 16px; cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary:focus-visible { outline: 3px solid var(--teal); outline-offset: -3px; border-radius: 10px; }
  .no { position: absolute; left: -17px; width: 31px; height: 31px; border-radius: 50%; background: var(--teal); color: #fff; font-weight: 700; display: grid; place-items: center; margin-top: -1px; }
  summary small { display: block; color: var(--muted); }
  details[open] summary { border-bottom: 1px solid var(--line); }
  details p { padding: 12px 16px 0; }
  .pasal { color: var(--muted); font-size: 0.85rem; padding-bottom: 12px !important; }
</style>
