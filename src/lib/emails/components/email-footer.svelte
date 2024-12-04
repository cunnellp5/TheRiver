<script lang="ts">
  import socialLinks from "$lib/data/social-links";
  import { WEBSITE_URL } from "$lib/data/website-url";
  import { fontFamily, hr, link, paragraph } from "../email-styles";
  import Hr from "./ui/hr.svelte";
  import Link from "./ui/link.svelte";
  import Text from "./ui/text.svelte";

  const unsubscribe = {
    fontFamily,
    // color: '#9ca299',
    fontSize: "10px",
    margin: "unset",
  };
  const address = {
    fontFamily,
    color: "#9ca299",
    fontSize: "12px",
    margin: "0",
    lineHeight: "16px",
  };
</script>

<Hr style={hr} />
<Text style={{ ...paragraph, fontSize: "12px", display: "flex", justifyContent: "center" }}>
  <!-- Social Links -->
  <Link
    href={socialLinks.facebook}
    style={link}>
    FaceBook
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.instagramSing}
    style={link}>
    Insta[Sing]
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.instagramBeauty}
    style={link}>
    Insta[Beauty]
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.x}
    style={link}>
    Twitter
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.tiktok}
    style={link}>TikTok</Link>
</Text>
<Text style={{ ...paragraph, fontSize: "12px", display: "flex", justifyContent: "center" }}>
  <!-- Music Links -->
  <Link
    href={socialLinks.soundCloud}
    style={link}>
    SoundCloud
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.spotify}
    style={link}>
    Spotify
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.youtube}
    style={link}>YouTube</Link>
</Text>
<Text style={{ ...paragraph, fontSize: "12px", display: "flex", justifyContent: "center" }}>
  <!-- Merch and other Links -->
  <Link
    href={socialLinks.etsy}
    style={link}>
    Etsy
  </Link>
  &nbsp;•&nbsp;
  <Link
    href={socialLinks.linkTree}
    style={link}>LinkTree</Link>
</Text>
<Text style={address}>The River</Text>
<Text style={address}>Denver, CO</Text>
<Text>
  <Link
    href={`${WEBSITE_URL}/unsubscribe`}
    style={{ ...unsubscribe }}>Unsubscribe</Link>
</Text>
