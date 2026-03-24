<div align="center">
  <img src="./media/chatgpt-icon.svg" alt="ChatGPT Logo" height="80"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./media/intel-logo.svg" alt="Intel Logo" height="80"/>

  <h1>ChatGPT Desktop App (Intel CPU)</h1>
  <p>A fast, native desktop application for ChatGPT, optimized for Intel-based processors.</p>
</div>

---

## 📖 Overview

This is a clean Tauri + React application that transforms ChatGPT into a standalone desktop experience. It has been built and detailed specifically to run efficiently on Intel CPUs, providing seamless access to ChatGPT directly from your computer without needing a web browser.

## ✨ Features

- **Native Desktop Experience:** Built with Tauri for a lightweight and incredibly fast application.
- **Intel Optimized:** Tailored and built to run smoothly on `x86_64` (Intel) architectures.
- **Menu Bar Integration:** Access quick actions (like adding files, generating images, and deep research) directly from the system menu.
- **Modern UI:** Built on top of React and Vite for a snappy user interface.

## 📁 Media & Assets

There is a dedicated `media/` folder in this repository. Inside, you will find:
- **Installation Video:** A video tutorial explaining how to install and build the application.
- **Icons & Graphics:** Application logos, `.icns`, `.ico`, and other graphical assets used for the app.

*(Note: Please drop your video installer and icon files directly into the `media/` directory).*

## 🚀 Installation & Build Instructions

### Prerequisites

Make sure you have the following installed on your Intel machine:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Rust](https://www.rust-lang.org/) (required for the Tauri backend)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chatgpt-app.git
   cd chatgpt-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm run tauri dev
   ```

4. **Build the Intel application:**
   ```bash
   # Compiles specifically for Intel architecture
   npm run tauri build --target x86_64-apple-darwin
   ```

## 🎥 How to Install (Video Guide)

For a step-by-step visual demonstration, please watch the installation video below. It covers everything from installing the prerequisites to completing the Intel-specific build.

<video src="./media/gptvideo.mp4" width="100%" controls></video>

## 📄 License

This project is open-source and available under the terms of the [MIT License](LICENSE).
