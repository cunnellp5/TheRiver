// class ServiceStore {
//   private items: App.ServiceItem[] = [];
//   private totals = {
//     price: 0,
//     duration: 0,
//     quantity: 0,
//   };

//   constructor() {}

//   getItems(): App.ServiceItem[] {
//     return this.items;
//   }

//   getTotals(): { price: number; duration: number; quantity: number } {
//     return this.totals;
//   }

//   addItem(item: App.ServiceItem): void {
//     const { id } = item;
//     const itemPosition = this.items.findIndex(
//       stateItem => stateItem.id === id,
//     );
//     if (itemPosition === -1) {
//       this.items = [...this.items, item];
//     }
//     this.calculateTotals();
//   }

//   removeItem(_id: string): void {
//     const itemPosition = this.items.findIndex(
//       stateItem => stateItem.id === _id,
//     );
//     this.items.splice(itemPosition, 1);
//     this.calculateTotals();
//   }

//   private calculateTotals(): void {
//     const { price, duration, quantity } = this.items.reduce(
//       (acc, item) => {
//         acc.price += item.price;
//         acc.duration += item.duration;
//         acc.quantity += 1;
//         return acc;
//       },
//       { price: 0, duration: 0, quantity: 0 },
//     );
//     this.totals = { price, duration, quantity };
//   }
// }

// export default ServiceStore;

function store() {
  let items = $state<App.ServiceItem[]>([]);

  let totals = $state<{ price: number; duration: number; quantity: number }>({
    price: 0,
    duration: 0,
    quantity: 0,
  });

  function addItem(serviceItem: App.ServiceItem) {
    const { id } = serviceItem;
    const itemPosition = items.findIndex(
      items => items.id === id,
    );
    if (itemPosition === -1) {
      items = [...items, serviceItem];
    }
    calcTotal();
  }

  function removeItem(id: string) {
    const itemPosition = items.findIndex(
      items => items.id === id,
    );
    items.splice(itemPosition, 1);
    calcTotal();
  }

  function calcTotal() {
    const { price, duration, quantity } = items.reduce(
      (acc, item) => {
        acc.price += item.price;
        acc.duration += item.duration;
        acc.quantity += 1;
        return acc;
      },
      { price: 0, duration: 0, quantity: 0 },
    );
    totals = { price, duration, quantity };
  }

  return {
    get items() {
      return items;
    },
    get totals() {
      return totals;
    },
    addItem,
    removeItem,
  };
}

export const ServiceStore = store();
