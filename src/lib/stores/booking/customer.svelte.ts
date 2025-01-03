export const customerStore = {
  info: $state<CustomerInfo | undefined>(undefined),
  setInfo: (info: CustomerInfo) => { /* ... */ },
  validate: () => boolean,
};
