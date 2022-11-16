<script lang="ts">
	import {setContext} from 'svelte';

	export let width = 70;
	export let height = 70;
	export let center = false;

	export let background: 'blue-black' | 'blue-white' | 'green-black' | 'green-white' | 'cyan-black' | 'cyan-white' | 'red-black' | 'red-white' | 'purple-black' | 'purple-white' | 'yellow-black' | 'yellow-white' | 'orange-black' | 'orange-white' = 'blue-black';
	setContext('Background', background);
</script>

<div class="{`tui-window  ${center ? 'absolute-center' : 'absolute'} tui-bg-${background}`}" style="{`width:${width}vw;height:${height}vh`}">
	<slot />
</div>
