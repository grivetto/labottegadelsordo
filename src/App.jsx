import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Laptop, 
  Wrench, 
  MapPin, 
  Clock, 
  Smartphone, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  CheckCircle2, 
  ChevronRight, 
  Mail, 
  FileText, 
  Sparkles, 
  Check, 
  Ear, 
  AlertTriangle,
  Send,
  HelpCircle,
  ShieldCheck,
  Award,
  Cpu,
  Terminal,
  Zap,
  Database,
  Leaf,
  Info
} from 'lucide-react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  // Website version state: 'v1' (Original Modern), 'v2' (Cyberpunk), 'v3' (Natural & Eco)
  const [version, setVersion] = useState('v3');
  
  // Theme state (mainly for v1/v2 theme transitions)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  // Services tabs state
  const [activeServiceTab, setActiveServiceTab] = useState('phone'); // phone, pc, deaf
  const [activeSubTab, setActiveSubTab] = useState('all');

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll state for navbar styling
  const [isScrolled, setIsScrolled] = useState(false);

  // Quote Estimator state
  const [estimatorStep, setEstimatorStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState(null); // 'smartphone', 'pc', 'deaf'
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [estimationResult, setEstimationResult] = useState(null);

  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'
  const [formLogs, setFormLogs] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  // Cookie Notice state
  const [showCookies, setShowCookies] = useState(() => {
    return localStorage.getItem('cookie_notice_accepted') !== 'true';
  });

  // Handle version sync to html data-attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-version', version);
  }, [version]);

  // Handle document theme sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Navbar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme switch handler
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Reset subtabs when changing service tabs
  useEffect(() => {
    setActiveSubTab('all');
  }, [activeServiceTab]);

  // ==========================================================================
  // Multiverse Copywriting Content Maps
  // ==========================================================================
  const textContent = {
    v1: {
      navLogo: 'Bottega',
      navLogoSpan: 'DelSordo',
      netStatus: 'Torino: APERTO',
      pingBtn: 'Scrivici',
      heroTag: 'Nati nel 2001 al vostro servizio',
      heroTitle: 'Non buttarlo.',
      heroTitleSpan: 'Portacelo!',
      heroSubtitle: 'Siamo specializzati nella riparazione professionale di Smartphone, Tablet, PC e Notebook a Torino. Dal 2001, progettiamo e realizziamo inoltre dispositivi personalizzati per le sordità e difficoltà uditive.',
      btnPrimary: 'Calcola Preventivo',
      btnSecondary: 'I Nostri Servizi',
      stats: [
        { num: '25+', label: 'Anni di Esperienza' },
        { num: '0€', label: 'Costo Preventivo' },
        { num: '3 Mesi', label: 'Garanzia Riparazioni' },
        { num: '100%', label: 'Pezzi Certificati' }
      ],
      estimatorTitle: 'Diagnosi rapida ed estimatore tempi',
      estimatorDesc: 'Seleziona la tipologia di dispositivo e il problema riscontrato per ottenere una stima immediata dei tempi e dei costi indicativi per la riparazione.',
      step1Label: 'Dispositivo',
      step2Label: 'Problema',
      step3Label: 'Risultato',
      step1Prompt: 'Su quale dispositivo riscontri il problema?',
      step2Prompt: 'Qual è il problema principale del tuo dispositivo?',
      servicesTitle: 'Esperienza tecnica multimarca',
      servicesDesc: 'Grazie alla formazione costante del nostro team di tecnici qualificati in sede, operiamo su smartphone, pc fissi e portatili, garantendo la massima qualità dei ricambi.',
      tabPhone: 'Riparazione Smartphone & Tablet',
      tabPc: 'Riparazione Notebook e PC',
      tabDeaf: 'Dispositivi per Sordità',
      aboutSubtitle: 'La Nostra Storia',
      aboutTitle: 'Perché "La Bottega del Sordo"?',
      aboutStoryP1: "La nostra attività nasce nel 2001 a Torino da un'idea del titolare Vincenzo Oliveri. Inizialmente fondata come centro di assistenza tecnica per la telefonia e l'informatica, la Bottega ha da subito abbracciato una missione molto speciale: aiutare le persone con difficoltà uditive.",
      aboutStoryP2: "Abbiamo iniziato a progettare, adattare e installare sveglie a vibrazione, telefoni amplificati e segnalatori luminosi domestici. Questa forte specializzazione sociale ha presto conquistato il cuore del quartiere e di Torino, dando all'attività il suo nome caratteristico: La Bottega del Sordo.",
      aboutStoryP3: "Il nostro motto è rimasto sempre lo stesso: \"Non buttarlo, Portacelo!\". Crediamo fermamente nel valore del recupero tecnologico per ridurre gli sprechi ambientali ed evitare alle persone costi superflui per l'acquisto di nuovi dispositivi.",
      cardExpTitle: 'Esperienza Decennale',
      cardExpDesc: 'Lavoriamo sulla tecnologia dal 2001. Abbiamo affrontato l\'evoluzione dei telefoni cellulari fino ai moderni smartphone e tablet.',
      cardEcoTitle: 'Tecnologia Sostenibile',
      cardEcoDesc: 'Promuoviamo attivamente l\'economia circolare. Rigenerare un vecchio PC o riparare uno smartphone evita rifiuti elettronici dannosi.',
      cardHelpTitle: 'Consulenza Gratuita',
      cardHelpDesc: 'Il nostro team di tecnici qualificati, sistemisti e programmatori è sempre a disposizione per darti un consiglio sincero.',
      contactSubtitle: 'Dove Trovarci',
      contactTitle: 'Passa in Negozio',
      contactAddrTitle: 'Indirizzo',
      contactPhoneTitle: 'Telefono Fisso',
      contactHoursTitle: 'Giorni e Orari di Apertura',
      contactHours1: 'Dal Martedì al Sabato',
      contactHours2: 'Mattina: 09:00 - 13:00 | Pomeriggio: 15:00 - 19:00',
      contactHoursClose: 'Domenica e Lunedì: Chiuso',
      formTitle: 'Invia un Messaggio',
      formDesc: 'Hai domande su una riparazione o desideri richiedere informazioni per un dispositivo? Scrivici compilando i campi sottostanti.',
      formNameLbl: 'Il tuo Nome (richiesto)',
      formEmailLbl: 'Indirizzo Email (richiesto)',
      formSubjLbl: 'Oggetto',
      formMsgLbl: 'Il tuo Messaggio (richiesto)',
      formPrivacy: 'Dichiaro di aver letto e accettato l\'informativa sulla privacy per procedere.',
      formSubmit: 'Invia Messaggio',
      formAlertSuccess: 'Messaggio inviato con successo! Ti risponderemo il prima possibile.',
      formAlertError: 'Si è verificato un errore. Per favore, controlla i dati inseriti.',
      cookieBanner: 'Utilizziamo i cookie tecnici per il corretto funzionamento del sito. Proseguendo nella navigazione acconsenti all\'uso dei cookie. Leggi la nostra Cookie Policy.',
      cookieDeny: 'Rifiuta',
      cookieAccept: 'Acconsento'
    },
    v2: {
      navLogo: 'Bottega',
      navLogoSpan: 'Del.Sordo',
      netStatus: 'PIEDMONT_GRID: ACTIVE',
      pingBtn: 'PING DIRECT',
      heroTag: 'PIEDMONT SUBNET SEC. 011 // OPERATIONAL EST. 2001',
      heroTitle: 'Non rottamarlo.',
      heroTitleSpan: 'Riprogrammalo.',
      heroSubtitle: 'Siamo specializzati nella rigenerazione tecnica di Cyber-Deck, Terminali hardware e unità Comm-Link neurali. Assembliamo e programmiamo inoltre impianti acustici bio-cyberware per ipoacusia.',
      btnPrimary: 'Diagnosi Protocollo',
      btnSecondary: 'Catalogo Interventi',
      stats: [
        { num: '25+ CYCL', label: 'Anni nel Settore Tech' },
        { num: '0 ₵ / €0', label: 'Costo Analisi Preventivo' },
        { num: '90 CICLI', label: 'Garanzia su firmware & HW' },
        { num: '100% CERT', label: 'Parti e micro-chip tracciati' }
      ],
      estimatorTitle: 'CALCOLA PREVENTIVO LOGICO',
      estimatorDesc: 'Interroga il terminale di diagnostica rapida: seleziona l\'unità hardware e la tipologia di malfunzionamento rilevato per generare una stima immediata.',
      step1Label: 'Hardware Class',
      step2Label: 'Code_Malfunction',
      step3Label: 'Output_Estimate',
      step1Prompt: '[SELECT SYSTEM HARDWARE TO DECRYPT]',
      step2Prompt: '[SPECIFY MALFUNCTION CODE]',
      servicesTitle: 'SERVIZI DI RIGENERAZIONE ED EXPLOIT',
      servicesDesc: 'Grazie a decenni di addestramento su hardware eterogeneo e micro-elettronica certificata, operiamo su comm-link mobili, terminali portatili e deck integrati.',
      tabPhone: 'RIGENERAZIONE COMM-LINK & PORTATILI',
      tabPc: 'RIPARAZIONE CYBER-DECK & MAINFRAME',
      tabDeaf: 'IMPIANTI ACUSTICI & BIO-CYBERWARE',
      aboutSubtitle: 'ARCHIVIO_DATO // LOG',
      aboutTitle: 'ALLA RADICE DELLA CYBER-BOTTEGA',
      aboutStoryP1: "Le operazioni della nostra officina di riparazione iniziano nel lontano 2001 a Torino, fondate su un'intuizione del capo tech-ripper Vincenzo Oliveri. Nato inizialmente come centro riparazioni per telefonia ed elaboratori logici, il laboratorio ha intrapreso una missione a forte impatto: rompere le barriere della sordità.",
      aboutStoryP2: "Abbiamo sviluppato sveglie a vibrazione meccanica sottomaterasso, telefoni amplificati a bobine \"T\" e segnalatori a impulsi ottici. Questa focalizzazione nell'assistere le persone con disabilità uditive e sordità ha consacrato l'officina con il suo nome celebre: La Bottega del Sordo.",
      aboutStoryP3: "Il nostro comando primario è rimasto immutato: \"Non Rottamarlo, Portacelo!\". Crediamo nel recupero dei circuiti hardware per salvaguardare il pianeta dall'accumulo di scorie elettroniche nocive ed evitare spese superflue ai cittadini.",
      cardExpTitle: 'ESPERIENZA CYBER-DECADALE',
      cardExpDesc: 'Manipoliamo chip logici e circuiti integrati dal 2001. Abbiamo domato l\'intera evoluzione dei microprocessori fino agli attuali dispositivi neurali.',
      cardEcoTitle: 'TECNOLOGIA SOSTENIBILE',
      cardEcoDesc: 'Sosteniamo l\'economia circolare. Risanare un vecchio deck o risaldare una porta guasta evita scorie hardware tossiche sul territorio.',
      cardHelpTitle: 'CONSULENZA INGEGNERISTICA',
      cardHelpDesc: 'Il nostro organico di programmatori di sistema e tech-rippers è sempre in linea per offrirti diagnosi oneste sul tuo hardware.',
      contactSubtitle: 'LINK_FREQUENZA',
      contactTitle: 'PUNTO DI RACCORDO GRID',
      contactAddrTitle: 'COORDINATE FISICHE NODE',
      contactPhoneTitle: 'FREQUENZA DI DIALOGO (TELEFONO)',
      contactHoursTitle: 'FINESTRE DI ATTIVITÀ',
      contactHours1: 'Dal Martedì al Sabato',
      contactHours2: 'Fascia 01: 09:00 - 13:00 | Fascia 02: 15:00 - 19:00',
      contactHoursClose: 'Domenica e Lunedì: SYSTEM_OFFLINE',
      formTitle: '[ESTABLISH DIRECT FEEDBACK LINK]',
      formDesc: 'Invia un payload di trasmissione cifrato ai nostri tech-rippers. Specifica l\'identificativo e il codice di errore riscontrato.',
      formNameLbl: 'OPERATOR_NAME (richiesto)',
      formEmailLbl: 'NET_LINK_EMAIL (richiesto)',
      formSubjLbl: 'COMMUNICATOR_SUBJECT',
      formMsgLbl: 'PAYLOAD_MESSAGE_BODY (richiesto)',
      formPrivacy: 'Acconsento al trattamento dei dati personali secondo i protocolli di sicurezza della griglia locale.',
      formSubmit: 'TRASMETTI PAYLOAD',
      formAlertSuccess: 'Payload trasmesso con successo! Risposta programmata sul tuo net-link entro 1 ciclo di rete.',
      formAlertError: 'Trasmissione fallita. Verifica le stringhe e il checksum del modulo.',
      cookieBanner: '[SECURITY PROTOCOL CONSENT] Utilizziamo cookie tecnici per stabilire e autenticare la sessione di rete del terminale. Proseguendo, accetti il tracciamento locale della griglia.',
      cookieDeny: 'RIFIUTA',
      cookieAccept: 'AUTENTICA'
    },
    v3: {
      navLogo: 'La Bottega',
      navLogoSpan: 'del Sordo',
      netStatus: 'Torino Fabrizi: APERTO',
      pingBtn: 'Contattaci Ora',
      heroTag: '🌿 Ripara, Rigenera, Respira // Dal 2001',
      heroTitle: 'L\'alternativa verde',
      heroTitleSpan: 'alla rottamazione.',
      heroSubtitle: 'Diamo nuova vita ai tuoi dispositivi elettronici. Ripariamo PC e smartphone riducendo i rifiuti e configuriamo sveglie sensoriali e ausili acustici con cura artigianale ed ecologica.',
      btnPrimary: 'Simula Risparmio & Stima',
      btnSecondary: 'Scopri i Servizi Verdi',
      stats: [
        { num: '25+ Anni', label: 'Di Artigianato Tech' },
        { num: '0€', label: 'Costo Diagnosi Ecologica' },
        { num: '100%', label: 'Garanzia di Trasparenza' },
        { num: 'E-Waste', label: 'Ridotto ogni giorno' }
      ],
      estimatorTitle: 'Simulatore di Riparazione & Risparmio Ecologico',
      estimatorDesc: 'Scegli il tuo dispositivo e il difetto riscontrato. Scoprirai quanto costa rimetterlo a nuovo e l\'equivalente stimato di emissioni di CO2 evitate rispetto all\'acquisto di un prodotto nuovo.',
      step1Label: 'Tipo Dispositivo',
      step2Label: 'Tipo Malfunzionamento',
      step3Label: 'Analisi Sostenibile',
      step1Prompt: 'Seleziona la tipologia di dispositivo:',
      step2Prompt: 'Seleziona il problema principale da diagnosticare:',
      servicesTitle: 'Assistenza Artigianale per Tutti',
      servicesDesc: 'Ripariamo le tecnologie moderne con uno sguardo attento al pianeta e alla comunità. Sosteniamo famiglie, giovani e anziani con soluzioni informatiche chiare e inclusive.',
      tabPhone: 'Riparazione Smartphone & Tablet Eco',
      tabPc: 'Rigenerazione PC, Notebook & Mac',
      tabDeaf: 'Ausili Udito & Sveglie Sensoriali',
      aboutSubtitle: 'Vicinanza e Sostenibilità',
      aboutTitle: 'Una Bottega Aperta a Tutti',
      aboutStoryP1: "La Bottega del Sordo nasce a Torino nel 2001 da un'idea di Vincenzo Oliveri. Fin dall'inizio, oltre alle classiche riparazioni di PC e cellulari, la nostra officina si è dedicata a risolvere un problema concreto: l'isolamento acustico domestico delle persone con problemi di udito.",
      aboutStoryP2: "Modificando telefoni tradizionali per renderli straordinariamente udibili e installando sveglie haptiche e avvisatori visivi per porta e citofono, abbiamo migliorato la vita di tantissime famiglie nel quartiere Campidoglio e in tutta Torino, che ci hanno affettuosamente soprannominato \"La Bottega del Sordo\".",
      aboutStoryP3: "Il nostro motto \"Non buttarlo, Portacelo!\" è oggi più attuale che mai. Estendere la vita dei tuoi dispositivi elettronici è il gesto più efficace che puoi compiere per limitare le estrazioni di terre rare e ridurre i rifiuti elettronici e le emissioni di gas serra.",
      cardExpTitle: 'Artigiani della Tecnologia',
      cardExpDesc: 'Curiamo ogni circuito con la precisione di un tempo. Ripariamo micro-componenti anziché sostituire l\'intera scheda madre, risparmiando risorse.',
      cardEcoTitle: 'Rispetto per la Terra',
      cardEcoDesc: 'Riparare un vecchio computer o installare un disco SSD evita rifiuti RAEE difficili da smaltire e riduce il consumo di nuova energia.',
      cardHelpTitle: 'Supporto Dedicato a Tutti',
      cardHelpDesc: 'Parliamo in modo semplice, senza termini incomprensibili. Spieghiamo ogni preventivo con pazienza e onestà.',
      contactSubtitle: 'La Nostra Sede',
      contactTitle: 'Vieni a Trovarci',
      contactAddrTitle: 'Indirizzo Officina',
      contactPhoneTitle: 'Linea Telefonica Diretta',
      contactHoursTitle: 'Finestre di Apertura',
      contactHours1: 'Dal Martedì al Sabato',
      contactHours2: 'Mattina: 09:00 - 13:00 | Pomeriggio: 15:00 - 19:00',
      contactHoursClose: 'Domenica e Lunedì: Riposo settimanale',
      formTitle: 'Chiedi un Consiglio',
      formDesc: 'Hai un dubbio sul tuo computer lento o desideri chiarimenti su un avvisatore acustico per la casa? Scrivici un messaggio amichevole.',
      formNameLbl: 'Il tuo Nome',
      formEmailLbl: 'Il tuo Indirizzo Email',
      formSubjLbl: 'Oggetto della richiesta',
      formMsgLbl: 'Scrivi qui la tua richiesta',
      formPrivacy: 'Accetto le linee guida sulla gestione dei dati personali con trasparenza.',
      formSubmit: 'Invia Richiesta in Bottega',
      formAlertSuccess: 'Messaggio inviato! Risponderemo con cura e professionalità il prima possibile.',
      formAlertError: 'Errore di immissione. Verifica i campi per favore.',
      cookieBanner: 'Usiamo cookie tecnici essenziali per far funzionare bene il nostro sito. Nel rispetto della tua privacy, non usiamo cookie di tracciamento invasivi.',
      cookieDeny: 'Rifiuta',
      cookieAccept: 'Accetta e Continua'
    }
  };

  // Estimator data scoped by Version
  const estimatorData = {
    v1: {
      smartphone: {
        title: 'Smartphone & Tablet',
        issues: [
          { id: 'screen', name: 'Schermo / Vetro rotto', price: '€50 - €120', time: '1 - 2 ore', process: 'Sostituzione pannello display LCD/OLED con parti certificate di alta qualità.' },
          { id: 'battery', name: 'Batteria degradata / Non carica', price: '€30 - €60', time: '1 ora', process: 'Sostituzione batteria e controllo della porta di ricarica.' },
          { id: 'audio', name: 'Problemi audio (Microfono / Altoparlante)', price: '€30 - €50', time: '1 - 2 ore', process: 'Pulizia contatti o sostituzione altoparlante interno/microfono.' },
          { id: 'oldschool', name: 'Cellulare classico "Vecchio Stile"', price: '€20 - €40', time: '1 - 2 giorni', process: 'Diagnosi componenti fisici, tastiera e rigenerazione contatti.' }
        ]
      },
      pc: {
        title: 'Notebook & PC Fissi',
        issues: [
          { id: 'slow', name: 'Computer lento / Infezione Virus', price: '€40 - €70', time: '1 - 2 giorni', process: 'Scansione approfondita, pulizia malware, ottimizzazione all\'avvio.' },
          { id: 'screen', name: 'Schermo rotto (Notebook)', price: '€80 - €150', time: '1 - 3 giorni', process: 'Sostituzione del pannello LCD portatile (in base alla disponibilità del ricambio).' },
          { id: 'hardware', name: 'Upgrade Velocità (Installazione SSD)', price: '€60 - €120', time: '1 giorno', process: 'Installazione unità SSD ad altissime prestazioni e clonazione dati.' },
          { id: 'data', name: 'Recupero Dati persi / formattati', price: '€50 - €150', time: '2 - 3 giorni', process: 'Scansione profonda del disco e trasferimento dati su supporto sicuro.' }
        ]
      },
      deaf: {
        title: 'Dispositivi per Sordità',
        issues: [
          { id: 'amplified', name: 'Telefono fisso / cordless amplificato', price: '€60 - €120', time: 'Disponibilità immediata', process: 'Fornitura dispositivo amplificato di ultima generazione compatibile con apparecchi acustici.' },
          { id: 'alarm', name: 'Sveglia lampeggiante / a vibrazione', price: '€40 - €90', time: 'Disponibilità immediata', process: 'Fornitura sveglie ad alta intensità con cuscino vibrante o flash integrati.' },
          { id: 'flasher', name: 'Avvisatore acustico / luminoso di chiamata', price: '€30 - €70', time: '1 giorno', process: 'Installazione o configurazione trasmettitore luminoso collegato alla rete telefonica.' },
          { id: 'custom', name: 'Consulenza per impianto su misura', price: 'Gratuito', time: '1 giorno', process: 'Studio dell\'ambiente domestico e progettazione avvisatori integrati per la casa.' }
        ]
      }
    },
    v2: {
      smartphone: {
        title: 'Comm-Link & Sistemi Neurali',
        issues: [
          { id: 'screen', name: 'Optic Display Crack / OLED Matrix Fault', price: '50 - 120 ₵', priceEur: '€50 - €120', time: '1 - 2 CICLI (ORE)', process: 'Sostituzione completa del visore HUD con matrici ottiche certificate ad alta densità cromatica.' },
          { id: 'battery', name: 'Power Cell Decay / Energy Core Leakage', price: '30 - 60 ₵', priceEur: '€30 - €60', time: '1 CICLO (ORA)', process: 'Sostituzione del nucleo energetico degradato e ripristino del chip di alimentazione termica.' },
          { id: 'audio', name: 'Aural Comm Malfunction / Voice Vocoder Glitch', price: '30 - 50 ₵', priceEur: '€30 - €50', time: '1 - 2 CICLI (ORE)', process: 'Purificazione dei sensori microfonici e calibrazione trasduttore vocale.' },
          { id: 'oldschool', name: 'Retro-Comm Rig Restore (Legacy Hardware)', price: '20 - 40 ₵', priceEur: '€20 - €40', time: '1 - 2 CICLI (GIORNI)', process: 'Diagnostica fisica tastiera analogica, risanamento contatti in rame e rigenerazione micro-antenne.' }
        ]
      },
      pc: {
        title: 'Cyber-Decks & Terminali Rig',
        issues: [
          { id: 'slow', name: 'Malware Contamination / Net-Daemon Infection', price: '40 - 70 ₵', priceEur: '€40 - €70', time: '1 - 2 CICLI (GIORNI)', process: 'Scansione antivirus profonda della griglia logica, debellamento script ostili e deframmentazione di registro.' },
          { id: 'screen', name: 'Deck Visor Shattered / Terminal HUD Failure', price: '80 - 150 ₵', priceEur: '€80 - €150', time: '1 - 3 CICLI (GIORNI)', process: 'Riparazione visore LCD/OLED portatile del deck (in base alla reperibilità dei componenti nei canali ufficiali).' },
          { id: 'hardware', name: 'Solid-State Storage Upgrade / Memory Core Boost', price: '60 - 120 ₵', priceEur: '€60 - €120', time: '1 CICLO (GIORNO)', process: 'Installazione unità SSD quantistiche ad alta velocità, travaso sicuro dei file e configurazione controller di memoria.' },
          { id: 'data', name: 'Corrupted Data Recovery / Memory Grid Recovery', price: '50 - 150 ₵', priceEur: '€50 - €150', time: '2 - 3 CICLI (GIORNI)', process: 'Ricostruzione tracce logiche compromesse del drive e backup crittografato su supporto secondario sicuro.' }
        ]
      },
      deaf: {
        title: 'Impianti Acustici & Bio-Cyberware',
        issues: [
          { id: 'amplified', name: 'Bio-Acoustic Amplified Comms (+40dB)', price: '60 - 120 ₵', priceEur: '€60 - €120', time: 'IMMEDIATO', process: 'Fornitura di moduli telefonici analogico/digitali amplificati a bassissima distorsione compatibili con apparecchi acustici.' },
          { id: 'alarm', name: 'Haptic Pulse Alarm / Kinetic Wake-up Core', price: '40 - 90 ₵', priceEur: '€40 - €90', time: 'IMMEDIATO', process: 'Integrazione sveglie a elevato impulso visivo e cuscini cinetici vibranti per risveglio programmato.' },
          { id: 'flasher', name: 'Chroma-Flash Call Beacon / Optical Alert Matrix', price: '30 - 70 ₵', priceEur: '€30 - €70', time: '1 CICLO (GIORNO)', process: 'Allineamento trasmettitore ottico wireless collegato alla rete di allarme domestica o telefonica.' },
          { id: 'custom', name: 'Custom Audio-Grid Domain Mapping / Bio-Tech Consult', price: '0 ₵', priceEur: 'GRATUITO', time: '1 CICLO (GIORNO)', process: 'Analisi architettonica dell\'appartamento ed elaborazione schema domotico per indicatori ottico-haptici integrati.' }
        ]
      }
    },
    v3: {
      smartphone: {
        title: 'Smartphone & Tablet Sostenibili',
        issues: [
          { id: 'screen', name: 'Sostituzione Vetro / Display Crepato', price: '€50 - €120', time: '1 - 2 ore', process: 'Montiamo vetri e display selezionati a basso impatto, prolungando la vita utile del telefono.', co2: '55 kg di CO2 evitati' },
          { id: 'battery', name: 'Sostituzione Batteria Degradata', price: '€30 - €60', time: '1 ora', process: 'Una nuova batteria ridà piena autonomia, salvando il telefono dalla rottamazione anticipata.', co2: '22 kg di CO2 evitati' },
          { id: 'audio', name: 'Risoluzione Problemi Audio', price: '€30 - €50', time: '1 - 2 ore', process: 'Pulizia minuziosa o sostituzione capsule auricolari e microfoni con ricambi di qualità.', co2: '15 kg di CO2 evitati' },
          { id: 'oldschool', name: 'Rigenerazione Cellulare Tradizionale', price: '€20 - €40', time: '1 - 2 giorni', process: 'Riparazione tasti fisici e contatti ossidati per mantenere in vita telefoni semplici ed efficienti.', co2: '30 kg di CO2 evitati' }
        ]
      },
      pc: {
        title: 'Computer & Notebook Rigenerati',
        issues: [
          { id: 'slow', name: 'Velocizzazione e Bonifica Software', price: '€40 - €70', time: '1 - 2 giorni', process: 'Pulizia profonda da virus, eliminazione programmi superflui all\'avvio e ottimizzazione generale.', co2: '75 kg di CO2 evitati' },
          { id: 'screen', name: 'Sostituzione Schermo Notebook', price: '€80 - €150', time: '1 - 3 giorni', process: 'Sostituiamo schermi portatili difettosi o crepati per evitare l\'acquisto di un nuovo laptop.', co2: '110 kg di CO2 evitati' },
          { id: 'hardware', name: 'Potenziamento SSD (Rigenerazione PC)', price: '€60 - €120', time: '1 giorno', process: 'L\'installazione di un disco SSD triplica la velocità di qualsiasi PC datato, azzerando la necessità di cambiarlo.', co2: '160 kg di CO2 evitati' },
          { id: 'data', name: 'Recupero File e Dati Cancellati', price: '€50 - €150', time: '2 - 3 giorni', process: 'Recupero attento di fotografie e documenti personali da supporti usurati.', co2: '12 kg di CO2 evitati' }
        ]
      },
      deaf: {
        title: 'Ausili per Sordità & Casa',
        issues: [
          { id: 'amplified', name: 'Fornitura Telefono Amplificato (+40dB)', price: '€60 - €120', time: 'Disponibile subito', process: 'Consegna e configurazione di telefoni ad alto volume per facilitare il dialogo con i cari.', co2: '35 kg di CO2 evitati' },
          { id: 'alarm', name: 'Sveglia Haptica a Vibrazione', price: '€40 - €90', time: 'Disponibile subito', process: 'Fornitura sveglie con vibrazione sottomaterasso per garantire un risveglio sereno e sicuro.', co2: '20 kg di CO2 evitati' },
          { id: 'flasher', name: 'Avvisatore Luminoso Citofono/Porta', price: '€30 - €70', time: '1 giorno', process: 'Installazione di trasmettitori ottici wireless che convertono suoni molesti in piacevoli segnali stroboscopici.', co2: '18 kg di CO2 evitati' },
          { id: 'custom', name: 'Progettazione Impianto Domotico', price: 'Gratuito', time: '1 giorno', process: 'Consulenza a casa tua per mappare al meglio avvisatori di sicurezza luminosi e sonori.', co2: 'Fino a 250 kg CO2' }
        ]
      }
    }
  };

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setSelectedIssue(null);
    setEstimatorStep(2);
  };

  const handleIssueSelect = (issue) => {
    setSelectedIssue(issue);
    
    // Find estimate details
    const selectedDeviceIssues = estimatorData[version].issues;
    const details = selectedDeviceIssues.find(item => item.id === issue);
    setEstimationResult(details);
    setEstimatorStep(3);
  };

  const resetEstimator = () => {
    setSelectedDevice(null);
    setSelectedIssue(null);
    setEstimationResult(null);
    setEstimatorStep(1);
  };

  // Form Validation & Submission with dynamic logs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = version === 'v2' ? 'Identificativo operatore richiesto' : 'Il nome è richiesto';
    }
    if (!formData.email.trim()) {
      errors.email = version === 'v2' ? 'Indirizzo net-link richiesto' : 'L\'email è richiesta';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = version === 'v2' ? 'Indirizzo net-link non valido' : 'Inserisci un indirizzo email valido';
    }
    if (!formData.message.trim()) {
      errors.message = version === 'v2' ? 'Il payload del messaggio non può essere vuoto' : 'Il messaggio non può essere vuoto';
    }
    if (!formData.privacy) {
      errors.privacy = version === 'v2' ? 'Necessario accettare i protocolli di sicurezza dati' : 'Devi accettare l\'informativa sulla privacy per procedere';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('loading');
    
    if (version === 'v2') {
      setFormLogs([
        'INITIATING DIRECT LINK PROTOCOL...',
        'ENCRYPTING DATA PAYLOAD [AES-256]...',
        'PINGING PIEDMONT GRID NETWORK STATIONS...'
      ]);

      setTimeout(() => {
        setFormLogs(prev => [...prev, 'ESTABLISHING ROUTE TO VIA FABRIZI NODE...']);
      }, 400);

      setTimeout(() => {
        setFormLogs(prev => [...prev, 'PACKET TRANSFER SUCCESSFUL. CHECKSUM VERIFIED [OK].']);
      }, 900);
    } else {
      setFormLogs(['Invio del messaggio in corso...', 'Connessione al server della bottega...']);
    }

    setTimeout(() => {
      setFormStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        colors: version === 'v3' ? ['#2e7d32', '#81c784', '#a5d6a7'] : ['#00f0ff', '#ff0055', '#ffea00'],
        origin: { y: 0.6 }
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacy: false
      });
    }, 1500);
  };

  // Cookie acceptance
  const acceptCookies = () => {
    localStorage.setItem('cookie_notice_accepted', 'true');
    setShowCookies(false);
  };

  // Subtab navigation configurations
  const getSubTabs = () => {
    if (activeServiceTab === 'phone') {
      return [
        { id: 'all', name: version === 'v2' ? 'Tutti i Comm-Links' : 'Tutti i telefoni' },
        { id: 'screen', name: version === 'v2' ? 'Visori & Matrici OLED' : 'Schermi & Vetri' },
        { id: 'audio', name: version === 'v2' ? 'Sensori Audio & Jack' : 'Audio & Altoparlanti' },
        { id: 'software', name: version === 'v2' ? 'Firmware & Decrittazione' : 'Ripristino & Dati' },
        { id: 'oldschool', name: version === 'v2' ? 'Hardware Classico (Legacy)' : 'Modelli Tradizionali' }
      ];
    } else if (activeServiceTab === 'pc') {
      return [
        { id: 'all', name: version === 'v2' ? 'Tutti i Rig / Cyber-Decks' : 'Tutta l\'assistenza PC' },
        { id: 'virus', name: version === 'v2' ? 'Disinfezione Net-Daemons' : 'Rimozione Virus' },
        { id: 'hardware', name: version === 'v2' ? 'Overclock & Core Boost' : 'Upgrade & Velocità' },
        { id: 'format', name: version === 'v2' ? 'Inizializzazione OS' : 'Formattazione' },
        { id: 'data', name: version === 'v2' ? 'Ripristino Memoria Grid' : 'Recupero File' }
      ];
    } else {
      return [
        { id: 'all', name: version === 'v2' ? 'Tutto il Bio-Cyberware' : 'Tutti i dispositivi' },
        { id: 'amplified', name: version === 'v2' ? 'Moduli Acustici (+40dB)' : 'Telefoni Amplificati' },
        { id: 'flashers', name: version === 'v2' ? 'Segnalatori Chroma-Flash' : 'Avvisatori Luminosi' },
        { id: 'vibrating', name: version === 'v2' ? 'Sveglie Haptiche & Cinetici' : 'Sveglie con Vibrazione' }
      ];
    }
  };

  // Safe translation loader helper
  const t = (key) => textContent[version]?.[key] || textContent.v1[key] || '';

  return (
    <div className="app-wrapper">
      {/* Background Decorative Glow Elements */}
      <div className="glow-overlay" style={{ top: '10%', right: '5%', width: '400px', height: '400px', background: version === 'v3' ? 'rgba(76, 175, 80, 0.2)' : 'var(--color-phone)' }}></div>
      <div className="glow-overlay" style={{ top: '40%', left: '-5%', width: '500px', height: '500px', background: version === 'v3' ? 'rgba(46, 125, 50, 0.2)' : 'var(--color-pc)' }}></div>
      <div className="glow-overlay" style={{ bottom: '15%', right: '10%', width: '350px', height: '350px', background: version === 'v3' ? 'rgba(130, 119, 23, 0.2)' : 'var(--color-deaf)' }}></div>

      {version === 'v2' && <div className="scanline-bar"></div>}

      {/* ==========================================================================
         HOLOGRAPHIC UNIVERSE MULTIVERSE SELECTOR FIELD (v1, v2, v3 Switcher)
         ========================================================================== */}
      <div className="multiverse-selector-bar">
        <div className="container switcher-container">
          <div className="switcher-info">
            <span className="grid-status-dot animated-pulse"></span>
            <span className="switcher-label">SELEZIONE INTERFACCIA:</span>
          </div>
          <div className="switcher-buttons">
            <button 
              className={`switcher-btn ${version === 'v1' ? 'active v1-active' : ''}`}
              onClick={() => { setVersion('v1'); resetEstimator(); }}
            >
              🛠️ v1 Moderno
            </button>
            <button 
              className={`switcher-btn ${version === 'v2' ? 'active v2-active' : ''}`}
              onClick={() => { setVersion('v2'); resetEstimator(); }}
            >
              ⚡ v2 Cyberpunk
            </button>
            <button 
              className={`switcher-btn ${version === 'v3' ? 'active v3-active' : ''}`}
              onClick={() => { setVersion('v3'); resetEstimator(); }}
            >
              🌿 v3 Naturale & Eco
            </button>
          </div>
        </div>
      </div>

      {/* Header/Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {version === 'v3' ? (
              <Leaf className="logo-icon text-eco animate-pulse" size={22} style={{ color: 'var(--color-pc)' }} />
            ) : version === 'v2' ? (
              <Cpu className="logo-icon animate-pulse" size={22} />
            ) : (
              '🛠️'
            )}
            {t('navLogo')}<span>{t('navLogoSpan')}</span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{version === 'v2' ? 'SYSTEM_INIT' : 'Home'}</a></li>
            <li><a href="#preventivo" onClick={() => setIsMenuOpen(false)}>{version === 'v2' ? 'DIAGNOSI_RAPIDA' : version === 'v3' ? 'Simulatore Eco' : 'Preventivi'}</a></li>
            <li><a href="#servizi" onClick={() => setIsMenuOpen(false)}>{version === 'v2' ? 'SERVIZI_TECH' : 'Servizi'}</a></li>
            <li><a href="#chi-siamo" onClick={() => setIsMenuOpen(false)}>{version === 'v2' ? 'LOG_STORIA' : 'Chi Siamo'}</a></li>
            <li><a href="#contatti" onClick={() => setIsMenuOpen(false)}>{version === 'v2' ? 'CONNETTI_FREQUENZA' : 'Contatti'}</a></li>
          </ul>

          <div className="nav-actions">
            <div className="net-status-badge">
              <span className="blink-dot"></span>
              {t('netStatus')}
            </div>
            
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambia tema">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contatti" className="btn-contact glitch-text">{t('pingBtn')}</a>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              {version === 'v2' ? <Terminal size={14} /> : version === 'v3' ? <Leaf size={14} style={{ color: 'var(--color-pc)' }} /> : <Sparkles size={14} />}
              {t('heroTag')}
            </div>
            <h1 className="hero-title">
              {t('heroTitle')}<br />
              <span className="glitch-text">{t('heroTitleSpan')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <div className="hero-cta">
              <a href="#preventivo" className="btn-primary">
                {t('btnPrimary')} <ChevronRight size={18} />
              </a>
              <a href="#servizi" className="btn-secondary">
                {t('btnSecondary')}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-backdrop"></div>
            <div className="visual-cards-container animate-float">
              {/* Floating Card 1: Smartphone */}
              <div className="floating-card glass card-phone">
                <div className="floating-card-icon phone">
                  <Smartphone size={24} />
                </div>
                <h3>{version === 'v2' ? 'SISTEMI NEURALI & COMM' : version === 'v3' ? 'Smartphone & Tablet Eco' : 'Smartphone & Tablet'}</h3>
                <p>
                  {version === 'v2' 
                    ? 'Ripristino visori HUD rotti, micro-celle energetiche e recalibrazione vocoder acustici. Garanzia 90 cicli.' 
                    : version === 'v3'
                    ? 'Sostituzione schermi e batterie per estendere al massimo il ciclo di vita del tuo cellulare.'
                    : 'Schermi rotti, batterie esauste e problemi audio. Riparazioni rapide e garantite 3 mesi.'}
                </p>
                {version === 'v2' && <div className="card-tech-overlay">SUBNET_ID: COMM_UNIT</div>}
              </div>

              {/* Floating Card 2: PC */}
              <div className="floating-card glass card-pc">
                <div className="floating-card-icon pc">
                  <Laptop size={24} />
                </div>
                <h3>{version === 'v2' ? 'CYBER-DECKS & PORTATILI' : version === 'v3' ? 'Computer & Laptop Verdi' : 'Notebook & Desktop'}</h3>
                <p>
                  {version === 'v2' 
                    ? 'Debellamento Net-Daemon ostili, reinstallazione griglie kernel, upgrade moduli SSD e recupero tracce dati.' 
                    : version === 'v3'
                    ? 'Velocizzazione computer lenti con upgrade SSD, salvando hardware utile dalla discarica.'
                    : 'Rimozione virus, formattazione, potenziamento SSD e recupero dati persi con preventivo gratuito.'}
                </p>
                {version === 'v2' && <div className="card-tech-overlay">SUBNET_ID: RIG_DECK</div>}
              </div>

              {/* Floating Card 3: Sordità */}
              <div className="floating-card glass card-deaf">
                <div className="floating-card-icon deaf">
                  <Ear size={24} />
                </div>
                <h3>{version === 'v2' ? 'BIO-ACUSTICA E COGNITIVO' : version === 'v3' ? 'Ausili Udito & Sveglie' : 'Dispositivi Sordità'}</h3>
                <p>
                  {version === 'v2' 
                    ? 'Configurazione telefoni amplificati, segnalatori ottici e sveglie haptiche sottomaterasso ad alte frequenze.' 
                    : version === 'v3'
                    ? 'Sveglie sensoriali stroboscopiche, avvisatori porta wireless e telefoni amplificati ad alto volume.'
                    : 'Telefoni amplificati, sveglie vibranti e avvisatori luminosi su misura per mantenere l\'autonomia.'}
                </p>
                {version === 'v2' && <div className="card-tech-overlay">SUBNET_ID: AUDIO_IMPL</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Row */}
        <div className="container">
          <div className="stats-row glass">
            {t('stats').map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Interactive Quote Estimator Widget */}
      <section id="preventivo" className="estimator-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{version === 'v2' ? 'DIAGNOSTICA_SISTEMA' : 'ECO_TUTORIAL'}</span>
            <h2 className="section-title">{t('estimatorTitle')}</h2>
            <p className="section-desc">
              {t('estimatorDesc')}
            </p>
          </div>

          <div className="estimator-box glass">
            {/* Step Indicators */}
            <div className="estimator-steps-indicator">
              <div className={`step-indicator-item ${estimatorStep >= 1 ? 'active' : ''} ${estimatorStep > 1 ? 'completed' : ''}`}>
                <div className="step-number">01</div>
                <div className="step-label">{t('step1Label')}</div>
              </div>
              <div className={`step-indicator-item ${estimatorStep >= 2 ? 'active' : ''} ${estimatorStep > 2 ? 'completed' : ''}`}>
                <div className="step-number">02</div>
                <div className="step-label">{t('step2Label')}</div>
              </div>
              <div className={`step-indicator-item ${estimatorStep >= 3 ? 'active' : ''} ${estimatorStep > 3 ? 'completed' : ''}`}>
                <div className="step-number">03</div>
                <div className="step-label">{t('step3Label')}</div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Device Selection */}
              {estimatorStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                    {t('step1Prompt')}
                  </h3>
                  <div className="estimator-grid">
                    <div className="estimator-card phone-hover" onClick={() => handleDeviceSelect('smartphone')}>
                      <div className="estimator-card-icon"><Smartphone size={30} /></div>
                      <h3>{version === 'v3' ? 'Smartphone & Tablet' : version === 'v2' ? 'COMM-LINK & NEURALE' : 'Smartphone / Cellulare'}</h3>
                      <p>
                        {version === 'v3' 
                          ? 'Per estendere l\'usabilità del tuo schermo e accumulatore' 
                          : version === 'v2' 
                          ? 'Smartphone, cordless, telefoni analogici potenziati' 
                          : 'Telefoni cellulari, cordless e tablet'}
                      </p>
                    </div>
                    <div className="estimator-card pc-hover" onClick={() => handleDeviceSelect('pc')}>
                      <div className="estimator-card-icon"><Laptop size={30} /></div>
                      <h3>{version === 'v3' ? 'Computer & Portatili' : version === 'v2' ? 'CYBER-DECK & PORTATILI' : 'PC & Notebook'}</h3>
                      <p>
                        {version === 'v3' 
                          ? 'Per velocizzare notebook lenti ed evitare sprechi' 
                          : version === 'v2' 
                          ? 'Mainframe fissi, workstation, portatili' 
                          : 'Computer fissi e portatili'}
                      </p>
                    </div>
                    <div className="estimator-card deaf-hover" onClick={() => handleDeviceSelect('deaf')}>
                      <div className="estimator-card-icon"><Ear size={30} /></div>
                      <h3>{version === 'v3' ? 'Ausili & Sveglie' : version === 'v2' ? 'IMPIANTI E BIO-ACUSTICA' : 'Dispositivo Sordità'}</h3>
                      <p>
                        {version === 'v3' 
                          ? 'Sveglie sensoriali stroboscopiche, avvisatori acustici' 
                          : version === 'v2' 
                          ? 'Ausili udito, sveglie sensoriali e segnalatori' 
                          : 'Accessori udito, telefoni speciali e allarmi'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Issue Selection */}
              {estimatorStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                    {t('step2Prompt')}
                  </h3>
                  <div className="estimator-grid">
                    {estimatorData[version][selectedDevice].issues.map(issue => (
                      <div key={issue.id} className="estimator-card" onClick={() => handleIssueSelect(issue.id)}>
                        <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>{issue.name}</h3>
                        <p style={{ color: 'var(--color-pc)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                          {version === 'v3' ? '[VEDI ANALISI]' : '[DECRYPT ESTIMATE]'}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="estimator-actions">
                    <button className="btn-secondary" onClick={resetEstimator}>PREVIOUS_MENU</button>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>STATUS: PHASE 02/03</span>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result Showcase */}
              {estimatorStep === 3 && estimationResult && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="result-card"
                >
                  <div className="result-badge">
                    {version === 'v3' ? '🌿 ANALISI DI RIPARAZIONE SOSTENIBILE' : 'CHECKSUM: DECRYPTED'}
                  </div>
                  <h3 className="result-title" style={{ fontFamily: 'var(--font-mono)' }}>{estimationResult.name}</h3>
                  <p className="result-desc">
                    {estimationResult.process}
                  </p>
                  
                  <div className="result-metrics">
                    <div className="metric-box">
                      <div className="metric-val" style={{ color: 'var(--color-pc)', fontFamily: 'var(--font-mono)' }}>
                        {version === 'v2' ? estimationResult.price : estimationResult.price}
                      </div>
                      <div className="metric-lbl">COSTO ESTIMATO</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-val" style={{ fontFamily: 'var(--font-mono)' }}>
                        {estimationResult.time}
                      </div>
                      <div className="metric-lbl">{version === 'v2' ? 'CICLI RECALIBRAZIONE' : 'TEMPO DI CONSEGNA'}</div>
                    </div>
                  </div>

                  {/* Eco saving block (v3 exclusive) */}
                  {version === 'v3' && estimationResult.co2 && (
                    <div className="eco-metric-box glass animate-pulse">
                      <Leaf className="eco-metric-icon text-eco" size={24} />
                      <div className="eco-metric-details">
                        <h4>RISPARMIO ECOLOGICO CORRELATO:</h4>
                        <p style={{ color: 'var(--color-pc)', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>
                          {estimationResult.co2} rispetto al nuovo
                        </p>
                        <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--text-secondary)' }}>
                          Scegliendo la riparazione artigianale eviti lo smaltimento RAEE e riduci l'emissione di gas serra.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="about-card-item" style={{ maxWidth: '650px', margin: '0 auto 2.5rem', background: 'rgba(46, 125, 50, 0.03)', borderColor: 'rgba(46, 125, 50, 0.15)', textAlign: 'left', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="info-icon-box" style={{ background: 'rgba(46, 125, 50, 0.08)', color: 'var(--color-pc)', minWidth: '44px' }}>
                      {version === 'v3' ? <Info size={20} /> : <AlertTriangle size={20} />}
                    </div>
                    <div style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                      <p style={{ margin: 0 }}>
                        {version === 'v2' ? (
                          <strong>* NOTA CONVERSIONE VALUTA GRID:</strong>
                        ) : (
                          <strong>Nota informativa preventivo:</strong>
                        )} 1 Credito (₵) corrisponde a 1 Euro (&euro;). 
                        Tutti i preventivi in sede sono <strong>al 100% gratuiti e liberi da impegni contrattuali</strong>.
                        Vieni a trovarci in <strong>Via Nicola Fabrizi 64/A</strong> per una diagnosi accurata in officina.
                      </p>
                    </div>
                  </div>

                  <div className="estimator-actions">
                    <button className="btn-secondary" onClick={() => setEstimatorStep(2)}>INDIETRO</button>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button className="btn-secondary" onClick={resetEstimator}>SIMULA ALTRO</button>
                      <a href="#contatti" className="btn-primary">CONTATTACI DIRETTO</a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section id="servizi" className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{version === 'v2' ? 'SPEC_TECNICHE' : 'I NOSTRI SERVIZI'}</span>
            <h2 className="section-title">{t('servicesTitle')}</h2>
            <p className="section-desc">
              {t('servicesDesc')}
            </p>
          </div>

          {/* Main Service Switcher Tabs */}
          <div className="services-tabs-nav">
            <button 
              className={`tab-btn ${activeServiceTab === 'phone' ? 'active phone' : ''}`}
              onClick={() => setActiveServiceTab('phone')}
            >
              <Smartphone size={18} /> {t('tabPhone')}
            </button>
            <button 
              className={`tab-btn ${activeServiceTab === 'pc' ? 'active pc' : ''}`}
              onClick={() => setActiveServiceTab('pc')}
            >
              <Laptop size={18} /> {t('tabPc')}
            </button>
            <button 
              className={`tab-btn ${activeServiceTab === 'deaf' ? 'active deaf' : ''}`}
              onClick={() => setActiveServiceTab('deaf')}
            >
              <Ear size={18} /> {t('tabDeaf')}
            </button>
          </div>

          {/* Active Tab Content Grid */}
          <div className="service-content-grid">
            <div className="service-meta">
              {activeServiceTab === 'phone' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>{version === 'v3' ? 'Telefoni & Smartphone Eco' : version === 'v2' ? 'Comm-Links & Cellulari' : 'Riparazione Smartphone'}</h2>
                  <p>
                    {version === 'v3'
                      ? 'Il display si è rotto o il touch-screen non reagisce più? Riscaldiamo i circuiti e sostituiamo i display con ricambi eccellenti e garantiti, allungando notevolmente il ciclo vitale del dispositivo ed evitando scorie elettroniche dannose.'
                      : version === 'v2'
                      ? 'HUD ottico graffiato o in frantumi? Matrice OLED degradata che non riconosce i segnali di input? O canali acustici secondari che soffocano la voce in entrata? Sostituiamo moduli energetici e recalibriamo terminali portatili.'
                      : 'Vetro in frantumi, batteria degradata o altoparlante gracchiante? Da oltre 15 anni ripariamo smartphone, cordless e classici telefoni di casa di ogni marca e modello con diagnosi e preventivi precisi.'}
                  </p>
                  <div className="service-features-list">
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-phone)' }} />
                      <div className="feature-text">
                        <h4>Garanzia del Lavoro</h4>
                        <p>{version === 'v2' ? '90 cicli di garanzia logica e micro-saldatura' : '3 mesi di garanzia su tutti i lavori in sede'}</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-phone)' }} />
                      <div className="feature-text">
                        <h4>Parti di Grado Eccellente</h4>
                        <p>Ricambi originali o compatibili di classe A+ per la massima efficienza dei componenti.</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-phone)' }} />
                      <div className="feature-text">
                        <h4>Qualsiasi Generazione</h4>
                        <p>Sia moderni telefoni Android e iOS sia legacy gear analogici con pulsantiera fisica.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeServiceTab === 'pc' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>{version === 'v3' ? 'Rigenerazione Computer & Notebook' : version === 'v2' ? 'Cyber-Decks & Workstations' : 'Riparazione Computer'}</h2>
                  <p>
                    {version === 'v3'
                      ? 'Un computer lento non è necessariamente da buttare. Installando una moderna memoria a stato solido SSD ed effettuando una pulizia approfondita da virus e programmi pesanti, triplichiamo le prestazioni di calcolo senza consumare nuove risorse fisiche.'
                      : version === 'v2'
                      ? 'Mainframe infettato da Net-Daemons o script adware rallentanti? Nuclei di alimentazione in corto o blocchi continui all\'avvio del sistema? I nostri ingegneri analizzano le griglie dei settori di memoria logica.'
                      : 'Notebook lento, ventole rumorose, crash improvvisi o infezione malware? Interveniamo in modo rapido e accurato per far ripartire la tua macchina lavorativa al massimo dell\'efficienza.'}
                  </p>
                  <div className="service-features-list">
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-pc)' }} />
                      <div className="feature-text">
                        <h4>Upgrade SSD Velocità</h4>
                        <p>Diamo nuova freschezza operativa a macchine con qualche anno alle spalle riducendo gli sprechi.</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-pc)' }} />
                      <div className="feature-text">
                        <h4>Sanificazione Software</h4>
                        <p>Rimozione totale virus, ransomware ed estirpazione adware invadenti senza perdere i file.</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-pc)' }} />
                      <div className="feature-text">
                        <h4>Ripristino Dati Personali</h4>
                        <p>Recuperiamo file importanti cancellati per distrazione da chiavette e dischi fissi logici.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeServiceTab === 'deaf' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>{version === 'v3' ? 'Soluzioni Udito & Sveglie' : version === 'v2' ? 'Acoustic Tech & Ausili Udito' : 'Dispositivi per le Sordità'}</h2>
                  <p>
                    {version === 'v3'
                      ? 'Siamo da sempre al servizio di chi ha difficoltà uditive o sordità. Mettiamo a disposizione sveglie haptiche a vibrazione sottomaterasso, trasmettitori luminosi per porte e citofoni e telefoni amplificati ad alte decibel, garantendo serenità e sicurezza in casa.'
                      : version === 'v2'
                      ? 'La nostra eccellenza storica dal 2001. Configuriamo moduli telefonici analogici/digitali amplificati, segnalatori di chiamata ottici wireless e cuscini cinetici a vibrazione coperti da 24 mesi di garanzia.'
                      : 'Una specializzazione storica che ci distingue: sveglie vibranti per sordi, avvisatori luminosi di chiamata telefonica e telefoni amplificati fino a 40dB compatibili con la bobina induttiva.'}
                  </p>
                  <div className="service-features-list">
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-deaf)' }} />
                      <div className="feature-text">
                        <h4>Telefoni Amplificati +40dB</h4>
                        <p>Volume altoparlante e suoneria ampiamente regolabili e tastiera fisica a contrasto elevato.</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-deaf)' }} />
                      <div className="feature-text">
                        <h4>Avvisatori Ottici Wireless</h4>
                        <p>Citofoni e telefoni inviano segnali radio a lampadine lampeggianti disposte nelle varie stanze.</p>
                      </div>
                    </div>
                    <div className="service-feature-item">
                      <CheckCircle2 className="feature-check" size={18} style={{ color: 'var(--color-deaf)' }} />
                      <div className="feature-text">
                        <h4>Sveglie Sensoriali Cinetico/Flash</h4>
                        <p>Vibrazione vigorosa sottomaterasso o lampo stroboscopico per svegliarsi senza fare rumore.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sub-tabs menu and panels */}
            <div className="subtabs-container">
              <div className="subtabs-menu">
                {getSubTabs().map(sub => (
                  <button
                    key={sub.id}
                    className={`subtab-btn ${activeSubTab === sub.id ? 'active' : ''} ${
                      activeServiceTab === 'phone' ? 'phone-active' : activeServiceTab === 'pc' ? 'pc-active' : 'deaf-active'
                    }`}
                    onClick={() => setActiveSubTab(sub.id)}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>

              {/* Panels Logic with Motion */}
              <div className="subtab-panel">
                <AnimatePresence mode="wait">
                  {activeServiceTab === 'phone' && (
                    <motion.div
                      key={`phone-${activeSubTab}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {activeSubTab === 'all' && (
                        <div>
                          <h3 style={{ color: 'var(--color-phone)' }}>{version === 'v2' ? '[ALL_MOBILE_PROTOCOLS]' : 'Riparazione Telefonia Completa'}</h3>
                          <p>
                            {version === 'v3'
                              ? 'Offriamo un servizio premuroso e artigianale su smartphone moderni e telefoni a tasti tradizionali. Ripariamo i singoli moduli fisici invece di spingerti a comprare un nuovo dispositivo.'
                              : 'Copriamo ogni aspetto del ripristino di comunicatori portatili. Che si tratti di uno smartphone moderno o di un classico telefono cellulare a tasti, il nostro laboratorio ha la soluzione ottimale.'}
                          </p>
                          <ul className="subtab-list">
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Schermi, Vetri e OLED</li>
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Porte di ricarica rimesse a nuovo</li>
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Sostituzione batterie ed energetico</li>
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Tasti volume & accensione fisici</li>
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Firmware sbloccati e reinstallazioni</li>
                            <li><Check size={14} style={{ color: 'var(--color-phone)' }} /> Telefoni fissi e cordless tradizionali</li>
                          </ul>
                        </div>
                      )}
                      {activeSubTab === 'screen' && (
                        <div>
                          <h3 style={{ color: 'var(--color-phone)' }}>{version === 'v2' ? '[VISORS_AND_MATRICES]' : 'Display e Vetri'}</h3>
                          <p>
                            {version === 'v3' 
                              ? 'Sostituiamo il vetro in frantumi del display con ricambi accuratamente calibrati nei colori. Diamo nuova lucidità visiva ed evitiamo lo smaltimento inutile del dispositivo.'
                              : 'Il vetro crepato o danneggiato è il guasto più comune. Installiamo pannelli LCD, LED e OLED correggendo i colori ed eseguendo la taratura del tocco.'}
                          </p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}><strong>TEMPO MEDIO DI CONSEGNA:</strong> 1 - 2 ore nella maggior parte delle riparazioni.</p>
                        </div>
                      )}
                      {activeSubTab === 'audio' && (
                        <div>
                          <h3 style={{ color: 'var(--color-phone)' }}>{version === 'v2' ? '[AURAL_SENSORS_AND_JACKS]' : 'Sensori Audio & Vivavoce'}</h3>
                          <p>Non senti bene la voce degli altri o non riescono a sentire te? Purifichiamo le fessure acustiche da ostruzioni fisiche o sostituiamo micro-altoparlanti e capsule auricolari danneggiate.</p>
                        </div>
                      )}
                      {activeSubTab === 'software' && (
                        <div>
                          <h3 style={{ color: 'var(--color-phone)' }}>{version === 'v2' ? '[FIRMWARE_DECRYPT]' : 'Ripristino e Sblocco Software'}</h3>
                          <p>Se il telefono si blocca continuamente all'avvio, ha riscontrato aggiornamenti corrotti o richiede un reset totale salvando file importanti (foto, chat, contatti), eseguiamo interventi software mirati.</p>
                        </div>
                      )}
                      {activeSubTab === 'oldschool' && (
                        <div>
                          <h3 style={{ color: 'var(--color-phone)' }}>{version === 'v2' ? '[LEGACY_GEAR_CLASSICS]' : 'Cellulari Tradizionali a Tasti'}</h3>
                          <p>Sosteniamo l'usabilità dei classici telefoni robusti "vecchio stile" con tasti fisici. Ripariamo interruttori, connettori ossidati e reperiamo batterie originali introvabili.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeServiceTab === 'pc' && (
                    <motion.div
                      key={`pc-${activeSubTab}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {activeSubTab === 'all' && (
                        <div>
                          <h3 style={{ color: 'var(--color-pc)' }}>{version === 'v2' ? '[ALL_DECK_PROTOCOLS]' : 'Riparazione ed Assistenza PC'}</h3>
                          <p>
                            {version === 'v3'
                              ? 'Risolviamo problemi fisici e software su computer fissi e portatili (PC, Notebook, Mac). Offriamo preventivi chiari per ridare piena operatività e rallentare la necessità di nuovi acquisti.'
                              : 'Offriamo manutenzione su computer fissi e portatili (Notebook, Macbook). Risolviamo problematiche di surriscaldamento, ventole rumorose e crash.'}
                          </p>
                          <ul className="subtab-list">
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Sostituzione Hard Disk lenti con SSD veloci</li>
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Rimozione profonda virus e script invasivi</li>
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Sostituzione display notebook spaccati</li>
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Reinstallazione pulita Windows e macOS</li>
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Pulizia polvere e applicazione pasta termica</li>
                            <li><Check size={14} style={{ color: 'var(--color-pc)' }} /> Recupero attento file da supporti danneggiati</li>
                          </ul>
                        </div>
                      )}
                      {activeSubTab === 'virus' && (
                        <div>
                          <h3 style={{ color: 'var(--color-pc)' }}>{version === 'v2' ? '[NET_DAEMONS_PURIFICATION]' : 'Rimozione Virus ed Adware'}</h3>
                          <p>Finestre che si aprono all'improvviso? Rallentamenti drastici? Purifichiamo a fondo il sistema da infezioni malware e adware invadenti, ripristinando la sicurezza e la stabilità originaria.</p>
                        </div>
                      )}
                      {activeSubTab === 'hardware' && (
                        <div>
                          <h3 style={{ color: 'var(--color-pc)' }}>{version === 'v2' ? '[CORE_BOOST_SSD]' : 'Upgrade Velocità SSD'}</h3>
                          <p>
                            {version === 'v3'
                              ? 'Il modo più economico ed ecologico per ridare vita a un PC datato: sostituire l\'hard disk meccanico con un moderno SSD flash e aggiungere memoria RAM. Spesa contenuta, velocità triplicata!'
                              : 'Molti computer lenti possono tornare fulminei sostituendo il vecchio Hard Disk rotativo con una moderna unità SSD e raddoppiando la memoria RAM.'}
                          </p>
                        </div>
                      )}
                      {activeSubTab === 'format' && (
                        <div>
                          <h3 style={{ color: 'var(--color-pc)' }}>{version === 'v2' ? '[KERNEL_INITALIZATION]' : 'Formattazione Pulita'}</h3>
                          <p>Inizializziamo il sistema operativo reinstallando Windows o macOS con driver aggiornati e programmi di base necessari, eliminando file spazzatura accumulati negli anni.</p>
                        </div>
                      )}
                      {activeSubTab === 'data' && (
                        <div>
                          <h3 style={{ color: 'var(--color-pc)' }}>{version === 'v2' ? '[MEMORY_GRID_RESTORE]' : 'Salvataggio & Recupero Dati'}</h3>
                          <p>Computer guasto che non si accende più? Recuperiamo file, archivi e fotografie da hard disk e memorie danneggiate logiche rimettendoli in sicurezza.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeServiceTab === 'deaf' && (
                    <motion.div
                      key={`deaf-${activeSubTab}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {activeSubTab === 'all' && (
                        <div>
                          <h3 style={{ color: 'var(--color-deaf)' }}>{version === 'v2' ? '[BIO_ACUSTICA_NET]' : 'Ausili per Sordità & Comunicazione'}</h3>
                          <p>Aiutiamo chi ha limitazioni uditive a restare connesso in sicurezza alla vita quotidiana tramite sveglie a vibrazione, segnalatori luminosi per telefoni e citofoni ed ausili certificati.</p>
                          <ul className="subtab-list">
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Sveglie a vibrazione sottomaterasso</li>
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Sveglie con forti segnali stroboscopici</li>
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Telefoni fissi analogici amplificati (+40dB)</li>
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Telefoni cordless ad alto contrasto</li>
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Ripetitori luminosi wireless citofono</li>
                            <li><Check size={14} style={{ color: 'var(--color-deaf)' }} /> Assistenza, test e accoppiamento ausili</li>
                          </ul>
                        </div>
                      )}
                      {activeSubTab === 'amplified' && (
                        <div>
                          <h3 style={{ color: 'var(--color-deaf)' }}>{version === 'v2' ? '[AMPLIFIED_MODULES_40DB]' : 'Moduli Telefonici Amplificati'}</h3>
                          <p>Modelli speciali con suonerie e altoparlanti dotati di amplificazione supplementare (fino a +40dB), pulsantiera a contrasto elevato e compatibilità induttiva.</p>
                        </div>
                      )}
                      {activeSubTab === 'flashers' && (
                        <div>
                          <h3 style={{ color: 'var(--color-deaf)' }}>{version === 'v2' ? '[CHROMA_FLASH_BEACONS]' : 'Indicatori Luminosi di Chiamata'}</h3>
                          <p>Sistemi wireless che convertono lo squillo del telefono o il pulsante del citofono in flash luminosi visibili in tutte le stanze della casa, evitando di mancare ospiti.</p>
                        </div>
                      )}
                      {activeSubTab === 'vibrating' && (
                        <div>
                          <h3 style={{ color: 'var(--color-deaf)' }}>{version === 'v2' ? '[HAPTIC_KINETIC_ALARMS]' : 'Sveglie Haptiche a Vibrazione'}</h3>
                          <p>Sveglie accoppiate a una sonda cinetica che vibra vigorosamente sotto il cuscino o il materasso. Assicura il risveglio programmato escludendo segnali acustici molesti.</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand History ("Chi Siamo") */}
      <section id="chi-siamo" className="about-section">
        <div className="container about-grid">
          <div className="about-story">
            <span className="section-subtitle">{t('aboutSubtitle')}</span>
            <h2>{t('aboutTitle')}</h2>
            <p>{t('aboutStoryP1')}</p>
            <p>{t('aboutStoryP2')}</p>
            <p>{t('aboutStoryP3')}</p>
          </div>

          <div className="about-cards">
            <div className="about-card-item tech-border">
              <div className="about-card-title">
                <ShieldCheck className="about-card-icon" size={24} style={{ color: 'var(--color-pc)' }} />
                <h3>{t('cardExpTitle')}</h3>
              </div>
              <p>{t('cardExpDesc')}</p>
            </div>

            <div className="about-card-item tech-border">
              <div className="about-card-title">
                <Award className="about-card-icon" size={24} style={{ color: 'var(--color-phone)' }} />
                <h3>{t('cardEcoTitle')}</h3>
              </div>
              <p>{t('cardEcoDesc')}</p>
            </div>

            <div className="about-card-item tech-border">
              <div className="about-card-title">
                <HelpCircle className="about-card-icon" size={24} style={{ color: 'var(--color-deaf)' }} />
                <h3>{t('cardHelpTitle')}</h3>
              </div>
              <p>{t('cardHelpDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts & Map Section */}
      <section id="contatti" className="contact-section">
        <div className="container contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info">
            <div>
              <span className="section-subtitle">{t('contactSubtitle')}</span>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>{t('contactTitle')}</h2>
              
              <div className="info-cards-stack">
                <div className="info-card">
                  <div className="info-icon-box" style={{ color: 'var(--color-pc)' }}>
                    <MapPin size={20} />
                  </div>
                  <div className="info-details">
                    <h4>{t('contactAddrTitle')}</h4>
                    <p>Via Nicola Fabrizi, 64/A, 10143 Torino (TO)</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box" style={{ color: 'var(--color-phone)' }}>
                    <Phone size={20} />
                  </div>
                  <div className="info-details">
                    <h4>{t('contactPhoneTitle')}</h4>
                    <p><a href="tel:011745869" style={{ textDecoration: 'underline', color: 'var(--color-pc)' }}>011 745869</a></p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon-box" style={{ color: 'var(--color-deaf)' }}>
                    <Clock size={20} />
                  </div>
                  <div className="info-details">
                    <h4>{t('contactHoursTitle')}</h4>
                    <p style={{ fontWeight: 600 }}>{t('contactHours1')}</p>
                    <p>{t('contactHours2')}</p>
                    <p style={{ color: 'var(--color-danger)', fontWeight: 600, fontSize: '0.8rem', marginTop: '0.25rem' }}>{t('contactHoursClose')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom styled map placeholder */}
            <div className="map-card tech-border">
              <iframe 
                title="Mappa La Bottega del Sordo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.5815664539126!2d7.644781476711718!3d45.07400385994274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d9a9cb852c5%3A0xe54b9f273db0d31b!2sVia%20Nicola%20Fabrizi%2C%2064%2C%2010143%20Torino%20TO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0, 
                  filter: version === 'v2' 
                    ? 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' 
                    : version === 'v3' 
                    ? 'sepia(30%) hue-rotate(70deg) saturate(80%) contrast(90%)' 
                    : 'none'
                }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Message Column */}
          <div className="contact-form-box glass tech-border">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--color-pc)' }}>
              {t('formTitle')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              {t('formDesc')}
            </p>

            {formStatus === 'success' && (
              <div className="form-alert success">
                <CheckCircle2 size={18} />
                <span>{t('formAlertSuccess')}</span>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-alert error">
                <AlertTriangle size={18} />
                <span>{t('formAlertError')}</span>
              </div>
            )}

            {/* Cyber Terminal Logs output */}
            {formLogs.length > 0 && (
              <div className="terminal-logs-box" style={{ borderLeftColor: 'var(--color-pc)', color: 'var(--color-pc)' }}>
                {formLogs.map((log, index) => (
                  <div key={index} className="log-line">
                    <span className="log-prompt" style={{ color: 'var(--color-phone)' }}>&gt;</span> {log}
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ fontFamily: 'var(--font-mono)' }}>{t('formNameLbl')}</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Esempio: Vincenzo Oliveri"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <span style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" style={{ fontFamily: 'var(--font-mono)' }}>{t('formEmailLbl')}</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="nome@esempio.it"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <span style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" style={{ fontFamily: 'var(--font-mono)' }}>{t('formSubjLbl')}</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Esempio: Richiesta preventivo lentezza PC"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" style={{ fontFamily: 'var(--font-mono)' }}>{t('formMsgLbl')}</label>
                <textarea 
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Scrivi qui i dettagli del guasto (marca, modello del dispositivo ed anomalie)..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {formErrors.message && <span style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.message}</span>}
              </div>

              <div className="form-group">
                <label className="form-checkbox">
                  <input 
                    type="checkbox" 
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                  />
                  <span>
                    {t('formPrivacy')}
                  </span>
                </label>
                {formErrors.privacy && <span style={{ color: 'var(--color-danger)', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.privacy}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-submit glitch-text"
                disabled={formStatus === 'loading'}
                style={{ background: 'linear-gradient(135deg, var(--color-phone), var(--color-pc))' }}
              >
                {formStatus === 'loading' ? 'CARICAMENTO...' : <><Send size={16} /> {t('formSubmit')}</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Copyright Section */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-info" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>La Bottega del Sordo di Vincenzo Oliveri</p>
            <p>HQ: Via Nicola Fabrizi, 64/A, 10143 Torino (TO)</p>
            <p>P.IVA: 09656680015 | Codice Fiscale: LVRVNC72H21L219F</p>
            <p>© {new Date().getFullYear()} La Bottega del Sordo. Tutti i diritti riservati.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
            <ul className="footer-links" style={{ fontFamily: 'var(--font-mono)' }}>
              <li><a href="#privacy">[Privacy Policy]</a></li>
              <li><a href="#cookies">[Cookie Policy]</a></li>
            </ul>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
              I marchi rappresentati appartengono ai rispettivi proprietari.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Notice Banner */}
      {showCookies && (
        <div className="cookie-notice glass tech-border">
          <div className="cookie-content">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              {t('cookieBanner')}
            </p>
          </div>
          <div className="cookie-buttons">
            <button className="btn-cookie-deny" onClick={() => setShowCookies(false)}>{t('cookieDeny')}</button>
            <button className="btn-cookie-accept" onClick={acceptCookies}>{t('cookieAccept')}</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
