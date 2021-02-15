import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import ProductCard from './ProductCard'

export default function ProductSlider() {

    useEffect(() => {
        new Glide('.glide',{
            rewind: false,
            bound: true,
            perView: 5
        }).mount()



    }, [])

    return (
        <>
        
        
        <div className="glide">
        <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
                {[0,1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                        return (
                            <div key={index} className="glide__slide">
                        
                                <ProductCard  product={{id:item.toString(),title:"Apple"}}/>
                            </div>
                        );
                    })}
            </div>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
        </div>


        </>
    )
}

