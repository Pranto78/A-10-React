# 🏡 HomeNest – Real Estate Property Listing Platform

HomeNest is a modern real estate web application where users can browse, post, update, and manage properties for rent or sale. It features full authentication, CRUD functionality, dynamic property filtering, and a clean, responsive UI for a seamless experience.

---

## 🌟 Features

- 🔐 **User Authentication (Firebase)** – Email/password login, Google login, protected routes
- 🏘️ **Add, Update & Delete Properties** – Full CRUD functionality with MongoDB + Express
- ⭐ **Ratings & Reviews System** – Users can leave feedback with star ratings
- 🏡 **Dynamic Home Page** – Featured properties, sliders, static sections
- 🔍 **All Properties Page** – Filter/search, sorting (newest first), and detailed info
- 👤 **My Properties** – View only logged-in user's listings
- ⭐ **My Ratings** – View all reviews posted by user
- 🌓 **Dark & Light Theme** – Smooth toggle for the entire site
- 🚫 **Custom 404 Page** – Not-found page
- ⚡ **Loading Spinners** – For data fetch
- 🍞 **Toast Notifications** – Smooth user feedback

---

## 🛠️ Tech Stack

**Frontend:**  
React.js, React Router, Tailwind CSS + DaisyUI, Swiper Slider, React Icons, React Hot Toast, Firebase Authentication  

**Backend:**  
Node.js, Express.js, MongoDB (Atlas), CORS, dotenv, Vercel Serverless Functions  

---

## 📌 Pages & Features (Detailed)

### 🔹 Header / Navbar
- Home, All Properties, Add Property (Private), My Properties (Private), My Ratings (Private), Login / Signup
- Logged-in users see profile photo, name, email, logout dropdown

### 🔹 Home Page
- 3-slide banner/slider
- Featured properties (6 latest)
- Static Why Choose Us section + 2 additional meaningful sections
- Footer with logo, links, socials

### 🔹 Authentication
- Login: Email/Password + Google Login, redirects user after login, toast messages
- Signup: Name, Email, Photo URL, Password (Validation: 1 uppercase, 1 lowercase, min 6 chars)
- ⚠ No email verification / Forgot password

### 🔹 CRUD Operations
- **Add Property (Private)**: Name, Description, Category, Price, Location, Image URL, auto-filled user info, saved to MongoDB
- **My Properties (Private)**: Shows only user’s properties, options to Update/Delete, confirmation via Toast/SweetAlert
- **Update Property (Private)**: Prefilled form, editable fields (except user info), instant reflection on MongoDB
- **All Properties (Public)**: Cards with Name, Category, Price, Location, Thumbnail, Posted by, See Details
- **Property Details (Private)**: Full info, image gallery, ratings & reviews

### 🔹 Ratings & Reviews
- Star rating (1–5), review text, reviewer name, date
- **My Ratings (Private)**: View all user-made ratings

### 🔹 Other Features
- Custom 404 Not Found page
- Loading Spinner during data fetch
- Protected route handling
- No Lorem Ipsum or JS alerts

---

## 📷 Screenshots

<p align="center">
  <img src="" width="80%" alt="Home Page Screenshot"/>
</p>

<p align="center">
  <img src="" width="80%" alt="Property Details Screenshot"/>
</p>

---

## 🚀 Live Demo & Links

- **Live Site:** https://scintillating-valkyrie-c953b9.netlify.app/  
- **Server Repo:** https://github.com/Pranto78/A-10-Server.git   

---

## 💻 Installation & Running Locally


Frontend Setup

cd HomeNest-Client
npm install
npm start


Backend Setup

cd HomeNest-Server
npm install
npm run dev


Open http://localhost:3000
 in your browser to view the app.

⚡ Dependencies

React, React Router, Tailwind CSS, DaisyUI, Swiper, React Icons, React Hot Toast

Node.js, Express.js, MongoDB, Firebase, CORS, dotenv

🎯 Project Theme

HomeNest allows property owners to post listings and users to browse/search based on:

Location

Property type

Price

Category

It provides a clean UI, smooth navigation, and full user-based property and review management.

🏆 Achievements

Fully responsive modern web app

Complete authentication + CRUD operations

Dynamic UI with real-time data

“Code, Create, Improve — Repeat.”
