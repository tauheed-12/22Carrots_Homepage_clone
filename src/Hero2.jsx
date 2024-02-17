import img1 from "./media/img1.jpg"
import img2 from "./media/img2.jpg"
import img3 from "./media/img3.jpg"
import img4 from "./media/img4.jpg"
export function Hero2(){
    const img = [img1, img2, img3, img4]
    return(
        <div className="hero2-section">
            <div className="block-des">
               <h3>WELCOME TO 24 CARROTS</h3>
               <h1>Remarkable Catering & Events</h1>
               <p>24 Carrots is the premier catering and events company of choice in Southern California. 
               We create remarkable experiences by offering the finest quality foods and providing unsurpassed 
               personalized service, driven by our passion for life's special occasions.</p>
               <button id="btn">GET IN TOUCH →</button>
            </div>
            <div className="block-img">
                <div className="imgblock">
                  <img src={img[1]}></img>
                </div>
                <div>
                  <div className="changePic"></div>
                  <div className="changePic"></div>
                  <div className="changePic"></div>
                  <div className="changePic"></div>
                </div>
            </div>
        </div>
    )
}