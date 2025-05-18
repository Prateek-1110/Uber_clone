
### 🚖 Uber Clone

A full-stack Uber-like ride-hailing application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can book rides, track drivers, and simulate real-time ride status.

---

## ✨ Features

- 🔐 User Authentication (JWT-based)
- 📍 Location Search with Autocomplete
- 🧭 Real-Time Ride Tracking (Socket.IO)
- 🧾 Ride Request, Accept, and Cancel Flows
- 🧑‍✈️ Driver and Rider Dashboards
- 🗺️ Interactive Map using Mapbox/Google Maps
- 💬 Notifications for Ride Status
- 📱 Responsive Design (Mobile-friendly)

---

## 📁 Project Structure

```

Uber\_clone/
├── Backend/       # Node.js + Express + MongoDB
│   ├── controllers/
│   ├── models/
│   └── routes/
├── Frontend/      # ReactJS + TailwindCSS + Context API
│   ├── components/
│   ├── pages/
│   └── utils/
└── README.md

````

---

## ⚙️ Tech Stack

| Technology     | Usage                     |
|----------------|---------------------------|
| MongoDB        | Database                  |
| Express.js     | Backend Framework         |
| React.js       | Frontend Framework        |
| Node.js        | Server Runtime            |
| Socket.IO      | Real-time communication   |
| Mapbox API     | Interactive maps          |
| Tailwind CSS   | Styling                   |
| JWT            | Auth & Route Protection   |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Git

### Backend Setup

```bash
cd Backend
npm install
npm run dev
````

### Frontend Setup

```bash
cd Frontend
npm install
npm start
```

> 🧠 Ensure MongoDB is running and API URLs are properly configured in `.env`.

---

## 🔐 Environment Variables

Create a `.env` file in both `Backend/` and `Frontend/` directories:

### Backend `.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/uber_clone
JWT_SECRET=your_jwt_secret_key
```

### Frontend `.env`

```env
REACT_APP_API_URL=http://localhost:5000/api
MAPBOX_API_KEY=your_mapbox_key
```

---

## 🧪 Testing

You can test the app with tools like:

* Postman for backend API
* Browser Developer Tools for frontend


## 🛠️ Future Improvements

* Stripe Payment Integration
* Ride History & Analytics
* Admin Panel for Fleet Management
* Progressive Web App (PWA) support

---

## 🧑‍💻 Author

**Prateek Singh**
GitHub: [@Prateek-1110](https://github.com/Prateek-1110)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Support

If you like this project, consider ⭐ starring the repo or giving it a fork!



