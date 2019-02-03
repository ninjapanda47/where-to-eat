<template>
  <b-container>
    <b-row align-v="center">
      <b-col>
        <div id="app">
          <b-card
            class="card"
            title="Where to eat?"
          >
            <Main v-on:submit="getRestaurants"></Main>
            <br>
            <span>Photo credit to</span>
            <a
              style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px"
              href="https://unsplash.com/@therachelstory?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              target="_blank"
              rel="noopener noreferrer"
              title="Download free do whatever you want high-resolution photos from Rachel Park"
            ><span style="display:inline-block;padding:2px 3px"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
                  viewBox="0 0 32 32"
                >
                  <title>unsplash-logo</title>
                  <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg></span><span style="display:inline-block;padding:2px 3px">Rachel Park</span></a>
          </b-card>
          <Modal
            ref="modal"
            :restaurant="restaurant"
          ></Modal>
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
      restaurant: {},
      location: "",
      num: 50
    };
  },
  methods: {
    //Make sure the restaurant isn't already shown before by checking and pushing it into the array
    getRestaurants(location) {
      const getRandom = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };
      let x = getRandom(this.$data.num);
      if (this.$data.location === location) {
        this.$data.restaurant = this.$data.restaurants[x];
        this.$data.restaurants.splice(x, 1);
        this.$data.num--;
        this.$refs.modal.show();
      } else {
        api.getRestaurants(location).then(res => {
          this.$data.location = location;
          this.$data.restaurants = res;
          this.$data.num = res.length;
          this.$data.restaurant = this.$data.restaurants[x];
          this.$data.restaurants.splice(x, 1);
          this.$data.num--;
          this.$refs.modal.show();
        });
      }
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
