<section class="border-b border-gray-900 pb-12">
  <h2 class="text-base/7 font-semibold text-gray-900">Personal Information</h2>
  <!-- <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p> -->

  <form class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 grid-cols-6">
    <div class="col-span-3">
      <label
        for="first-name"
        class="block text-sm/6 font-medium text-gray-900">First name</label>
      <div class="mt-2">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm/6" />
      </div>
    </div>

    <div class="col-span-3">
      <label
        for="last-name"
        class="block text-sm/6 font-medium text-gray-900">Last name</label>
      <div class="mt-2">
        <input
          type="text"
          name="last-name"
          id="last-name"
          autocomplete="family-name"
          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm/6" />
      </div>
    </div>

    <div class="col-span-4">
      <label
        for="email"
        class="block text-sm/6 font-medium text-gray-900">Email address</label>
      <div class="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm/6" />
      </div>
    </div>

    <!-- <div class="col-span-3">
      <label
        for="country"
        class="block text-sm/6 font-medium text-gray-900">Country</label>
      <div class="mt-2 grid grid-cols-1">
        <select
          id="country"
          name="country"
          autocomplete="country-name"
          class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm/6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div> -->

    <div class="col-span-full">
      <label
        for="phone"
        class="block text-sm/6 font-medium text-gray-900">Phone</label>
      <div class="mt-2">
        <input
          type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          list="defaultTels"
          class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm/6" />
      </div>
    </div>

    <div class="col-span-full">
      <label
        for="notes"
        class="block text-sm/6 font-medium text-gray-900">Notes</label>
      <div class="mt-2">
        <textarea
          name="notes"
          id="notes"
          rows="3"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </textarea>
      </div>
      <!-- <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences notes yourself.</p> -->
    </div>
  </form>
</section>

<style>
  section {
    margin: 0 auto;
    max-inline-size: var(--size-md);
    border-radius: var(--radius-2);
    backdrop-filter: blur(4px);
  }
  .pb-12 {
    padding: var(--size-8);
  }
  .border-b {
    border-width: 1px;
  }
  .border-gray-900 {
    border-color: hsl(var(--gray-9-hsl) / 100%);
  }
  .mt-10 {
    margin-top: var(--size-10);
  }
  .py-2 {
    padding-block: var(--size-2);
  }
  .px-3 {
    padding-inline: var(--size-3);
  }
  .mt-2 {
    margin-top: var(--size-2);
  }
  .rounded-md {
    border-radius: var(--radius-2);
  }
  .block {
    display: block;
  }
  .w-full {
    width: 100%;
  }
  .grid {
    display: grid;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .gap-x-6 {
    column-gap: 1.5rem;
  }
  .gap-y-8 {
    row-gap: 2rem;
  }

  @media (min-width: 640px) {
    .col-start-1 {
      grid-column-start: 1;
    }

    .col-span-2 {
      grid-column: span 2 / span 2;
    }

    .col-span-3 {
      grid-column: span 3 / span 3;
    }

    .col-span-4 {
      grid-column: span 4 / span 4;
    }

    .col-span-full {
      grid-column: span 6 / span 6;
    }
    .grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }
</style>
