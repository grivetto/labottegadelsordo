# La Bottega del Sordo — Multiverse Edition 🌿⚡🛠️

Benvenuto nel repository ufficiale de **La Bottega del Sordo**, un'officina di assistenza tecnica e configurazione ausili domestici per ipoacusia fondata a Torino nel 2001 da **Vincenzo Oliveri**.

Questa speciale applicazione web è sviluppata in **React** e **Vite**, e implementa un sistema di **scelta dell'universo tematico** direttamente in pagina principale. Gli utenti possono scambiare in tempo reale la grafica, le regole CSS e il tono di voce delle descrizioni e dei servizi tra tre versioni completamente differenti.

---

## 🌌 Le Tre Versioni Disponibili

L'interfaccia può essere commutata istantaneamente tramite la barra di selezione posta in cima allo schermo:

### 🌿 v3: Naturale & Eco (Predefinita)
* **Estetica**: Toni caldi color crema (`#fcfaf6`), finiture verde bosco (`#2e7d32`), angoli molto arrotondati, icone naturali e font serif di prestigio (`Playfair Display`).
* **Copywriting**: Comunicazione focalizzata sulla sostenibilità, sulla rigenerazione dell'hardware e sull'economia circolare per evitare i rifiuti elettronici (RAEE).
* **Eco-Estimatore**: Calcola il risparmio indicativo in termini di **CO2 non emessa nell'atmosfera** scegliendo di riparare un dispositivo invece di acquistarne uno nuovo (es. l'installazione di un SSD evita l'emissione di circa 160kg di CO2).

### ⚡ v2: Cyberpunk (Futurista)
* **Estetica**: Interfaccia ad alto contrasto scuro con scansione di linee video attive, reticolo di fondo ad ologramma, pulsanti a taglio diagonale (`clip-path`), animazioni a sfarfallio (glitch) e font a matrice di dati (`Orbitron` & `Share Tech Mono`).
* **Copywriting**: Riformulato interamente in gergo tecnologico da decker: riparazione di *Cyber-Decks*, moduli di *Comm-Link neurali* e calibrazione di *impianti bio-acustici* contro interferenze di rete.
* **Diagnostica**: Valutazione dei costi in Crediti di rete (`₵`) su Piedmont Grid, con simulatore di trasmissione payload e console log integrata nel modulo contatti.

### 🛠️ v1: Moderno (Classico)
* **Estetica**: Stile aziendale pulito, scuro ed elegante, con sfumature ciano/viola, vetri satinati (glassmorphism) ed icone lucide.
* **Copywriting**: Testi e descrizioni tradizionali del negozio di Torino.
* **Estimatore**: Calcolatore di preventivi in Euro e stima dei tempi di consegna standard.

---

## 🚀 Tecnologie Utilizzate

* **Frontend Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (Fast Hot Module Replacement)
* **Animazioni Fluidi**: [Framer Motion](https://www.framer.com/motion/) (gestione transizioni degli step dell'estimatore e cambio schede)
* **Libreria Icone**: [Lucide React](https://lucide.dev/)
* **Effetti Visivi**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (celebrazione invio messaggi)
* **Layout & Styling**: Vanilla CSS3 Custom Variables (scopate tramite l'attributo `data-version` dell'elemento radice `html`).

---

## 💻 Installazione e Avvio Locale

Assicurati di avere installato [Node.js](https://nodejs.org/) (versione 18 o superiore).

1. **Clona il repository**:
   ```bash
   git clone https://github.com/grivetto/labottegadelsordo.git
   cd labottegadelsordo
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   L'applicazione sarà visualizzabile localmente all'indirizzo `http://localhost:5173/`.

4. **Compila per la produzione**:
   ```bash
   npm run build
   ```
   I file compilati e pronti all'uso verranno depositati nella cartella `/dist`.

---

## 🗂️ Struttura delle Cartelle

```text
labottegadelsordo/
├── public/                 # Asset statici pubblici (favicon, icone SVG)
├── src/
│   ├── assets/             # Immagini e vettori React
│   ├── App.css             # Regole di stile specifiche per i componenti
│   ├── App.jsx             # Logica applicativa, switcher e traduzioni
│   ├── index.css           # Variabili di design system (v1, v2, v3) e griglie
│   └── main.jsx            # Entrypoint dell'applicazione React
├── index.html              # Template HTML principale con font integrati
├── package.json            # Dipendenze e script npm
└── vite.config.js          # Configurazione di Vite bundler
```

---

## 📄 Licenza e Autore

Questo progetto è rilasciato sotto **Licenza MIT**. Vedi il file [LICENSE](LICENSE) per i dettagli.

* **Autore**: Sergio
* **Email**: [sergio@grivetto.eu](mailto:sergio@grivetto.eu)
* **Sito Web di Riferimento**: [labottegadelsordo.com](http://labottegadelsordo.com/)
