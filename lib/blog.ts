// Blog content. Images are Blumos's own product screenshots and device images (see /public).
export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'img'; src: string; alt: string; caption: string; w: number; h: number; phone?: boolean; credit?: Credit }
  | { t: 'brands'; items: { name: string; maker: string; site: string; logo: string; w: number; h: number; text: string }[] }
  | { t: 'table'; caption: string; head: string[]; rows: string[][] }
  | { t: 'cta'; title: string; text: string; href: string; label: string };

export type Credit = { text: string; href?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;      // meta description
  excerpt: string;          // card text
  keywords: string[];
  date: string;             // ISO
  updated?: string;
  readMins: number;
  tag: string;
  cover: { src: string; alt: string; kind: 'phone' | 'device' | 'photo'; fit?: 'cover' | 'contain'; credit?: Credit; logos?: boolean };
  body: Block[];
  faq?: { q: string; a: string }[];
};

// Photos are free-licence images from Wikimedia Commons. Credits are shown with each photo.
const WIKI = 'https://commons.wikimedia.org/wiki/';
const humaya: Credit = { text: 'App screenshot: Humaya Power app' };
const credits = {
  scooters: { text: 'Photo: Gnoeee, CC BY-SA 4.0, via Wikimedia Commons', href: WIKI + 'File:Black_OLA_Electric_scooters.jpg' },
  assembly: { text: 'Photo: Gnoeee, CC BY-SA 4.0, via Wikimedia Commons', href: WIKI + 'File:OLA_Electric_scooter_battery_assembly.jpg' },
  cells: { text: 'Photo: Yo-Co-Man, CC BY-SA 4.0, via Wikimedia Commons', href: WIKI + 'File:Lithium_Iron_Phosphate_LiFePO4_Cells_700Ah_in_Parallel_and_Series_and_Busbar_-_1.jpg' },
  cells18650: { text: 'Photo: Sevenethics, CC0, via Wikimedia Commons', href: WIKI + 'File:18650_and_21700_lithium_ion_battery_cell.jpg' },
} satisfies Record<string, Credit>;

export const posts: Post[] = [
  {
    slug: 'what-is-a-bms-app',
    title: 'What Is a BMS App? Bluetooth Battery Monitoring Explained',
    description:
      'A BMS app connects to a battery management system over Bluetooth to show per-cell voltage, SOC, temperature and protection status, and to change settings. Learn what to look for in BMS software.',
    excerpt: 'What a BMS app shows, what it can change, and what to look for in BMS software for JBD, JK, Daly and other smart BMS.',
    keywords: ['BMS app', 'BMS software', 'Bluetooth BMS app', 'smart BMS app', 'battery monitoring app', 'JBD BMS app', 'JK BMS app', 'Daly BMS app'],
    date: '2026-11-05',
    readMins: 5,
    tag: 'BMS software',
    cover: { src: '/blog/bms-app-cover-v2.jpg', alt: 'One BMS app on a phone connected to JBD, JK and Daly smart BMS boards', kind: 'photo', credit: humaya },
    body: [
      { t: 'p', text: 'A battery management system (BMS) is the small circuit board that protects a lithium battery pack. It watches every cell, balances them, and cuts the pack off if voltage, current or temperature goes out of range. A BMS app is how people see and control it.' },
      { t: 'h2', text: 'What a BMS app shows' },
      { t: 'p', text: 'Most smart BMS include a Bluetooth module. Connect to it from your phone and a good BMS app shows the pack in real time:' },
      { t: 'ul', items: ['Pack voltage, current and power', 'State of charge (SOC) and state of health (SOH)', 'Per-cell voltages, with the highest, lowest and the difference between them', 'MOSFET and probe temperatures, humidity and cycle count', 'Active protection flags and whether balancing is running'] },
      { t: 'img', src: '/screens/app-screen-charging.jpg', alt: 'BMS app screen showing charging status, state of charge, voltage, current, power, MOSFET temperature, cycles and cell voltages', caption: 'A BMS app screen from the Blumos Battery Platform: charging status and pack data on top, per-cell voltages below.', w: 690, h: 1500, phone: true, credit: humaya },
      { t: 'h2', text: 'What a BMS app can change' },
      { t: 'p', text: 'Reading is only half the job. The best BMS software also writes settings back to the BMS: protection thresholds, charge and discharge limits, temperature cut-offs, capacity and SOC calibration, and balancing. Because a wrong value can affect battery safety, a good app asks for confirmation before it writes.' },
      { t: 'h2', text: 'Why one app for many BMS brands matters' },
      { t: 'p', text: 'JBD, JK and Daly each ship their own app, with a different layout, login and learning curve. For a battery brand or an integrator that means confused customers, inconsistent branding and no single place to see what is happening. Multi-brand BMS software solves that: one interface for every pack.' },
      { t: 'h2', text: 'What to look for in BMS software' },
      { t: 'ul', items: ['Support for the BMS brands you actually use, and a plan to add new models', 'Full read and write access, with safe-write confirmation', 'Per-cell monitoring, not just pack totals', 'iOS and Android apps', 'Your own branding if you sell batteries (logo, colours, store listing)', 'A way to track faults and warranty per battery pack'] },
      { t: 'h2', text: 'How Blumos Labs approaches it' },
      { t: 'p', text: 'Blumos Labs builds the Blumos Battery Platform, an OEM-ready Bluetooth BMS app that supports JBD, JK, Daly and other major smart BMS in one interface. It includes real-time per-cell monitoring, full read and write control, and a built-in complaint CRM that attaches live BMS data to every ticket. Battery brands launch it under their own name on the App Store and Google Play.' },
      { t: 'cta', title: 'See the Blumos Battery Platform', text: 'One BMS app for JBD, JK and Daly, in your brand.', href: '/products/bms-software', label: 'Explore BMS software' },
    ],
    faq: [
      { q: 'What is a BMS app used for?', a: 'A BMS app connects to the battery management system in a battery pack, usually over Bluetooth, to show live data such as per-cell voltage, SOC and temperature, and to change BMS settings.' },
      { q: 'Does a BMS app work with JBD, JK and Daly?', a: 'Many do not. Each maker ships its own app. The Blumos Battery Platform supports JBD, JK, Daly and other major smart BMS in one app.' },
      { q: 'Can a BMS app change protection settings?', a: 'Yes, if it supports write access. Blumos writes changes back with safe-write confirmation.' },
    ],
  },
  {
    slug: 'jbd-vs-jk-vs-daly-bms',
    title: 'JBD vs JK vs Daly BMS: How to Choose a Smart BMS',
    description:
      'JBD vs JK vs Daly smart BMS compared side by side: balancing, communication (Bluetooth, UART, RS485, CAN), current range, apps and what to check before you buy.',
    excerpt: 'An even-handed comparison of JBD, JK and Daly smart BMS: balancing, communication, range and what to check on the datasheet.',
    keywords: ['JBD vs JK vs Daly', 'JBD BMS', 'JK BMS', 'Daly BMS', 'smart BMS comparison', 'active balancing BMS', 'JBD software', 'JK software', 'Daly software', 'BMS software'],
    date: '2026-11-05',
    readMins: 7,
    tag: 'Buying guide',
    cover: { src: '/blog/jbd-vs-jk-vs-daly-cover.jpg', alt: 'JBD, JK and Daly BMS logos side by side', kind: 'photo' },
    body: [
      { t: 'p', text: 'JBD, JK and Daly are three of the smart BMS makers you will meet most often in lithium battery packs for e-mobility, energy storage and backup power. All three make capable products, and each has a different focus. This guide compares them evenly so you can match a BMS to your pack.' },
      { t: 'brands', items: [
        { name: 'JBD', maker: 'Jiabaida (JBD) Technology', site: 'https://www.jbdbms.net', logo: '/logos/jbd.png', w: 240, h: 63, text: 'A wide range of smart BMS from small packs to large LiFePO4 and Li-ion packs, with Bluetooth on its smart models.' },
        { name: 'JK', maker: 'JKBMS (Jikong)', site: 'https://www.jkbms.net', logo: '/logos/jk.png', w: 420, h: 368, text: 'Known for active balancing across its range, with CAN and RS485 options aimed at inverters and home energy storage.' },
        { name: 'Daly', maker: 'Daly BMS', site: 'https://www.dalybms.com', logo: '/logos/daly.png', w: 700, h: 90, text: 'A broad catalogue covering smart, standard, high-current, RV, truck-start and two-wheeler BMS, plus active balancing lines.' },
      ] },
      { t: 'h2', text: 'At a glance' },
      { t: 'table', caption: 'JBD vs JK vs Daly smart BMS. Specifications vary by model, so always confirm on the datasheet.', head: ['', 'JBD', 'JK', 'Daly'], rows: [
        ['Balancing', 'Varies by model; many popular models use passive balancing', 'Active balancing across the range (around 0.6 A to 2 A on BMS models, higher on standalone balancers)', 'Passive on most standard and smart models; active-balancing BMS and standalone active balancers also offered'],
        ['Communication', 'Bluetooth on smart models; UART; CAN or RS485 on selected models', 'Bluetooth, CAN and RS485 (dual RS485 on some); optional WiFi module', 'Bluetooth and RS485 on smart models; CAN and UART on selected models'],
        ['Typical packs', 'Small to large packs, from a few cells to 24S', 'Mid to large packs, commonly 8S to 24S and beyond, up to several hundred amps', 'Two-wheelers, RV, truck start, home storage and general LiFePO4 packs'],
        ['Chemistries', 'Li-ion, LiFePO4', 'Li-ion, LiFePO4, LTO', 'Li-ion, LiFePO4'],
        ['Phone app', 'Own Bluetooth app', 'Own Bluetooth app, plus a Windows monitor', 'Own Bluetooth app'],
        ['Best suited to', 'Flexible builds where you pick the exact model you need', 'Inverter and energy-storage packs where balancing performance matters', 'Cost-sensitive builds and vehicle-focused packs'],
        ['Check first', 'Balance current and which interfaces your model includes', 'Inverter protocol and pinout match; allow time for setup', 'Whether your model includes CAN, and its balancing type'],
      ] },
      { t: 'h2', text: 'Start with the pack, not the brand' },
      { t: 'ul', items: ['Cell chemistry and series count (for example LiFePO4 or NMC, and the number of cells in series)', 'Continuous and peak discharge current, and charge current', 'Operating temperature range and the temperature sensors you need', 'Whether you need pre-charge, a contactor or a heater function'] },
      { t: 'p', text: 'Pick the family that has a model matching those numbers. Models within one brand differ a lot, so treat the brand as a starting point and the datasheet as the answer.' },
      { t: 'h2', text: 'Balancing: passive or active' },
      { t: 'p', text: 'Balancing keeps cells at the same voltage. Passive balancing bleeds off a little energy from the highest cells. Active balancing moves energy between cells, which is more efficient and can keep larger or heavily cycled packs tighter. For small, lightly cycled packs, passive balancing is often enough. For large packs, check the balance current of the exact model.' },
      { t: 'h2', text: 'Communication: what do you need to connect?' },
      { t: 'p', text: 'Bluetooth covers phone monitoring. If the pack talks to an inverter, a display or a telematics device, you will want UART, RS485 or CAN, and the specific protocol matters as much as the interface. A listing that says CAN does not guarantee it works with your inverter, so confirm the protocol and cable pinout before you buy.' },
      { t: 'h2', text: 'Software and support' },
      { t: 'p', text: 'The BMS is only as usable as its app. Look at what the app shows (per-cell data, temperatures, protection flags), whether you can change settings, and how easy it is for your customers to get help. This is where mixed fleets get painful: three brands usually means three apps.' },
      { t: 'h2', text: 'A simple way to decide' },
      { t: 'ul', items: ['Large energy-storage pack feeding an inverter: shortlist models with active balancing and the right CAN or RS485 protocol', 'Vehicle or two-wheeler pack on a budget: shortlist vehicle-focused models and confirm the interfaces you need', 'Flexible or unusual build: look across the ranges for the exact series count and current you need'] },
      { t: 'h2', text: 'Managing JBD, JK and Daly in one app' },
      { t: 'p', text: 'If you build or service packs with more than one of these BMS, a multi-brand BMS app saves real time. The Blumos Battery Platform supports JBD, JK, Daly and other major smart BMS in a single interface, with full read and write control and a complaint CRM, and it can carry your brand instead of the BMS maker\'s.' },
      { t: 'p', text: 'JBD, JK and Daly names and logos are trademarks of their respective owners, shown here only to identify the products. Blumos Labs is not affiliated with them.' },
      { t: 'cta', title: 'One app for every BMS', text: 'Launch a white-label BMS app for JBD, JK and Daly.', href: '/products/bms-software', label: 'See how it works' },
    ],
    faq: [
      { q: 'Which is better, JBD, JK or Daly?', a: 'It depends on the pack. Compare current rating, balancing type, communication options and the software you need, using each model\'s datasheet. There is no single best BMS for every pack.' },
      { q: 'Which of JBD, JK and Daly has active balancing?', a: 'JK uses active balancing across its range. Daly offers active-balancing BMS and standalone active balancers alongside its passive models. JBD balancing varies by model, so check the datasheet.' },
      { q: 'Can one app manage JBD, JK and Daly BMS?', a: 'Yes. The Blumos Battery Platform supports all three, plus other major smart BMS, in one app.' },
    ],
  },
  {
    slug: 'bms-iot-ev-battery-monitoring',
    title: 'BMS IoT: How Telematics Devices Monitor EV Batteries Remotely',
    description:
      'A BMS IoT device reads battery data from the BMS over CAN, UART or RS485 and sends it over LTE with GPS location. Learn how it works and what to look for in an EV battery tracker.',
    excerpt: 'How a BMS IoT and GPS telematics device reads the battery, reports over LTE, and what to check when choosing one.',
    keywords: ['BMS IoT', 'BMS GPS tracker', 'EV telematics', 'battery monitoring IoT', 'EV battery tracker', 'CAN UART RS485', 'Blu-400'],
    date: '2026-11-05',
    readMins: 6,
    tag: 'BMS IoT',
    cover: { src: '/blog/electric-scooters-row.jpg', alt: 'A row of electric scooters waiting for delivery', kind: 'photo', credit: credits.scooters },
    body: [
      { t: 'p', text: 'A phone app tells you what a battery is doing while you stand next to it. A BMS IoT device tells you while the vehicle is on the road. It sits in the vehicle, reads the battery management system, adds GPS location and reports everything over the mobile network.' },
      { t: 'h2', text: 'How a BMS IoT device works' },
      { t: 'ul', items: ['It connects to the BMS over a wired interface such as CAN, UART or RS485', 'It reads battery data such as voltage, current, SOC and temperatures, plus vehicle data', 'It adds position from a GNSS receiver (GPS and other satellite systems)', 'It sends the data over LTE to a cloud platform, and stores data locally when the network drops'] },
      { t: 'h2', text: 'Why EV fleets and battery brands use it' },
      { t: 'ul', items: ['See battery health across a fleet without visiting each vehicle', 'Spot imbalance, overheating or abnormal charging early', 'Track where each battery and vehicle is', 'Support warranty and service with real data'] },
      { t: 'h2', text: 'What to look for in a BMS GPS tracker' },
      { t: 'ul', items: ['Interfaces that match your BMS: CAN, UART and RS485', 'A wide input voltage range if you serve both low and high-voltage vehicles', 'A rugged enclosure (IP67) for water, dust and vibration', 'LTE bands for your market and a GNSS receiver with several constellations', 'Over-the-air (FOTA) firmware updates and remote configuration', 'On-device logging for when connectivity is poor'] },
      { t: 'img', src: '/products/blu-400-lid.png', alt: 'Blu-400 telematics device in a rugged IP67 enclosure', caption: 'The Blu-400: LTE Cat-1, GNSS, BLE 5.0 and CAN, UART and RS485 in an IP67 enclosure.', w: 1156, h: 706 },
      { t: 'h2', text: 'Blu-400 from Blumos Labs' },
      { t: 'p', text: 'The Blu-400 is an industrial-grade LTE Cat-1 telematics device built for EV and battery monitoring. It communicates over CAN, UART and RS485, includes GNSS (GPS, GLONASS, BeiDou, QZSS) and BLE 5.0, accepts 9 to 90V DC and has an IP67 enclosure. It stores more than 28,000 log packets on the device and supports firmware updates over the air.' },
      { t: 'p', text: 'Pair it with the Blumos Battery Platform app for Bluetooth monitoring at the pack, and you have both sides of the picture: the app in the hand and the device on the vehicle.' },
      { t: 'cta', title: 'Meet the Blu-400', text: 'BMS IoT and GPS telematics for EV batteries.', href: '/products/bms-iot', label: 'View Blu-400' },
    ],
    faq: [
      { q: 'What is a BMS IoT device?', a: 'A device installed in a vehicle or battery system that reads data from the BMS and reports it, with location, over the mobile network.' },
      { q: 'Which interfaces does the Blu-400 use to talk to a BMS?', a: 'CAN, UART and RS485. Contact Blumos to confirm protocol support for your BMS model.' },
    ],
  },
  {
    slug: 'white-label-bms-app',
    title: 'How to Launch a White-Label BMS App for Your Battery Brand',
    description:
      'Build or buy? How battery brands launch their own branded BMS app on iOS and Android, what it needs, and how an OEM-ready BMS app cuts time to market.',
    excerpt: 'Building a multi-BMS app in-house takes years. Here is what an OEM-ready, white-label BMS app gives your battery brand instead.',
    keywords: ['white label BMS app', 'OEM BMS app', 'branded battery app', 'battery brand app', 'BMS software', 'OEM battery app'],
    date: '2026-11-05',
    readMins: 5,
    tag: 'OEM',
    cover: { src: '/blog/battery-pack-assembly-line.jpg', alt: 'Robot arm placing cylindrical cells on an electric vehicle battery pack assembly line', kind: 'photo', credit: credits.assembly },
    body: [
      { t: 'p', text: 'If you sell battery packs, your customers will judge them partly by the app. Sending them to a generic BMS utility with someone else\'s logo undermines your brand and floods your support inbox. A white-label BMS app puts your name on the experience.' },
      { t: 'h2', text: 'Build or buy?' },
      { t: 'p', text: 'Building a multi-BMS app in-house means reverse-engineering protocols, chasing hardware changes and keeping a mobile team on the payroll indefinitely. Buying an OEM-ready platform means you launch quickly and the vendor keeps the integrations current.' },
      { t: 'h2', text: 'What a white-label BMS app should include' },
      { t: 'ul', items: ['Your name, logo, colours and store listing on iOS and Android', 'Support for the BMS brands your packs use (for example JBD, JK and Daly)', 'Real-time per-cell monitoring and full read and write control', 'A complaint and support workflow tied to each battery pack', 'Ongoing updates for new BMS models and new phone operating systems'] },
      { t: 'h2', text: 'Why the complaint CRM matters' },
      { t: 'p', text: 'When a customer reports a fault, the first question is always what the battery was doing. If the complaint is raised inside the app, the live BMS data travels with it. Your team can triage, assign and resolve it, and every pack keeps its own history, which is exactly what you need for warranty.' },
      { t: 'h2', text: 'How Blumos Labs helps' },
      { t: 'p', text: 'The Blumos Battery Platform is built to be launched under your brand. It ships theme-driven and OEM-ready, runs the same battery engine in whatever identity you choose, and is maintained by Blumos Labs: new BMS support and OS updates are handled for you. You own the brand, the customer and the market.' },
      { t: 'cta', title: 'Make the app yours', text: 'Talk to us about supported hardware, branding and a rollout plan.', href: '/contact', label: 'Contact Blumos Labs' },
    ],
    faq: [
      { q: 'What is a white-label BMS app?', a: 'A ready-made BMS app that you launch under your own brand, with your logo, colours and store listing, instead of building one from scratch.' },
      { q: 'How long does it take to launch?', a: 'Much less than building in-house. Blumos positions the platform as launching in weeks rather than years. Contact us for a rollout plan for your markets.' },
    ],
  },
  {
    slug: 'cell-imbalance-lithium-battery',
    title: 'Cell Imbalance in Lithium Battery Packs: Causes, Risks and Monitoring',
    description:
      'Cell imbalance reduces usable capacity and can shorten pack life. Learn what causes it, how to spot it with per-cell monitoring on a BMS app, and how balancing helps.',
    excerpt: 'Why cells in a lithium pack drift apart, what it costs you, and how per-cell monitoring catches it early.',
    keywords: ['cell imbalance', 'lithium battery cell balancing', 'BMS cell voltage', 'per-cell monitoring', 'battery monitoring', 'BMS software'],
    date: '2026-11-05',
    readMins: 5,
    tag: 'Battery basics',
    cover: { src: '/blog/lifepo4-cells-busbars.jpg', alt: 'Yellow LiFePO4 cells connected in series with metal busbars and balancing boards', kind: 'photo', credit: credits.cells },
    body: [
      { t: 'p', text: 'A lithium battery pack is many cells in series, and the pack is only as good as its weakest cell. When cell voltages drift apart, that is cell imbalance. It is one of the most common reasons a pack loses usable capacity.' },
      { t: 'h2', text: 'What causes cell imbalance' },
      { t: 'ul', items: ['Small capacity differences between cells from manufacturing', 'Uneven temperatures across the pack', 'Different self-discharge rates', 'Ageing, which does not affect all cells equally', 'Poor connections or a weak cell added later'] },
      { t: 'h2', text: 'Why it matters' },
      { t: 'p', text: 'During charging, the highest cell reaches its limit first and the BMS stops charging, even if other cells have room. During discharge, the lowest cell hits its limit first and the BMS cuts off, even though other cells still have energy. The result is less usable range or runtime, and extra stress on the weak cell.' },
      { t: 'h2', text: 'How to spot it' },
      { t: 'p', text: 'Look at per-cell voltage, not just the pack voltage. A BMS app shows the highest cell, the lowest cell and the difference between them. A small difference is normal; a large or growing one means the pack needs attention.' },
      { t: 'img', src: '/blog/lithium-cells-18650-21700.jpg', alt: 'An 18650 and a 21700 lithium-ion cell resting in 3D-printed holders', caption: 'Individual cells differ slightly in capacity and self-discharge. In a series pack those small differences add up.', w: 1400, h: 1050, credit: credits.cells18650 },
      { t: 'h2', text: 'How balancing helps' },
      { t: 'p', text: 'A BMS balances cells so they stay close. Passive balancing bleeds the highest cells; active balancing moves energy between cells. Balancing usually works best near the top of charge, so a pack that is rarely fully charged can drift further apart. Check that balancing is enabled and that its start voltage suits your pack.' },
      { t: 'h2', text: 'Monitoring over time' },
      { t: 'p', text: 'One reading tells you little; a trend tells you a lot. Per-cell monitoring in the Blumos Battery Platform shows cell voltages in real time, with high, low and difference, alongside temperatures, cycle count and protection status. Pair it with the Blu-400 telematics device to watch packs across a fleet.' },
      { t: 'cta', title: 'See every cell', text: 'Per-cell monitoring for JBD, JK, Daly and other smart BMS.', href: '/products/bms-software', label: 'Explore BMS software' },
    ],
    faq: [
      { q: 'What is cell imbalance?', a: 'When the cells in a series battery pack have different voltages or states of charge. It reduces usable capacity and can shorten pack life.' },
      { q: 'How do I check cell imbalance?', a: 'Use a BMS app that shows per-cell voltages, and look at the difference between the highest and lowest cell.' },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
