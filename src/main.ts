import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
// import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Aura from "@primevue/themes/aura";

createApp(App)
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(ConfirmationService)
  .use(ToastService)
  .component("InputText", InputText)
  .component("InputNumber", InputNumber)
  .component("ConfirmDialog", ConfirmDialog)
  .component("Button", Button)
  .component("Toast", Toast)
  .mount("#app");
