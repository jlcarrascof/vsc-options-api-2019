<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    import eventBus from '../eventBus'
    export default {
        name: 'ChildComponent',
        data () {
            return {
                message: `Papa John's o Pizza Hut`
            }
        },
        created () {
            eventBus.$on('newMessage', (event) => {
                this.message = event
            })
        }
    }
</script>