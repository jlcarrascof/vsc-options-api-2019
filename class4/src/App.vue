<template>
  <ChildComponent :newMessage = "message" @changeMessage="cambiandoMensaje"  />
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
        console.log(event);
      }
    }
  }
</script>
