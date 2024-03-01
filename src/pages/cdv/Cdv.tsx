import Detail from "./detail/Detail"
import RelevantData from "./relevantData/RelevantData"
import Products from "./products/Products"
import Purpose from "./purpose/Purpose"
import Testimonials from "./testimonials/Testimonials"
import Warranty from "./warranty/Warranty"

const Cdv = () => (
  <main>
    <div id="parallax">
      <Purpose />
    </div>
      <Detail />
    <RelevantData />
    <Products />
    <Warranty />
    <Testimonials />
  </main>
)
export default Cdv