<script lang="ts">
/**
* Theme: Choose the color of the background
*/
	export let theme: 'blue-black' | 'blue-white' | 'green-black' | 'green-white' | 'cyan-black' | 'cyan-white' | 'red-black' | 'red-white' | 'purple-black' | 'purple-white' | 'yellow-black' | 'yellow-white' | 'orange-black' | 'orange-white' = 'blue-black';
</script>

<div class="{`tui-bg-${theme} ${$$props.class}`}"><slot /></div>
