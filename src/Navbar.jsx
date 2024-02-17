import { useState } from "react";

export function Navbar() {
    const [visible, setVisible] = useState(1);

    function showContent() {
        setVisible(!visible);
    }

    return (
        <div className="main_bar">
            <div className="primary_nav">
                <div className="about">ABOUT</div>
                <div className="services">SERVICES</div>
                <div className="events">EVENTS</div>
                <div className="middle-nav">
                    <div className="carrots">24 CARROTS</div>
                    <div className="catering-events">CATERING EVENTS</div>
                </div>
                <div className="venues">VENUES</div>
                <div className="careers">CAREERS</div>
                <div className="get-in-touch">GET IN TOUCH</div>
                <span className="icon" onClick={showContent}>≣</span>
            </div>
            <div className="navbar_prim" style={{ display: visible ? 'none' : 'flex' }}>
                <span>ABOUT</span>
                <span>SERVICES</span>
                <span>EVENTS</span>
                <span>VENUES</span>
                <span>CAREERS</span>
                <button>GET IN TOUCH</button>
            </div>
        </div>
    );
}
