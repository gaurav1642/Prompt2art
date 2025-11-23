# 🧠 AI Text-to-Image Generator (Full Stack MERN + AI SaaS)

A modern, full-stack AI SaaS application that enables users to generate high-quality images from text prompts using advanced AI models. Features user authentication, a credit-based system, and integrated payment processing.

## 📘 Overview

This project is a production-ready AI SaaS application built with the **MERN stack** (MongoDB, Express, React, Node.js). It leverages the **ClipDrop API** for AI-powered image generation and includes a sophisticated credit system with integrated payment processing through Razorpay and Stripe.

### Key Capabilities:
- ✨ Generate stunning AI images from text descriptions
- 🔐 Secure user authentication and authorization
- 💳 Credit-based system with premium purchases
- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 Mobile-friendly design with Framer Motion animations
- 💰 Multiple payment gateway integration

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🧾 **User Authentication** | Secure sign up, login, and account management with JWT tokens |
| 🎨 **AI Image Generation** | Generate high-quality images from text prompts using ClipDrop API |
| 💳 **Credit System** | Users start with free credits; purchase additional credits for continued usage |
| 🖼️ **Image History** | View and manage previously generated images |
| 🔒 **Secure Backend** | Protected API routes with token-based authentication |
| 💡 **Responsive UI** | Modern, mobile-first design with Tailwind CSS and Framer Motion |
| 💰 **Payment Integration** | Razorpay/Stripe payment processing for credit purchases |
| 📊 **Transaction Tracking** | Monitor credit usage and purchase history |

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library with hooks
- **React Router 6** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11** - Animation library
- **Axios** - HTTP client for API calls
- **React Toastify** - Notification system
- **Vite** - Next-generation frontend build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.21** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Token-based authentication
- **Bcrypt** - Password hashing
- **Razorpay & Stripe** - Payment processing
- **ClipDrop API** - AI image generation
- **Nodemon** - Development server

### Database
- **MongoDB** - NoSQL database with Mongoose ORM

### Deployment
- **Frontend** - Vercel
- **Backend** - Render / Vercel
- **Database** - MongoDB Atlas

---

## 📁 Project Structure

```
ai-text-to-image-generator/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── GenerateBtn.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Description.jsx
│   │   │   ├── Steps.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Result.jsx
│   │   │   ├── BuyCredit.jsx
│   │   │   └── Verify.jsx
│   │   ├── context/         # React Context for state management
│   │   │   └── AppContext.jsx
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── vercel.json
│
├── server/                    # Express backend application
│   ├── controllers/          # Business logic
│   │   ├── imageController.js   # Image generation logic
│   │   └── UserController.js    # User management logic
│   ├── models/              # Database schemas
│   │   ├── userModel.js
│   │   └── transactionModel.js
│   ├── routes/              # API endpoints
│   │   ├── userRoutes.js
│   │   └── imageRoutes.js
│   ├── middlewares/         # Custom middleware
│   │   └── auth.js          # JWT authentication middleware
│   ├── configs/             # Configuration files
│   │   └── mongodb.js       # Database connection
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** account (MongoDB Atlas recommended)
- **Razorpay/Stripe** account for payment processing
- **ClipDrop API** key

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-text-to-image-generator.git
cd prompt2art
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

#### Backend (.env in server folder)
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
STRIPE_API_KEY=your_stripe_api_key
```

#### Frontend (.env in client folder)
```env
VITE_API_URL=http://localhost:4000/api
```

### 5. Run the Application

#### Option A: Run Both Servers Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

#### Option B: Run Backend Only
```bash
cd server
npm start
```

### 6. Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000

---

## 💰 Credit System

### How It Works:
1. **Free Credits**: Each new user receives an initial amount of free credits
2. **Usage**: Each image generation consumes 1 credit
3. **Purchase Credits**: Users can buy additional credits using the integrated payment gateway
4. **Tracking**: All transactions are logged in the database for audit purposes

### Credit Management:
```
User Registration → Receive Free Credits
    ↓
Generate Image → 1 Credit Deducted
    ↓
Credits Low → Purchase More Credits
    ↓
Payment Processed → Credits Added to Account
```

---

## 🔐 Authentication Flow

The application uses JWT (JSON Web Tokens) for secure authentication:

1. User registers/logs in with email and password
2. Password is hashed using bcrypt
3. Server issues a JWT token
4. Client stores token in localStorage
5. All subsequent API requests include the token in headers
6. Backend middleware verifies token authenticity

---

## 📡 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /profile` - Get user profile (Protected)
- `POST /logout` - User logout

### Image Routes (`/api/image`)
- `POST /generate` - Generate AI image (Protected)
- `GET /history` - Get image generation history (Protected)
- `DELETE /image/:id` - Delete generated image (Protected)

---

## 🤖 AI Image Generation

The application uses the **ClipDrop API** for image generation:

### Features:
- Supports detailed text prompts
- Multiple image generation models
- High-quality output images
- Fast generation times

### Integration:
```javascript
// Example: Generate image from text
const response = await axios.post('/api/image/generate', {
  prompt: "A serene landscape with mountains and lakes",
  userId: currentUser._id
});
```

---

## 💳 Payment Integration

### Supported Payment Gateways:
- **Razorpay** - Indian payment processing
- **Stripe** - Global payment processing

### Payment Flow:
1. User selects credit package
2. Payment gateway modal opens
3. User completes payment
4. Verification endpoint confirms payment
5. Credits are added to user account
6. Transaction is recorded

---

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
cd client
npm run build
# Push to GitHub, connect to Vercel
```

### Backend Deployment (Render)
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy from main branch

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create a cluster
3. Get connection string
4. Set as MONGO_URI in .env

---

## 📦 Key Dependencies

### Frontend
```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.28.0",
  "axios": "^1.7.7",
  "framer-motion": "^11.11.13",
  "react-toastify": "^10.0.6",
  "tailwindcss": "^3.4.14"
}
```

### Backend
```json
{
  "express": "^4.21.1",
  "mongoose": "^8.8.1",
  "jsonwebtoken": "^9.0.2",
  "bcrypt": "^5.1.1",
  "razorpay": "^2.9.5",
  "stripe": "^17.3.1"
}
```

---

## 🔧 Development

### Running ESLint
```bash
cd client
npm run lint
```

### Building for Production
```bash
# Frontend
cd client
npm run build

# Backend (optional for Node.js)
# No build step needed, but ensure all dependencies are installed
```

---

## 📝 Environment Variables Checklist

- [ ] MongoDB URI configured
- [ ] JWT Secret key set
- [ ] ClipDrop API key added
- [ ] Razorpay/Stripe credentials configured
- [ ] API URL configured in client
- [ ] Port number set (backend)

---

## 🐛 Troubleshooting

### Issue: Cannot connect to MongoDB
**Solution**: Verify MONGO_URI is correct and MongoDB Atlas cluster is running

### Issue: Image generation fails
**Solution**: Check ClipDrop API key and ensure API quota is available

### Issue: Payment gateway not loading
**Solution**: Verify Razorpay/Stripe keys are correct and API is accessible

### Issue: CORS errors
**Solution**: Ensure backend has CORS enabled and frontend API URL is correct

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Mongoose](https://mongoosejs.com)
- [ClipDrop API](https://clipdrop.co/api)
- [Razorpay Documentation](https://razorpay.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

Created as a full-stack MERN + AI SaaS application.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Last Updated:** November 2025
