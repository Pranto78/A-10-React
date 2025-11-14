HomeNest – Real Estate Property Listing Platform

HomeNest is a modern real-estate listing web application where users can browse, post, update, and manage properties for rent or sale. It includes full authentication, CRUD functionality, dynamic property filtering, and a clean UI for a seamless experience.


🌟 Features

🔐 User Authentication (Firebase) – Email/password login, Google login, protected routes

🏘️ Add, Update & Delete Properties – Full CRUD with MongoDB + Express

⭐ Ratings & Reviews System – Users can leave feedback with star ratings

🏡 Dynamic Home Page – Featured properties, sliders, static sections

🔍 All Properties Page – Filter/search, sorting (newest first), and detailed info

👤 My Properties – View only logged-in user's listings

⭐ My Ratings – View all reviews user has posted

🌓 Dark & Light Theme – Smooth toggle for the entire site

🚫 404 Page – Custom not-found page

⚡ Loading Spinners for data fetch

🍞 Toast Notifications (No alerts/Lorem text used)

📚 Project Theme

HomeNest is a real estate listing platform where property owners can post available properties (rent/sale), and users can explore listings based on:

Location

Property type

Price

Category

It provides a clean UI, smooth navigation, and full user-based property and review management.

🛠️ Tech Stack
Frontend

React.js

React Router

Tailwind CSS + DaisyUI

Swiper Slider

React Icons

React Hot Toast

Firebase Authentication

Backend

Node.js

Express.js

MongoDB (Atlas)

CORS

dotenv

Vercel Serverless Functions

📌 Main Pages & Features (Detailed)
🔗 Header / Navbar

Home

All Properties

Add Property (Private)

My Properties (Private)

My Ratings (Private)

Login / Signup

If logged in → show profile photo, name, email, logout dropdown

🏠 Home Page

Contains:

✔ 3-slide image/banner slider

✔ Featured properties (6 latest items) using .sort()

✔ Static Why Choose Us section

✔ 2 additional meaningful sections

✔ Footer with logo, links, socials

🔐 Authentication
Login

Email + Password

Google Login

Redirects user after login

Shows toast messages

Registration

Name

Email

Photo URL

Password (with validation):

At least 1 uppercase

At least 1 lowercase

Minimum length 6

Google Signup

⚠ No email verification or forgot password (as instructed).

🧱 CRUD Operations
🏢 Add Property (Private Route)

Fields:

Property name

Description

Category

Price

Location

Image URL

User name (auto-filled)

User email (auto-filled)

✔ Saves to MongoDB
✔ Shows toast/success message

📦 My Properties (Private)

Shows only logged-in user’s properties.

Each card includes:

Name

Category

Price

Location

Posted date

View Details

Update

Delete

Delete confirmation uses SweetAlert/Toast.

✏️ Update Property (Private)

Prefilled form

Editable:

Name

Description

Category

Price

Location

Image

Read-only:

User name

User email

✔ Updates MongoDB
✔ Reflects instantly
✔ Navigates to property details

🏘️ All Properties Page (Public)

Card includes:

Name

Category

Price

Location

Thumbnail

Posted by

See Details button

🏡 Property Details Page (Private)

Shows complete property info:

Image gallery

Name

Category

Price

Location

Description

Posted by & email

Posted date

⭐ Ratings & Reviews Section

Users can give:

Star rating (1–5)

Review text

Reviews are displayed with:

Reviewer name

Rating

Comment

Date

⭐ My Ratings Page (Private)

Shows all user-made ratings with:

Property name

Reviewer name

Stars

Comment

Date

Thumbnail

🧭 Other Features

✔ Custom 404 Not Found Page

✔ Loading Spinner when fetching data

✔ Protected route handling (no redirect on reload)

✔ No lorem ipsum text used

✔ No default JavaScript alerts

🚀 Hosting

Client: Netlify / Surge / Firebase

Server: Vercel (with environment variables)

Supports route reload (SPA friendly