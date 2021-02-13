import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import ProductCard from './ProductCard'
export default function ProductSlider() {

    useEffect(() => {
        
        var splide = new Splide( '.splide', {
            type   : 'loop',
	        perPage: 3,
            speed: 1000,
            perMove: 1,
            // autoplay: true,
            // interval: 5
        } )

        splide.mount()

        


    }, [])

    return (
        <div>
            <div className="splide">

            {/* <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                    Prev
                </button>
                <button className="splide__arrow splide__arrow--next">
                    Next
                </button>
	        </div> */}


            <div className="splide__track">
                <div className="splide__list">
                    {[0,1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                        return (
                            <div key={index} className="splide__slide">
                        
                                <ProductCard  product={{id:item.toString(),title:"Apple"}}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}
