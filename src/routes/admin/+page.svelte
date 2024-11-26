<script lang="ts">
	import * as Card from '$lib/components/ui/shadcn/card';
	import Info from 'lucide-svelte/icons/info';
</script>

<div class="adminIntroCardWrapper">
	<Card.Root>
		<Card.Header>
			<Card.Title>Admin home</Card.Title>
			<Card.Description>
				<p>Update all content on your website, follow links in the side menu</p>
				<p>HMU for suggestions, thoughts, changes, else i'm going to follow the roadmap below</p>
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<span> Website Links </span>
			<ul>
				<li class="information">
					<a
						href="https://vercel.com/philipcunnells-projects/the-river"
						target="_blank"
						rel="noopener noreferrer">
						Vercel
					</a>
					<p>- frontend code</p>
					<div
						class="infoWrapper"
						title="Vercel is a cloud service that hosts the code for the website, kind of like renting space for it to run on the internet. It's where we 'deploy' the project, meaning we put the code online so the website is live and accessible to anyone.">
						<Info size={16} />
					</div>
				</li>
				<li class="information">
					<a
						href="https://supabase.com/dashboard/project/lzjhvrmxgojqzvcivqxy"
						target="_blank"
						rel="noopener noreferrer">
						Supabase
					</a>
					<p>- backend code</p>
					<div
						class="infoWrapper"
						title="A database is like a storage unit for all the information the website needs to remember. Even though Vercel holds the main code that runs the site, the database needs to live in a separate place that can be accessed anytime, from anywhere. This is where Supabase comes in—it's a cloud service that specializes in managing databases. It makes sure the website can easily connect to its stored information, no matter where it's hosted.">
						<Info size={16} />
					</div>
				</li>
				<li class="information">
					<a
						href="https://console.cloudinary.com/console/c-eec98e4a9634aee381b2fe2db67b9d/media_library/homepage"
						target="_blank"
						rel="noopener noreferrer">
						Cloudinary
					</a>
					<p>- media</p>
					<div
						class="infoWrapper"
						title="Cloudinary is a service that helps store and manage images and other media for the website. It makes sure that photos, videos, and other visual content load quickly and look good, no matter the device or screen size. It also helps keep these files organized and accessible whenever the website needs them.">
						<Info size={16} />
					</div>
				</li>
				<li class="information">
					<a href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer"> goDaddy </a>
					<p>- domain</p>
					<div
						class="infoWrapper"
						title="GoDaddy is a service that helps register and manage the website's domain name, which is the address people type in to find the site (like www.example.com). It makes sure the website has a unique, easy-to-find name and keeps everything connected so people can reach the site on the internet. Otherwise we would have to use the deployed IP address to access the website">
						<Info size={16} />
					</div>
				</li>
				<li class="information">
					<a href="https://github.com/cunnellp5/TheRiver" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<p>- version control</p>
					<div
						class="infoWrapper"
						title="GitHub is a service that helps store and manage the website’s code. It’s like a safe online storage space where all the code is kept, and it also makes it easy to track changes, collaborate with others, and update the code over time. It ensures everything stays organized and versioned, so the site can keep improving smoothly">
						<Info size={16} />
					</div>
				</li>
			</ul>
		</Card.Content>
	</Card.Root>
</div>

<h4>DEV Goals / road map:</h4>
<blockquote>
	<ol>
		<span> Near term goals: </span>
		<li>Harden what we have</li>
		<li>Make it more user friendly</li>
		<li>Better designs</li>
		<li>Ensure backend is secure</li>
		<li>SEO</li>
		<li>Analytics</li>
		<li>Speed and caching</li>
	</ol>
	<ol>
		<span> Long term goals: </span>
		<li>e-Commerce platform</li>
		<li>Booking system</li>
	</ol>
</blockquote>
<h4>Todos</h4>
<ol>
	<span> Emails </span>
	<li>
		<input type="checkbox" id="reset" />
		<label for="reset">create better reset email</label>
	</li>
	<li>
		<input type="checkbox" id="unsubscribe" />
		<label for="unsubscribe">figure out unsubscribe workflow</label>
	</li>
</ol>
<ol>
	<span> Users </span>
	<li>
		<input type="checkbox" id="userTable" />
		<label for="userTable">use new table for user view</label>
	</li>
	<li>
		<input type="checkbox" id="newsLetter" />
		<label for="newsLetter">show users signed up for newsLetter to get their emails</label>
	</li>
</ol>
<ol>
	<span> About </span>
	<li>
		<input type="checkbox" id="abouts" />
		<label for="abouts">ensure about section is shown everywhere</label>
	</li>
</ol>
<ol>
	<span> Videos </span>
	<li>
		<input type="checkbox" id="videos" />
		<label for="videos">CRUD videos in admin</label>
	</li>
</ol>
<ol>
	<span> Stems </span>
	<li>
		<input type="checkbox" id="stems" />
		<label for="stems">CRUD stems in admin</label>
	</li>
</ol>
<ol>
	<span> Tracks </span>
	<li>
		<input type="checkbox" id="trackPreviews" checked />
		<label for="trackPreviews">migrate trackPreviews to db for SoundCloud widget</label>
	</li>
	<li>
		<input type="checkbox" id="deleteTracks" />
		<label for="deleteTracks">delete tracks</label>
	</li>
	<li>
		<input type="checkbox" id="editTracks" />
		<label for="editTracks">edit tracks</label>
	</li>
	<li>
		<input type="checkbox" id="createTracks" />
		<label for="createTracks">create new tracks</label>
	</li>
</ol>
<ol>
	<span> Services </span>
	<li>
		<input type="checkbox" id="addServices" />
		<label for="addServices">add the rest of the services</label>
	</li>
	<li>
		<input type="checkbox" id="editServices" />
		<label for="editServices">edit services in db</label>
	</li>
	<li>
		<input type="checkbox" id="editCategories" />
		<label for="editCategories">edit categories in db</label>
	</li>
	<li>
		<input type="checkbox" id="createServices" />
		<label for="createServices">create services in db</label>
	</li>
	<li>
		<input type="checkbox" id="createCategories" />
		<label for="createCategories">create categories in db</label>
	</li>
	<li>
		<input type="checkbox" id="deleteServices" />
		<label for="deleteServices">delete services in db</label>
	</li>
	<li>
		<input type="checkbox" id="deleteCategories" />
		<label for="deleteCategories">delete categories in db</label>
	</li>
</ol>
<ol>
	<span> Blog </span>
	<li>
		<input type="checkbox" id="splitLayout" />
		<label for="splitLayout">split slug and layout pages</label>
	</li>
	<li>
		<input type="checkbox" id="filterSearch" />
		<label for="filterSearch">add filter searching</label>
	</li>
	<li>
		<input type="checkbox" id="morter" />
		<label for="morter">layout design 'mortar' style</label>
	</li>
	<li>
		<input type="checkbox" id="image" />
		<label for="image">add img to each blog for asthetics</label>
	</li>
	<li>
		<input type="checkbox" id="hero" />
		<label for="hero">add hero image</label>
	</li>
	<li>
		<input type="checkbox" id="about" />
		<label for="about">add about section</label>
	</li>
</ol>
<ol>
	<span> Contact </span>
	<li>
		<input type="checkbox" id="ensure" />
		<label for="ensure">ensure contact info is being propagated</label>
	</li>
</ol>
<ol>
	<span> Backend </span>
	<li>
		<input type="checkbox" id="rateLimiter" />
		<label for="rateLimiter">double check the ratelimiter when a user logs in</label>
	</li>
	<li>
		<input type="checkbox" id="sentryIO" />
		<label for="sentryIO">add free tier of sentry for dev logs</label>
	</li>
	<li>
		<input type="checkbox" id="configureSiteMap" />
		<label for="configureSiteMap">configure a dynamic site map generator for new blog posts</label>
	</li>
	<li>
		<input type="checkbox" id="submittal" />
		<label for="submittal">submit sitemap to google SEO engine</label>
	</li>
</ol>
<ol>
	<span> Future Projects / Thoughts </span>
	<li>
		<input type="checkbox" id="testing" />
		<label for="testing">Add tests</label>
	</li>
	<li>
		<input type="checkbox" id="documentation" />
		<label for="documentation">Build documentation for every part of this website</label>
	</li>
	<li>
		<input type="checkbox" id="dash" />
		<label for="dash">Admin dash showing tools used for this website</label>
	</li>
	<li>
		<input type="checkbox" id="events" />
		<label for="events">Events for upcoming shows</label>
	</li>
	<li>
		<input type="checkbox" id="posters" />
		<label for="posters">Posters for previous shows or show previous events</label>
	</li>
	<li>
		<input type="checkbox" id="ecommerce" />
		<label for="ecommerce">look into the godaddy pay portal to built e-commerce</label>
	</li>
	<li>
		<input type="checkbox" id="booking" />
		<label for="booking">figure out a way to centralize booking services with alexis</label>
	</li>
</ol>
<ol>
	<span> Projects Configurations and Ownerships </span>
	<p>
		<small>
			The following isnt necessary right now, but might be a wise move if we want to make this pro.
			If I die, you can take over the projects and pass it on a lot easier.
		</small>
	</p>
	<li>
		<input type="checkbox" id="github" />
		<label for="github">consider creating a github profile with your business email</label>
	</li>
	<li>
		<input type="checkbox" id="vercel" />
		<label for="vercel">Use your email for vercel deployment</label>
	</li>
	<li>
		<input type="checkbox" id="supabase" />
		<label for="supabase">Use your email for Supabase backend</label>
	</li>
	<li>
		<input type="checkbox" id="cloud" />
		<label for="cloud">Use your email for cloudinary media</label>
	</li>
</ol>

<h4>Tools</h4>

<ol>
	<span>Tech</span>
	<li>Sveltekit - Meta framework [Typescript]</li>
	<li>Prisma - ORM wrapper for db queries</li>
	<li>PostgreSQL - The database language</li>
</ol>
<ol>
	<span>Other tools</span>
	<li>oslo - auth utilities like encryption</li>
	<li>quill - renders blog</li>
	<li>valibot - validates user input</li>
	<li>prettier - code consistency</li>
	<li>eslint - code rules</li>
	<li>lucide - icons</li>
</ol>
<ol>
	<span>Secrets</span>
	<li>
		<a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">/sitemap.xml</a> - for seo
	</li>
	<li>
		<a href="/humans.txt" target="_blank" rel="noopener noreferrer">/humans.txt</a> - dev credit
	</li>
</ol>

<style>
	blockquote > ol {
		margin-block: unset;
		list-style: decimal;
		& li {
			margin-inline-start: var(--size-7);
		}
	}
	h4 {
		margin-block: var(--size-6);
	}
	ol {
		margin-inline-start: var(--size-3);
		margin-block: var(--size-7);
	}
	li {
		margin-inline-start: var(--size-2);
	}
	span {
		text-decoration: underline;
	}
	p {
		margin-block: var(--size-3);
		line-height: var(--size-3);
	}
	.information {
		display: flex;
		align-items: center;
		gap: var(--size-1);
		height: var(--size-5);
	}
	.infoWrapper {
		cursor: pointer;
	}
</style>
