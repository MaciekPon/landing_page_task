<template>
  <section class="section-container">
    <div class="info-container">
      <h4>How can I win?</h4>
      <p>
        Thanks to your membership, you also participate in our contest to win
        the iPhone15. We sellect a winner among every 600 participants. The next
        winner will be selected on 06.10.2023, and will be notified directly by
        e-mail. If the reward is out of stock, the winner will receive a similar
        product of equal or greater value instead.
      </p>
    </div>
    <div class="info-container">
      <h4>No hidden fees?</h4>
      <p>
        We ensure that our members are provided with a detailed history of
        transactions so that they know exactly what they are paying for. Credit
        card information is only required to facilitate future purchases. There
        will be no charges on your credit card statement if you do not upgrade
        to PREMIUM membership and do not make a purchase.
      </p>
    </div>
    <div class="info-container">
      <h4>Why do we need your billing information?</h4>
      <p>
        By joining this service, you will receive a 5-day trial of our partner's
        program. If you continue with a subscription beyond the 5-day trial
        period, you will be charged an amount on your credit card which varies
        depending on the choice of the tariff. When your contribution is
        deducted from your credit card or other payment method, you will have
        access to these services which are reserved exclusively for members of
        our partner's website.
      </p>
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
.section-container {
  display: flex;
  font-size: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  margin-top: 30px;
}

.info-container {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

.info-container h4 {
  font-weight: 600;
}

@media (max-width: 768px) {
  .section-container {
    flex-direction: column;
  }
  .info-container {
    padding: 10px;
  }
}
</style>
