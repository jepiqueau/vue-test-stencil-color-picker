<template>
  <ion-app>
    <ion-header>
    <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <!--
                *** does not work
            <ion-back-button defaultHref="/"></ion-back-button>
            -->
          <ion-button @click="goBackHome()" size="small">Back</ion-button>
        </ion-buttons>
        <ion-title>Color Picker</ion-title>
    </ion-toolbar>
    </ion-header>

    <ion-content>
        <template>
            <ion-button @click="openColorPicker" class="button" color= "dark" fill="outline" round >Color</ion-button>
            <jeep-colorpicker ref="refcolorpicker" v-on:onColor="getColor" id="colorpicker" color="#55cc45" opacity="0.725" backgroundcolor="#242424"></jeep-colorpicker>
            <ion-grid ref="refgrid">
            </ion-grid>
        </template>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "colorpicker",

  methods: {
    goBackHome: function() {
      this.$router.push("/");
    },
    openColorPicker: function() {
      this.$refs.refcolorpicker.open();
    },
    getColor: function(ev) {
      const color = ev.detail;
      const grid = this.$refs.refgrid;
      if (color !== null) {
        grid.innerHTML =
          `
          <ion-row> 
            <div style="width:50px;height:30px;border:1px solid black;background-color:` +
          color.hex.hex +
          `;opacity:` +
          color.opacity +
          `"></div>     
          </ion-row>
          <ion-row>
            <ion-col col-5>` +
          color.hex.hex +
          `</ion-col>
            <ion-col col-7>` +
          color.opacity +
          `</ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-5>` +
          color.rgb.rgb +
          `</ion-col>
            <ion-col col-7>` +
          color.rgb.rgba +
          `</ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-5>` +
          color.hsl.hsl +
          `</ion-col>
            <ion-col col-7>` +
          color.hsl.hsla +
          `</ion-col>
          </ion-row>  
        `;
      }
    }
  }
};
</script>
