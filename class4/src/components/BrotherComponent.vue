<template>
    <button @click="newMessage">New Message</button>
</template>

<script>
    import eventBus from '../eventBus';

    export default {
        name: 'BrotherComponent',
        methods: {
            newMessage () {
                eventBus.$emit('newMessage', 'Do you wanna Pizza?')
            }
        }
    }
</script>