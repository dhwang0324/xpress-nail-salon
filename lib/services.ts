export type ServiceItem = {
  name: string;
  price: string;
  description?: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  services: ServiceItem[];
  addOnsLabel?: string;
  addOns?: ServiceItem[];
  disclaimer?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "manicures",
    name: "Manicures",
    services: [
      { name: "Classic Manicure", price: "$25" },
      { name: "Deluxe Manicure", price: "$35" },
      { name: "Gel Manicure", price: "$40" },
      { name: "French Gel Manicure", price: "$45" },
      { name: "SNS/Dipping Manicure", price: "$45" },
      { name: "SNS French Manicure", price: "$50" },
      { name: "SNS Ombre Manicure", price: "$60" },
    ],
  },
  {
    slug: "pedicures",
    name: "Pedicures",
    services: [
      {
        name: "Classic Pedicure",
        price: "$35",
        description:
          "Includes nail trimming, shaping, cuticle grooming, follow-up with exfoliating scrub and massaging lotion. Finish with polish of choice.",
      },
      {
        name: "Dream Pedicure",
        price: "$45",
        description:
          "Contains upgraded callus treatment, hydrating mud masque wrapped in hot towels to revive and preserve skin moisturizer.",
      },
      {
        name: "Royal Pedicure",
        price: "$55",
        description:
          "Combines skin-focus glimmer spa product with hot stone massage to enrich hydration and enhance blood circulation.",
      },
      {
        name: "Lux Pedicure",
        price: "$70",
        description:
          "Uses top-of-the-line organic collagen products with paraffin wax, hot stone massage, and hydrating serum to rejuvenate skin and muscles.",
      },
    ],
  },
  {
    slug: "acrylic",
    name: "Acrylic",
    services: [
      { name: "Full Set", price: "$40" },
      { name: "Fill-in", price: "$30" },
      { name: "Gel Full Set", price: "$57" },
      { name: "Gel Fill-in", price: "$47" },
      { name: "Gel-X Full Set", price: "$65" },
      { name: "Builder Gel Full Set", price: "$55" },
      { name: "Ombre Full Set", price: "$75" },
      { name: "Pink & White Full Set", price: "$65" },
      { name: "Pink & White Fill-in", price: "$55" },
    ],
    addOnsLabel: "Add-Ons",
    addOns: [
      { name: "Extension Tip / Special Shape", price: "$5" },
      { name: "Gel Finish", price: "$17" },
    ],
    disclaimer: "Design prices may vary. Please consult your technician for details.",
  },
  {
    slug: "polish-changes",
    name: "Polish Changes",
    services: [
      { name: "Gel Polish", price: "$25" },
      { name: "Regular Polish", price: "$15" },
    ],
  },
  {
    slug: "waxing",
    name: "Waxing",
    services: [
      { name: "Eyebrows / Chin", price: "$15" },
      { name: "Lips", price: "$10" },
      { name: "Brow Tinting", price: "$25" },
      { name: "Full Arms", price: "$35" },
      { name: "Half Arms", price: "$25" },
      { name: "Full Legs", price: "$45" },
      { name: "Half Legs", price: "$30" },
      { name: "Full Face", price: "$40" },
    ],
  },
  {
    slug: "kids",
    name: "Kids",
    services: [
      { name: "Manicure", price: "$15" },
      { name: "Pedicure", price: "$25" },
    ],
  },
];
