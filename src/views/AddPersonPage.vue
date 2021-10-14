<template>
  <div class="about">
    <h1>This is an about page</h1>
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
