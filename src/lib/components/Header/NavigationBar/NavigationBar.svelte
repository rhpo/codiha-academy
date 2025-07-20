<script lang="ts">
  import ThemeButton from "$lib/components/ui/ThemeButton.svelte";
  import Hamburger from "$lib/components/ui/Hamburger.svelte";
  import Links from "./Links.svelte";
  import View from "$lib/components/ui/View.svelte";
  import Logo from "$lib/components/Logos/LogoFull.svelte";

  import { navigation } from "$lib/data/navigation";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
</script>

<nav>
  <View align="row">
    <div class="stretch">
      <div class="wrapper">
        <a class="image" href="/">
          <Logo />
        </a>
      </div>

      <div class="wrapper desktop">
        <Links links={navigation} />
      </div>

      <div class="wrapper desktop">
        <div class="controls">
          <ThemeButton />
          <LanguageSwitcher />
        </div>
      </div>

      <div class="mobile">
        <div class="controls">
          <ThemeButton />
          <LanguageSwitcher />
        </div>
        <Hamburger />
      </div>
    </div>
  </View>
</nav>

<style lang="scss">
  :root {
    --border-size: 1px;
  }

  .image {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls {
    display: flex;
  }

  .stretch {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    width: 100%;
    height: var(--navbar-height);

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--background-color), 0.9);
    backdrop-filter: blur(10px);

    transition: all var(--transition-duration) var(--transition-easing);
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .wrapper.desktop {
      display: none;
    }

    .mobile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
