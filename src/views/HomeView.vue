<template>
  <div class="container">
    <div class="first-container">
      <ImageSelector />
      <div>
        <h1 style="text-wrap: wrap; font-size: 50px; margin-bottom: 0">
          Chace to win a StockX Mystery Box today!
        </h1>
        <p style="margin-top: 0">
          Unleash the Excitement of Mystery Electronics
        </p>

        <FormComponent />
      </div>
    </div>

    <AboutSection />
    <InfoSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import ImageSelector from "@/components/imageSelector.vue";
import FormComponent from "@/components/formComponent.vue";
import Footer from "@/components/footerComponent.vue";
import AboutSection from "@/components/aboutSection.vue";
import InfoSection from "@/components/infoSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {},
  components: {
    ImageSelector,
    FormComponent,
    Footer,
    AboutSection,
    InfoSection,
  },
});
</script>
<style scoped>
.container {
  width: 100%;
}

.first-container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 965px) {
  .first-container {
    flex-direction: column;
  }
}

@media (min-width: 1300px) {
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
