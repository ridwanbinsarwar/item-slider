import React from 'react'
import EmiCircle from './EmiCircle'
type ProductImageProps = { productImage: {imageUrl: string, emiDuration: number, title: string} }
export default function ProductImage({productImage}: ProductImageProps) {
    return (
        <div >
            <img style={{maxWidth: 150}}src={productImage.imageUrl} alt={productImage.title}/>
            <EmiCircle duration={productImage.emiDuration}/>
        </div>
    )
}