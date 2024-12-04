<script lang="ts">
  import EmailFooter from "../components/email-footer.svelte";
  import EmailImg from "../components/email-img.svelte";
  import Button from "../components/ui/Button.svelte";
  import Container from "../components/ui/Container.svelte";
  import Heading from "../components/ui/Heading.svelte";
  import Preview from "../components/ui/Preview.svelte";
  import Section from "../components/ui/Section.svelte";
  import Text from "../components/ui/Text.svelte";
  import { button, container, heading, unsubscribe } from "../emailStyles";

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
