<template>
  <div>
    <div v-if="!loading" class="form__container">
      <form>
        <div class="form__group field">
          <input
            type="email"
            class="form__field"
            placeholder="email addres"
            name="emailAdress"
            v-model="emailAdress"
            :run="!emailAdress ? null : emailAdress"
            id="emailAdress"
            required
          />
          <label for="emailAdress" class="form__label">email address</label>
        </div>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="first name"
            v-model="firstName"
            :run="!firstName ? null : firstName"
            name="firstName"
            id="firstName"
            required
          />
          <label for="firstName" class="form__label">First name</label>
        </div>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Last name"
            name="lastName"
            :run="!lastName ? null : lastName"
            v-model="lastName"
            id="lastName"
            required
          />
          <label for="lastName" class="form__label">Last name</label>
        </div>
        <div class="btn-container">
          <button class="btn col-3" type="button" v-on:click="editPerson(id)">
            Save changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PersonService from "../services/personService";

export default {
  name: "EditPerson",
  data() {
    return {
      error: "",
      emailAdress: "",
      firstName: "",
      lastName: "",
      id: "",
      loading: false,
    };
  },

  async created() {
    this.fetchOnePerson();
  },
  watch: {
    $route:"fetchOnePerson",
  },
  methods: {
    async fetchOnePerson() {
      this.error = this.post = null;
      this.loading = true;
      const id = this.$route.params.id;
      const response = await PersonService.getOnePerson(id);
      if (this.$route.params.id !== response._id) return;
      this.loading = false;
      this.emailAdress = response.emailAdress;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.id = this.$route.params.id;
    },
     editPerson(id) {
       PersonService.editPerson(id,{
        emailAdress: this.emailAdress,
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.btn-container {
  margin: 20px;
  display: flex;
  justify-content: flex-start;
}
button.btn {
  background-color: #04aa6d;
  color: white !important;
  padding: 14px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  font-size: 1.3rem;
  opacity: 0.9;
}
a {
  color: white !important;
}

button:hover {
  opacity: 1;
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
/* demo */
</style>
