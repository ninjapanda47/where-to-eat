<template>
  <b-container>
    <b-row align-v="center">
      <b-col>
        <div id="app">
          <b-card class="card" title="Where to eat?">
            <Main v-on:submit="getRestaurants"></Main>
          </b-card>
          <Modal ref="modal" :restaurant="restaurant"></Modal>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <footer>
          <span>© 2018 sandigau.com</span>
        </footer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Main from "./components/Main.vue";
import Modal from "./components/Modal.vue";
import * as api from "./utils/api.js";

export default {
  name: "app",
  components: {
    Main,
    Modal
  },
  data() {
    return {
      restaurants: [],
      restaurant: {}
    };
  },
  methods: {
    //Make sure the restaurant isn't already shown before by checking and pushing it into the array
    getRestaurants(location) {
      api.getRestaurants(location).then(res => {
        this.$data.restaurants.includes(res.id)
          ? this.getRestaurants(location)
          : (this.$data.restaurant = res),
          this.$data.restaurants.push(res.id),
          this.$refs.modal.show();
      });
    }
  }
};
</script>

<style>
@import "./assets/styles.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
