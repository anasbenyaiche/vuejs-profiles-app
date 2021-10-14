<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <AddPerson />
  <PersonList />
</template>

<script>
import PersonList from './components/PersonList.vue'
import AddPerson from './components/AddPerson.vue'

export default {
  name: 'App',
  components: {
    PersonList,
    AddPerson
    
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
