<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<!-- inspired by https://designmodo.com/email-templates/ -->
<script lang="ts">
  import Preview from "$lib/emails/components/ui/Preview.svelte";
  import Head from "$lib/emails/components/welcome/Head.svelte";
  import News from "../components/newsletter/News.svelte";
  import NewsHeader from "../components/newsletter/NewsHeader.svelte";
  import Footer from "../components/welcome/Footer.svelte";

  const { token } = $props();
</script>

<Head />

<main>
  <Preview preview="NewsLetter from The River" />
  <section
    class="body pc-font-alt"
    style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #a4b8c0;">
    <table
      class="pc-project-body"
      style="table-layout: fixed; min-width: 600px; background-color: #a4b8c0;"
      bgcolor="#a4b8c0"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      role="presentation">
      <tbody>
        <tr>
          <td align="center" valign="top">
            <table
              class="pc-project-container"
              align="center"
              width="600"
              style="width: 600px; max-width: 600px;"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation">
              <tbody>
                <tr>
                  <td
                    class="pc-w620-padding-0-0-0-0"
                    style="padding: 20px 0px 20px 0px;"
                    align="left"
                    valign="top">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      width="100%"
                      style="width: 100%;">
                      <tbody>
                        <tr>
                          <td valign="top">
                            <NewsHeader />
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <News />
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <Footer {token} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Fix for Gmail on iOS -->
    <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  </section>
</main>
