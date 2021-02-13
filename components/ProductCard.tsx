import ProductImage from './ProductImage'

type ProductCardProps = { product: {id:string, title:string} }; /* could also use interface */

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="card">
            <div>{product.id}</div>
            <div>{product.title}</div>
            <ProductImage productImage={{imageUrl: "https://illustoon.com/photo/dl/761.png", emiDuration: 6 , title:""}} />
            <button>Quick View</button>
            <div className="discount">-72%</div>
            <div className="flex-container">

                <div className="m1">$ 100</div>
                <div className="m1" style={{color:"red", textDecoration: "line-through"}}>$ 200</div>
                <button className="m1">Cart</button>
            </div>

            <div className="hide">

                <button className="m1">Compare</button>
                <button className="m1">wishlist</button>

            </div>
            <style jsx>
                {
                    `
                    .card {
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        text-align: center;
                        min-width: 220px;
                        max-width: 220px;
                        margin: 5px;
                      }
                      .hide {
                          display: none;
                      }

                      .card:hover .hide {
                        display: flex;
                        flex-wrap: nowrap;
                      }

                      .discount{
                        width:50px;
                      
                        background:blue;
                        color: white;
                      }

                      .flex-container {
                        display: flex;
                        flex-wrap: nowrap;
                      }
                      

                      .m1 {
                        margin: 4px;
                      }

                    `
                }
            </style>
        </div>
    )
}