<template>
  <ChildComponent />
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
    },
    methods: {
      cambiandoMensaje(event) {
        this.message = event;
      }
    }
  }
</script>
