import { appointmentStore } from "./appointment.svelte";
import { customerStore } from "./customer.svelte";
import { serviceStore } from "./services.svelte";

type BookingState = "services" | "datetime" | "userinfo" | "payment" | "confirmation";

interface BookingStore {
  currentStep: BookingState;
  services: {
    items: App.ServiceItem[];
    totals: {
      price: number;
      duration: number;
      quantity: number;
    };
  };
  appointment: {
    date: Date | undefined;
    time: number | undefined;
    formattedDate: string[] | undefined;
    endTime: string | undefined;
  };
  customer: {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    isGuest: boolean;
  };
  payment: {
    intentId: string | undefined;
    status: "pending" | "processing" | "succeeded" | "failed";
  };
}

export function createBookingManager() {
  let state = $state<BookingState>("services");

  return {
    get currentStep() { return state; },

    async nextStep() {
      switch (state) {
        case "services":
          if (serviceStore.items.length === 0)
            return false;
          state = "datetime";
          break;
        case "datetime":
          if (!appointmentStore.date)
            return false;
          state = "userinfo";
          break;
        case "userinfo":
          if (!customerStore.validate())
            return false;
          state = "payment";
          await this.initializePayment();
          break;
        // ...
      }
      return true;
    },

    async initializePayment() {
      // Create Stripe setup intent
      // Store payment intent ID
    },
  };
}
