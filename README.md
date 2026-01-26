# 🌱 Green-Code Registry

**Green-Code Registry** is a professional, eco-conscious platform designed to analyze Python code for computational efficiency and energy consumption. It helps developers and organizations reduce their digital carbon footprint by detecting "dirty" code patterns and providing optimized "green" alternatives.

![Banner](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000)

## ✨ Features

- 🔍 **Static Code Analysis**: Scans Python code templates using AST (Abstract Syntax Tree).
- ⚡ **Energy Estimation**: Calculates estimated energy usage in Watt-hours (Wh).
- 🌍 **CO₂ Footprint**: Quantifies the environmental impact in grams of CO₂.
- 🎯 **Eco-Score**: Institutional-grade scoring based on computational complexity.
- 💡 **Optimization Suggestions**: Provides actionable advice to refactor inefficient loops and operations.
- 🎨 **Premium UI**: Modern, responsive interface with glassmorphism and real-time feedback.

## 🏗️ Architecture

The project follows a clean, decoupled architecture:

- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: FastAPI (Python), AST-based Analysis.
- **Engine**: Proprietary logic for energy estimation and pattern detection.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (v3.9+)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/khalidKE/GreenCode.git
   cd GreenCode
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\activate  # On Windows
   # source venv/bin/activate # On Unix
   pip install -r requirements.txt
   ```

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend server**:
   ```bash
   cd backend
   .\venv\Scripts\activate
   uvicorn main:app --reload --port 8000
   ```

2. **Start the Frontend development server**:
   ```bash
   cd frontend
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📊 How it Works

The engine uses a weighted operation model to estimate energy consumption:
- **Loop detection**: Identifies nested and expansive loops.
- **Pattern Matching**: Detects anti-patterns like `range(len())`.
- **Global Averages**: Converts energy (Wh) to CO2 using global carbon intensity averages (0.475g per Wh).

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*“Turning inefficient software into climate-friendly code.”*
