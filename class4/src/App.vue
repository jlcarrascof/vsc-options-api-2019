<template>
  <div>
    <ChildComponent>
      <template v-slot:mainSlot="scopedSlot">
        <h3>{{ scopedSlot.mensaje }}</h3>
      </template>
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
