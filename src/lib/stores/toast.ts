import { writable } from "svelte/store";

interface Toast {
  id?: number;
  message?: string;
  type?: string;
  dismissible?: boolean;
  timeout?: number;
  iconType?: string;
}

export const toasts = writable<Toast[]>([]);

export function dismissToast(id: number) {
  toasts.update(all => all.filter(t => t.id !== id));
}

export function addToast(toast: Toast) {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);

  // Setup some sensible defaults for a toast.
  const defaults = {
    id,
    type: "message",
    dismissible: true,
    timeout: 5000,
  };

  // Push the toast to the top of the list of toasts
  toasts.update(all => [{ ...defaults, ...toast }, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout)
    setTimeout(() => dismissToast(id), toast.timeout);
}
