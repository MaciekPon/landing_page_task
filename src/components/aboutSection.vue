<template>
  <section class="section-container">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
      "
    >
      <h2 class="header-section">Top Tech Mystery Box at Unbeatable Prices</h2>
      <div>
        <span class="about-description">Free shipping</span>
        <span class="about-description">Easy returns</span>
        <span style="padding-left: 5px; color: #006340; font-weight: 600"
          >Special discount for students</span
        >
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
img {
  border-radius: 10%;
}

.description-container {
  display: flex;
  align-items: center;
}

.header-section {
  font-size: 40px;
  width: 600px;
  text-align: center;
  color: #2d473e;
  margin-bottom: 0;
}

.description-container:nth-child(2n-1) {
  flex-direction: row-reverse;
}

.about-description {
  padding-right: 5px;
  padding-left: 5px;
  font-weight: 600;
  border-right: 1px solid #006340;
  color: #006340;
}

.description {
  text-align: start;
  font-size: 16px;
}

h2 {
  font-size: 38px;
  text-align: start;
}

@media (max-width: 900px) {
  h2 {
    font-size: 28px;
  }

  .header-section {
    font-size: 30px;
    width: 100%;
  }

  .description-container {
    flex-direction: column;
  }

  .description-container:nth-child(2n-1) {
    flex-direction: column;
  }

  img {
    width: 80%;
  }
}
</style>
