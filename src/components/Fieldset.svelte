<script lang="ts">
	import {getContext} from 'svelte';
	/**
	 * Titulo del Fieldset
	 */
	export let title = '';
	/**
	 * Ocupa toda la pantalla?
	 */
	export let full = false;
	/**
	 * Texto centrado en el fieldset
	 */
	export let centerText = false;
	/**
	 * Tamaño del texto
	 */
	export let textSize = 1;
	const background = getContext('Background') ?? 'blue-black';
	/**
	 * Comparte el background con el Window?
	 */
	export let sharedBackground = false;
</script>


<fieldset class="{`tui-fieldset absolute ${$$props.class} ${sharedBackground ? `tui-bg-${background}` : ''} ${full ? 'w-full h-full' : ''} `}">
	<button class="tui-fieldset-button"><span class="green-255-text">Search</span></button>
	<legend class="{`${centerText ? 'center' : ''}`}" style="{`font-size:${textSize}vw`}">{title}</legend>

	<slot />
</fieldset>
