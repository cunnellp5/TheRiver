export default [
  {
    category: "Main",
    links: [
      { name: "Home", link: "/admin" },
      { name: "Users", link: "/admin/users" },
      // { name: "About", link: "/admin/about" },
      // { name: "NewsLetter", link: "/admin/newsletter" },
    ],
  },
  {
    category: "Home",
    links: [
      // {
      //   name: "HeroVideo",
      //   link: "/admin/homepage/hero",
      // },
      {
        name: "Articles",
        link: "/admin/homepage/articles",
        urlPath: "/admin/homepage/articles",
      },
    ],
  },
  // {
  //   category: "Music",
  //   links: [
  //     {
  //       name: "Tracks",
  //       link: "/admin/musicpage/tracks",
  //     },
  //     {
  //       name: "Videos",
  //       link: "/admin/musicpage/videos",
  //     },
  //     {
  //       name: "Stems",
  //       link: "/admin/musicpage/stems",
  //     },
  //   ],
  // },
  {
    category: "Services",
    links: [
      {
        name: "Jobs",
        link: "/admin/services",
      },
      {
        name: "Categories",
        link: "/admin/services/categories",
      },
      // { name: 'Bookings', link: '/admin/services/booking', urlPath: '/admin/services/booking' },
      // { name: 'Schedule', link: '/admin/services/time-slots', urlPath: '/admin/services/time-slots' }
      { name: "Availability", link: "/admin/services/availability", urlPath: "/admin/services/availability" },
      { name: "Appointments", link: "/admin/services/appointments", urlPath: "/admin/services/appointments" },
      { name: "Payments", link: "/admin/services/payments", urlPath: "/admin/services/payments" },
    ],
  },
  {
    category: "Blog",
    links: [
      {
        name: "Posts",
        link: "/admin/posts",
        urlPath: "/admin/posts",
      },
    ],
  },
  // {
  //   category: "Contact",
  //   links: [
  //     {
  //       name: "Info",
  //       link: "/admin/contact",
  //       urlPath: "/admin/contact",
  //     },
  //   ],
  // },
];
