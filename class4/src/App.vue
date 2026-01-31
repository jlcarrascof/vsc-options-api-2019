<template>
  <ChildComponent>
    <h2>Which pizza flavor did you like the most?</h2>
  </ChildComponent>
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
        message: 'What a tasty pizza!!'
      }
    }
  }
</script>
