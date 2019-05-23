<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Color Picker</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <template>
        <jeep-colorpicker
          ref="refcolorpicker"
          v-on:JeepColorpickerGetColor="getColor"
          v-on:JeepColorpickerOpen="openCpicker"
          id="colorpicker"
          color="#55cc45"
          opacity="0.725"
          buttons="[Color,Valid,Dismiss]"
        ></jeep-colorpicker>
        <ion-grid ref="refgrid"> </ion-grid>
      </template>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "colorpicker",

  methods: {
    openCpicker: function() {
      const grid = this.$refs.refgrid;
      grid.innerHTML = "";
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
<style>
jeep-colorpicker {
  --colorpicker-background-color: #242424;
  --colorpicker-top: 20vh;
  --colorpicker-left: 15vw;
  --colorpicker-width: 80vmin;
  --colorpicker-height: 60vmin;
  --colorpicker-button-margin-top: 5vh;
  --colorpicker-button-margin-left: 15vw;
}
:root {
  --gcolorpicker-button-font-size: 24px;
}
</style>
