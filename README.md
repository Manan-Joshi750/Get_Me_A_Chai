# Get Me A Chai
A Patreon clone built using the MERN stack, Get Me A Chai allows content creators to offer exclusive memberships and connect with their audience. It enables users to support creators through monthly subscriptions and access exclusive content.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 🌟 Features

1. **User Registration & Login :** Secure authentication for users and creators.
2. **Subscription Management :** Users can subscribe to creators for exclusive content.
3. **Content Access :** Subscribers can access content based on their subscription tier.
4. **Creator Dashboard :** Creators can manage their content and subscription tiers.
5. **Payment Integration :** Subscription payments for creators.
6. **Responsive Design :** Optimized UI for both desktop and mobile.

# ScreenShots
![Screenshot (64)](https://github.com/user-attachments/assets/aab1a564-f980-4331-8cb8-4ab1e01bb11f)
![Screenshot (65)](https://github.com/user-attachments/assets/d89a5a08-bd9a-4d4b-85ff-80d07db28211)
![Screenshot (66)](https://github.com/user-attachments/assets/f42e1a6f-b722-4ab6-afb0-14f83c0d6b59)
![Screenshot (67)](https://github.com/user-attachments/assets/dfbefdc0-27ff-4bc4-86ed-960303104972)
![Screenshot (68)](https://github.com/user-attachments/assets/c9301bf4-2247-459b-b883-0adc0eade9c7)
![Screenshot (69)](https://github.com/user-attachments/assets/7c3fff19-9270-4679-a9b9-14502b7460b3)
![Screenshot (70)](https://github.com/user-attachments/assets/3d751553-0312-4840-91f8-153b9bf393a7)
![Screenshot (71)](https://github.com/user-attachments/assets/7101de6b-dbf5-449d-86ec-4e1f178af98c)
![Screenshot (72)](https://github.com/user-attachments/assets/362a4bdb-ae7c-41f7-9e83-9c44379306e8)
![Screenshot (73)](https://github.com/user-attachments/assets/2f3a3d75-fefe-46b9-91bc-171fd24120ad)
![Screenshot (74)](https://github.com/user-attachments/assets/127cbc86-1608-47fb-bd98-79a10693b013)
![Screenshot (75)](https://github.com/user-attachments/assets/f9b4948c-ffce-45e8-aba9-c93365eabb5c)


# 🛠️ Tech Stack

| 🌐 Technology     | 📖 Documentation                                   |
|-------------------|----------------------------------------------------|
| **React**         | [React Docs](https://react.dev/)                   |
| **Node.js**       | [Node.js Docs](https://nodejs.org/)                |
| **Express**       | [Express Docs](https://expressjs.com/)             |
| **MongoDB**       | [MongoDB Docs](https://www.mongodb.com/docs/)      |


# 🚀 Getting Started

1️⃣ Clone the Repository
<pre> <code> git clone https://github.com/Manan-Joshi750/GetMeAChai.git cd GetMeAChai </code> </pre>

2️⃣ Install Dependencies
<pre> <code> npm install cd frontend && npm install </code> </pre>

3️⃣ Configure .env File
Create a .env file in the root directory with the following settings :

<pre>
<code>
NODE_ENV=development/production  
PORT=5000  
MONGO_URI=<Your MongoDB URI>  
JWT_SECRET=<Your JWT Secret>  
STRIPE_SECRET_KEY=<Your Stripe Secret Key>  
</code>
</pre>
  
4️⃣ Start the Development Server
Run the application using one of the following :

<pre> <code> npm run dev # or yarn dev # or pnpm dev # or bun dev </code> </pre>

5️⃣ Open in Browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
