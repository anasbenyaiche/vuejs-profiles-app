<template>
  <div class="container">
    <div 
      v-for="(person, index) in persons"
      v-bind:item="person"
      v-bind:index="index"
      v-bind:key="person._id"
    >
      <div class="card">
        <h3>{{ person.emailAdress }}</h3>
        <hr >
        <h3>{{ person.firstName }}</h3>
        <hr>
        <h3>{{ person.lastName }}</h3>
        <div class="container">
       <button  v-on:click="deletePerson(person._id)" class="danger">delete</button>
          <button >update</button>
        </div>
   
      </div>
    
    </div>

    <div v-if="error">
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import PersonService from "../services/personService";

export default {
  name: "PersonList",
  data() {
    return {
      persons: [],
      error: "",

    };
  },
  async created() {
    try {
      this.persons = await PersonService.getPersons();
      console.log(this.persons);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
       async deletePerson(id) {
      await PersonService.deletePerson(id);
   this.persons = await PersonService.getPersons();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  background-color: #2f2f2f;
  width: 90%;
}
.danger{
  background-color: #ff5b5f;
}
.container{
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.card{
	position: relative;
	border: 1.61803398875px solid #999;
	border-radius: 6.472135955px;
	padding: 20px;
  width: 100%;
  overflow: hidden;
	background-color: linear-gradient(#fff, #2f2f2f);
	margin: 20px auto auto auto;
	box-shadow: 1.61803398875px 3.61803398875px 4.61803398875px #ccc;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: baseline;
}
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
