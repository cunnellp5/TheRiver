<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
	import ThumbnailLogoWhiteTransparentBG from '$lib/data/ThumbnailLogoWhiteTransparentBG';
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import socialLinks from '$lib/data/socialLinks';
	const { token } = $props();

	// const unsubscribeRouteDev = `http://localhost:5173/unsubscribe/${token}`;
	const unsubscribeRoute = `${WEBSITE_URL}/unsubscribe/${token}`;
</script>

<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
	<tbody>
		<tr>
			<td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
				<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
					<tbody>
						<tr>
							<td
								valign="top"
								class="pc-w620-padding-32-24-32-24"
								style="padding: 32px 32px 32px 32px; border-radius: 0px; background-color: #292929;">
								<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
									<tbody>
										<tr>
											<td
												class="pc-w620-valign-middle pc-w620-halign-center"
												style="padding: 0px 0px 32px 0px;">
												<table
													class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-width-fill pc-w620-halign-center"
													width="100%"
													border="0"
													cellpadding="0"
													cellspacing="0"
													role="presentation">
													<tbody>
														<tr class="pc-grid-tr-first pc-grid-tr-last">
															<td
																class="pc-grid-td-first pc-w620-itemsSpacings-0-40"
																align="right"
																valign="bottom"
																style="width: 50%; padding-top: 0px; padding-right: 80px; padding-bottom: 0px; padding-left: 0px;">
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
																				class="pc-w620-halign-left pc-w620-valign-middle"
																				align="left"
																				valign="middle">
																				<table
																					class="pc-w620-halign-left"
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
																								class="pc-w620-halign-left"
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
																												class="pc-w620-halign-left"
																												align="left"
																												valign="top"
																												style="padding: 0px 0px 24px 0px;">
																												<img
																													src={ThumbnailLogoWhiteTransparentBG}
																													class="pc-w620-width-100 pc-w620-height-auto pc-w620-align-left"
																													width="120"
																													height="53"
																													alt=""
																													style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:120px; height: auto; max-width: 100%; border: 0;" />
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																						</tr>
																						<tr>
																							<td
																								class="pc-w620-halign-left"
																								align="left"
																								valign="top">
																								<table
																									class="pc-w620-halign-left"
																									align="left"
																									border="0"
																									cellpadding="0"
																									cellspacing="0"
																									role="presentation">
																									<tbody>
																										<tr>
																											<td
																												class="pc-w620-valign-middle pc-w620-halign-left"
																												align="left">
																												<table
																													class="pc-width-hug pc-w620-gridCollapsed-0 pc-w620-halign-left"
																													align="left"
																													border="0"
																													cellpadding="0"
																													cellspacing="0"
																													role="presentation">
																													<tbody>
																														<tr
																															class="pc-grid-tr-first pc-grid-tr-last">
																															<td
																																class="pc-grid-td-first pc-w620-itemsSpacings-16-0"
																																valign="middle"
																																style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">
																																<table
																																	border="0"
																																	cellpadding="0"
																																	cellspacing="0"
																																	role="presentation"
																																	style="border-collapse: separate; border-spacing: 0;">
																																	<tbody>
																																		<tr>
																																			<td
																																				class="pc-w620-halign-left pc-w620-valign-middle"
																																				align="left"
																																				valign="middle">
																																				<table
																																					class="pc-w620-halign-left"
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
																																								class="pc-w620-halign-left"
																																								align="left"
																																								valign="top">
																																								<table
																																									class="pc-w620-halign-left"
																																									align="left"
																																									border="0"
																																									cellpadding="0"
																																									cellspacing="0"
																																									role="presentation">
																																									<tbody>
																																										<tr>
																																											<td
																																												valign="top">
																																												<a
																																													href={socialLinks.facebook}
																																													target="_blank"
																																													style="text-decoration: none; color: #ffffff;">
																																													<img
																																														src="https://api-postcards.designmodo.com/images/temp/20e91cbdbff647118aface779dadf4ad.png"
																																														class=""
																																														width="20"
																																														height="20"
																																														style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;"
																																														alt="facebook icon" />
																																												</a>
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
																															<td
																																class="pc-w620-itemsSpacings-16-0"
																																valign="middle"
																																style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
																																<table
																																	border="0"
																																	cellpadding="0"
																																	cellspacing="0"
																																	role="presentation"
																																	style="border-collapse: separate; border-spacing: 0;">
																																	<tbody>
																																		<tr>
																																			<td
																																				class="pc-w620-halign-left pc-w620-valign-middle"
																																				align="left"
																																				valign="middle">
																																				<table
																																					class="pc-w620-halign-left"
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
																																								class="pc-w620-halign-left"
																																								align="left"
																																								valign="top">
																																								<table
																																									class="pc-w620-halign-left"
																																									align="left"
																																									border="0"
																																									cellpadding="0"
																																									cellspacing="0"
																																									role="presentation">
																																									<tbody>
																																										<tr>
																																											<td
																																												valign="top">
																																												<a
																																													href={socialLinks.x}
																																													target="_blank"
																																													style="text-decoration: none; color: #ffffff;">
																																													<img
																																														src="https://api-postcards.designmodo.com/images/temp/9586dca9d010e39343776919fc1220d8.png"
																																														class=""
																																														width="22"
																																														height="22"
																																														style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:22px; height:22px;"
																																														alt="twitter icon" />
																																												</a>
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
																															<td
																																class="pc-w620-itemsSpacings-16-0"
																																valign="middle"
																																style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;">
																																<table
																																	border="0"
																																	cellpadding="0"
																																	cellspacing="0"
																																	role="presentation"
																																	style="border-collapse: separate; border-spacing: 0;">
																																	<tbody>
																																		<tr>
																																			<td
																																				class="pc-w620-halign-left pc-w620-valign-middle"
																																				align="left"
																																				valign="middle">
																																				<table
																																					class="pc-w620-halign-left"
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
																																								class="pc-w620-halign-left"
																																								align="left"
																																								valign="top">
																																								<table
																																									class="pc-w620-halign-left"
																																									align="left"
																																									border="0"
																																									cellpadding="0"
																																									cellspacing="0"
																																									role="presentation">
																																									<tbody>
																																										<tr>
																																											<td
																																												valign="top">
																																												<a
																																													href={socialLinks.instagramSing}
																																													target="_blank"
																																													style="text-decoration: none; color: #ffffff;">
																																													<img
																																														src="https://api-postcards.designmodo.com/images/temp/67383282fc6e96758be7bca7579bdc10.png"
																																														class=""
																																														width="20"
																																														height="20"
																																														style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;"
																																														alt="instagram icon" />
																																												</a>
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
																															<td
																																class="pc-grid-td-last pc-w620-itemsSpacings-16-0"
																																valign="middle"
																																style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px;">
																																<table
																																	border="0"
																																	cellpadding="0"
																																	cellspacing="0"
																																	role="presentation"
																																	style="border-collapse: separate; border-spacing: 0;">
																																	<tbody>
																																		<tr>
																																			<td
																																				class="pc-w620-halign-left pc-w620-valign-middle"
																																				align="left"
																																				valign="middle">
																																				<table
																																					class="pc-w620-halign-left"
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
																																								class="pc-w620-halign-left"
																																								align="left"
																																								valign="top">
																																								<table
																																									class="pc-w620-halign-left"
																																									align="left"
																																									border="0"
																																									cellpadding="0"
																																									cellspacing="0"
																																									role="presentation">
																																									<tbody>
																																										<tr>
																																											<td
																																												valign="top">
																																												<a
																																													href={socialLinks.youtube}
																																													target="_blank"
																																													style="text-decoration: none; color: #ffffff;">
																																													<img
																																														src="https://api-postcards.designmodo.com/images/temp/2c02b651893cfff58b96e931472c36ae.png"
																																														class=""
																																														width="20"
																																														height="20"
																																														style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;"
																																														alt="youtube icon" />
																																												</a>
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
										</tr>
									</tbody>
								</table>
								{#if token}
									<table
										width="100%"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation">
										<tbody>
											<tr>
												<td align="left" valign="top">
													<table
														border="0"
														cellpadding="0"
														cellspacing="0"
														role="presentation"
														width="100%"
														align="left"
														style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
														<tbody>
															<tr>
																<td valign="top" align="left">
																	<div
																		class="pc-font-alt"
																		style="line-height: 140%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																		<div>
																			<span style="font-weight: 400;font-style: normal;">
																				Want to stop receiving messages from The River?
																			</span>
																			<a
																				href={unsubscribeRoute}
																				target="_blank"
																				style="text-decoration: none; color: #ffffff;">
																				<span
																					style="text-decoration: underline; font-weight: 400; font-style: normal;">
																					Unsubscribe
																				</span>
																			</a>
																			<span style="font-weight: 400;font-style: normal;"> </span>
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
								{/if}
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
