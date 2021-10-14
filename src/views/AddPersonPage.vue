<template>
  <div class="about">
    <h1>Adding person</h1>
    <AddPerson />
  </div>
</template>
<script>
// @ is an alias to /src
import AddPerson from '@/components/AddPerson.vue'

export default {
  name: 'AddPersonPage',
  components: {
    AddPerson
  }
}
</script>
