import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/emergency-car-recovery", title: "24/7 Emergency Car Recovery", image: IMG.emergencyCarRecovery, desc: "Round-the-clock emergency recovery — day or night, we're on the way within minutes of your call." },
  { slug: "/vehicle-towing-service", title: "Vehicle Towing Service", image: IMG.vehicleTowingService, desc: "Safe, reliable towing for cars, vans and light vehicles wherever you've stopped." },
  { slug: "/breakdown-recovery", title: "Breakdown Recovery", image: IMG.breakdownRecovery, desc: "Engine trouble, flat battery, or a car that just won't start — we'll get you and your vehicle home safely." },
  { slug: "/accident-recovery", title: "Accident Recovery", image: IMG.accidentRecovery, desc: "Sensitive, professional recovery after a collision, coordinated with insurers when needed." },
  { slug: "/heavy-duty-truck-towing", title: "Heavy-Duty & Truck Towing", image: IMG.heavyDutyTruckTowing, desc: "Rated equipment and experienced crews for trucks, lorries and heavy vehicles." },
  { slug: "/commercial-vehicle-towing", title: "Commercial Vehicle Towing", image: IMG.commercialVehicleTowing, desc: "Reliable towing for vans, fleet vehicles and business-critical transport." },
  { slug: "/vehicle-towing-service#towing-services", title: "Towing Services", image: IMG.vehicleTowingService, desc: "Fast, affordable towing for cars, vans and light vehicles anywhere you're stopped." },
  { slug: "/jump-start", title: "Jump Start Services", image: IMG.roadsideAssistance, desc: "Flat battery? Our mobile jump start service gets your engine running again in minutes." },
  { slug: "/vehicle-recovery", title: "Tow Truck", image: IMG.carTowing, desc: "24/7 tow truck service with tilt-and-slide flatbeds for safe, damage-free loading." },
  { slug: "/vehicle-towing-service#towing-services-auckland", title: "Towing Services Auckland", image: IMG.carAndTowingVan, desc: "Local towing coverage across greater Auckland, with nationwide recovery on request." },
  { slug: "/vehicle-towing-service#cheapest-towing-services-auckland", title: "Cheapest Towing Services Auckland", image: IMG.vehicleTowingService, desc: "Fair, transparent pricing on towing across Auckland — no hidden fees, ever." },
] as const;
