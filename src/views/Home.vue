<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Color Picker Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Colorpicker Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="large">Go to About</ion-button>
      <ion-button @click="goToColorPicker" size="large">Color Picker</ion-button>
    </ion-content>
  </ion-app>
</template>
<script>
export default {
  name: "home",
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goToColorPicker: function() {
      this.$router.push("colorpicker/");
    }
  }
};
</script>
