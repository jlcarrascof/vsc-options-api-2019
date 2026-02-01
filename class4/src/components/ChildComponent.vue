<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        data () {
            return {
                message: `Papa John's o Pizza Hut`
            }
        }
    }
</script>