<script lang="ts">
  // import { stripe } from "$lib/server/stripe.ts";

  export let data; // appointment data

  async function processPayment() {
    try {
      const response = await fetch("/api/services/charge", {
        method: "POST",
        body: JSON.stringify({
          appointmentId: data.id,
          customerId: data.customerId,
          amount: data.serviceAmount,
          // other relevant data
        }),
      });

      if (!response.ok) throw new Error("Payment failed");

      // Handle success (show confirmation, update UI, etc.)
    } catch (error) {
      // Handle error
    }
  }
</script>

<div class="appointment-details">
  <h2>Appointment #{data.id}</h2>
  <div class="payment-section">
    <h3>Payment Details</h3>
    <p>Amount: ${data.serviceAmount}</p>
    <p>Status: {data.paymentStatus}</p>

    {#if data.status === "completed" && !data.paid}
      <button
        on:click={processPayment}
        class="process-payment-btn">
        Process Payment
      </button>
    {/if}
  </div>
</div>
