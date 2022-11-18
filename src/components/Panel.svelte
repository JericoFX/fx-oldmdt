<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();
	export let open = true;
	export let title = '';
	export let onClose = () => {
		(open = false), dispatch('close', {});
	};
</script>

{#if open}
	<div class="{`tui-panel red-168 z-88  ${$$props.class}`}">
		<div class="tui-panel-header w-full h-3vh ">
			<span class="text-black flex justify-center items-center h-full">{title}</span>
		</div>
		<div class="tui-panel-content absolute bottom-0  w-full h-12vh flex justify-center items-center">
			<slot />
		</div>
	</div>
{/if}
