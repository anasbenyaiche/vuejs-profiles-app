<template>
  <div>
    <div class="form__container">
      <form>
        <div class="form__group field">
          <input
            type="email"
            class="form__field"
            placeholder="email addres"
            name="emailAdress"
            id="emailAdress"
            required
          />
          <label for="emailAdress" class="form__label">email address</label>
        </div>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
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
            placeholder="Name"
            name="lastName"
            id="lastName"
            required
          />
          <label for="lastName" class="form__label">Last name</label>
        </div>
        <div class="btn-container">
        <button class="btn" type="button" v-on:click="createPerson0">Add person</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PersonService from "../services/personService";

export default {
  name: "AddPersonForm",
  data() {
    return {
      error: "",
      person: {
        emailAddress: "",
        firstName: "",
        lastName: "",
      },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-container{
    margin: 20px;
    display: flex;
    justify-content: flex-start;
}
button.btn {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 25%;
    font-size: 1.3rem;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

.form__container{
border: 1px solid black;
padding: 4vh;
margin:5% 20% ;
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
  color: #fff;
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
