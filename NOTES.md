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
- soundcloud api
- spotify api
- stripe

## Ideas

- Main nav links should be [MUSIC, SERVICES, MERCH] then [BLOG, CONTACT]
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
