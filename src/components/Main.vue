<template>
  <div class="form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group description="Enter your zipcode and we'll randomly pick a restaurant nearby for you!">
        <b-form-input id="zipcode" type="number" v-model="form.zipcode" required placeholder="Enter zipcode" class="input">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      form: {
        zipcode: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit("submit", this.form.zipcode);
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.zipcode = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>