<script lang="ts">
	import Hero from './Hero.svelte';

	import { BRAND_NAME, BRAND_SLOGAN } from '$lib/data/brand';

	import { type TextFunction } from '$lib/stores/language';
	import { getContext } from 'svelte';

	let text = getContext<TextFunction>('text');
</script>

<svelte:head>
	<title>{BRAND_NAME} | {text(BRAND_SLOGAN)}</title>
	<meta
		name="description"
		content={text({
			en: 'Discover ' + BRAND_NAME + ', your partner in digital innovation.',
			fr: 'Découvrez ' + BRAND_NAME + ', votre partenaire en innovation digitale.'
		})}
	/>
</svelte:head>

<div>
	<Hero />
</div>
