// ============================================================
// YOUR PERSONAL WEBSITE CONTENT
// Edit anything here to update your site!
// ============================================================

export const profile = {
  name: "Jakson Te",
  title: "Electrical Engineering Student",
  avatar: null, // Replace with: "/images/your-photo.jpg"
  location: "Portland, Oregon",
};

export const currently = {
  workingOn:
    "Building a custom PCB for a low-power sensor network. Testing ESP32-C3 modules with LoRa communication for environmental monitoring.",
  reading:
    '"The Art of Electronics" (3rd Ed.) — revisiting analog circuit fundamentals.',
  watching:
    '"Halt and Catch Fire" (rewatch). Great portrayal of the frustration and joy of building things.',
  listeningTo:
    "The Amp Hour podcast. Brian Eno's \"Music for Airports\" while doing layout work.",
};

export const projects = [
  {
    title: "Wireless Sensor Mesh",
    status: "ACTIVE",
    date: "Feb 2026",
    description:
      "Developing a battery-powered mesh network for agricultural monitoring. Focusing on ultra-low power consumption and reliable long-range communication.",
    bullets: [
      "Custom PCB design in KiCad with power optimization",
      "C++ firmware on ESP32 with deep sleep modes",
      "Field testing: 3-month battery life achieved",
    ],
  },
  {
    title: "Analog Synthesizer Module",
    status: "COMPLETE",
    date: "Dec 2025",
    description:
      "Eurorack-compatible voltage-controlled oscillator with temperature compensation and fine tuning control.",
    bullets: [
      "Discrete transistor design using matched pairs",
      "Hand soldered prototype with panel calibration",
      "Published schematic under CC BY-SA",
    ],
  },
  {
    title: "Power Supply Analyzer",
    status: "ARCHIVED",
    date: "Jun 2025",
    description:
      "Tool for measuring ripple, transient response, and efficiency of bench power supplies. Used for lab equipment validation.",
    bullets: [],
  },
];

export const thoughts = [
  {
    date: "Feb 28, 2026",
    text: "The best debug tool is still a good night's sleep. Spent three hours chasing a sensor calibration bug yesterday, only to realize this morning it was a simple unit conversion error in my Python script.",
  },
  {
    date: "Feb 13, 2026",
    text: "There's something meditative about routing PCBs by hand. Auto-routers are fast, but the manual process forces you to understand every trace, every via. It's like the difference between typing and handwriting.",
  },
  {
    date: "Jan 28, 2026",
    text: "Rediscovered the joy of reading datasheets cover-to-cover. Modern components pack so much functionality that it's easy to miss elegant solutions hiding in the footnotes of page 47.",
  },
  {
    date: "Jan 14, 2026",
    text: "Started keeping better lab notes. Turns out future-me is very grateful when past-me writes down why a particular resistor value was chosen, not just what it is.",
  },
];

export const about = `My grandfather kept handwritten notebooks — wiring diagrams, fishing notes, ideas. This is my digital rendition of that.`;

// ============================================================
// CURRENT PAGE
// ============================================================

export const currentPage = {
  lastUpdated: "Feb 27, 2026",

  building: [
    {
      title: "Wireless Sensor Mesh Network",
      description:
        "Refining the power management on revision 3 of the board. Target is 6-month battery life on a single 18650 cell. Current revision achieves about 4.5 months. The bottleneck is I2C sensor polling — considering switching to async interrupts.",
      thisWeek: [
        "Testing solar charging circuit with 50mA panel",
        "Redesigning enclosure for better weather sealing",
        "Writing documentation for field deployment",
      ],
    },
  ],

  learning: [
    {
      title: "RF Design Fundamentals",
      description:
        'Working through "RF Circuit Design" by Chris Bowick. Finally understanding Smith charts beyond just copying matching networks from app notes. Antenna design makes more sense now.',
    },
    {
      title: "Rust for Embedded Systems",
      description:
        "Experimenting with Rust on ESP32. The ownership model catches so many bugs at compile time that would be painful to debug on hardware. Learning curve is steep but promising.",
    },
    {
      title: "Traditional Bookbinding",
      description:
        "Taking an evening class on Japanese stab binding. Want to bind my lab notes into proper books instead of leaving them as loose sheets in binders.",
    },
  ],

  thinkingAbout: [
    "The relationship between constraints and creativity. Limited battery capacity forces elegant power design. Small board area forces careful component selection. Constraints aren't obstacles — they're design parameters.",
    "How to design hardware that's maintainable 10 years from now. Through-hole components are easier to replace. Clearly labeled test points. Schematics that explain themselves. Building for longevity in a world of obsolescence.",
    "The value of boredom. Best ideas come during long walks or while washing dishes. Not during 'brainstorming sessions' or in front of a screen. Mind needs space to wander.",
  ],

  enjoying: {
    reading:
      '"The Art of Electronics" (3rd Ed.) — revisiting fundamentals. Also "Shop Class as Soulcraft" by Matthew Crawford. Good companion to hands-on work.',
    watching:
      '"Halt and Catch Fire" (rewatch). Great portrayal of the frustration and joy of building things. Also EEVblog teardowns — there\'s something satisfying about watching someone reverse-engineer a power supply.',
    listeningTo:
      "The Amp Hour podcast. Brian Eno's \"Music for Airports\" while doing layout work. The hum of the bench power supply. Rain on the workshop roof.",
    eating:
      "French press coffee in the morning. PCBs in the afternoon. Bread on weekends (turns out fermentation timing is surprisingly similar to epoxy cure times — lots of waiting).",
    rituals:
      "Morning walks before sitting at the desk. The winter air in Portland is sharp and clearing. Watching the light change on the trees helps reset focus.",
  },

  toolsOnDesk: [
    "Rigol DS7054Z oscilloscope",
    "Hakko FX-888D soldering station",
    "Generic USB logic analyzer",
    "VS Code + PlatformIO",
    "Anker USB-C power meter",
    "Blue notebook (current one is #8)",
  ],
};

// ============================================================
// LAB NOTES PAGE
// ============================================================

export const labNotes = {
  active: [
    {
      title: "Wireless Sensor Mesh Network",
      status: "Active Assignment",
      lastUpdated: "Feb 27, 2026",
      startDate: "Feb 2026",
      overview:
        "Battery-powered mesh network for environmental monitoring in agricultural settings. Each node includes temperature, humidity, and soil moisture sensors. LoRa radio enables communication up to 2km in open terrain. Goal: 6-month battery life on single 18650 cell.",
      technicalDetails: [
        "MCU: ESP32-C3 (RISC-V, WiFi/BLE for debugging)",
        "Radio: RFM95W (LoRa, 915MHz)",
        "Power: Buck converter (3.7V → 3.3V, 95% efficiency)",
        "Sleep current: 12μA measured",
        "Active transmit: 120mA @ 20dBm",
        "Wake cycle: Every 10 minutes, ~800ms active",
      ],
      currentResults:
        "Field test with 5 nodes running for 87 days. Average battery voltage: 3.52V (started at 4.1V). Projected lifespan: ~4.5 months. Range tested to 1.8km with clear line of sight. One packet loss every ~300 transmissions.",
      lessonsLearned: [
        "I2C pullups matter more than expected at low power. Switched to 100kΩ.",
        "LDO quiescent current adds up. Buck converter was worth the board space.",
        "Antenna placement critical — keep away from battery and ground plane.",
        "Temperature compensation needed for soil moisture readings.",
      ],
      nextSteps: [
        "Test solar charging circuit (50mA @ 5V panel)",
        "Implement adaptive transmit power based on RSSI",
        "Design weatherproof enclosure (IP65 target)",
        "Add OTA firmware update capability",
      ],
    },
  ],
  completed: [
    {
      title: "Analog Synthesizer Module",
      status: "Complete",
      date: "Dec 2025",
      overview:
        "Eurorack-compatible voltage-controlled oscillator. All-analog signal path using discrete transistors. Temperature-compensated exponential converter for V/Oct tracking. Final tuning stability: ±2 cents over 5 octaves.",
      keySpecs: [
        "Frequency range: 20Hz - 20kHz",
        "Waveforms: Triangle, saw, square, sine (waveshaping)",
        "THD: <1% @ 1kHz (triangle/sine)",
        "Temperature drift: <20 cents from 15°C to 35°C",
      ],
      lessonsLearned: [
        "Matched transistor pairs are worth buying instead of matching yourself.",
        "Thermal coupling matters — glue matched transistors together.",
        "1% resistors not good enough for precision. Use 0.1% for critical dividers.",
        "Hand-drawn panel labels have more character than vinyl stickers.",
      ],
    },
    {
      title: "USB Power Delivery Analyzer",
      status: "Complete",
      date: "Aug 2025",
      overview:
        "Inline USB-C device to decode and display PD negotiations. Built to debug charging issues with custom hardware. Captures voltage/current and decodes PD messages in real time.",
      keySpecs: [],
      lessonsLearned: [
        "PD protocol is more complex than expected. Good reference: USB-PD spec 3.1.",
        "CC line measurement requires high-impedance input.",
        "OLED display draws surprisingly little current at partial brightness.",
      ],
    },
  ],
};

// ============================================================
// THOUGHT GARDEN PAGE
// ============================================================

export const thoughtGarden = [
  { date: "Feb 27, 2026", text: "The oscilloscope feels like an extension of understanding now. Five years ago, waveforms were just squiggly lines. Today I can read a signal like text — see the ringing, recognize the slope, spot the noise. Tools become transparent when you use them enough." },
  { date: "Feb 21, 2026", text: "Ordering PCBs is like sending seeds into the future. You plant a design file, wait two weeks, and harvest a board that either works or teaches you something. The ritual never gets old." },
  { date: "Feb 18, 2026", text: "The best debug tool is still a good night's sleep. Spent three hours chasing a sensor calibration bug yesterday, only to realize this morning it was a simple unit conversion error in my Python script." },
  { date: "Feb 15, 2026", text: "Watched a spider build a web outside the workshop window this morning. Radial lines first, then the spiral. Methodical, patient, structural. Not unlike routing a PCB." },
  { date: "Feb 13, 2026", text: "There's something meditative about routing PCBs by hand. Auto-routers are fast, but the manual process forces you to understand every trace, every via. It's like the difference between typing and handwriting." },
  { date: "Feb 5, 2026", text: "The hum of a transformer is oddly comforting. 60Hz, constant, predictable. A reminder that some things just work, quietly, for decades." },
  { date: "Jan 28, 2026", text: "Rediscovered the joy of reading datasheets cover-to-cover. Modern components pack so much functionality that it's easy to miss elegant solutions hiding in the footnotes of page 47." },
  { date: "Jan 22, 2026", text: "Received a handwritten thank-you note from someone who used one of my open-source PCB designs. Made me realize that schematics are a form of writing — you're sharing how you think about a problem." },
  { date: "Jan 14, 2026", text: "Started keeping better lab notes. Turns out future-me is very grateful when past-me writes down why a particular resistor value was chosen, not just what it is." },
  { date: "Jan 9, 2026", text: "Sometimes the best part of building is the quiet before you power it on. All potential, no smoke yet." },
  { date: "Jan 2, 2026", text: "New year thought: engineering is just structured curiosity. The math and theory are tools, but the drive comes from wanting to know what happens when you connect A to B." },
  { date: "Dec 28, 2025", text: "Clean workspace vs. active workspace. Both have their place. Right now, mine looks like a parts explosion. I'll organize it when the project is done." },
  { date: "Dec 18, 2025", text: "Temperature matters more than I ever learned in school. Resistors drift. Transistors shift. Crystals wander. The real world runs at room temperature ±40°C." },
  { date: "Dec 14, 2025", text: "Salvaged components from a 1980s radio today. Through-hole construction, hand-soldered joints, actual wire wrap. Built to be repaired. We've gained speed but lost some durability." },
  { date: "Dec 4, 2025", text: "The smell of rosin flux is the smell of progress." },
  { date: "Dec 1, 2025", text: "Every failed board is a lesson in humility. Checked the schematic five times and still swapped the drain and source pins on the MOSFET. There is always something." },
  { date: "Nov 24, 2025", text: "Good tools are invisible. You stop noticing them and just work. Bad tools remind you they exist constantly." },
];

// ============================================================
// ATLAS PAGE
// ============================================================

export const atlas = {
  entries: [
    {
      location: "Portland, OR",
      date: "Feb 2026",
      description: "Where most of these notes were written. The workshop desk faces west — good light in the afternoons for soldering.",
      coords: { lat: 45.5152, lng: -122.6784 },
    },
    {
      location: "Big Sur, CA",
      date: "Sep 2024",
      description: "Sketched ideas for the mesh network while watching fog roll through the canyon. Sometimes distance brings clarity.",
      coords: { lat: 36.2704, lng: -121.8081 },
    },
    {
      location: "Tokyo, Japan",
      date: "Nov 2023",
      description: "Visited Akihabara for components. The density of small shops felt like browsing a physical datasheet library.",
      coords: { lat: 35.6762, lng: 139.6503 },
    },
    {
      location: "Boston, MA",
      date: "Sept 2023",
      description: "MIT Flea Market. Found a vintage oscilloscope and traded stories with a retired radio engineer.",
      coords: { lat: 42.3601, lng: -71.0589 },
    },
    {
      location: "Reykjavik, Iceland",
      date: "July 2023",
      description: "The midnight sun and clean air. Thought about power systems while watching geothermal plants in the distance.",
      coords: { lat: 64.1466, lng: -21.9426 },
    },
  ],
};

// ============================================================
// INDEX PAGE (Resume/CV)
// ============================================================

export const indexPage = {
  experience: [
    {
      title: "Senior Hardware Engineer",
      company: "Renewable Energy Systems Inc.",
      dates: "2023–Present",
      description: "Design and validation of power electronics for grid-tied solar inverters. Focus on efficiency optimization and EMI compliance.",
      bullets: [
        "Led redesign of gate driver circuit, improving switching loss by 18%",
        "Developed automated test framework for thermal characterization",
        "Mentored junior engineers on PCB layout best practices",
      ],
    },
    {
      title: "Hardware Engineer",
      company: "IoT Devices Co.",
      dates: "2020–2023",
      description: "Designed low-power sensor nodes for industrial monitoring applications.",
      bullets: [
        "Reduced average power consumption from 2.3mA to 0.4mA through sleep mode optimization",
        "Implemented over-the-air firmware update system",
        "Achieved FCC and CE certification for wireless products",
      ],
    },
    {
      title: "Engineering Intern",
      company: "National Instruments",
      dates: "2019",
      description: "Assisted in validation of data acquisition hardware. Wrote Python scripts for automated test procedures.",
      bullets: [],
    },
  ],
  selectedProjects: [
    {
      title: "Wireless Sensor Mesh Network",
      dates: "2025–Present",
      description: "Battery-powered mesh network for agricultural monitoring. Custom PCB with ESP32-C3 and LoRa radio. Three-month field deployment achieved.",
    },
    {
      title: "Analog Synthesizer Module",
      dates: "2025",
      description: "Eurorack VCO with temperature-compensated design. All-analog signal path using discrete transistors.",
    },
    {
      title: "University Solar Car Team",
      dates: "2018–2020",
      description: "Electrical team lead. Designed battery management system and motor controller for Formula Sun Grand Prix competition.",
    },
  ],
  skills: {
    hardware: ["Analog circuit design", "Power electronics", "PCB layout (KiCad, Altium)", "Mixed-signal design", "EMC/EMI debugging"],
    firmwareAndSoftware: ["C/C++ (embedded)", "Python (automation, data)", "RTOS (FreeRTOS)", "Communication protocols (I2C, SPI, UART, LoRa)", "Version control (Git)"],
    testAndMeasurement: ["Oscilloscope analysis", "Spectrum analyzer", "Thermal imaging", "Power analysis", "Signal integrity"],
    fabrication: ["Hand soldering (SMD/through-hole)", "Rework and repair", "3D printing", "Basic machining", "Enclosure design"],
  },
  education: [
    {
      degree: "B.S. Electrical Engineering",
      school: "University of Washington",
      dates: "2016–2020",
      description: "Focus on power systems and embedded systems. Senior capstone: wireless charging system for medical implants.",
    },
  ],
  contactNote: "For full CV or references, reach out via email.",
};

// ============================================================
// FIELD LOGS PAGE
// ============================================================

export const fieldLogs = [
  {
    date: "Feb 2026",
    title: "Winter in Portland",
    paragraphs: [
      "The rain has been constant this month. Not the dramatic storms, just the steady, patient kind that soaks everything slowly. Good weather for indoor work. The workshop stays dry and the light through the window is soft and even.",
      "Started a new ritual: morning walks before the desk. The cold air helps clear the mind. There's something about being slightly uncomfortable that makes you appreciate warmth and focus more when you return inside.",
      "The trees in the neighborhood are bare but not dead. Just waiting. It's a good reminder that rest is part of the cycle.",
    ],
  },
  {
    date: "Jan 2026",
    title: "Big Sur",
    paragraphs: [
      "Took a long weekend to drive down the coast. Needed distance from the desk and the same four walls. Sometimes you have to physically remove yourself from the work to see it clearly.",
      "Sat on a cliff edge above the ocean and sketched ideas for the mesh network redesign. No laptop, no datasheet, just rough diagrams in the notebook. Half of them won't work, but a few might be good. The sound of the waves helped.",
      "Watched fog roll through the canyon at sunset. Slow, inevitable, beautiful. Natural systems have their own timing. Hardware projects should too.",
    ],
  },
  {
    date: "Nov 2025",
    title: "Tokyo",
    paragraphs: [
      "First time in Japan. Went specifically to visit Akihabara — the electronics district. Spent two days just browsing small component shops stacked on top of each other in narrow buildings. Each shop specializes in something specific: one for switches, one for vintage ICs, one for connectors.",
      "The density is remarkable. It's like browsing a physical datasheet library. Every drawer is organized, labeled, specific. The shopkeepers know their inventory by heart. One helped me find a particular transistor I mentioned and pulled it from a drawer containing hundreds of similar parts. No computer, just memory and organization.",
      "Brought back a small bag of components I probably won't use but couldn't resist: vintage potentiometers with satisfying mechanical feel, obsolete ICs in ceramic packages, a handful of tantalum beads.",
      "Also: the trains run exactly on time. The streets are quiet despite the density. There's an attention to detail in everything that makes sense for a culture that perfected miniaturization.",
    ],
  },
  {
    date: "Sept 2025",
    title: "MIT Flea Market",
    paragraphs: [
      "Visited Boston for work and made time for the MIT flea market on Sunday morning. Rows of folding tables covered with oscilloscopes, signal generators, components, cables, and tools. Some working, some not, all with stories.",
      'Found a Tektronix 2215 oscilloscope from the \'80s. Analog display, working but needs calibration. Traded stories with the seller — a retired RF engineer who worked on radar systems. He pointed out the internal construction: modular, serviceable, built to last. "They don\'t make them like this anymore," he said. Cliché, but true.',
      "Brought it home on the plane as carry-on. TSA was confused but let it through. Now it sits on the bench next to the modern Rigol. Different eras, same purpose. Both still useful.",
    ],
  },
  {
    date: "July 2025",
    title: "Iceland",
    paragraphs: [
      "Summer trip to Iceland. Midnight sun — it never really gets dark. The light just rotates around the horizon. Strange at first, then beautiful. You lose track of time in a good way.",
      "Visited geothermal power plants from the road. Massive infrastructure pulling energy from the earth itself. Clean, constant, elegant. Made me think about power systems differently. We're so used to burning something.",
    ],
  },
];
