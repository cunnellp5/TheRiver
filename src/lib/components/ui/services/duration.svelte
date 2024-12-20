<script lang="ts">
  const { duration } = $props();

  const time = {
    hours: Math.floor(duration / 60),
    min: duration % 60,
  };
</script>

<div class="time">
  {#if time.hours && time.min}
    {time.hours}<span class="hr"> hr </span>
    {time.min}<span class="min"> min </span>
  {/if}

  {#if time.hours && !time.min}
    {time.hours}<span class="hr"> hr </span>
  {/if}

  {#if !time.hours && time.min}
    {time.min}<span class="min"> min </span>
  {/if}
</div>

<style>
  .time {
    font-size: var(--font-size-0);
  }
  .hr,
  .min {
    /* font-size: var(--font-size-0); */
    opacity: 0.6;
    /* color: var(--text-2); */
  }
</style>
