<script>
    import MenuThirdLevelItem from "./MenuThirdLevelItem.svelte";
    // import { slide } from "svelte/transition";
    import { menu_items_height, menu_items_height_original } from "./stores.js";
    import { onMount } from "svelte";

    export let menu_second_level_item;
    export let menu_second_level_item_index;
    export let menu_top_level_index;
    let menu_item_height_el;

    onMount(() => {
        menu_items_height.update((m) =>
            Object.assign({}, m, { [menu_second_level_item_index]: menu_item_height_el.clientHeight })
        );
        menu_items_height_original.update((m) =>
            Object.assign({}, m, { [menu_second_level_item_index]: menu_item_height_el.clientHeight })
        );
    });

    let is_second_level_open = true;
    function collapse_second_level() {
        if (is_second_level_open) {
            $menu_items_height[menu_second_level_item_index] = 0;
            $menu_items_height[menu_top_level_index] -= $menu_items_height_original[menu_second_level_item_index];
            $menu_items_height_original[menu_top_level_index] = $menu_items_height[menu_top_level_index];
        } else {
            $menu_items_height[menu_second_level_item_index] =
                $menu_items_height_original[menu_second_level_item_index];
            $menu_items_height[menu_top_level_index] += $menu_items_height_original[menu_second_level_item_index];
            $menu_items_height_original[menu_top_level_index] = $menu_items_height[menu_top_level_index];
        }

        is_second_level_open = !is_second_level_open;
        console.log($menu_items_height);
    }
</script>

<span on:click={collapse_second_level}>{menu_second_level_item.name}</span>
<!-- {#if is_second_level_open} -->
<ul
    class="second_child"
    bind:this={menu_item_height_el}
    style="height:{$menu_items_height[menu_second_level_item_index]}px"
>
    {#each menu_second_level_item.children as menu_third_level_item}
        <li><MenuThirdLevelItem {menu_third_level_item} /></li>
    {/each}
</ul>

<!-- {/if} -->
<style>
    span,
    ul {
        list-style: none;
        user-select: none;
        overflow: hidden;
        transition: height linear 0.3s;
    }
    li {
        font-family: sans-serif;
    }
    span {
        cursor: pointer;
        font-family: sans-serif;
    }
</style>
