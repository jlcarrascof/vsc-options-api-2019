<template>
  <ChildComponent  />
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
        message: '.......'
      }
    }
  }
</script>

<style>

</style>
