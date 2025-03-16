# 🌿 Plant Analysis App

This **Plant Analysis App** is designed to analyze images of plants, extract insights using **GenAI**, and generate comprehensive care reports. It uses **Multer** middleware for image uploads, **PDFKit** for generating downloadable reports, and **Node.js with Express** as the backend framework.

## 🚀 Features
- Upload plant images using **Multer**
- AI-powered plant analysis using **GenAI**
- Generates plant care information, health assessment, and maintenance tips
- Exports **PDF reports** for users to download
- Built with **Node.js & Express**

## 📂 Project Structure
```
project-root/
│── uploads/         # Stored uploaded images
│── public/          # Static files (HTML, CSS, JS)
│── .env             # Environment variables
│── server.js        # Main server file
│── package.json     # Project dependencies
│── reports/         # Generated PDF reports
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/Plant-analysis-app.git
cd plant-analysis-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=3000
GENAI_API_KEY=your-genai-api-key
```

### 4️⃣ Start the Server
```sh
npm start
```

## 🌱 Image Upload & Analysis
- Users upload images of plants via a web form
- Images are stored using **Multer**
- AI analyzes the plant and provides insights

## 📄 PDF Report Generation
- The app generates a PDF containing:
  - Plant details
  - Health status
  - Care tips
  - Maintenance suggestions
- The PDF is **downloadable**

## 🖥️ Frontend Integration
The frontend is served from the `public` directory. Modify `public/index.html` and `public/output.css` for UI customization.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added feature X'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

## 📜 License
This project is licensed under the **MIT License**.

---

🌟 **Star this repo** if you found it useful! 🚀

