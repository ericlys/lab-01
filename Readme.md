<p align="center">
  <img alt="edur gif" src=".github/edur.gif" />
</p>

## 💻 Project

This project consists of an application similar to udemy, where the user buys/registers in a course to have access to classes.
The project was built using the concept of microservices, where there is a service for shopping and another for the classroom, which communicate with each other when necessary.

</br>
</br>

## ⚙ Technologies
This project was developed with the following technologies:

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org)
- [GraphQL](https://graphql.org/)
- [Apache Kafka](https://kafka.apache.org/)
- [Next.js](https://nextjs.org/)
- [Apollo Client (GraphQL)](https://github.com/apollographql/apollo-client)

</br>

## Functionalities 🚀

### purchases service (purchases)

- [Admin] Product registration
- [Admin] product listing

- [Auth] Purchases list

- [Public] Purchase of a product
- [Public] List products available for purchase

### classroom service (classroom)

- [Admin] List Enrollments
- [Admin] List students
- [Admin] List courses
- [Admin] Register courses

- [Auth] List courses I have access to
- [Auth] Access course content



## 👷 How to run 🚀
- run docker compose
```
docker compose up -d
```
- install the dependencies of each project
```
npm i
```
- configure the .env of each project if needed
```
- start the server
``` 
npm run start:dev (back-end), 
npm run dev (front-end)
```
