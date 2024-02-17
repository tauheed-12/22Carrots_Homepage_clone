import img_cus from "./media/customer_say.jpg"
export function Hero9(){
    return(
        <div className="Hero9">
               <div className="Hero9_1">
                <h1>Our Happy Clients</h1>
                <p>
               Food may be our love language, but words of affirmation always make us ecstatic! 
                Read what our happy clients have to say about how we made their day great.
                </p>
               </div>
               <div className="Hero9_2">
                   <div className="Hero9_2_img">
                         <img src={img_cus}></img>
                   </div>
                   <div className="Hero9_2_des">
                        <p>"24 Carrots made our week long event stress free"</p>
                        <span>KIMBERLY</span>
                        <span>CRESTON</span>
                   </div>
               </div>
        </div>
    )
}