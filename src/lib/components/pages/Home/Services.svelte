<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import {
    developmentProcess,
    services,
    ServiceTitle,
  } from "$lib/data/services";
  import { ArrowRight, CheckCircle } from "lucide-svelte";
  import Animate from "$lib/components/ui/Animate.svelte";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";
  import View from "$lib/components/ui/View.svelte";

  let text = getContext<TextFunction>("text");
</script>

<View align="column">
  <div class="section">
    <div class="header">
      <h2 data-aos="fade-up" data-aos-duration="800">
        {text(services.title)}
      </h2>
      <p class="subtitle" data-aos="fade-up" data-aos-duration="800">
        {text(services.subtitle)}
      </p>
      <p class="description" data-aos="fade-up" data-aos-duration="800">
        {text(services.description)}
      </p>
    </div>

    <div class="main-services">
      <h3 data-aos="fade-up" data-aos-duration="800">{text(ServiceTitle)}</h3>

      <div class="grid">
        {#each services.mainServices as service, index}
          <Animate animation="fade-up" delay={200 * index} duration={800}>
            <div class="service-card">
              <div class="service-header">
                <!-- <div class="service-icon">{service.icon}</div> -->
                <h4>{text(service.title)}</h4>
              </div>
              <p class="service-description">{text(service.description)}</p>

              <div class="service-features">
                {#each service.features as feature}
                  <div class="feature">
                    <CheckCircle size={16} />
                    <span>{text(feature)}</span>
                  </div>
                {/each}
              </div>

              <div class="service-cta">
                <Button variant="outline" href="/contact">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Animate>
        {/each}
      </div>
    </div>

    <!-- Process Section -->
    <div class="process-section" data-aos="fade-up" data-aos-duration="800">
      <div class="process-content">
        <h3>{text(developmentProcess.title)}</h3>
        <p>{text(developmentProcess.description)}</p>

        <div class="process-steps">
          {#each developmentProcess.steps as step, index}
            <div
              class="step"
              data-aos="fade-right"
              data-aos-duration={600 + index * 100}
            >
              <div class="step-number">{index + 1}</div>
              <div class="step-content">
                <h4>{text(step.title)}</h4>
                <p>{text(step.description)}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</View>

<style>
  .section {
    padding: 4rem 0;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .header h2 {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .description {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
  }

  .main-services {
    margin-bottom: 5rem;
  }

  .main-services h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: var(--background-light);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius);
    padding: 2rem;
    transition: var(--transition);
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-medium);
    border-color: var(--border-color);
  }

  .service-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .service-header h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
  }

  .service-description {
    font-size: 1rem;
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .service-features {
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: var(--text-light);
    font-size: 0.95rem;
  }

  .feature :global(svg) {
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .service-cta {
    display: flex;
    justify-content: flex-end;
  }

  .process-section {
    background: var(--background-light);
    border-radius: var(--border-radius);
    padding: 3rem;
    margin-bottom: 4rem;
    border: 1px solid var(--border-light);
  }

  .process-content h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-family: var(--font-secondary);
  }

  .process-content > p {
    text-align: center;
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 3rem;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: var(--background-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .step-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .step-content p {
    font-size: 0.95rem;
    color: var(--text-light);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem 0;
    }

    .header {
      margin-bottom: 3rem;
    }

    .header h2 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .description {
      font-size: 1rem;
    }

    .main-services {
      margin-bottom: 3rem;
    }

    .main-services h3 {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .service-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .process-section {
      padding: 2rem;
      margin-bottom: 3rem;
    }

    .process-content h3 {
      font-size: 1.75rem;
    }

    .process-steps {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .step {
      flex-direction: column;
      text-align: center;
    }

    .step-number {
      margin: 0 auto;
    }
  }
</style>
