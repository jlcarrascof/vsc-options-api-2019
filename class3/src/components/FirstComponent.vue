<template>
    <h1>First Component</h1>
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
        }    
    }
</script>

<style>
</style>