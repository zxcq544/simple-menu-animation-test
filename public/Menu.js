console.log('Hello');
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
        name: "top level 3",
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
];

console.log(menu);

for (let i=0;i<menu.length;i++){
    console.log(menu[i]);
}