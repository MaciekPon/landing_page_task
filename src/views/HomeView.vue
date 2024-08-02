<template>
  <div class="container">
    <div class="first-container">
      <ImageSelector />
      <div>
        <h1 class="header-title" style="">
          Chace to win a StockX Mystery Box today!
        </h1>
        <p style="" class="header-description">
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

.header-title {
  text-wrap: wrap;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 0;
  margin: 0 10px;
}

.header-description {
  margin-top: 0;
  font-size: 18px;
  margin: 0 10px;
}

.first-container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1020px) {
  .header-title {
    font-size: 36px;
    line-height: 1.2em;
  }
}
@media (max-width: 965px) {
  .first-container {
    flex-direction: column;
    padding: 0 10px;
  }

  .header-title {
    font-size: 36px;
    line-height: 1.2em;
  }

  .header-description {
    margin-top: 0;
    font-size: 14px;
    margin-bottom: 10px;
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
