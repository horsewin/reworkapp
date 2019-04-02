<template>
    <text>{{ item }}</text>
</template>

<script>
    export default {
        name: "todo-item",
        props: {
            item: {
                Type: String,
            }
        }
    };
</script>
