<script lang="ts">
	import {Screen} from './components';
	import routes from './utils/routes';
	import Index from './apps/Home/Index.svelte';
	import Router, {location, link} from 'svelte-spa-router';
</script>

<div class="relative w-screen h-screen select-none">
	<Screen large center>
		<Index />
		<div class="safearea w-full h-80vh absolute bottom-0">
			<Router routes="{routes}" />
		</div>
	</Screen>
</div>

<style>
	* {
		font-family: 'Lucida Console';
	}
</style>
