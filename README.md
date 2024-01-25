# Technologies
This application uses React with Next.js. On the backend, it utilises the native API routes that Next.js provides. We use a Postgresql database supplied by ElephantSQL, and Prisma for our ORM.

Additionally, we use TypeScript for type safety.
# Folder Structure
All code lives in the ```src/``` folder. Within the ```src/``` folder, we have four folders: ```app/```, ```backend/```, ```frontend/```, and ```shared/```. 

The ```app/``` folder controls our routing on both the frontend and backend (all routes under ```api/``` folder is routed to backend, everything else to frontend).

The ```backend/``` folder contains backend code including database schemas, services, and prisma integration.

The ```frontend/``` folder contains frontend React code, mostly components.

Finally, the ```shared/``` folder contains code relevant to both the backend and frontend. In this project, this only contains shared types, but this would contain more in a bigger project.
# Running the App
To run the app, run the following commands:
```
npm install
npx prisma db push
npm run dev
```
There are two users you can log in with: admin and test. admin has adminstrator priveleges, while test does not.
