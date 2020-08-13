import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function technologies() {
    return (
        <div>
              <Carousel
                        arrows={true}
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        transitionDuration={700}
                        renderDotsOutside={false}
                        dotListClass=""
                        showDots={false}
                    >
                       <div>REATJS</div>
                       <div>React Native</div>
                    </Carousel>
        </div>
    )
}
