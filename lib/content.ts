import {
  IconPin, IconBattery, IconCloud, IconChip, IconBolt,
  IconThermo, IconGauge, IconShield, IconSliders, IconDownload, IconBars, IconPlug,
} from '@/components/Icons';

export const COMPANY = 'Blumos Labs Private Limited';
export const EMAIL = 'info@blumoslabs.com';
export const PHONE = '+91 87961 01069';
export const PHONE_HREF = 'tel:+918796101069';
export const SITE = 'www.blumoslabs.com';

// Products shown on /products. Add new products to this list as they launch.
export const products = [
  {
    slug: 'bms-software',
    category: 'BMS Software',
    name: 'Blumos Battery Platform',
    description: 'One Bluetooth app for JBD, JK, Daly and other major BMS, with full read/write control and built-in complaint management. OEM-ready and fully brandable.',
    features: [
      'JBD, JK, Daly and other major BMS',
      'Real-time per-cell monitoring',
      'Full read + write settings',
      'Built-in complaint CRM',
      'Fully brandable',
      'iOS and Android',
    ],
    badge: 'App',
    href: '/products/bms-software',
  },
  {
    slug: 'bms-iot',
    category: 'BMS IoT',
    name: 'Blu-400 Battery Monitoring IoT',
    description: 'Industrial-grade LTE Cat-1 telematics device for electric vehicle and battery monitoring, with CAN, UART and RS485, GNSS tracking, BLE 5.0 and an IP67 enclosure.',
    features: [
      'LTE Cat-1 with GNSS and BLE 5.0',
      'CAN, UART and RS485 to the BMS',
      '9-90V DC wide voltage input',
      'CAN, UART and RS485 communication',
      'IP67 rugged casing',
      'FOTA firmware and remote configuration',
    ],
    badge: 'IoT',
    href: '/products/bms-iot',
  },
];

export const bmsCapabilities = [
  { icon: IconBattery, title: 'Universal BMS compatibility', text: 'JBD, JK, Daly and other major smart BMS families in one interface. Blumos extends support as new models reach the market.' },
  { icon: IconSliders, title: 'Full read + write control', text: 'Read the complete parameter set and write changes back with safe-write confirmation: protection thresholds, charge/discharge limits, temperature cut-offs, capacity and SOC calibration, balancing.' },
  { icon: IconBolt, title: 'Real-time per-cell monitoring', text: 'Live pack voltage, current, SOC and SOH, per-cell voltages, high/low/diff, so imbalance surfaces before it becomes failure.' },
  { icon: IconThermo, title: 'Temperatures, humidity & cycles', text: 'MOSFET and probe temperatures, humidity and cycle count alongside active protection flags.' },
  { icon: IconShield, title: 'Built-in complaint CRM', text: 'End-users raise a complaint against a specific pack, live BMS data travels with it, and your team triages, assigns and resolves. No separate helpdesk tool.' },
  { icon: IconGauge, title: 'Warranty-ready history', text: 'Per-battery log of complaints and data, ready for warranty conversations.' },
  { icon: IconPlug, title: 'Fully brandable', text: 'Your name, logo, colours and store listing on both iOS and Android, with consistent branding end to end.' },
  { icon: IconBars, title: 'Maintained by Blumos', text: 'New BMS support and OS updates are handled for you, with no mobile or firmware team needed on your side.' },
];

export const bmsRoadmap = [
  'Multi-battery & fleet view',
  'Role-based access',
  'Smart alerts & notifications',
  'Configuration templates',
  'Warranty & battery registry',
  'Multi-language',
  'Data logging & reports',
];

export const bmsWhy = [
  { step: '1', title: 'Faster time-to-market', text: 'A proven, tested app instead of a multi-year build.' },
  { step: '2', title: 'Lower cost of ownership', text: 'No dedicated mobile or firmware team. Blumos maintains and updates.' },
  { step: '3', title: 'Your brand, end to end', text: 'Your name, logo, colours and store listing on both platforms.' },
  { step: '4', title: 'Always compatible', text: 'New BMS support and OS updates handled for you.' },
];

export const bmsBrands = ['JBD', 'JK', 'Daly', '+ major BMS'];

export const bmsSpecs = [
  ['Platforms', 'iOS (App Store) and Android (Google Play)'],
  ['Connectivity', 'Bluetooth'],
  ['BMS support', 'JBD, JK, Daly and other major smart BMS families'],
  ['Control', 'Full parameter read + write with safe-write confirmation'],
  ['Monitoring', 'Pack and per-cell, real-time, with history'],
  ['CRM', 'Built-in battery complaint management'],
  ['Branding', 'Fully OEM-ready: themes, colours and logo'],
  ['Maintenance', 'Ongoing updates and new BMS support by Blumos Labs'],
];

export const iotHighlights = [
  'Multiple I/Os',
  '9-90V DC input',
  'BLE 5.0',
  'Internal high-gain LTE & GNSS antenna',
  'IP67 casing',
  'CAN · UART · RS485',
];

export const iotFeatures = [
  { icon: IconPlug, title: 'CAN, UART & RS485', text: 'Talks to the BMS and vehicle over CAN, UART and RS485. CAN covers all legislated OBD-II, non-legislated OBD and heavy-duty protocols, so it works across a wide range of electric vehicles and battery systems.' },
  { icon: IconBolt, title: 'Wide 9-90V DC input', text: 'Runs directly from low and high-voltage systems, with a 1000 mAh Li-Po backup battery.' },
  { icon: IconPin, title: 'Accurate GNSS', text: 'GPS, GLONASS, BeiDou and QZSS with 47 tracking channels, 1.5 m CEP and a 1 second hot start.' },
  { icon: IconCloud, title: 'LTE Cat-1 connectivity', text: 'LTE and GSM fallback with internal high-gain antennas for reliable real-time data from the field.' },
  { icon: IconChip, title: 'Bluetooth 5.0', text: 'Connects to universal BLE sensors and beacons, and can be configured over BLE.' },
  { icon: IconShield, title: 'IP67 rugged casing', text: 'Dust-tight and water-resistant, with operation from -30 C to +75 C without battery.' },
  { icon: IconSliders, title: 'Remote configuration & FOTA', text: 'Configure and update firmware over the air, via USB or BLE, and by SMS or GPRS commands.' },
  { icon: IconDownload, title: '28,000+ log packets', text: 'Stores data on the device when the network drops and sends it once connectivity returns.' },
];

export const iotApplications = [
  { title: 'Electric L3 & L5 fleets', text: 'Track and monitor electric three-wheelers and cargo vehicles.' },
  { title: 'Renewable energy monitoring', text: 'Monitor battery and power sources in renewable energy installations.' },
  { title: 'AC monitoring', text: 'Watch AC-powered assets and equipment remotely.' },
  { title: 'Logistics & supply chain', text: 'Real-time visibility for shared mobility, logistics and public transport.' },
];

export const iotSpecGroups = [
  {
    title: 'Interface',
    rows: [
      ['Digital input / output / analog input', '2 / 3 / 1'],
      ['Communication interfaces', 'CAN, UART, RS485, 1-Wire'],
      ['Antennas', 'Internal high-gain GNSS and LTE'],
      ['Indicators', '4 LEDs (Power, Charging, LTE, GPS)'],
      ['USB', '2.0 Micro USB'],
      ['SIM', 'Micro SIM (4FF)'],
      ['Memory', '28,000+ log packets'],
      ['CAN protocol support', 'All legislated OBD-II, non-legislated OBD and heavy-duty protocols'],
    ],
  },
  {
    title: 'Navigation',
    rows: [
      ['GNSS constellations', 'GPS, GLONASS, BeiDou, QZSS'],
      ['Tracking channels', '47'],
      ['Horizontal position (autonomous)', '1.5 m CEP'],
      ['SBAS', 'Supported'],
      ['Tracking / re-acquisition sensitivity', '-166 dBm / -160 dBm'],
      ['Velocity accuracy', '0.1 m/s'],
      ['Hot / warm / cold start', '1 s / 2 s / 12 s'],
    ],
  },
  {
    title: 'Cellular network',
    rows: [
      ['Technology', 'LTE Cat-1, GSM'],
      ['2G bands', '900 / 1800 MHz'],
      ['4G LTE FDD bands', 'B1 / B3 / B5 / B7 / B8 / B20'],
      ['SMS', 'Point to point MO and MT, SMS cell broadcast'],
    ],
  },
  {
    title: 'Power',
    rows: [
      ['Voltage range', '9-90V DC'],
      ['Internal battery', '1000 mAh Li-Po, 3.7V'],
      ['Working current', 'Active mode < 160 mA @ 12V'],
    ],
  },
  {
    title: 'Bluetooth',
    rows: [
      ['Specification', 'BLE 5.0'],
      ['Supported peripherals', 'Universal BLE sensors, beacons'],
    ],
  },
  {
    title: 'Environment & physical',
    rows: [
      ['Operating temperature', '-20 to +60 C (with battery), -30 to +75 C (without battery)'],
      ['Operating humidity', '5% to 95% non-condensing at +40 C'],
      ['Ingress protection', 'IP67'],
      ['Battery charge / discharge / storage', '0 to +45 C / -20 to +60 C / -20 to +35 C (1 year)'],
      ['Dimensions (L x B x H)', '94 x 74 x 33 mm'],
      ['Weight', '143 g'],
    ],
  },
  {
    title: 'Features',
    rows: [
      ['Sensors', 'Accelerometer, fuel sensor, pressure sensor, all BLE sensors'],
      ['Configuration & firmware update', 'FOTA (web), configuration tool (USB, BLE)'],
      ['SMS / GPRS commands', 'Configuration, digital output control, debug'],
      ['Time synchronisation', 'GPS'],
      ['Fuel sensors', 'LLS (analog / BLE / RS232), built-in CAN enquiry'],
    ],
  },
];
