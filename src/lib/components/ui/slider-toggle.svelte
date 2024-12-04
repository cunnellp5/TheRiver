<script lang="ts">
  /*
   * SliderToggle.svelte
   *
   *   @desc: A simple switch toggle component
   *
   *   @props:
   *     checked - bound to the input element
   *     id - used for form
   *     name - used for form
   *
   *   @events:
   *     'toggle' event dispatched when the input is clicked
   *
   *   @usage:
   *     <SliderToggle checked={published} on:toggle={handleToggle} id="published" name="published" />
   */

  import { createEventDispatcher } from "svelte";

  interface Props {
    checked?: boolean;
    id: string;
    name: string;
  }

  let { checked = $bindable(false), id, name }: Props = $props();

  const dispatch = createEventDispatcher();

  function toggle(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch("change", target.checked);
  }
</script>

<label class="switch">
  <input
    {id}
    {name}
    type="checkbox"
    bind:checked
    onchange={toggle} />
  <span class="slider round"></span>
</label>

<style>
  .switch {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.4s;
    cursor: pointer;
    background-color: #ccc;
  }

  .slider:before {
    position: absolute;
    bottom: 4px;
    left: 4px;
    transition: 0.4s;
    background-color: white;
    width: 26px;
    height: 26px;
    content: "";
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
