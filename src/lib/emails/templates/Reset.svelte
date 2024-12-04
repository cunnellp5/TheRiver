<script lang="ts">
  import EmailFooter from "$lib/emails/components/email-footer.svelte";
  import EmailImg from "$lib/emails/components/email-img.svelte";
  import Button from "$lib/emails/components/ui/button.svelte";
  import Container from "$lib/emails/components/ui/container.svelte";
  import Heading from "$lib/emails/components/ui/heading.svelte";
  import Preview from "$lib/emails/components/ui/preview.svelte";
  import Section from "$lib/emails/components/ui/section.svelte";
  import Text from "$lib/emails/components/ui/text.svelte";
  import { button, container, heading, unsubscribe } from "../email-styles";

  interface Props {
    token?: any;
  }

  const { token = null }: Props = $props();

  const previewText =
    "Password reset link - Expires in 24 hours - click the button to reset your password";
</script>

<svelte:head>
  <meta
    http-equiv="content-type"
    content="text/html; charset=UTF-8" />
  <meta
    name="description"
    content="Reset Email link for The River" />
  <title>Reset Password</title>
</svelte:head>

<main>
  <Preview preview={previewText} />
  <Section>
    <Container style={container}>
      <EmailImg />

      <Heading style={heading}>Click to reset your password</Heading>

      <Text style={unsubscribe}>Expires in 24 hours</Text>

      <Button
        pY={19}
        style={button}
        href="https://theriversings.com/reset/{token}">
        Reset Password
      </Button>

      <EmailFooter />
    </Container>
  </Section>
</main>
