class ServiceStore {
  private items: App.ServiceItem[] = [];
  private totals = {
    price: 0,
    duration: 0,
    quantity: 0,
  };

  constructor() {}

  getItems(): App.ServiceItem[] {
    return this.items;
  }

  getTotals(): { price: number; duration: number; quantity: number } {
    return this.totals;
  }

  addItem(item: App.ServiceItem): void {
    const { id } = item;
    const itemPosition = this.items.findIndex(
      stateItem => stateItem.id === id,
    );
    if (itemPosition === -1) {
      this.items = [...this.items, item];
    }
    this.calculateTotals();
  }

  removeItem(_id: string): void {
    const itemPosition = this.items.findIndex(
      stateItem => stateItem.id === _id,
    );
    this.items.splice(itemPosition, 1);
    this.calculateTotals();
  }

  private calculateTotals(): void {
    const { price, duration, quantity } = this.items.reduce(
      (acc, item) => {
        acc.price += item.price;
        acc.duration += item.duration;
        acc.quantity += 1;
        return acc;
      },
      { price: 0, duration: 0, quantity: 0 },
    );
    this.totals = { price, duration, quantity };
  }
}

export default ServiceStore;
