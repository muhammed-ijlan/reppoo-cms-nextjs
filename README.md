# My Project

This is a **Next.js 15** project with API routes, authentication, and
admin dashboard features.

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed on your system:

-   Node.js (\>= 18)
-   npm or yarn
-   Git

### 📥 Clone the Repository

``` bash
git clone https://github.com/muhammed-ijlan/reppoo-cms-nextjs.git
cd reppoo-cms-nextjs.git
```

### ⚙️ Install Dependencies

``` bash
npm install
# or
yarn install
```

### 🔑 Environment Variables

Create a `.env` file in the root of the project that is provided with this project

#### Example `.env`

``` env
# Database
MONGODB_URI=your-database-url

# Authentication (JWT)
JWT_SECRET=your-secret-key
```

### ▶️ Run the Project Locally

``` bash
npm run dev
# or
yarn dev
```

The app will be available at <http://localhost:3000>.

### 🧑‍💻 Demo Admin Credentials

``` text
Email: admin@gmail.com
Password: admin
```

### 📂 Project Structure

    app/
     ┣ api/          # API routes (auth, etc.)
     ┣ components/   # Reusable components
     ┣ theme/        # Theme and styling
     ┣ app/          # Next.js app router pages
     ┣ public/       # Public assets
     ┗ .env.example  # Example environment file

### 📝 Scripts

-   `npm run dev` → Run in development mode
-   `npm run build` → Build for production
-   `npm start` → Start production server
-   `npm run lint` → Lint code

### 📦 Deployment

This project is deployed on **Vercel** .

Chekout : [Click here](https://reppoo-cms-nextjs.vercel.app/)

``` bash
vercel
```

------------------------------------------------------------------------

## 📌 Notes

-   Ensure `.env` variables are correctly set before running the app.
-   Replace demo credentials with real ones in production.

------------------------------------------------------------------------

## 🤝 Contributing

Feel free to fork this project and submit pull requests.

## 📄 License

This project is licensed under the MIT License.
