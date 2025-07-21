import type { LanguageData } from '$lib/stores/language';

export const PRIMARY_NAME = 'CODIHA™';
export const BRANCH_NAME = 'Academy';
export const BRAND_NAME = `${PRIMARY_NAME} ${BRANCH_NAME}`;
export const BRAND_SLOGAN: LanguageData = {
	en: `Your gateway to gaining the skills you need to succeed in the digital world.`,
	fr: `Votre porte d'entrée pour acquérir les compétences nécessaires à votre réussite dans le monde numérique.`
};

export const BRAND_DESCRIPTION: LanguageData = {
	en: `Learn the newest technologies and skills to thrive in the digital age with ${BRAND_NAME} ${BRANCH_NAME}.`,
	fr: `Découvrez les dernières technologies et compétences pour réussir à l'ère numérique avec ${BRAND_NAME} ${BRANCH_NAME}.`
};
