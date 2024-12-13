export const explainers = [
  {
    href: "https://vercel.com/philipcunnells-projects/the-river",
    text: "Vercel",
    shortDescription: "frontend code",
    longDescription: "Vercel is a cloud service that hosts the code for the website, kind of like renting space for it to run on the internet. It's where we 'deploy' the project, meaning we put the code online so the website is live and accessible to anyone.",
  },
  {
    href: "https://supabase.com/dashboard/project/lzjhvrmxgojqzvcivqxy",
    text: "Supabase",
    shortDescription: "backend code",
    longDescription: "A database is like a storage unit for all the information the website needs to remember. Even though Vercel holds the main code that runs the site, the database needs to live in a separate place that can be accessed anytime, from anywhere. This is where Supabase comes in—it's a cloud service that specializes in managing databases. It makes sure the website can easily connect to its stored information, no matter where it's hosted.",
  },
  {
    href: "https://console.cloudinary.com/console/c-eec98e4a9634aee381b2fe2db67b9d/media_library/homepage",
    text: "Cloudinary",
    shortDescription: "media",
    longDescription: "Cloudinary is a service that helps store and manage images and other media for the website. It makes sure that photos, videos, and other visual content load quickly and look good, no matter the device or screen size. It also helps keep these files organized and accessible whenever the website needs them.",
  },
  {
    href: "https://www.godaddy.com/",
    text: "goDaddy",
    shortDescription: "domain",
    longDescription: "GoDaddy is a service that helps register and manage the website's domain name, which is the address people type in to find the site (like www.example.com). It makes sure the website has a unique, easy-to-find name and keeps everything connected so people can reach the site on the internet. Otherwise we would have to use the deployed IP address to access the website",
  },
  {
    href: "https://github.com/cunnellp5/TheRiver",
    text: "GitHub",
    shortDescription: "version control",
    longDescription: "GitHub is a service that helps store and manage the website’s code. It’s like a safe online storage space where all the code is kept, and it also makes it easy to track changes, collaborate with others, and update the code over time. It ensures everything stays organized and versioned, so the site can keep improving smoothly",
  },
];

export const checklistTodos = [
  {
    category: "Emails",
    todos: [
      {
        text: "create better reset email",
        checked: false,
        id: "reset",
      },
      {
        text: "figure out unsubscribe workflow",
        checked: true,
        id: "unsubscribe",
      },
    ],
  },
  {
    category: "Users",
    todos: [
      {
        text: "use new table for user view",
        checked: false,
        id: "userTable",
      },
      {
        text: "show users signed up for newsLetter to get their emails",
        checked: false,
        id: "newsLetter",
      },
    ],
  },
  {
    category: "About",
    todos: [
      {
        text: "show about section everywhere",
        checked: false,
        id: "abouts",
      },
    ],
  },
  {
    category: "Videos",
    todos: [
      {
        text: "CRUD videos",
        checked: false,
        id: "videos",
      },
    ],
  },
  {
    category: "Stems",
    todos: [
      {
        text: "CRUD stems",
        checked: false,
        id: "stems",
      },
    ],
  },
  {
    category: "Tracks",
    todos: [
      {
        text: "migrate trackPreviews to db for SoundCloud widget",
        checked: false,
        id: "trackPreviews",
      },
      {
        text: "delete tracks",
        checked: false,
        id: "deleteTracks",
      },
      {
        text: "edit tracks",
        checked: false,
        id: "editTracks",
      },
      {
        text: "create new tracks",
        checked: false,
        id: "createTracks",
      },
    ],
  },
  {
    category: "Services",
    todos: [
      {
        text: "add the rest of the services",
        checked: false,
        id: "addServices",
      },
      {
        text: "edit services in db",
        checked: false,
        id: "editServices",
      },
      {
        text: "edit categories in db",
        checked: false,
        id: "editCategories",
      },
      {
        text: "create services in db",
        checked: false,
        id: "createServices",
      },
      {
        text: "create categories in db",
        checked: false,
        id: "createCategories",
      },
      {
        text: "delete services in db",
        checked: false,
        id: "deleteServices",
      },
      {
        text: "delete categories in db",
        checked: false,
        id: "deleteCategories",
      },
    ],
  },
  {
    category: "Blog",
    todos: [
      {
        text: "split slug and layout pages",
        checked: true,
        id: "splitLayout",
      },
      {
        text: "add filter searching",
        checked: false,
        id: "filterSearch",
      },
      {
        text: "layout design 'mortar' style",
        checked: false,
        id: "morter",
      },
      {
        text: "add img to each blog for asthetics",
        checked: false,
        id: "image",
      },
      {
        text: "add hero image",
        checked: false,
        id: "hero",
      },
      {
        text: "add about section",
        checked: false,
        id: "about",
      },
    ],
  },
  {
    category: "Contact",
    todos: [
      {
        text: "ensure contact info is being propagated",
        checked: false,
        id: "ensure",
      },
    ],
  },
  {
    category: "Backend",
    todos: [
      {
        text: "double check the ratelimiter when a user logs in",
        checked: false,
        id: "rateLimiter",
      },
      {
        text: "add free tier of sentry for dev logs",
        checked: false,
        id: "sentryIO",
      },
      {
        text: "configure a dynamic site map generator for new blog posts",
        checked: false,
        id: "configureSiteMap",
      },
      {
        text: "submit sitemap to google SEO engine",
        checked: false,
        id: "submittal",
      },
    ],
  },
  {
    category: "Future Projects / Thoughts",
    todos: [
      {
        text: "Add tests",
        checked: false,
        id: "testing",
      },
      {
        text: "Build documentation for every part of this website",
        checked: false,
        id: "documentation",
      },
      {
        text: "Admin dash showing tools used for this website",
        checked: false,
        id: "dash",
      },
      {
        text: "Events for upcoming shows",
        checked: false,
        id: "events",
      },
      {
        text: "Posters for previous shows or show previous events",
        checked: false,
        id: "posters",
      },
      {
        text: "look into the godaddy pay portal to built e-commerce",
        checked: false,
        id: "ecommerce",
      },
      {
        text: "figure out a way to centralize booking services with alexis",
        checked: false,
        id: "booking",
      },
    ],
  },
  {
    category: "Projects Configurations and Ownerships",
    todos: [
      {
        text: "consider creating a github profile with your business email",
        checked: false,
        id: "github",
      },
      {
        text: "Use your email for vercel deployment",
        checked: false,
        id: "vercel",
      },
      {
        text: "Use your email for Supabase backend",
        checked: false,
        id: "supabase",
      },
      {
        text: "Use your email for cloudinary media",
        checked: false,
        id: "cloud",
      },
    ],
  },
];
