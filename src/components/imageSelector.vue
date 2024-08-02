<template>
  <div class="image-container">
    <div class="selected-image">
      <img :src="currentImage" alt="current-image" />
      <div class="price-container">
        <span class="price-box">${{ boxPrice }}</span>
        <span class="price-info">original value 500$</span>
      </div>
    </div>
    <div class="images-container">
      <template v-for="(image, index) in imageArray" :key="index">
        <img
          :class="[
            currentImage == image.path ? 'image-box selected-box' : 'image-box',
          ]"
          :src="image.path"
          @click="selectImage(image)"
        />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ImageSelector",
  setup() {
    let currentImage = ref<string>(require("@/assets/box-image1.png"));

    // let currentImage = ref<string>("@/assets/box-image1.png");
    let boxPrice = ref<string>("1.99");

    interface ImageDetails {
      path: string;
      price: string;
    }

    const imageArray: ImageDetails[] = [
      { path: require("@/assets/box-image1.png"), price: "1.99" },
      { path: require("@/assets/box-image2.png"), price: "2.99" },
      { path: require("@/assets/box-image3.png"), price: "3.99" },
    ];

    const selectImage = (imageDetails: ImageDetails): void => {
      currentImage.value = imageDetails.path;
      boxPrice.value = imageDetails.price;
    };

    return {
      imageArray,
      selectImage,
      currentImage,
      boxPrice,
    };
  },
});
</script>
<style scoped>
/* .image-container {
  width: 100%;
} */

.images-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
}

.image-box {
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  width: 130px;
}

.selected-box {
  border: 1px solid #006340;
}

.selected-image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.price-container {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #006340;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}

.selected-image,
.selected-image img {
  width: 480px;
}

.price-box {
  font-size: 36px;
}

.price-info {
  font-size: 12px;
  font-weight: 100;
}

@media (max-width: 1020px) {
  .image-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .selected-image,
  .selected-image img {
    width: 400px;
  }
  .image-box {
    width: 80px;
  }
  .images-container {
    width: 400px;
  }

  .price-container {
    width: 100px;
    height: 100px;
  }

  .price-box {
    font-size: 25px;
  }

  .price-info {
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  .selected-image,
  .selected-image img {
    width: 350px;
  }

  .images-container {
    width: 350px;
  }

  .price-container {
    width: 90px;
    height: 90px;
  }

  .price-box {
    font-size: 20px;
  }

  .price-info {
    font-size: 10px;
  }
}
</style>
