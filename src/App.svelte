<script lang="ts">
	import {Screen} from './components';
	import routes from './utils/routes';
	import Index from './apps/Home/Index.svelte';
	import Router, {location, link} from 'svelte-spa-router';
	import {playerData} from './store/reports';
	import {useNuiEvent} from './utils/useNuiEvent';
	useNuiEvent('playerData', (data) => {
		$playerData = data;
		console.log($playerData);
	});
</script>

<div class="wacho relative w-screen h-screen select-none">
	<Screen large center>
		<Index />
		<div class="safearea w-full h-80vh absolute bottom-0">
			<Router routes="{routes}" />
			<div id="modal" class="absolute-center"></div>
		</div>
	</Screen>
</div>

<style>
	* {
		font-family: 'Lucida Console';
	}
</style>
