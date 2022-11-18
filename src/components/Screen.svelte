<script lang="ts">
/**
* Small set the screen 640 x 480
*/
export let small = false
/**
* Medium set the screen 800 x 600
*/
export let medium = true
/**
* Large set the screen 1024 x 768
*/
export let large = false
/**
* Border: Set a small padding around the box
*/
export let border = false
/**
* Center: Center the window 
*/
export let center = false

let sm = small ? "tui-screen-640-480" : ""
let md = medium ? "tui-screen-800-600" : ""
let lg = large ? "tui-screen-1024-768" : ""
let bordered= border ? "bordered" : ""
let cnt = center ? "centered":""
</script>

<div class={`${sm} ${md} ${lg} ${bordered} ${cnt} ${$$props.class}`}>
  <slot/>
</div>