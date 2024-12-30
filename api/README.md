# GPS

This is a location tracking backend.
All it does is that it receives http requests with lat and long and stores them in a relational database.
There will be more upgrades from that point forward.
The goal is to have a useable containerized app for self-hosting by the end of this week.
The GPS device will be an android phone connected with TailScale VPN to a home-server where the app will live.
After first deployment is successful the project will rely on github actions next.

# Technologies:

- Postgres
- Express
- Sequelize
- Jest
- Node
- Docker & Docker-compose

dotenv:

```
PORT=
#DB
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_TEST=
DB_HOST=
DB_DIALECT=
```
