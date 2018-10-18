<template>
  <div>
    <b-modal v-model="showModal">
      <b-card :title="restaurant.name" class="restaurant" :img-src="this.restaurant.image_url" img-alt="Card image" img-top v-if="this.restaurant.location">
        <p class="card-text">{{ this.restaurant.location.address1 }}, {{ this.restaurant.location.address2 }}</p>
        <p class="card-text">{{ this.restaurant.location.city }}, {{this.restaurant.location.state}} {{this.restaurant.location.zip_code}}</p>
        <vue-stars name="rating" :value="this.restaurant.rating" :readonly="true" />
        <br>
        <a :href="this.restaurant.url" class="card-link" target="_blank">Link</a>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import VueStars from "vue-stars";

export default {
  components: {
    VueStars
  },
  props: ["restaurant"],
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  }
};
</script>