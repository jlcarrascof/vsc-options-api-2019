<template>
    <h1>{{ newMessage }}</h1>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: ['newMessage'],
    }
</script>