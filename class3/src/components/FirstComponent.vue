<template>
    <div>
        <h1 ref="mainElement">{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
        <button @click="destroy()">Destroy Component</button>
    </div>
</template>

<script>
    export default {
        name: 'FirstComponent',
        data() {
            return {
                message: 'Hello'
            }
        },
        methods: {
            changeMessage () {
                this.message = 'Hello changed'
            }
        },
        beforeCreate() {
            console.log(`I'm in beforeCreate() ....`)
            console.log(this.message)
        }, 
        created() {
            console.log(`I'm in created() ....`)
            console.log(this.message)            
        }, 
        beforeMount() {
            console.log(`I'm in beforeMount() ....`)
            console.log(this.$refs)             
            console.log(this.$refs.mainElement)             
        },
        mounted() {
            console.log(`I'm in mounted() ....`)
            console.log(this.$refs)             
            console.log(this.$refs.mainElement)             
        },
        beforeUpdate() {
            console.log(`I'm in beforeUpdate() ....`)
            console.log(this.$refs.mainElement)             
        },
        updated() {
            console.log(`I'm in updated() ....`)
            console.log(this.$refs.mainElement)             
        },
        beforeDestroy() {
            console.log(`I'm in beforeDestroy() ....`)
            console.log(this.message)
        },
        destroyed() {
            console.log(`I'm in destroyed() ....`)
            console.log(this.message)
        }
    }
</script>

<style>
</style>