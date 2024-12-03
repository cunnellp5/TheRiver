<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
	import socialLinks from '$lib/data/socialLinks';
	import TableBodyFeaturedChunk from '../ui/TableBodyFeaturedChunk.svelte';

	const baseCloudinaryUrl = 'https://res.cloudinary.com/dswpu3qez/image/upload';
	const imgConfig = 'w_250,ar_1:1,c_fill,g_auto';

	const data = [
		{
			title: 'BODY LANGUAGE',
			subTitle: 'Is She The Emerging Talent Your Playlist Needs?',
			hook: 'Discover the voice of The River.',
			img: `${baseCloudinaryUrl}/${imgConfig}/emails/body_language_cover.webp`,
			link: 'https://open.spotify.com/track/5OyLCwJBSmzd9eQ4DXQloR?si=323a53b406b24af6'
		},
		{
			title: 'HOURS',
			subTitle: 'A hip-hop/R&B Song About Anger and Empowerment.',
			hook: "You cant save me, I'll save myself.",
			img: `${baseCloudinaryUrl}/${imgConfig}/v1724876045/TheRiver/hoursArticle_dzx2l6.webp`,
			link: 'https://ratingsgamemusic.com/2022/01/08/the-river-delivers-angry-verses-on-hours/'
		},
		{
			title: 'HANDMADE',
			subTitle: 'High-Quality Merch: Jewelry and Clothes',
			hook: 'Get exclusive merch.',
			img: `${baseCloudinaryUrl}/${imgConfig}/emails/jean_jacket.webp`,
			link: socialLinks.etsy
		},
		{
			title: 'BOOK SERVICE',
			subTitle: 'Hair and nails',
			hook: 'Want to look fucking hot? hmu.',
			img: `${baseCloudinaryUrl}/${imgConfig}/emails/vaguely_relatable.webp`,
			link: 'https://the-river-sings.square.site/'
		}
	];
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
								class="pc-w620-padding-20-24-32-24"
								style="padding: 36px 32px 56px 32px; border-radius: 0px; background-color: #292929;">
								<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
									<tbody>
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
													<tbody>
														<tr>
															<td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
																<div
																	class="pc-font-alt"
																	style="line-height: 160%; letter-spacing: 4px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 600; font-variant-ligatures: normal; color: #00ff83; text-align: center; text-align-last: center;">
																	<div><span>FEATURED ON THE RIVER</span></div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
									<tbody>
										<tr>
											<td class="pc-w620-spacing-0-0-32-0" style="padding: 0px 0px 40px 0px;">
												<table
													class="pc-width-fill pc-w620-gridCollapsed-1"
													width="100%"
													border="0"
													cellpadding="0"
													cellspacing="0"
													role="presentation">
													<tbody>
														<tr class="pc-grid-tr-first pc-grid-tr-last">
															<TableBodyFeaturedChunk
																img={data[0].img}
																title={data[0].title}
																subTitle={data[0].subTitle}
																hook={data[0].hook}
																link={data[0].link} />
															<TableBodyFeaturedChunk
																img={data[1].img}
																title={data[1].title}
																subTitle={data[1].subTitle}
																hook={data[1].hook}
																link={data[1].link} />
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
									<tbody>
										<tr>
											<td>
												<table
													class="pc-width-fill pc-w620-gridCollapsed-1"
													width="100%"
													border="0"
													cellpadding="0"
													cellspacing="0"
													role="presentation">
													<tbody>
														<tr class="pc-grid-tr-first pc-grid-tr-last">
															<TableBodyFeaturedChunk
																img={data[2].img}
																title={data[2].title}
																subTitle={data[2].subTitle}
																hook={data[2].hook}
																link={data[2].link} />
															<TableBodyFeaturedChunk
																img={data[3].img}
																title={data[3].title}
																subTitle={data[3].subTitle}
																hook={data[3].hook}
																link={data[3].link} />
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
