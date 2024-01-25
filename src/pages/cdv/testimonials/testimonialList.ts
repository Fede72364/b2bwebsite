export class Testimonial {
  private static _id: number = 0;

  id: number;
  entity: string;
  data: string[];

  incrementId() { Testimonial._id++; }

  constructor(entity: string, data: string[]) {
    this.id = Testimonial._id;
    this.entity = entity;
    this.data = data;
    this.incrementId();
  }
}

const testimonialOne = new Testimonial(
  'Bienes raices',
  [
    "/testimonials/Afiliado_de_Hotmark/1.png",
    "/testimonials/Afiliado_de_Hotmark/2.png",
    "/testimonials/Afiliado_de_Hotmark/3.png",
    "/testimonials/Afiliado_de_Hotmark/4.png",
    "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialTwo = new Testimonial(
  'Afiliado de Hotmark',
  [
    "/testimonials/Afiliado_de_Hotmark/1.png",
    "/testimonials/Afiliado_de_Hotmark/2.png",
    "/testimonials/Afiliado_de_Hotmark/3.png",
    "/testimonials/Afiliado_de_Hotmark/4.png",
    "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialThree = new Testimonial(
  'Joven de 16 años',
  [
    "/testimonials/Afiliado_de_Hotmark/1.png",
    "/testimonials/Afiliado_de_Hotmark/2.png",
    "/testimonials/Afiliado_de_Hotmark/3.png",
    "/testimonials/Afiliado_de_Hotmark/4.png",
    "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialFour = new Testimonial(
  'Concesionaria de autos',
  [
    "/testimonials/Afiliado_de_Hotmark/1.png",
    "/testimonials/Afiliado_de_Hotmark/2.png",
    "/testimonials/Afiliado_de_Hotmark/3.png",
    "/testimonials/Afiliado_de_Hotmark/4.png",
    "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialList = [testimonialOne, testimonialTwo, testimonialThree, testimonialFour];
export default testimonialList;
