<template>
    <div>
        <h1>Hello, EDTeam</h1>
        <slot name="mainSlot" 
            :mensaje="message"    
        />
        <h2>Which pizza flavor did you like the most?</h2>
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        message: `Papa John's o Pizza Hut`
    }
</script>