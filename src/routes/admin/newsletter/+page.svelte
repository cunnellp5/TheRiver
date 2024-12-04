<script lang="ts">
  import * as Card from "$lib/components/ui/shadcn/card";
  import * as Table from "$lib/components/ui/shadcn/table";

  const { data } = $props();
  const { newsLetter } = data;

  const WELCOME_URL = "api/emails/welcome";
  const MY_EMAIL = "philip.cunnell@colorado.edu";
  const headers = {
    "Content-Type": "application/json",
  };

  async function sendWelcome() {
    console.log("sending welcome email");
    try {
      const response = await fetch(WELCOME_URL, {
        method: "POST",
        body: JSON.stringify({
          subject: "TESTING WELCOME EMAIL",
          email: MY_EMAIL,
          token: "",
        }),
        headers,
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  async function sendReset() {
    console.log("sending reset email");
  // const response = await fetch(WELCOME_URL, {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		subject: 'TESTING WELCOME EMAIL',
		// 		email: MY_EMAIL
		// 	}),
		// 	headers
		// });

		// console.log(response);
  }

  async function sendBasicTemplate() {
    console.log("sending reset email");
    try {
      const response = await fetch("api/emails/newsletter", {
        method: "POST",
        body: JSON.stringify({
          subject: "TESTING BASIC TEMPLATE EMAIL",
          email: MY_EMAIL,
          token: "",
        }),
        headers,
      });
    }
    catch (error) {
      console.log(error);
    }
  }
</script>

<section>
  <div class="adminIntroCardWrapper">
    <Card.Root>
      <Card.Header>
        <Card.Title>Subscribers</Card.Title>
        <Card.Description>
          This page shows a list of people who subscribed to the newsletter
        </Card.Description>
        <Card.Description>
          1. Should be able to send a newsletter to all subscribers
        </Card.Description>
        <Card.Description>2. Should be able to download into a csv file</Card.Description>
        <Card.Description>
          3. Should be able to copy all emails to clipboard and formatted properly
        </Card.Description>
        <Card.Description>
          4. This page should be able to generate a newsletter email and send one
        </Card.Description>
      </Card.Header>
    </Card.Root>
  </div>

  <div class="articles">
    <article>
      <h3>List of Users</h3>
      {#if data}
        <Table.Root>
          <Table.Caption>A list of your subscribers.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>email ({newsLetter.length})</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {#each newsLetter as subscriber, i}
              <Table.Row>
                <Table.Cell>{subscriber.email}</Table.Cell>
              </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      {:else}
        <p>no subscribers</p>
      {/if}
    </article>
    <article>
      <h3>Create Newsletter</h3>
      <form>
        <label for="includeLogo">include logo</label>
        <input type="checkbox" id="includeLogo" name="includeLogo" required />

        <label for="includeLogo">include logo</label>
        <input type="checkbox" id="includeLogo" name="includeLogo" required />

        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </form>
      <!-- <button>Test Email</button> -->
      <!-- <button>Send for real</button> -->

      <button onclick={sendWelcome}>welcome</button>
      <button onclick={sendReset}>reset</button>
      <button onclick={sendBasicTemplate}>sendBasicTemplate</button>
    </article>
  </div>
  <aside>
    <h3>below is a shit render of the template</h3>
    {@html data.html}
  </aside>
</section>

<style>
	article {
		width: var(--size-md);
	}

	form {
		display: flex;
		flex-direction: column;
		/* gap: var(--size-7); */
	}
	.articles {
		display: flex;
	}
	aside {
		margin: 0 auto;
		width: fit-content;
	}
</style>
