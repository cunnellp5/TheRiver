# Developer notes

## Tech

#### Current tech:

- sveltekit
  - prettier
  - eslint
  - typescript
- lucide icons
- open-props css

- prisma
- cloudinary
- lucia auth

#### Future tech:

- youtube api
- soundcloud api (this gateway has been shut down, can no longer get an auth token: brute forcing this one)
- spotify api
- stripe

## Ideas

- Cloudinary OGImage for SEO
- Figure out how to implement dynamic svgs/icons that should come from a DB for the social links

## Developer scripts

Run the DB interface:
`npx prisma studio`

Start DB with docker:
`docker-compose up`

view db:

```.bash
$ docker ps // grab the 'container_name_or_id'
$ docker exec -it container_name_or_id psql -U ${DB_USER} -d ${DB_NAME}
```

### Things to look at

<!-- components -->

https://svelte-headlessui.goss.io/docs/2.0

<!-- css naviagiton -->

https://littlesnippets.net/blog/some-css-menu-inspiration-using-animated-lines

<!-- delay navigation to load media -->

https://www.youtube.com/watch?v=8OmsVZuuQMc

### Random

1. error `Cannot find name 'svelteHTML'`
   - solution: Ctrl + Shift + P -> Svelte: Restart Language Server

<!-- package todo -->

    	"@event-calendar/core": "^3.0.1",
    	"@event-calendar/day-grid": "^3.0.1",
    	"@event-calendar/interaction": "^3.0.1",
    	"@event-calendar/list": "^3.0.1",
    	"@event-calendar/time-grid": "^3.0.1",

      (dev dep)
      "calendarize": "^1.1.1",

<!-- this is tight -->

https://codepen.io/bramus/pen/OJrxBaL
