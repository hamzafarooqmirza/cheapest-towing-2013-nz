import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/services#towing-services", title: "Towing Services", image: IMG.vehicleTowingService, desc: "Fast, affordable towing for cars, vans and light vehicles anywhere you're stopped." },
  { slug: "/services#jump-start-services", title: "Jump Start Services", image: IMG.roadsideAssistance, desc: "Flat battery? Our mobile jump start service gets your engine running again in minutes." },
  { slug: "/services#tow-truck", title: "Tow Truck", image: IMG.carTowing, desc: "Tow truck service with tilt-and-slide flatbeds for safe, damage-free loading." },
  { slug: "/services#towing-services-auckland", title: "Towing Services Auckland", image: IMG.carAndTowingVan, desc: "Local towing coverage across greater Auckland, with nationwide recovery on request." },
  { slug: "/services#cheapest-towing-services-auckland", title: "Cheapest Towing Services Auckland", image: IMG.vehicleTowingService, desc: "Fair, transparent pricing on towing across Auckland — no hidden fees, ever." },
  { slug: "/services#emergency-car-recovery", title: "Emergency Car Recovery", image: IMG.emergencyCarRecovery, desc: "Fast emergency recovery — we're on the way within minutes of your call." },
  { slug: "/services#vehicle-towing-service", title: "Vehicle Towing Service", image: IMG.vehicleTowingService, desc: "Safe, reliable towing for cars, vans and light vehicles wherever you've stopped." },
  { slug: "/services#breakdown-recovery", title: "Breakdown Recovery", image: IMG.breakdownRecovery, desc: "Engine trouble, flat battery, or a car that just won't start — we'll get you and your vehicle home safely." },
] as const;
