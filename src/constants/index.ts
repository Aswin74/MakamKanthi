import {
  BlowDry,
  Facials,
  HairColour,
  HeadMassage,
  Makeup,
  Manicure,
  MehndiDesigning,
  Pedicure,
  SareeDraping,
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
