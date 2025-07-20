<script lang="ts">
  import About from "$lib/components/pages/About/About.svelte";

  import { type TextFunction } from "$lib/stores/language";
  import { getContext } from "svelte";

  let text = getContext<TextFunction>("text");
</script>

<svelte:head>
  <title
    >{text({
      en: "About Us",
      fr: "À propos de nous",
    })} - Codiha Agency</title
  >
  <meta
    name="description"
    content={text({
      en: "Learn more about Codiha Agency, our values, technologies, and how we can help you achieve your digital goals.",
      fr: "Découvrez Codiha Agency, nos valeurs, nos technologies et comment nous pouvons vous aider à atteindre vos objectifs numériques.",
    })}
  />
</svelte:head>

<About />
