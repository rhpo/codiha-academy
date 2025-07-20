<script>
  import Animate from "$lib/components/ui/Animate.svelte";
  import { about } from "$lib/data/about";
</script>

<div class="section">
  <h3 data-aos="fade-up" data-aos-duration="800">Nos valeurs</h3>
  <div class="grid">
    {#each about.values as value, index}
      <Animate animation="flip-left" delay={150 * index} duration={800}>
        <div class="card">
          <h4>{value.title}</h4>
          <p>{value.description}</p>
        </div>
      </Animate>
    {/each}
  </div>
</div>

<style>
  .section {
    margin-bottom: 5rem;
  }

  .section h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .card {
    background: var(--background-color);
    padding: 2rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-light);
    text-align: center;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--accent-color)
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .card:hover::before {
    transform: scaleX(1);
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-medium);
  }

  .card h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  .card p {
    color: var(--text-light);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .section {
      margin-bottom: 3rem;
    }

    .section h3 {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .card {
      padding: 1.5rem;
    }
  }
</style>
