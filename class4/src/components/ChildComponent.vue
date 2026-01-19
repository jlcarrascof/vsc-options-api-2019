<template>
    <h1>{{ message }}</h1>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: ['message'],
    }
</script>