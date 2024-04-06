# The River Sings

## Tech

- sveltekit
  - prettier
  - eslint
  - typescript
- lucide icons
- open-props css

## Todo

- [x] use cloudinary
- [x] bring in prisma
- [ ] GSAP
- [ ] more dynamic way to use title and routes for SEO

### Feature parity

- understand the subscription model in place
- get media to load [music]
- get media to load [videos]

## Tricks

Run the DB interface:

- npx prisma studio

Start DB with docker:

- docker-compose up

view the db:

```.bash
$ docker ps // grab the 'container_name_or_id'
$ docker exec -it container_name_or_id psql -U ${DB_USER} -d ${DB_NAME}
```
