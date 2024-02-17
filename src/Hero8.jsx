import home_ser from "./media/Home_ser.gif";

export function Hero8() {
  return (
    <div className="Hero8">
      <div className="card-grp1">
        <div className="card">
          <h1>Gourmet Catering</h1>
          <p>
            Our professionally-trained culinary team is passionate and proud of
            our diverse and thoughtful menu, always cooking up something that
            aligns with your great taste.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="card">
          <h1>Bar Service</h1>
          <p>
            Our sophisticated flavor expertise enables us to create inventive
            concoctions that generate buzz in more ways than one!
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="card-img">
        <img src={home_ser} alt="Home Service" />
      </div>
      <div className="card-grp2">
        <div className="card">
          <h1>Staffing</h1>
          <p>
            The hand-selected team at 24 Carrots are just as important to our
            reputation as our gourmet food. Our staff is certainly the best at
            what they do, and you'll work with professionals who genuinely care
            about the success of your event!
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="card">
          <h1>Event Production</h1>
          <p>
            If mind-blowing spectacles and immersive guest experiences are what
            you're after, the specialists at 24 Carrots can pull it off on an
            epic scale!
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
