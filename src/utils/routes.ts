import HISvelte from '../apps/Home/HI.svelte';
import {wrap} from 'svelte-spa-router/wrap';

export default {
	'/': HISvelte,
	'/Reporte': wrap({asyncComponent: () => import('../apps/Reporte/BuscarPlayer.svelte')}),
};
