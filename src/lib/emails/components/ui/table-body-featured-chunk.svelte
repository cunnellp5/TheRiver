<script lang="ts">
  const { img, title, subTitle, hook, link } = $props();
</script>

<td
  class="pc-grid-td-first pc-w620-itemsSpacings-0-32"
  align="left"
  valign="top"
  style="width: 50%; padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
  <table
    width="100%"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="border-collapse: separate; border-spacing: 0; width: 100%;">
    <tbody>
      <tr>
        <td
          align="left"
          valign="middle">
          <table
            align="left"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%;">
            <tbody>
              <tr>
                <td
                  align="left"
                  valign="top">
                  <table
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation">
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          valign="top"
                          style="padding: 0px 0px 20px 0px;">
                          <a
                            class="pc-font-alt"
                            href={link}
                            target="_blank"
                            style="text-decoration: none;">
                            <img
                              src={img}
                              class=""
                              width="327"
                              height="auto"
                              alt={`${title} ` + `cover art`}
                              style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  align="left"
                  valign="top">
                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation">
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="padding: 0px 0px 8px 0px;">
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                            style="border-collapse: separate; border-spacing: 0;">
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  align="left">
                                  <div
                                    class="pc-font-alt"
                                    style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: left; text-align-last: left;">
                                    <div>
                                      <span>{title}</span>
                                    </div>
                                  </div>
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
              <tr>
                <td
                  align="left"
                  valign="top">
                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation">
                    <tbody>
                      <tr>
                        <td
                          valign="top"
                          style="padding: 0px 0px 8px 0px;">
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                            style="border-collapse: separate; border-spacing: 0;">
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  align="left">
                                  <div
                                    class="pc-font-alt"
                                    style="line-height: 120%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
                                    <div>
                                      <span> {subTitle} </span>
                                    </div>
                                  </div>
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
              <tr>
                <td
                  align="left"
                  valign="top">
                  <table
                    align="left"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation">
                    <tbody>
                      <tr>
                        <td
                          class="pc-w620-spacing-0-0-20-0"
                          valign="top"
                          style="padding: 0px 0px 32px 0px;">
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            width="100%"
                            style="border-collapse: separate; border-spacing: 0;">
                            <tbody>
                              <tr>
                                <td
                                  valign="top"
                                  class="pc-w620-padding-0-0-0-0"
                                  align="left">
                                  <div
                                    class="pc-font-alt"
                                    style="line-height: 156%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
                                    <div>
                                      <span> {hook} </span>
                                    </div>
                                  </div>
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
        </td>
      </tr>
    </tbody>
  </table>
</td>
