import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.scss'

// import required modules for slider
import { Navigation, Pagination } from 'swiper/modules'


function Slider( {data} ) {

  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {data.map((proj) => (
          <SwiperSlide key={proj.id}>
            <picture>
              <source media="(min-width: 768px)" srcSet={proj.img} />
              <img src={proj.imgmobile} alt={`image of my project ${proj.title}`} />
            </picture>
            <span>0{proj.id}</span>
            <Link to={proj.url}>Ver web</Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default Slider