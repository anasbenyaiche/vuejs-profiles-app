<template>
  <div class="page">
    <div class="form__group field p-10 m-10">
      <input
        type="input"
        class="form__field"
        placeholder="search"
        name="search"
        v-model="search"
        id="seach"
        required
      />
      <label for="lastName" class="form__label">Search</label>
    </div>

    <div class="container">
      <div
        v-for="(person, index) in filteredPerson"
        v-bind:item="person"
        v-bind:index="index"
        v-bind:key="person._id"
      >
        <div class="card">
          <h3>{{ person.emailAdress }}</h3>
          <hr />
          <h3>{{ person.firstName }}</h3>
          <hr />
          <h3>{{ person.lastName }}</h3>
          <div class="container">
            <button v-on:click="deletePerson(person._id)" class="danger">
              delete
            </button>
            <button>update</button>
            <button>
              <router-link v-bind:to="'/person/' + person._id"
                >View more</router-link
              >
            </button>
          </div>
        </div>
      </div>

      <div v-if="error">
        <p class="error">{{ error }}</p>
      </div>
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
      search: "",
    };
  },
  async created() {
    try {
      this.persons = await PersonService.getPersons();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async deletePerson(id) {
      await PersonService.deletePerson(id);
      this.persons = await PersonService.getPersons();
    },
  },
  computed: {
    filteredPerson() {
      console.log(this.search);
      const value = this.search.charAt(0).toUpperCase() + this.search.slice(1);
      console.log(value);
      return this.persons.filter((person) => {
        return (
          this.search.length === 0 ||
          person.firstName.includes(this.search) ||
          person.lastName.includes(this.search) ||
          person.emailAdress.includes(this.search)
        );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-10{
  margin: 50px;
}
hr {
  background-color: #2f2f2f;
  width: 90%;
}
.danger {
  background-color: #ff5b5f;
}
.container {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
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
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.p-10{
  padding: 4vh;
}
button:hover {
  opacity: 1;
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

.form__container {
  border: 1px solid black;
  padding: 4vh;
  margin: 5% 20%;
}
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 80%;
}
.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #9b9b9b;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}
.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}
/* reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
</style>
