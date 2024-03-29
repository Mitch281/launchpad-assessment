# Technologies
This application uses React with Next.js version 14. We notably utilise the ```app/``` router instead of the ```pages/``` router. On the backend, it utilises the native API routes that Next.js provides (which is built on top of Express). We use a Postgresql database supplied by ElephantSQL, and Prisma for our ORM.
## Design Decisions
Although this application did not need a Meta-Framework such as Next, I prefer to use Next because of the its routing. The convenience of using a folder-based routing system is worth it in my opinion over using something such as React Router. Additionally, having both the frontend and backend code in one folder makes running the project easier.

I also decided to use TypeScript. The type safety it provides, as well as the code autocompletion not only speeds up development, but also ensures application robustness. Some people argue that for a small project like this, TypeScript slows you down, but I disagree, especially with the types Prisma supplies out of the box based on the models defined in your database schema.

I chose Prisma as my ORM because in the Node.js landscape, Prisma is the only ORM I am somewhat familiar with. The only other ORM I have used is the Django ORM. Alternatively, I could have written my own SQL queries but in my opinion, this is a bad move as you can potentially (in general) introduce security risks if you are not careful, and it simply takes more time.

I only used material UI for buttons and inputs. Everything else (mostly page layouts) is done using CSS, as that is what I am more comfortable with, which is important given limited time.

Authentication is done with React Context and local storage. In a typical Next.js application, authentication would be handled on the server **and** client, using something like NextAuth. Since I was building a dummy authentication system (no passwords), I decided that this would be the easiest way to implement it. This also meant that I could not access user data in a react server component, which complicated the code slightly. For example, when fetching tasks for a use, I had to pass the ```userId``` as a url paramater, which is not as elegant or practical as getting the ```userId``` from a user session which again, is what I would do with NextAuth.

In the ```frontend/``` folder, I have a dedicated ```api/``` folder to handle all api communication to the backend. This is good practice as it demonstrates seperation of concerns. It would not be wise to have the functions used to fetch data from the frontend to be in the same component as it is being used.

The provided .env file contains the database connection credentials. For simplicity, I have pushed the the credentials that I have used so that running the application is easier, and also because these credentials are not sensitive.
# Features
## Completed
- Dummy user authentication.
- User privileges (admin vs non-admin).
- Ability for admins to create tasks.
- Ability for admins to create, view, and delete users.
- Ability for admins to search and filter tasks.
- Ability for general user to complete a task.
- Ability for general user to view tasks.
## Non-completed Tasks
- Admins cannot edit tasks.
  - This would not be a difficult implementation. I would simply add an "Edit Task" button on each task excerpt, which would open fields to edit the task title, description, priority, or due date.
- Admins cannot sort tasks.
- Not every API route has relevant permission checks.
## Non-completed Non-Functional Tasks
- Unfortunately, I did not have enough time to clean up all backend business logic into a services folder, which would have been cleaner.
- Maybe could have cleaned up ```frontend/``` folder particularly the ```components/``` folder.
# Folder Structure
All code lives in the ```src/``` folder. Within the ```src/``` folder, we have four folders: ```app/```, ```backend/```, ```frontend/```, and ```shared/```. 

The ```app/``` folder controls our routing on both the frontend and backend (all routes under ```api/``` folder is routed to backend, everything else to frontend).

The ```backend/``` folder contains backend code including database schemas, services, and prisma integration. To view the database schema, please go to the ```schema.prisma``` file in the ```prisma/``` folder. Unfortunately, there was not enough time to move all business logic into a services folder, so a lot of business logic is contained in the routes themselves.

The ```frontend/``` folder contains frontend React code, including components, all CSS, frontend services, and context.

Finally, the ```shared/``` folder contains code relevant to both the backend and frontend. In this project, this only contains shared types, but this would contain more in a bigger project.
# Running the App
Before running, please ensure you have at least version 18.7 of Node installed.
To run the app, run the following commands:
```
npm install
npx prisma db push
npm run dev
```
There are two users you can log in with: admin and test. admin has adminstrator privileges, while test does not. Additionally, you can create more users ( with the option to create admin users) through the admin page.
# Important Note
Next.js caches data on the server. Therefore, any page where data is fetched from a server component (e.g. ```admin/user-management/users``` which displays all users), it may not show the latest data. Please reset cache (ctrl + f5) to see latest data. I tried fixing this, but could not in the given time constraint.
