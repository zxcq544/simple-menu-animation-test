<script>
    import MenuSecondLevel from "./MenuSecondLevel.svelte";
    // import { slide } from "svelte/transition";
    import { menu_items_height, menu_items_height_original } from "./stores.js";
    import { onMount } from "svelte";
    export let menu_item_top;
    export let menu_top_level_index;
    export let is_first_level_open = true;
    let menu_item_height_el;
    function collapse_first_level() {
        if (is_first_level_open) {
            $menu_items_height[menu_top_level_index] = 0;
        } else {
            $menu_items_height[menu_top_level_index] = $menu_items_height_original[menu_top_level_index];
        }
        is_first_level_open = !is_first_level_open;
        console.log($menu_items_height);
    }
    onMount(() => {
        menu_items_height.update((m) =>
            Object.assign({}, m, { [menu_top_level_index]: menu_item_height_el.clientHeight })
        );
        menu_items_height_original.update((m) =>
            Object.assign({}, m, { [menu_top_level_index]: menu_item_height_el.clientHeight })
        );
    });
</script>

<span data-index={menu_top_level_index} on:click={collapse_first_level}>{menu_item_top.name}</span>
<!-- {#if is_first_level_open} -->
<ul class="first_child" bind:this={menu_item_height_el} style="height:{$menu_items_height[menu_top_level_index]}px">
    {#each menu_item_top.children as menu_second_level_item, menu_second_level_item_index}
        <li>
            <MenuSecondLevel
                {menu_second_level_item}
                menu_second_level_item_index={menu_top_level_index + "-" + menu_second_level_item_index}
                {menu_top_level_index}
            />
        </li>
    {/each}
</ul>

<!-- {/if} -->
<style>
    span,
    ul {
        user-select: none;
        overflow: hidden;
        transition: height linear 0.3s;
        list-style: none;
    }
    span {
        cursor: pointer;
        font-family: sans-serif;
    }
</style>
