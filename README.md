# Emira V Beauty Studio website

Un website de prezentare premium și modern pentru salonul de înfrumusețare **Emira V Beauty Studio**, dezvoltat pentru o experiență de utilizare extrem de fluidă, performanțe SEO excepționale și design premium.

---

## 🛠️ Tech Stack & Tehnologii folosite

Proiectul este structurat ca o aplicație web statică ultra-rapidă (MPA/SPA), utilizând:
- **Core:** HTML5, CSS3 (Vanilla Custom Properties pentru design system) și ES6+ JavaScript.
- **Build Tool / Bundler:** [Vite](https://vitejs.dev/) pentru compilare, optimizare automată a resurselor și live reloading rapid în timpul dezvoltării.
- **Pachete & Servicii:**
  - **Cal.com:** Integrare nativă de tip inline widget pentru programări online rapide.
  - **Google Tag Manager & Google Analytics:** Pentru analize detaliate de trafic.

---

## 📐 Arhitectura Proiectului

Aplicația este optimizată modular pentru performanță:
```text
├── public/                 # Resurse statice (imagini, pictograme, favicon)
├── src/
│   ├── js/
│   │   ├── main.js         # Punctul de intrare principal pentru homepage
│   │   ├── main-inner.js   # Script principal pentru paginile secundare
│   │   ├── navigation.js   # Logica de navigare, drawer mobil și animații scroll
│   │   └── shared-layout.js# Generatorul dinamic pentru Navbar și Footer comune
│   └── styles/
│       ├── base.css        # Variabile de bază, design tokens, reset-uri CSS
│       ├── components.css  # Stiluri pentru butoane, carduri, formulare etc.
│       ├── layout.css      # Structura de grid, flexbox și container
│       ├── responsive.css  # Regulile media-queries pentru mobil/tabletă
│       └── variables.css   # Schema de culori (Blush Pink / Rose Gold)
├── *.html                  # Pagini specifice serviciilor (manichiura, pedichiura, cosmetica, etc.)
├── vite.config.js          # Configurare Vite
└── package.json            # Dependențe npm
```

---

## 🚀 Quick Start (Pornire Rapidă)

### Cerințe preliminare
Asigură-te că ai instalat [Node.js](https://nodejs.org/) (versiunea 18 sau mai mare).

### Instalare
1. Clonează depozitul:
   ```bash
   git clone https://github.com/AndreiNeptune/site-emiravbeautystudio.git
   cd site-emiravbeautystudio
   ```
2. Instalează dependințele:
   ```bash
   npm install
   ```

### Rulare în modul de Dezvoltare (Dev)
Pentru a porni serverul local cu hot-reload:
```bash
npm run dev
```
Accesează `http://localhost:3000` în browser.

### Compilare pentru Producție (Build)
Pentru a genera fișierele optimizate pentru deployment:
```bash
npm run build
```
Codul compilat va fi generat în folderul `dist/`.

---

## 🔒 Securitate & Standarde de Calitate

- **Fără secrete în repo:** Toate configurările sunt statice sau folosesc template-uri.
- **Git Hygiene:** Fișierele temporare de migrare, cache-ul de agent și fișierele redundante sunt complet ignorate în `.gitignore`.
