import {
  BlowDry,
  Facebook,
  Facials,
  Gmail,
  HairColour,
  HeadMassage,
  Instagram,
  Makeup,
  Manicure,
  MehndiDesigning,
  Pedicure,
  SareeDraping,
  Whatsapp,
  Work1,
  Work2,
  Work3,
  Work4,
  Work5,
  Work6,
  Work7,
  Work8,
  Youtube,
} from "../assets"

export const shopName: string = "Makam Kanthi"
export const shopDescription: string = "Makeup studio & Herbal products"

export const SERVICES: { name: string; imgURL: string }[] = [
  { name: "Facials (Herbal & Normal)", imgURL: Facials },
  { name: "Head Massage", imgURL: HeadMassage },
  { name: "Pedicure", imgURL: Pedicure },
  { name: "Manicure", imgURL: Manicure },
  { name: "Hair Colour", imgURL: HairColour },
  { name: "Blow Dry", imgURL: BlowDry },
  { name: "Makeup", imgURL: Makeup },
  { name: "Saree Drapping", imgURL: SareeDraping },
  { name: "Mehndi Designing", imgURL: MehndiDesigning },
]

export const SOCIALS: { name: string; socialURL: string; iconURL: string }[] = [
  {
    name: "Gmail",
    socialURL: "mailto:makambtycare096@gmail.com",
    iconURL: Gmail,
  },
  {
    name: "Youtube",
    socialURL: "https://www.youtube.com/@AnithaBose-lr5dx",
    iconURL: Youtube,
  },
  {
    name: "Facebook",
    socialURL: "https://www.facebook.com/anitha.bose.2025/",
    iconURL: Facebook,
  },
  {
    name: "Instagram",
    socialURL: "https://www.instagram.com/_anithabose_/",
    iconURL: Instagram,
  },
  {
    name: "Whatsapp",
    socialURL:
      "https://wa.me/9605022108?text=Hi!%20I'd%20like%20to%20book%20an%20appointment.%20What%20is%20your%20availability%3F",
    iconURL: Whatsapp,
  },
]

export const CONTACT_NUMBERS: {
  text: string
  phoneTo: string
}[] = [
  { text: "+91 96050 22108", phoneTo: "tel:+919605022108" },
  { text: "+91 75105 86059", phoneTo: "tel:+917510586059" },
]

export const RECENT_WORKS = [
  {
    src: Work1,
  },
  {
    src: Work2,
  },
  {
    src: Work3,
  },
  {
    src: Work4,
  },
  {
    src: Work5,
  },
  {
    src: Work6,
  },
  {
    src: Work7,
  },
  {
    src: Work8,
  },
]
