<template>
    <div>
        <h1>{{ newMessage }}</h1>
        <button @click="emitNewMessage">Change Message</button>
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: {
            newMessage: {
                type: String,
                default: 'What a good pizza!! :)',
                validator: value => { return value.includes('pizza') }
            }
        },
        methods: {
            emitNewMessage() {
                this.$emit('changeMessage', 'We want more pizza');
            }
        }    
    }
</script>