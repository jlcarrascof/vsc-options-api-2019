<template>
    <h1 ref="mainElement">First Component</h1>
</template>

<script>
    export default {
        name: 'FirstComponent',
        data() {
            return {
                message: 'Hello'
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
        }    
    }
</script>

<style>
</style>