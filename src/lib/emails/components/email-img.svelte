<script lang="ts">
  import LOGO_URL from "$lib/data/logo-url";
  import { WEBSITE_URL } from "$lib/data/website-url";
  import { logoImage } from "../email-styles";
  import Img from "./ui/img.svelte";
  import Link from "./ui/link.svelte";
</script>

<Link href={WEBSITE_URL}>
  <Img
    src={LOGO_URL}
    width="580"
    height="172"
    style={logoImage}
    alt="TheRiver" />
</Link>
