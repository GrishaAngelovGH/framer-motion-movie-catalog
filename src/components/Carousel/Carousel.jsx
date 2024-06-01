import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "./Carousel.css"

const CarouselWrapper = ({ className, slides }) => (
  <Carousel className={className} useKeyboardArrows infiniteLoop showThumbs={false} >
    {
      slides.map((v, i) => (
        <div key={i}>
          <img src={v.image} />
          <div className="legend hidden md:block">
            {v.paragraphs.map((content, i) => (<p key={i}>{content}</p>))}
          </div>
        </div>
      ))
    }
  </Carousel>
)

export default CarouselWrapper