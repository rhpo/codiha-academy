<script lang="ts">
	import { getContext } from 'svelte';
	import { type TextFunction } from '$lib/stores/language';
	import Button from '$lib/components/ui/Button.svelte';
	import { BRAND_NAME, PRIMARY_NAME } from '$lib/data/brand';
	import Logo from '$lib/components/Logos/Logo.svelte';

	let text = getContext<TextFunction>('text');
</script>

<main>
	<div class="content">
		<div class="logo">
			<Logo animated />
		</div>
		<h1>
			{text({
				en: 'Coming Soon...',
				fr: 'Bientôt disponible...'
			})}
		</h1>

		<p>
			{text({
				en: `The ${BRAND_NAME} is launching soon!`,
				fr: `Le ${BRAND_NAME} sera bientôt lancé !`
			})}
		</p>

		<Button fullWidth href="https://www.codiha.com" target="_blank">
			{text({
				en: `Visit ${PRIMARY_NAME}`,
				fr: `Visitez ${PRIMARY_NAME}`
			})}
		</Button>
	</div>
</main>

<style>
	.logo {
		width: 150px;
		height: 150px;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	main {
		width: 100%;
		height: calc(100vh - var(--header-height));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		max-width: 500px;
	}
</style>
