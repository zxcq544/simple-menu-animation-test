<script>
    import MenuTopLevel from "./MenuTopLevel.svelte";
    // import VanillaJs from "./VanillaJS.svelte";
    // import { menu_items_height } from "./stores.js";
    // let menu_heights = {};
    // menu_items_height.subscribe((value) => {
    //     menu_heights = value;
    // });
    let menu = [
        {
            name: "top level 1",
            children: [
                {
                    name: "second level 1",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                        { name: "third level 3", children: [] },
                    ],
                },
                {
                    name: "second level 2",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                        { name: "third level 3", children: [] },
                    ],
                },
            ],
        },
        {
            name: "top level 2",
            children: [
                {
                    name: "second level 1",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                    ],
                },
                {
                    name: "second level 2",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                        { name: "third level 3", children: [] },
                    ],
                },
            ],
        },
        {
            name: "top level 3",
            children: [
                {
                    name: "second level 1",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                    ],
                },
                {
                    name: "second level 2",
                    children: [
                        { name: "third level 1", children: [] },
                        { name: "third level 2", children: [] },
                    ],
                },
            ],
        },
    ];
</script>

<MenuTopLevel {menu} />

<style>
</style>
