import React from 'react'

type EmiCircleProps = { duration: number }; /* could also use interface */

export default function EmiCircle({duration}: EmiCircleProps) {
    return (
        <div>
            <div className="emi-badge">
                <span>
                    EMI <br/> {duration}
                </span>
            </div>
            <style jsx>
                {
                    `
                    .emi-badge{
                        position:relative;
                        width:50px;
                        padding-bottom:50px;
                        background:green;
                        border-radius:50%;
                      }
                      .emi-badge span{
                        position:absolute;
                        color: white;
                        top:50%; left:50%;
                        transform: translate(-50%, -50%);
                        margin:0;
                      }

                      
                    `
                }
            </style>
        </div>
    )
}
