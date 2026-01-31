<template>
  <div>
    <ChildComponent>
      <h3>Papa John's o Pizza Hut</h3>
    </ChildComponent>
  </div>
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
