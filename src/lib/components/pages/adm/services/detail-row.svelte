<script lang="ts">
  import ServiceDuration from "$lib/components/pages/adm/services/duration.svelte";
  import ChevronRight from "lucide-svelte/icons/chevron-right";

  const { service, handleAddService } = $props();
</script>

<section
  role="button"
  tabindex="0"
  onclick={() => handleAddService(service)}
  onkeydown={e => e.key === "Enter" && handleAddService(service)}>
  <div class="service-info-summary">
    <p class="serviceName">
      {service.name}
    </p>
    <div class="price-duration">
      <div class="price">
        &dollar;{service.price}
      </div>
      <ServiceDuration duration={service.duration} />
    </div>
  </div>

  <div class="description">
    <span>
      <ChevronRight
        size={12}
        className="chevy" />
    </span>
    <p>
      {service.description}
    </p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--size-4);
    border-bottom: 1px solid var(--color-gray-2);
    font-size: var(--font-size-1);
  }
  section:hover {
    background-color: var(--gray-1);
    cursor: pointer;
  }
  .service-info-summary {
    display: flex;
    justify-content: space-between;
  }
  .description {
    max-inline-size: var(--size-content-1);
    display: grid;
    gap: var(--size-2);
    grid-template-columns: auto 1fr;
    color: var(--text-2);
    & p {
      font-size: var(--font-size-0);
    }
    & span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .price {
    font-weight: var(--font-weight-3);
    justify-self: end;
  }
</style>
