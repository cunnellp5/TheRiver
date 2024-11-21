<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
	import socialLinks from '$lib/data/socialLinks';
	const SPOTIFY_BODY_LANGUAGE_LINK =
		'https://open.spotify.com/track/5OyLCwJBSmzd9eQ4DXQloR?si=323a53b406b24af6';
	const BODY_LANGUAGE_IMG =
		'https://res.cloudinary.com/dswpu3qez/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/emails/body_language_cover.webp';
	const HOURS_ARTICLE =
		'https://ratingsgamemusic.com/2022/01/08/the-river-delivers-angry-verses-on-hours/';
	const HOURS_IMG =
		'https://res.cloudinary.com/dswpu3qez/image/upload/v1724876045/TheRiver/hoursArticle_dzx2l6.webp';

	const VAGUELY_RELATABLE_EP = 'https://open.spotify.com/album/7ebwm8jySweIyTwBjvLjNY';
	const VAGUELY_RELATABLE_IMG =
		'https://res.cloudinary.com/dswpu3qez/image/upload/w_1000,ar_1:1,c_fill,g_auto/emails/vaguely_relatable.webp';

	const JACKET_IMG =
		'https://res.cloudinary.com/dswpu3qez/image/upload/w_1000,ar_1:1,c_auto,e_art:hokusai/emails/jean_jacket.webp';
</script>

<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
	<tr>
		<td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
			<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
				<tr>
					<td
						valign="top"
						class="pc-w620-padding-20-24-32-24"
						style="padding: 36px 32px 56px 32px; border-radius: 0px; background-color: #002333;">
						<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
							<tr>
								<td
									class="pc-w620-spacing-0-0-24-0"
									align="center"
									valign="top"
									style="padding: 0px 0px 20px 0px;">
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										width="100%"
										style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
										<tr>
											<td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
												<div
													class="pc-font-alt"
													style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: center; text-align-last: center;">
													<div><span>FEATURED ON THE RIVER</span></div>
												</div>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
							<tr>
								<td class="pc-w620-spacing-0-0-32-0" style="padding: 0px 0px 40px 0px;">
									<table
										class="pc-width-fill pc-w620-gridCollapsed-1"
										width="100%"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation">
										<tr class="pc-grid-tr-first pc-grid-tr-last">
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
													<tr>
														<td align="left" valign="middle">
															<table
																align="left"
																width="100%"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="width: 100%;">
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td
																					align="left"
																					valign="top"
																					style="padding: 0px 0px 20px 0px;">
																					<a
																						class="pc-font-alt"
																						href={SPOTIFY_BODY_LANGUAGE_LINK}
																						target="_blank"
																						style="text-decoration: none;">
																						<img
																							src={BODY_LANGUAGE_IMG}
																							class=""
																							width="327"
																							height="auto"
																							alt="Body language cover art"
																							style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
																					</a>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: left; text-align-last: left;">
																									<div>
																										<span>BODY LANGUAGE</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 120%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span>
																											Is She the Emerging Talent Your Playlist
																											Needs?
																										</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
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
																						<tr>
																							<td
																								valign="top"
																								class="pc-w620-padding-0-0-0-0"
																								align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 156%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span> Discover the voice of The River. </span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<th
																					align="left"
																					style="vertical-align: top; text-align: left; font-weight: normal; line-height: 1;">
																					<!--[if mso]>
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
							<tr>
									<td valign="middle" align="center" style="background-color: #00ff83; text-align:center; color: #ffffff; padding: 8px 24px 8px 24px; mso-padding-left-alt: 0; margin-left:24px;" bgcolor="#00ff83">
																			<a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #002333;" href="https://open.spotify.com/track/5OyLCwJBSmzd9eQ4DXQloR?si=323a53b406b24af6" target="_blank"><span style="display: block;"><span>LISTEN NOW</span></span></a>
																	</td>
							</tr>
					</table>
					<![endif]-->

																					<!--[if !mso]><!-- -->
																					<a
																						style="display: inline-block; box-sizing: border-box; background-color: #00ff83; padding: 8px 24px 8px 24px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; color: #002333; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;"
																						href={SPOTIFY_BODY_LANGUAGE_LINK}
																						target="_blank">
																						<span style="display: block;">
																							<span> LISTEN NOW </span>
																						</span>
																					</a>
																					<!--<![endif]-->
																				</th>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
											<td
												class="pc-grid-td-last pc-w620-itemsSpacings-0-32"
												align="left"
												valign="top"
												style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
												<table
													width="100%"
													border="0"
													cellpadding="0"
													cellspacing="0"
													role="presentation"
													style="border-collapse: separate; border-spacing: 0; width: 100%;">
													<tr>
														<td align="left" valign="middle">
															<table
																align="left"
																width="100%"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="width: 100%;">
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td
																					align="left"
																					valign="top"
																					style="padding: 0px 0px 20px 0px;">
																					<a
																						class="pc-font-alt"
																						href={HOURS_ARTICLE}
																						target="_blank"
																						style="text-decoration: none;">
																						<img
																							src={HOURS_IMG}
																							class=""
																							width="327"
																							height="auto"
																							alt="hours cover art"
																							style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
																					</a>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: left; text-align-last: left;">
																									<div>
																										<span>HOURS</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 120%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span>
																											A hip-hop/R&B Song About Anger and
																											Empowerment.
																										</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
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
																						<tr>
																							<td
																								valign="top"
																								class="pc-w620-padding-0-0-0-0"
																								align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 156%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span>
																											You cant save me, I'll save myself.
																										</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<th
																					align="left"
																					style="vertical-align: top; text-align: left; font-weight: normal; line-height: 1;">
																					<!--[if mso]>
																					<table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td 
																								valign="middle" 
																								align="center" 
																								style="background-color: #00ff83; text-align:center; color: #ffffff; padding: 8px 24px 8px 24px; mso-padding-left-alt: 0; margin-left:24px;" bgcolor="#00ff83">
																									<a
																										class="pc-font-alt"
																										style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #002333;"
																										href="https://ratingsgamemusic.com/2022/01/08/the-river-delivers-angry-verses-on-hours/" 
																										target="_blank">
																											<span style="display: block;">
																												<span>READ MORE</span>
																											</span>
																									</a>
																							</td>
																						</tr>
																					</table>
																					<![endif]-->

																					<!--[if !mso]><!-- -->
																					<a
																						style="display: inline-block; box-sizing: border-box; background-color: #00ff83; padding: 8px 24px 8px 24px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; color: #002333; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;"
																						href={HOURS_ARTICLE}
																						target="_blank">
																						<span style="display: block;">
																							<span>READ MORE</span>
																						</span>
																					</a>
																					<!--<![endif]-->
																				</th>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>

						<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
							<tr>
								<td>
									<table
										class="pc-width-fill pc-w620-gridCollapsed-1"
										width="100%"
										border="0"
										cellpadding="0"
										cellspacing="0"
										role="presentation">
										<tr class="pc-grid-tr-first pc-grid-tr-last">
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
													<tr>
														<td align="left" valign="middle">
															<table
																align="left"
																width="100%"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="width: 100%;">
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td
																					align="left"
																					valign="top"
																					style="padding: 0px 0px 20px 0px;">
																					<a
																						class="pc-font-alt"
																						href={socialLinks.etsy}
																						target="_blank"
																						style="text-decoration: none;">
																						<img
																							src={JACKET_IMG}
																							class=""
																							width="327"
																							height="auto"
																							alt="jean jacket"
																							style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
																					</a>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: left; text-align-last: left;">
																									<div>
																										<span>HANDMADE</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 120%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span>
																											High-Quality Merch: Jewelry and Clothes
																										</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
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
																						<tr>
																							<td
																								valign="top"
																								class="pc-w620-padding-0-0-0-0"
																								align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 156%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span> Get exclusive merch.</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<th
																					align="left"
																					style="vertical-align: top; text-align: left; font-weight: normal; line-height: 1;">
																					<!--[if mso]>
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
							<tr>
									<td valign="middle" align="center" style="background-color: #00ff83; text-align:center; color: #ffffff; padding: 8px 24px 8px 24px; mso-padding-left-alt: 0; margin-left:24px;" bgcolor="#00ff83">
																			<a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #002333;" href="https://www.etsy.com/shop/MadeByTheRiverBed" target="_blank"><span style="display: block;"><span>SHOP NOW</span></span></a>
																	</td>
							</tr>
					</table>
					<![endif]-->

																					<!--[if !mso]><!-- -->
																					<a
																						style="display: inline-block; box-sizing: border-box; background-color: #00ff83; padding: 8px 24px 8px 24px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; color: #002333; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;"
																						href={socialLinks.etsy}
																						target="_blank">
																						<span style="display: block;">
																							<span>SHOP NOW</span>
																						</span>
																					</a>
																					<!--<![endif]-->
																				</th>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
											<td
												class="pc-grid-td-last pc-w620-itemsSpacings-0-32"
												align="left"
												valign="top"
												style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
												<table
													width="100%"
													border="0"
													cellpadding="0"
													cellspacing="0"
													role="presentation"
													style="border-collapse: separate; border-spacing: 0; width: 100%;">
													<tr>
														<td align="left" valign="middle">
															<table
																align="left"
																width="100%"
																border="0"
																cellpadding="0"
																cellspacing="0"
																role="presentation"
																style="width: 100%;">
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td
																					align="left"
																					valign="top"
																					style="padding: 0px 0px 20px 0px;">
																					<a
																						class="pc-font-alt"
																						href={VAGUELY_RELATABLE_EP}
																						target="_blank"
																						style="text-decoration: none;">
																						<img
																							src={VAGUELY_RELATABLE_IMG}
																							class=""
																							width="327"
																							height="auto"
																							alt="Vaguely relatable ep cover art"
																							style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
																					</a>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: left; text-align-last: left;">
																									<div>
																										<span>VAGUELY RELATABLE</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<td valign="top" style="padding: 0px 0px 8px 0px;">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						role="presentation"
																						width="100%"
																						style="border-collapse: separate; border-spacing: 0;">
																						<tr>
																							<td valign="top" align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 120%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span>
																											A Must-Hear EP to Elevate Your Playlist
																										</span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			align="left"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
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
																						<tr>
																							<td
																								valign="top"
																								class="pc-w620-padding-0-0-0-0"
																								align="left">
																								<div
																									class="pc-font-alt"
																									style="line-height: 156%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
																									<div>
																										<span> Want instant vibes? Tune in. </span>
																									</div>
																								</div>
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top">
																		<table
																			width="100%"
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			role="presentation">
																			<tr>
																				<th
																					align="left"
																					style="vertical-align: top; text-align: left; font-weight: normal; line-height: 1;">
																					<!--[if mso]>
																						<table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
																							<tr>
																								<td 
																									valign="middle"
																									align="center"
																									style="background-color: #00ff83; text-align:center; color: #ffffff; padding: 8px 24px 8px 24px; mso-padding-left-alt: 0; margin-left:24px;" bgcolor="#00ff83">
																									<a 
																										class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #002333;" 
																										href="https://open.spotify.com/album/7ebwm8jySweIyTwBjvLjNY" 
																										target="_blank">
																										<span style="display: block;">
																											<span>SPOTIFY PLAYIST</span>
																										</span>
																									</a>
																								</td>
																							</tr>
																						</table>
																						<![endif]-->
																					<!--[if !mso]><!-- -->
																					<a
																						style="display: inline-block; box-sizing: border-box; background-color: #00ff83; padding: 8px 24px 8px 24px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 24px; letter-spacing: 0px; color: #002333; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;"
																						href={VAGUELY_RELATABLE_EP}
																						target="_blank">
																						<span style="display: block;">
																							<span>SPOTIFY PLAYIST</span>
																						</span>
																					</a>
																					<!--<![endif]-->
																				</th>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
