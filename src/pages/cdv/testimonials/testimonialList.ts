import { Testimonial_T } from "./testimonialType"

// suports youtube video as well
// width of the images designed at max: 563px
const testimonialOne = new Testimonial_T(
  'Bienes raices',
  [
    "/testimonials/bienes_raices/1.webp",
    "/testimonials/bienes_raices/2.webp",
    "/testimonials/bienes_raices/3.webp",
    // "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialTwo = new Testimonial_T(
  'Diseño web & Marketing',
  [
    "/testimonials/disenio_web_y_marketing/1.webp",
    "/testimonials/disenio_web_y_marketing/2.webp",
    "/testimonials/disenio_web_y_marketing/3.webp",
  ])
const testimonialThree = new Testimonial_T(
  'Fitness',
  [
    "/testimonials/fitness/1.webp",
    "/testimonials/fitness/2.webp",
  ])
const testimonialFour = new Testimonial_T(
  'Afiliado de Hotmart',
  [
    "/testimonials/afiliado_de_hotmart/1.webp",
    "/testimonials/afiliado_de_hotmart/2.webp",
    "/testimonials/afiliado_de_hotmart/3.webp",
    "/testimonials/afiliado_de_hotmart/4.webp",
    // "https://www.youtube.com/embed/XeJbPQgnenM?si=utRdtGhLoDAwv-Ka"
  ])
const testimonialFive = new Testimonial_T(
  'Joven de 15 años',
  [
    "/testimonials/15_anios/1.webp",
    "/testimonials/15_anios/2.webp",
  ])
const testimonialSix = new Testimonial_T(
  'Multinivel',
  [
    "/testimonials/afiliado_de_hotmart/1.webp",
    "/testimonials/afiliado_de_hotmart/2.webp",
  ])
const testimonialList = [
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  testimonialFour,
  testimonialFive,
  testimonialSix,
];
export default testimonialList;

