import img_Hero10_1 from "./media/Hero10-img1.jpg"
import img_Hero10_2 from "./media/hero10-img2.jpg"
export function Hero10(){
    return(
        <div className="Hero10">
             <h1 id="top-hero10">What's Cookin'</h1>
             <div className="Hero10-sub">
             <div className="Hero10-sub-1">
                 <img src={img_Hero10_1}></img>
                 <button>24 CARROTS CATERING</button>
                 <h1>Setting Your Holiday Table</h1>
                 <p>From the first inquiry to final details, we are proud to provide full-service catering, 
                 making you feel like a guest at your own event…</p>
             </div>
             <div className="Hero10-sub-2">
                 <img src={img_Hero10_2}></img>
                 <button>24 CARROTS CATERING FEATURED VENUES</button>
                 <h1> The BEST Venues for Big Holiday Bashes</h1>
                 <p>
                 Make the most the holiday season by thinking BIG! Invite everyone from friends family, 
                 clients and the entire company to join in on the fun…
                 </p>
             </div>
             </div>
        </div>
    )
}