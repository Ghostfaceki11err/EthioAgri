# EthioAgri 🌾

A modern web platform connecting Ethiopian farmers and customers, bridging the gap between agricultural producers and consumers. Fresh produce, fair prices, and sustainable agriculture for a better Ethiopia.

## Overview

EthioAgri is a full-stack Next.js application designed to:
- **Empower Farmers**: Showcase and sell their products directly to customers
- **Serve Customers**: Access fresh, locally-sourced agricultural products
- **Build Community**: Create a sustainable marketplace that benefits all stakeholders

## 🚀 Features

### For Farmers
- ✅ Product listing and management
- ✅ Direct customer communication
- ✅ Sales tracking and analytics
- ✅ Profile management and ratings
- ✅ Multiple product categories support

### For Customers
- ✅ Browse fresh agricultural products
- ✅ Discover local farmers
- ✅ Direct farmer contact
- ✅ Product reviews and ratings
- ✅ Convenient shopping experience

### General Features
- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 Mobile-friendly design
- 🔐 Secure user authentication
- 💾 Database management with Prisma
- 🔌 RESTful API endpoints
- ⚡ Optimized performance with Next.js 13

## 📋 Tech Stack

- **Frontend**: React 18, Next.js 13, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: Prisma ORM
- **Forms**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui (Radix UI based)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Other**: Date-fns, class-variance-authority, Sonner (notifications)

## 📦 Project Structure

```
EthioAgri/
├── project/
│   ├── app/                      # Next.js app directory
│   │   ├── api/                  # API routes
│   │   │   └── products/         # Product API endpoints
│   │   ├── farmers/              # Farmers page
│   │   ├── products/             # Products page
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable React components
│   ├── public/
│   │   └── images/
│   │       └── products/         # Product images
│   ├── package.json              # Dependencies
│   └── tsconfig.json             # TypeScript configuration
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ghostfaceki11err/EthioAgri.git
   cd EthioAgri/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the project directory:
   ```env
   # Database
   DATABASE_URL="your_database_url"
   
   # Add other environment variables as needed
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint to check code quality

## 🎨 Pages & Routes

| Page | Route | Purpose |
|------|-------|---------|
| Landing Page | `/` | Introduction and user type selection |
| Products | `/products` | Browse all available products |
| Farmers | `/farmers` | Discover local farmers |
| API - Products | `/api/products` | GET products from database |

## 📸 Adding Product Images

To add product images to the marketplace:

1. **Place image files** in `public/images/products/`
2. **Use descriptive names**:
   - `organic-tomatoes.jpg`
   - `teff.jpg`
   - `sweet-peppers.jpg`
   - `organic-carrots.jpg`
   - `green-beans.jpg`
   - `coffee.jpg`

3. **Supported formats**: JPG, PNG, WebP
4. **Recommended size**: 400x300 pixels or similar aspect ratio

5. **Update the code** in `app/products/page.tsx`:
   ```tsx
   { 
     name: 'Your Product', 
     farmer: 'Farmer Name', 
     location: 'Location', 
     price: '100 ETB/kg', 
     image: '/images/products/your-image-name.jpg' 
   }
   ```

## 🗄️ Database Schema (Prisma)

The application uses Prisma for database management. Key models include:

- **Product**: Product listings with price, quantity, category, and farmer association
- **Farmer**: Farmer profiles and information
- **User**: User accounts and authentication

Run `npx prisma studio` to view and manage your database visually.

## 🔐 Authentication & Security

- User registration and login functionality
- Secure password handling
- User role separation (Farmer vs Customer)
- Protected routes and API endpoints

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source. See LICENSE file for details.

## 📞 Support & Contact

For questions, suggestions, or support:
- Open an issue on GitHub
- Contact the maintainer: [Ghostfaceki11err](https://github.com/Ghostfaceki11err)

## 🌱 Vision

EthioAgri aims to:
- Empower Ethiopian farmers with digital tools
- Reduce the gap between producers and consumers
- Promote sustainable and organic agriculture
- Support local economies across Ethiopia
- Build a thriving agricultural community

---

**Made with ❤️ for Ethiopian Agriculture**

Last updated: July 2025
