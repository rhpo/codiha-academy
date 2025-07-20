import type { LanguageData } from '$lib/stores/language';
import { Home, Info, Pen, Phone } from 'lucide-svelte';

type NavigationItem = {
	name: LanguageData;
	href: string;
	id: string;
	icon: any;
};

export let navigation: NavigationItem[] = [
	{
		name: {
			en: 'Home',
			fr: 'Accueil'
		},
		href: '/',
		id: 'home',
		icon: Home
	},

	{
		name: {
			en: 'Contact',
			fr: 'Contact'
		},
		href: '/contact',
		id: 'contact',
		icon: Phone
	}
];
