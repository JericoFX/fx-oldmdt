<script lang="ts">
	export let text = '';
	export let colors: 'green-168' | 'cyan-168' | 'red-168' | 'blue-168' | 'purple-168' | 'yellow-168' | 'white-168' | 'orange-168' = 'green-168';
</script>

<div class=" {`tui-button ${colors} ${$$props.class} flex justify-center items-center`}">{text}</div>
