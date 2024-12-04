import type FormDataMock from "./FormDataMock";
import { vi } from "vitest";

export default class RequestMock {
  formData = vi.fn().mockResolvedValue(this);

  cache: RequestCache = "default";

  credentials: RequestCredentials = "same-origin";

  destination: RequestDestination = "document";

  headers = new Headers();

  integrity = "";

  keepalive = false;

  method = "";

  mode: RequestMode = "same-origin";

  redirect: RequestRedirect = "error";

  referrer = "";

  referrerPolicy: ReferrerPolicy = "";

  signal = new AbortController().signal;

  url: string = "";

  clone = vi.fn();

  body = null;

  bodyUsed = false;

  arrayBuffer = vi.fn();

  blob = vi.fn();

  json = vi.fn();

  text = vi.fn();

  constructor(public testFormData: FormDataMock) {
    this.formData = vi.fn().mockResolvedValue(testFormData);
  }
}
