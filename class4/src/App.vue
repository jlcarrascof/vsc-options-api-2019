<template>
  <ChildComponent :newMessage="message" />
</template>

<script>
  import ChildComponent from './components/ChildComponent';
  export default {
    name: 'App',
    components: {
      ChildComponent
    },
    data() {
      return {
        message: 'What tasty had the pizza'
      }
    }
  }
</script>

<style>

</style>
