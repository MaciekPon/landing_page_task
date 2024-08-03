<template>
  <Toast />
  <ConfirmDialog />
  <form @submit.prevent class="form-container">
    <p class="form-header">Enter details</p>
    <div class="input-container">
      <div class="error-container">
        <InputText
          type="text"
          v-model="firstName"
          placeholder="First name"
          size="small"
          :invalid="firstNameError != '' && submitted"
        />
        <small class="error-text" v-if="submitted && firstNameError">
          {{ firstNameError }}
        </small>
      </div>
      <div class="error-container">
        <InputText
          type="text"
          v-model="lastName"
          placeholder="Last name"
          size="small"
          :invalid="lastNameError != '' && submitted"
        />
        <span v-if="submitted && lastNameError" class="error-text">
          {{ lastNameError }}
        </span>
      </div>
    </div>
    <div class="error-container">
      <InputText
        type="text"
        v-model="street"
        placeholder="Street"
        size="small"
        :invalid="streetError != '' && submitted"
      />

      <span v-if="submitted && streetError != ''" class="error-text">
        {{ streetError }}
      </span>
    </div>
    <div class="input-container">
      <div class="error-container">
        <InputText
          type="text"
          v-model="postalCode"
          placeholder="Postal code"
          size="small"
          :invalid="postalCodeError != '' && submitted"
        />

        <span v-if="submitted && postalCodeError != ''" class="error-text">
          {{ postalCodeError }}
        </span>
      </div>
      <div class="error-container">
        <InputText
          type="text"
          v-model="city"
          placeholder="City"
          size="small"
          :invalid="cityError != '' && submitted"
        />
        <span v-if="submitted && cityError != ''" class="error-text">
          {{ streetError }}
        </span>
      </div>
    </div>
    <div class="error-container">
      <InputText
        type="number"
        v-model="phoneNumber"
        placeholder="Phone number"
        size="small"
        :invalid="phoneNumberError != '' && submitted"
      />

      <span v-if="submitted && phoneNumberError != ''" class="error-text">
        {{ phoneNumberError }}
      </span>
    </div>
    <div class="error-container">
      <InputText
        type="email"
        v-model="email"
        placeholder="Email"
        size="small"
        :invalid="emailError != '' && submitted"
      />
      <span v-if="submitted && emailError != ''" class="error-text">
        {{ emailError }}
      </span>
    </div>

    <button @click="sendForm" type="submit">proceed to payment</button>

    <div class="form-images">
      <img src="@/assets/macafee-icon.png" />
      <img src="@/assets/trust-icon.png" />
      <img src="@/assets/bit-icon.png" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  setup() {
    const firstName = ref<string>("");
    const lastName = ref<string>("");
    const street = ref<string>("");
    const postalCode = ref<string>("");
    const city = ref<string>("");
    const phoneNumber = ref<string>("");
    const email = ref<string>("");
    const submitted = ref<boolean>(false);

    const confirm = useConfirm();
    const toast = useToast();

    const firstNameError = computed<string>(() => {
      const nameRegex = /^[A-Za-z]+$/;

      if (!firstName.value) {
        return "First name is required.";
      } else if (!nameRegex.test(firstName.value)) {
        return "First name must contains only letters";
      }
      return "";
    });

    const lastNameError = computed<string>(() => {
      const nameRegex = /^[A-Za-z]+$/;

      if (!lastName.value) {
        return "Last name is required.";
      } else if (!nameRegex.test(lastName.value)) {
        return "Last name must contains only letters";
      }
      return "";
    });

    const postalCodeError = computed<string>(() => {
      if (!postalCode.value) {
        return "Postal code is required.";
      }
      return "";
    });

    const emailError = computed<string>(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value) {
        return "Email is required.";
      } else if (!emailRegex.test(email.value)) {
        return "Please enter a valid email address.";
      }
      return "";
    });

    const streetError = computed<string>(() => {
      if (!street.value) {
        return "Street is required.";
      }
      return "";
    });

    const cityError = computed<string>(() => {
      if (!city.value) {
        return "City is required.";
      }
      return "";
    });

    const phoneNumberError = computed<string>(() => {
      if (!phoneNumber.value) {
        return "Phone number is required.";
      }
      return "";
    });

    const clearForm = () => {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phoneNumber.value = "";
      postalCode.value = "";
      city.value = "";
      street.value = "";
    };

    const sendForm = (): void => {
      if (
        !firstNameError.value &&
        !lastNameError.value &&
        !emailError.value &&
        !phoneNumberError.value &&
        !postalCodeError.value &&
        !cityError.value &&
        !streetError.value
      ) {
        confirm.require({
          message: "Are you sure you want to proceed?",
          header: "Confirmation",
          icon: "pi pi-exclamation-triangle",
          rejectProps: {
            label: "No",
            severity: "secondary",
            outlined: true,
          },
          acceptProps: {
            label: "Yes",
          },
          accept: () => {
            if (window.innerWidth <= 600) {
              alert("Send successfully");
            } else {
              toast.add({
                severity: "success",
                summary: "Confirmed",
                detail: "Send successfully!",
                life: 2000,
              });
            }
            clearForm();
          },
          reject: () => {
            if (window.innerWidth <= 600) {
              alert("Send successfully");
            } else {
              toast.add({
                severity: "error",
                summary: "Rejected",
                detail: "",
                life: 2000,
              });
            }
          },
        });
      } else {
        submitted.value = true;
      }
    };

    return {
      firstName,
      lastName,
      street,
      postalCode,
      city,
      phoneNumber,
      email,
      sendForm,
      firstNameError,
      submitted,
      emailError,
      lastNameError,
      postalCodeError,
      streetError,
      cityError,
      phoneNumberError,
    };
  },
});
</script>
<style scoped>
.form-header {
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 0;
  font-weight: bold;
}

.form-container {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;
}

.form-container input {
  height: 40px;
  margin: 5px 0;
}

.p-toast {
  max-width: calc(100vw - 40px);
}

.form-images {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button[type="submit"] {
  background-color: #006340;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 40px;
  margin-top: 15px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #038255;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.error-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.error-text {
  color: red;
  font-size: 10px;
  text-align: start;
}

.error-container:first-child {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .form-container input {
    border-radius: 10px;
    height: 40px;
    margin: 5px 0;
    outline: gray;
    padding-left: 10px;
    border: 1px solid lightgrey;
  }

  .input-container {
    flex-direction: column;
  }

  .error-container {
    margin-right: 0 !important;
  }
}
</style>
