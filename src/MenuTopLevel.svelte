<script>
    import { onMount } from "svelte";
    import MenuFirstLevel from "./MenuFirstLevel.svelte";

    export let menu = [];
    onMount(() => {
        console.log(menu);
    });
</script>

<ul>
    {#each menu as menu_item_top, menu_top_level_index}
        <li>
            <MenuFirstLevel {menu_item_top} {menu_top_level_index} />
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
    }
</style>
