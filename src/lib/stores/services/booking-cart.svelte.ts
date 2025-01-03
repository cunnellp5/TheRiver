interface AppointmentDate {
  date: Date | undefined;
  day: number | undefined;
  time: number | undefined;
  month: number | undefined;
  year: number | undefined;
  formattedDate: string[] | undefined;
}
const HOUR_MIN_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};
const FULL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

let endTime = $state<undefined | string>(undefined);
const cartItems = $state<App.ServiceItem[]>([]);
let cartTotals = $state<{ price: number; duration: number; quantity: number }>({
  price: 0,
  duration: 0,
  quantity: 0,
});
const cartAppointmentDate = $state<AppointmentDate>({
  date: undefined,
  day: undefined,
  month: undefined,
  year: undefined,
  time: undefined,
  formattedDate: undefined,
});

// const cartSteps = $state<number>({
//   step: 1,
//   dateSelected: false,
//   timeSelected: false,
//   servicesSelected: false,
//   customerInfo: false,
//   paymentInfo: false,
// });

export function serviceCart() {
  function addToCart(serviceItem: App.ServiceItem) {
    const { id } = serviceItem;
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    if (itemPosition === -1) {
      cartItems.push(serviceItem);
    }
    calcTotal();
  }
  function removeFromCart(id: string) {
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    cartItems.splice(itemPosition, 1);
    calcTotal();
  }
  function calcTotal() {
    const { price, duration, quantity } = cartItems.reduce(
      (acc, item) => {
        acc.price += item.price;
        acc.duration += item.duration;
        acc.quantity += 1;
        return acc;
      },
      { price: 0, duration: 0, quantity: 0 },
    );
    cartTotals = { price, duration, quantity };
  }
  function calculateEndTimeBasedOnDuration() {
    if (!cartAppointmentDate.date)
      return;
    if (cartAppointmentDate.date.getHours() === 0)
      return;
    const dateCopy = new Date(cartAppointmentDate.date);
    const minOfCurrentDate = dateCopy.getMinutes();
    const endTimeInMin = dateCopy.setMinutes(minOfCurrentDate + cartTotals.duration);
    endTime = new Date(endTimeInMin).toLocaleTimeString("en-US", HOUR_MIN_OPTIONS);
  }
  function createFormattedDate() {
    cartAppointmentDate.formattedDate = cartAppointmentDate.date
      ? cartAppointmentDate.date?.toLocaleDateString("en-US", FULL_DATE_OPTIONS).split(", ")
      : [];
  }
  function setAppointmentDay(day: number) {
    cartAppointmentDate.day = day;
  }
  function setAppointmentMonth(month: number) {
    cartAppointmentDate.month = month;
  }
  function setAppointmentYear(year: number) {
    cartAppointmentDate.year = year;
  }
  function setAppointmentTime(date: Date) {
    cartAppointmentDate.date = date;
    calculateEndTimeBasedOnDuration();
    createFormattedDate();
  }
  function resetAppointmentTime() {
    cartAppointmentDate.date = undefined;
    cartAppointmentDate.formattedDate = undefined;
    endTime = undefined;
  }

  return {
    get cartItems() {
      return cartItems;
    },
    get cartTotals() {
      return cartTotals;
    },
    get cartAppointmentDate() {
      return cartAppointmentDate;
    },
    get endTime() {
      return endTime;
    },
    addToCart,
    removeFromCart,
    resetAppointmentTime,
    setAppointmentDay,
    setAppointmentMonth,
    setAppointmentTime,
    setAppointmentYear,
  };
}
