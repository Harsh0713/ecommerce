# 🛒 AmazeCart - Discover, Desire, Deliver. Shop Smarter Today.

AmazeCart is a sleek and modern single-page e-commerce application built with **React + TypeScript**, featuring powerful product management, cart functionality, dynamic search and filter, and support for dark/light themes. Designed for both users and admins, it delivers a responsive and delightful shopping experience.

---

## 🚀 Features

- 🔍 Live product **search** with category filter
- 📦 Dynamic **cart** with quantity adjustment, remove, and total summary
- 🧩 **Add new products** with modal-based form
- 🌙 **Dark/Light mode** toggle
- 📱 Fully **responsive UI**
- ⚡ **State management** using Zustand
- 🖼️ Product images, price, stock, category, rating, and features
- 💰 Total cart cost with item count indicator
- 🧠 Product filter logic built-in

---

## 🏗️ Project Structure

AmazeCart/ <br>
├── public/ <br>
│ └── index.html <br>
├── src/ <br>
│ ├── components/ <br>
│ │ ├── Header.tsx <br>
│ │ ├── ProductGrid.tsx <br>
│ │ ├── ProductCard.tsx <br>
│ │ ├── ProductModal.tsx <br>
│ │ ├── AddProductForm.tsx <br>
│ │ ├── CartPanel.tsx <br>
│ │ └── ThemeToggle.tsx <br>
│ ├── store/ <br>
│ │ ├── useCartStore.ts <br>
│ │ └── useProductStore.ts <br>
│ ├── data/ <br>
│ │ └── products.ts <br>
│ ├── types/ <br>
│ │ └── index.ts <br>
│ ├── App.tsx <br>
│ └── main.tsx <br>
├── tailwind.config.js <br>
├── postcss.config.js <br>
├── index.css <br>
├── tsconfig.json <br>
├── package.json <br>
└── README.md <br>



---

## 🧪 Tech Stack

- **Frontend:** React + TypeScript
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Bundler:** Vite
- **Form Handling:** React Hook Form + Zod (optional for validation)

---

## 🧰 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/amaze-cart.git
cd amaze-cart
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
npm run dev
Open http://localhost:5173 to view in browser.

📦 Sample Product Data
The product list is stored in:

ts
Copy
Edit
src/data/products.ts
You can edit or extend this to load from an API or Firebase in the future.

💡 Product Filter Logic
Filters products based on:

Search query (matches title & description)

Selected category (Electronics, Clothing, Books, Home)

Combined using .filter() in the Zustand store (useProductStore.ts)

🎨 Theme Support
Light and Dark mode toggle using a ThemeToggle component

State stored in a separate useThemeStore Zustand store (if implemented)

Tailwind's dark: utility is used for styling

🛒 Cart Functionality
Add items to cart from any product

Cart opens in a sliding side panel

Features:

Update quantity

Remove items

Clear cart

Checkout button

Item count is displayed in the cart icon on the navbar

🛠️ Future Improvements
🔐 Authentication (login/signup)

🧾 Checkout flow and order summary

🔄 Product edit/delete for admins

☁️ Backend integration (e.g., Firebase or Express API)

📈 Analytics and user history

🤝 Contribution
Feel free to fork this repo and submit pull requests. Suggestions, improvements, and bug fixes are welcome.

Fork the project

Create your feature branch: git checkout -b feature/my-feature

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/my-feature

Open a pull request

📄 License
This project is licensed under the MIT License.

💬 Connect with Me
Author: Harsh Hate
🔗 LinkedIn
📫 Email: yourname@example.com
