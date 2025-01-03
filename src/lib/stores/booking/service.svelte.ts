function sum<K extends keyof App.ServiceItem>(items: App.ServiceItem[], key: K) {
  return items?.reduce((sum, item) => sum + (Number(item[key]) || 0), 0) ?? 0;
}

function findArrayIndex(items: App.ServiceItem[], id: string) {
  return items.findIndex(items => items.id === id);
}

function store() {
  let items = $state<App.ServiceItem[]>([]);

  const total = $derived({
    price: sum(items, "price"),
    duration: sum(items, "duration"),
    quantity: items?.length ?? 0,
  });

  const duration = $derived({
    hours: Math.floor(total.duration / 60),
    minutes: total.duration % 60,
  });

  function addItem(serviceItem: App.ServiceItem) {
    const { id } = serviceItem;
    const itemPosition = findArrayIndex(items, id);

    if (itemPosition === -1) {
      items = [...items, serviceItem];
    }
  }

  function removeItem(id: string) {
    const itemPosition = findArrayIndex(items, id);
    items.splice(itemPosition, 1);
  }

  return {
    get duration() { return duration; },
    get items() { return items; },
    get total() { return total; },
    addItem,
    removeItem,
  };
}

export const ServiceStore = store();
