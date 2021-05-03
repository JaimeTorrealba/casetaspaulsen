<template>
  <div class="d-flex justify-center">
    <div >
      <div class="threesixty-image-rotate product"></div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    path: String,
    totalFrames: Number,
    endFrame: Number
  },
  mounted() {
       $( document ).ready(() => {
            $('.product').TreeSixtyImageRotate({
                totalFrames: this.totalFrames,
                endFrame: this.endFrame,
                currentFrame: 0,
                extension: ".png",
                imagesFolder: this.path,
                smallWidth: '100%',
                smallHeight: '100%',
                imagePlaceholderClass: "images-placeholder"
            }).initTreeSixty();
        })
  },
     components: {
    }
}
</script>
<style lang="css">
</style>
