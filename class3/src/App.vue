<template>
  <div>
    <FirstComponent />
    <SecondComponent />
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue';
  import SecondComponent from './components/SecondComponent.vue';

  export default {
    name: 'App',
    components: {
      FirstComponent,
      SecondComponent
    }
  }
</script>

<style>

</style>
