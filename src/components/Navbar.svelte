<script lang="ts">
	import NavbarDropDown from './NavbarDropDown.svelte';
	export let date = false;
	export let dropdown = false;
</script>

<div>
	<nav class="tui-nav">
		<ul>
			<slot />
			{#if dropdown}
				<NavbarDropDown />
			{/if}

			{#if date}
				<li>
					<span class="tui-datetime absolute right-0" data-format="h:m:s a"></span>
				</li>
			{/if}
		</ul>
	</nav>
</div>
