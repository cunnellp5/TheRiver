<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import TableLogo from '../ui/TableLogo.svelte';
	import TableTitleDescription from '../ui/TableTitleDescription.svelte';

	const layerdImg =
		'https://res.cloudinary.com/dswpu3qez/image/upload/v1732155330/backgrounds/feature-collage-2_laljnw.webp';
</script>

<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
	<tbody>
		<tr>
			<td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
				<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
					<tbody>
						<tr>
							<!--[if !gte mso 9]><!-- -->
							<td
								valign="top"
								class="pc-w620-padding-32-24-32-24"
								style="padding: 40px 32px 0px 32px; border-radius: 0px; background-color: #292929;">
								<!--<![endif]-->
								<!--[if gte mso 9]>
											<td valign="top" align="center" style="background-color: #292929; border-radius: 0px;" bgcolor="#292929">
									<![endif]-->

								<!--[if gte mso 9]>
											<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 375px;">
													<v:fill color="#292929" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
													<v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
															<div style="font-size: 0; line-height: 0;">
																	<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
																			<tr>
																					<td style="font-size: 14px; line-height: 1.5;" valign="top">
																							<p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&amp;nbsp;</o:p></p>
																							<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
																									<tr>
																											<td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&amp;nbsp;</td>
																									</tr>
																									<tr>
																											<td width="32" valign="top" style="line-height: 1px; font-size: 1px;">&amp;nbsp;</td>
																											<td valign="top" align="left">
											<![endif]-->

								<TableLogo />

								<TableTitleDescription />

								<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
									<tbody>
										<tr>
											<td align="center" valign="top" style="padding: 0px 0px 0px 0px;">
												<a
													class="pc-font-alt"
													href={WEBSITE_URL}
													target="_blank"
													style="text-decoration: none;">
													<img
														src={layerdImg}
														class=""
														width="327"
														height="auto"
														alt="layered three piece header art"
														style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;" />
												</a>
											</td>
										</tr>
									</tbody>
								</table>

								<!--[if gte mso 9]>
																											</td>
																											<td width="32" style="line-height: 1px; font-size: 1px;" valign="top">&amp;nbsp;</td>
																									</tr>
																									<tr>
																											<td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&amp;nbsp;</td>
																									</tr>
																							</table>
																					</td>
																			</tr>
																	</table>
															</div>
															<p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&amp;nbsp;</o:p></p>
													</v:textbox>
											</v:rect>
											<![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
