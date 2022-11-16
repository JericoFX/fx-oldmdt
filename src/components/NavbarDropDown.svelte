<script lang="ts">
	export let text = '';
</script>

<li class="tui-dropdown">
	<span class="{$$props.class}"><span class="red-168-text">{text.slice(0, 1)}</span>{text.slice(1, 15)}</span>
	<div class="tui-dropdown-content">
		<ul>
			<slot />
		</ul>
	</div>
</li>

<style>
</style>
