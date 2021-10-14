<template>
  <div class="about">
    <h1>Edit person</h1>
    <EditPerson />
  </div>
</template>
<script>
// @ is an alias to /src
import EditPerson from '@/components/EditPerson.vue'

export default {
  name: 'EditPersonPage',
  components: {
    EditPerson
  }
}
</script>
