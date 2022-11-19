<script lang="ts">
  import { push } from 'svelte-spa-router';
	import {Navbar, NavbarDropDown, NavbarItem, Screen} from '../../components';
</script>

<div>
	<Navbar>
		<NavbarDropDown text="Reporte">
			<NavbarItem on:click={()=> push("/Reporte")} text="Nuevo Reporte" />
			<NavbarItem text="Buscar Reporte" />
			<NavbarItem text="Salir" shortcut shortcutText="ESC" />
		</NavbarDropDown>
		<NavbarDropDown text="Personas">
			<NavbarItem shortcut shortcutText="F2" text="Buscar Personas" />
			<NavbarItem shortcut shortcutText="F3" text="Nuevo Bolo" />
		</NavbarDropDown>
		<NavbarDropDown text="Vehiculos">
			<NavbarItem shortcut shortcutText="F2" text="Buscar Vehiculos" />
			<NavbarItem shortcut shortcutText="F3" text="Nuevo Bolo" />
		</NavbarDropDown>
		<NavbarDropDown text="Mi Info">
			<NavbarItem shortcut shortcutText="F2" text="Informacion" />
		</NavbarDropDown>
		<NavbarItem text="Chat" />
	</Navbar>
</div>
