<template>
  <ChildComponent message="What tasty had the pizza" />
</template>

<script>
  import ChildComponent from './components/ChildComponent';
  export default {
    name: 'App',
    components: {
      ChildComponent
    }
  }
</script>

<style>

</style>
