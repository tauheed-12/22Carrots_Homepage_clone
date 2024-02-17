import bgvedio from "./media/24carrtos-home-banner.mp4"
export default function Hero() {
    return (
        <div className="carrot-video">
          <video autoPlay muted loop id="recorded-vedio">
            <source src={bgvedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="the-finest">
            Simply the Finest
          </div> 
        </div>
    );
  }
  