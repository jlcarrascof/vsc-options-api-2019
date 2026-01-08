<template>
    <h1 ref="element">First Component</h1>
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
        }    
    }
</script>

<style>
</style>