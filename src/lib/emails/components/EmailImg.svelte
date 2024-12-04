<script lang="ts">
  import LOGO_URL from "$lib/data/LogoURL";
  import { WEBSITE_URL } from "$lib/data/WEBSITE_URL";
  import { logoImage } from "../emailStyles";
  import Img from "./ui/Img.svelte";
  import Link from "./ui/Link.svelte";
</script>

<Link href={WEBSITE_URL}>
  <Img src={LOGO_URL} width="580" height="172" style={logoImage} alt="TheRiver" />
</Link>
