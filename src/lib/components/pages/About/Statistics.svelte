<script>
  import { about } from "$lib/data/about";
</script>

<div class="stats-grid" data-aos="fade-up" data-aos-duration="800">
  {#each about.stats as stat, index}
    <div
      class="stat-card"
      data-aos="zoom-in"
      data-aos-delay={100 * index}
      data-aos-duration="600"
    >
      <div class="stat-number">{stat.number}</div>
      <div class="stat-label">{stat.label}</div>
    </div>
  {/each}
</div>
