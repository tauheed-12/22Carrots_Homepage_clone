import img5 from "./media/img5.jpg"
export function Hero3(){
    return(
        <div className="hero3">
             <div className="hero3-img">
             <img src={img5}></img>
             </div>
             <div className="hero3-sub">
                 <h1>Making Every Experience Magical</h1>
                 <div className="hero3-sub-sub">
                    <div className="hero3-sub-sub-sub">
                       <span id="hero3-sub-des1">Weddings</span>
                       <span id="hero3-sub-des2">Social</span>
                       <span id="hero3-sub-des2">Corporate</span>
                       <span id="hero3-sub-des2">Venues</span>
                    </div>
                    <div className="hero3-sub-sub-sub2">
                       <span>EXCEPTIONAL WEDDINGS</span>
                       <p>The most important day of your life, is ours too. Your wedding should be the 
                       ultimate celebration of your relationship, and our team of experts guide you through the process,
                        offering peace of mind and a remarkable experience.</p>
                       <button>LEARN MORE</button>
                    </div>
                 </div>
             </div>
        </div>
    )
}