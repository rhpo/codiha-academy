<script lang="ts">
  import { BRAND_NAME } from "$lib/data/brand";
  import MobileMenu from "../Mobile/Menu.svelte";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import Notification from "./Notification/Notification.svelte";
</script>

<MobileMenu />

<header>
  <Notification message="Découvrer les réalisations de {BRAND_NAME}" />

  <NavigationBar />
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 1000;

    width: 100%;
    height: var(--header-height);
  }
</style>
