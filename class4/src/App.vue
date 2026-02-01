<template>
  <div>
    <ChildComponent />
    <BrotherComponent />
  </div>
</template>

<script>
  import BrotherComponent from './components/BrotherComponent';
  import ChildComponent from './components/ChildComponent';
  export default {
    name: 'App',
    components: {
      ChildComponent,
      BrotherComponent
    },
    data() {
      return {
        message: 'What a tasty pizza!!'
      }
    }
  }
</script>
