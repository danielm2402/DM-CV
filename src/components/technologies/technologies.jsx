import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Technologies.css'
import reactjs from '../../img/technologies/reactjs.png'
import reactnative from '../../img/technologies/reactnative.png'
import redux from '../../img/technologies/redux.png'
import typescript from '../../img/technologies/typescript.png'
import css from '../../img/technologies/css.png'
import sql from '../../img/technologies/sql.png'
import nodejs from '../../img/technologies/nodejs.png'
import golang from '../../img/technologies/golang.png'
import android from '../../img/technologies/android.png'
import ios from '../../img/technologies/ios.png'
import tailwind from '../../img/technologies/tailwind.png'
import js from '../../img/technologies/js.png'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tabletMax: {
        breakpoint: { max: 1024, min: 720 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 720, min: 600 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 400 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    mobile2: {
        breakpoint: { max: 400, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Technologies() {
    return (
        <div className="section-carousel">
            <div className="container-carousel">
                <Carousel
                    arrows={false}
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={400}
                    renderDotsOutside={false}
                    dotListClass=""
                    showDots={true}
                >
                    <div className="carousel-item">
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img src={reactjs}></img>
                                <p>ReactJS</p>
                            </div>
                            <div className="element-slider">
                                <img src={reactnative}></img>
                                <p>ReactNative</p>
                            </div>

                        </div>
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img src={redux}></img>
                                <p>Redux</p>
                            </div>
                            <div className="element-slider">
                                <img style={{ width: '120px' }} src={typescript}></img>
                                <p>Typescript</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img src={css}></img>
                                <p>CSS</p>
                            </div>
                            <div className="element-slider">
                                <img src={sql}></img>
                                <p>SQL</p>
                            </div>

                        </div>
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img src={nodejs}></img>
                                <p>NodeJS</p>
                            </div>
                            <div className="element-slider">
                                <img style={{ width: '120px' }} src={golang}></img>
                                <p>Golang</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img style={{ height: '120px' }}  src={android}></img>
                                <p>Android</p>
                            </div>
                            <div className="element-slider">
                                <img style={{ height: '80px', width:'120px' }} src={ios}></img>
                                <p>iOS</p>
                            </div>

                        </div>
                        <div className="col-carousel-item">
                            <div className="element-slider">
                                <img src={tailwind}></img>
                                <p>Tailwind</p>
                            </div>
                            <div className="element-slider">
                                <img src={js}></img>
                                <p>Javascript</p>
                            </div>

                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}
