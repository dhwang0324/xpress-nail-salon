export type Service = {
  name: string;
  price: string;
  duration?: string;
  description?: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  intro: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "manicure",
    name: "Manicure",
    intro: "Classic hand care, refined.",
    services: [
      { name: "Signature Manicure", price: "$38", duration: "45 min", description: "Shape, cuticle work, hand massage, polish." },
      { name: "Express Manicure", price: "$25", duration: "25 min", description: "A quick shape, buff, and polish." },
      { name: "Paraffin Hand Treatment", price: "$48", duration: "55 min", description: "Deep-conditioning warm paraffin dip." },
    ],
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    intro: "Slow down, feet first.",
    services: [
      { name: "Signature Pedicure", price: "$55", duration: "50 min", description: "Soak, exfoliation, extended massage, polish." },
      { name: "Express Pedicure", price: "$40", duration: "30 min", description: "Shape, buff, and polish." },
      { name: "Deluxe Spa Pedicure", price: "$75", duration: "70 min", description: "Sugar scrub, warm stone massage, mask." },
    ],
  },
  {
    slug: "gel",
    name: "Gel",
    intro: "Long-wear shine, no compromise.",
    services: [
      { name: "Gel Manicure", price: "$50", duration: "50 min" },
      { name: "Gel Pedicure", price: "$65", duration: "55 min" },
      { name: "Gel Removal", price: "$15", duration: "20 min" },
    ],
  },
  {
    slug: "dip-powder",
    name: "Dip Powder",
    intro: "Strength with a soft-matte finish.",
    services: [
      { name: "Dip Powder Manicure", price: "$55", duration: "55 min" },
      { name: "Dip Powder Overlay", price: "$45", duration: "40 min" },
      { name: "Dip Powder Removal", price: "$15", duration: "20 min" },
    ],
  },
  {
    slug: "nail-art",
    name: "Nail Art",
    intro: "Considered detail, by request.",
    services: [
      { name: "Simple Accent (per nail)", price: "$4", },
      { name: "Hand-Painted Design (per nail)", price: "$8" },
      { name: "Full Set Custom Art", price: "from $30" },
    ],
  },
  {
    slug: "spa-treatments",
    name: "Spa Treatments",
    intro: "Beyond the polish.",
    services: [
      { name: "Hot Stone Hand & Arm Massage", price: "$35", duration: "30 min" },
      { name: "Callus Peel Treatment", price: "$30", duration: "25 min" },
      { name: "Hydrating Foot Mask", price: "$20", duration: "20 min" },
    ],
  },
];
