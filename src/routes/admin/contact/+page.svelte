<script lang="ts">
  import * as Card from "$lib/components/ui/shadcn/card";
  import * as Table from "$lib/components/ui/shadcn/table";
  import AdminBusinessInfoRow from "./admin-business-info-row.svelte";

  const { data } = $props();
  const { business } = $derived(data);
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Contact</Card.Title>
      <Card.Description>Contact information for the website</Card.Description>
    </Card.Header>
  </Card.Root>
</div>

<div class="adminIntroCardWrapper">
  <Table.Root>
    <Table.Caption>Contact information</Table.Caption>
    <Table.Header>
      <Table.Row>The River LLC</Table.Row>
    </Table.Header>
    <Table.Body>
      {#if business}
        {#each Object.entries(business) as [key, value]}
          <AdminBusinessInfoRow
            {key}
            {value}
            id={business.id} />
        {/each}
      {/if}
    </Table.Body>
  </Table.Root>
</div>
