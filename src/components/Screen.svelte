<script lang="ts">
	/**
	 * Small set the screen 640 x 480
	 */
	export let small = false;
	/**
	 * Medium set the screen 800 x 600
	 */
	export let medium = false;
	/**
	 * Large set the screen 1024 x 768
	 */
	export let large = false;
	/**
	 * Border: Set a small padding around the box
	 */
	export let border = true;
	/**
	 * Center: Center the window
	 */
	export let center = false;

	let sm = small ? 'w-33.3vw h-51.5vh' : '';
	let md = medium ? 'w-41.6 h-64.4' : '';
	let lg = large ? 'w-53.3vw h-82.49vh' : '';
	let bordered = border ? 'bordered' : '';
	let cnt = center ? 'absolute-center' : '';
</script>

<div class="{`${sm} ${md} ${lg} bordered ${cnt} ${$$props.class} tui-bg-blue-black`}">
	<slot />
</div>
