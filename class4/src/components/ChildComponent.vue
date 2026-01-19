<template>
    <h1>{{ newMessage }}</h1>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: {
            newMessage: {
                type: String,
                default: 'What a good pizza!! :)'
            }
        }
    }
</script>