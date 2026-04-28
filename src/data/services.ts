export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "access-control",
    title: "Access Control System",
    description:
      "Biometric, RFID and keypad access control with cloud dashboards and real-time entry logs.",
    icon: "access",
  },
  {
    id: "cctv",
    title: "CCTV Surveillance",
    description:
      "HD, IP and AI-powered CCTV systems for 24/7 monitoring of homes, offices and industrial sites.",
    icon: "cctv",
  },
  {
    id: "gate-barriers",
    title: "Gate Barriers",
    description:
      "High-speed boom barriers for parking lots, compounds and commercial entrances with remote control.",
    icon: "barrier",
  },
  {
    id: "automatic-sliding-gate",
    title: "Automatic Sliding Gate",
    description:
      "Heavy-duty sliding gate operators engineered for smooth, silent and secure automated entry.",
    icon: "slidingGate",
  },
  {
    id: "automatic-sliding-glass-door",
    title: "Automatic Sliding Glass Door",
    description:
      "Sensor-driven sliding glass doors for lobbies, malls and retail — sleek design, reliable motion.",
    icon: "glassDoor",
  },
  {
    id: "trunslide",
    title: "Trunslide Entrance",
    description:
      "Compact telescopic entrance systems that maximize opening width in tight spaces.",
    icon: "trunslide",
  },
  {
    id: "sectional-overhead",
    title: "Sectional Overhead Door",
    description:
      "Insulated sectional doors for warehouses and garages, built for high-cycle industrial use.",
    icon: "overhead",
  },
  {
    id: "garage-door",
    title: "Garage Door",
    description:
      "Residential and commercial garage doors with smart openers, safety sensors and quiet drives.",
    icon: "garage",
  },
  {
    id: "rolling-shutter",
    title: "Automatic Rolling Shutter",
    description:
      "Motorized rolling shutters for shopfronts and industrial bays with remote and backup control.",
    icon: "shutter",
  },
];
