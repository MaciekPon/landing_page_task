<template>
  <section class="section-container">
    <div class="header-container">
      <h2 class="header-title">
        Top Tech Mystery Box <span>at Unbeatable Prices</span>
      </h2>
      <div class="about-container">
        <span class="about-description">Fast shipping</span>
        <span class="about-description">Easy returns</span>
        <span class="about-description">Special discount for students</span>
      </div>
    </div>
    <div class="description-container">
      <img src="@/assets/box-section2.png" />
      <div style="padding: 15px">
        <h2>
          Curious about the <span style="color: #006340">StockX</span> Mystery
          Box?
        </h2>
        <p class="description">
          Experience the thrill of unboxing cutting-edge gadgets with Stockx
          Mystery Boxes. Each box is a treasure trove of high-quality
          electronics, handpicked to elevate your tech game.
        </p>

        <p class="description">
          Expect the unexpected! Our boxes are packed with the latest gadgets,
          from smartphones to gaming consoles, ensuring you get the best tech
          surprises every time.
        </p>
      </div>
    </div>

    <div class="description-container">
      <img src="@/assets/box-section3.png" />
      <div style="padding: 15px">
        <h2>Why is everyone buzzing about these boxes?</h2>
        <p class="description">
          StockX Mystery Boxes are not just about products; they’re about the
          experience. Imagine the excitement of unveiling top-tier electronics
          at a fraction of the cost.
        </p>

        <p class="description">
          Our boxes include a variety of premium tech items, making it a
          must-have for every tech enthusiast. Join the buzz and see why
          everyone is raving about the unbeatable value and surprise factor of
          Stockx Mystery Boxes!
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.description-container img {
  border-radius: 10%;
  width: 500px;
}

.description-container {
  display: flex;
  align-items: center;
}

.header-title {
  font-size: 40px;
  width: 600px;
  text-align: center;
  color: #2d473e;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}

.description-container:nth-child(2n-1) {
  flex-direction: row-reverse;
}

.about-description {
  padding-left: 5px;
  font-weight: 600;
  color: #006340;
}

.about-description:nth-child(-n + 2) {
  padding-right: 5px;
  border-right: 1px solid #006340;
}

.description {
  text-align: start;
  font-size: 16px;
}

h2 {
  font-size: 38px;
  text-align: start;
}

@media (max-width: 1024px) {
  .description-container img {
    width: 400px;
  }
}

@media (max-width: 900px) {
  h2 {
    font-size: 28px;
  }

  .header-title {
    font-size: 30px;
    width: 100%;
  }

  .description-container h2 {
    font-size: 22px;
    font-weight: 600;
  }

  .description-container img {
    width: 300px;
  }

  .description-container {
    flex-direction: column;
  }

  .description-container:nth-child(2n-1) {
    flex-direction: column;
  }

  .about-container {
    padding: 10px;
    text-align: center;
    display: flex;

    /* flex-direction: column; */
  }

  .description {
    font-size: 14px;
  }

  .about-description {
    padding: 0 10px;
    font-size: 12px;
  }

  img {
    width: 90%;
  }
}
</style>
