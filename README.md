# Technologies
This application uses React with Next.js. On the backend, it utilises the native API routes that Next.js provides. We use a Postgresql database supplied by ElephantSQL, and Prisma for our ORM.

Additionally, we use TypeScript for type safety.
# Features
## Completed
- Dummy user authentication.
- User privileges (admin vs non-admin).
- Ability for admins to create tasks.
- Ability for admins to create, view, and delete users.
- Ability for general user to complete a task.
- Ability for general user to view tasks.
## Non-completed Tasks
- Admins cannot edit, search, or sort tasks.
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
There are two users you can log in with: admin and test. admin has adminstrator priveleges, while test does not. Additionally, you can create more users (admin and non-admin) through the admin page .
# Important Note
Next.js caches data on the server. Therefore, any page where data is fetched from a server component (e.g. ```admin/user-management/users``` which displays all users), it may not show the latest data. Please reset cache (ctrl + f5) to see latest data. I tried fixing this, but could not in the given time constraint.
