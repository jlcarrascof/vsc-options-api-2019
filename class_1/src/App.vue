<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      message: 'Hello, EDTeam students!'
    }
  }
}
</script>

<style>

</style>
