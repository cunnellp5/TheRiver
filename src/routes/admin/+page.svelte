<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import Info from "lucide-svelte/icons/info";
  import { explainers } from "./info";
</script>

<div class="adminIntroCardWrapper">
  <Card.Root>
    <Card.Header>
      <Card.Title>Admin home</Card.Title>
    </Card.Header>
  </Card.Root>
</div>

<details open>
  <summary> Website architecture </summary>
  <ul>
    {#each explainers as explainer}
      <li class="information">
        <a
          href={explainer.href}
          target="_blank"
          rel="noopener noreferrer">
          {explainer.text}
        </a>
        <p>- {explainer.shortDescription}</p>
        <div
          class="infoWrapper"
          title={explainer.longDescription}>
          <Info size={16} />
        </div>
      </li>
    {/each}
  </ul>
</details>
<br />
<details>
  <summary> Tools </summary>
  <ol>
    <span>Tech</span>
    <li>Sveltekit - Meta framework [Typescript]</li>
    <li>Prisma - ORM wrapper for db queries</li>
    <li>PostgreSQL - The database language</li>
  </ol>
  <ol>
    <span>Other tools</span>
    <li>oslo - auth utilities like encryption</li>
    <li>quill - renders blog</li>
    <li>valibot - validates user input</li>
    <li>eslint - code rules</li>
    <li>lucide - icons</li>
  </ol>
  <ol>
    <span>Misc</span>
    <li>
      <a
        href="/sitemap.xml"
        target="_blank"
        rel="noopener noreferrer">/sitemap.xml</a> - for seo
    </li>
    <li>
      <a
        href="/humans.txt"
        target="_blank"
        rel="noopener noreferrer">
        /humans.txt
      </a> - dev credit
    </li>
  </ol>
</details>

<style>
  ol {
    margin-inline-start: var(--size-3);
    margin-block: var(--size-7);
  }
  li {
    margin-inline-start: var(--size-2);
  }
  span {
    text-decoration: underline;
  }
  p {
    margin-block: var(--size-3);
    line-height: var(--size-3);
  }
  .information {
    display: flex;
    align-items: center;
    gap: var(--size-1);
    height: var(--size-5);
  }
  .infoWrapper {
    cursor: pointer;
  }
</style>
