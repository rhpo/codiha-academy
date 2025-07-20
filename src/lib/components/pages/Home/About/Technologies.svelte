<script lang="ts">
  import Animate from "$lib/components/ui/Animate.svelte";
  import { services } from "$lib/data/services";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";

  let text = getContext<TextFunction>("text");
</script>

<div class="technologies-section">
  <h1 data-aos="fade-up" data-aos-duration="800">
    {text(services.technologies.title)}
  </h1>
  <p class="tech-description" data-aos="fade-up" data-aos-duration="800">
    {text(services.technologies.description)}
  </p>

  <div class="technologies-grid">
    {#each services.technologies.content as tech, index}
      <Animate animation="flip-up" delay={100 * index} duration={600}>
        <div class="tech-card">
          <div class="tech-icon" style="background-color: {tech.color}20;">
            <img
              src={tech.icon}
              alt="{text(tech.name)} icon"
              style="filter: brightness(0) saturate(100%) invert(1);"
            />
          </div>
          <h4>{text(tech.name)}</h4>
          <p>{text(tech.description)}</p>
        </div>
      </Animate>
    {/each}
  </div>
</div>

<style>
  .technologies-section {
    margin-bottom: 5rem;
  }

  .technologies-section h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .tech-description {
    text-align: center;
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .technologies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .tech-card {
    background: var(--background-color);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: 2rem 1rem;
    text-align: center;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .tech-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary-color),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .tech-card:hover::before {
    transform: translateX(100%);
  }

  .tech-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-medium);
  }

  .tech-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  .tech-icon img {
    width: 24px;
    height: 24px;
  }

  .tech-card:hover .tech-icon {
    transform: scale(1.1);
  }

  .tech-card h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  .tech-card p {
    font-size: 0.875rem;
    color: var(--text-light);
  }

  @media (max-width: 1024px) {
    .technologies-grid {
      grid-template-columns: repeat(3, minmax(140px, 1fr));
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .technologies-section {
      margin-bottom: 3rem;
    }

    .technologies-section h1 {
      font-size: 1.75rem;
    }

    .tech-description {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .technologies-grid {
      grid-template-columns: repeat(3, minmax(140px, 1fr));
      gap: 1rem;
    }

    .tech-card {
      padding: 1.5rem 1rem;
    }

    .tech-icon {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    .technologies-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
