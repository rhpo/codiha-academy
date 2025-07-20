<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import View from "$lib/components/ui/View.svelte";
  import Cta from "$lib/components/ui/Cta.svelte";

  import Info from "./Info.svelte";
  import Values from "./Values.svelte";
  import Technologies from "../Home/About/Technologies.svelte";
  import { about } from "$lib/data/about";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";

  let text = getContext<TextFunction>("text");
</script>

<View align="column">
  <main>
    <Info />
    <Values />
    <Technologies />

    <Cta
      title={text(about.cta.title)}
      description={text(about.cta.description)}
    >
      <Button variant="outline" href="/projects"
        >{text(about.cta.action)}</Button
      >
    </Cta>
  </main>
</View>

<style>
  main {
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    width: 100%;
    height: 100%;
  }
</style>
