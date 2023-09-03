import React from 'react';
import img1 from '../../assets/web/comodi.png';
import img2 from '../../assets/web/guamen.png';
import img3 from '../../assets/web/Ten.png';
import img4 from '../../assets/web/buro.png';
import img5 from '../../assets/web/yutex.jpg';
import img6 from '../../assets/web/wove.png';
import img8 from '../../assets/web/pokemon.png';
import img9 from '../../assets/web/cinema.png';
import img10 from '../../assets/web/countries.png';
import img12 from '../../assets/web/drops.png';
import './WebWorks.css';

function WebWorks() {

    var intFrameWidthWeb = window.innerWidth;
    
    function flipped(x){
        const card = document.querySelectorAll(".card__inner");
        card[x].classList.toggle('is-flipped');
        
    };

    return (
        <div className={ intFrameWidthWeb >= 800 ? "webWorksContainer":"webWorksContainer2" } id="webWorks">
         {/* <div className="webWorksContainer" id="webWorks"> */}
            <div className="webWorksInfo">
                <div className="webWorksTitle">
                    <h1>Web works</h1>
                    <p>
                    Here I show you some of my web development works, they are not all,
                    It's just a sample of what I can do.
                    </p>
                </div>
                <div className="webWorksData">

                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" >
                        <div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(5) : ''}>
                            <div className="card__face card__face--front">
                                <h2>Wovemade</h2>
                                <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
                                click to see the information
                                </div>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div className="card__header">
                                        <img src={img6} alt="Trabajos Web" className="ppCard" />
                                    </div>
                                    <div className="card__body">
                                        <h4>Ring store</h4>
                                        <p>Web app for the ring sales company.
                                        </p>
                                        <a className="LinkWebSite" href="https://wovemade.com/" target="_blank">Go</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" >
                        <div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(9) : ''}>
                            <div className="card__face card__face--front">
                                <h2>Drops APP</h2>
                                <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
                                click to see the information
                                </div>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div className="card__header">
                                        <img src={img12} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div className="card__body">
                                        <h4>Street shoes</h4>
                                        <p>Ecommerce for the purchase of sports shoes.
                                        </p>
                                        <a className="LinkWebSite" href="http://drops.vercel.app/" target="_blank">Go</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" >
                        <div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(7) : ''}>
                            <div className="card__face card__face--front">
                                <h2>CinemAPP</h2>
                                <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
                                click to see the information
                                </div>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div className="card__header">
                                        <img src={img9} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div className="card__body">
                                        <h4>Cinema</h4>
                                        <p>Ticket purchase app for online cinema.
                                        </p>
                                         <a className="LinkWebSite" href="https://github.com/Tomasberro/Pf-henry-cinema/tree/main" target="_blank">Go</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" >
                        <div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(6) : ''}>
                            <div className="card__face card__face--front">
                                <h2>Pokemon APP</h2>
                                <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
                                click to see the information
                                </div>
                            </div>
                            <div className="card__face card__face--back" >
                                <div className="card__content" >
                                     <div className="card__header">
                                        <img src={img8} alt="Trabajos Web" className="pp" />
                                    </div>
                                    <div className="card__body">
                                        <h4>Pokemon desk</h4>
                                        <p>Search pokemon, filter them / Sort them,
                                create new pokemon
                                        </p>
                                     <a className="LinkWebSite" href="https://pokemon-pi-tomib-7k182jxix-tomasberro.vercel.app/" target="_blank">Go</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* -------------------------------------------------------------------------- */}
                    <div className="card" >
    <div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(4) : ''}>
         <div className="card__face card__face--front">
        <h2>Alkemy</h2>
        <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
        click to see the information
        </div>
    </div>
    <div className="card__face card__face--back" >
        <div className="card__content" >
             <div className="card__header">
                {/* <img src={} alt="Trabajos Web" className="pp" /> */}
            </div>
            <div className="card__body">
                <h4>Personal wallet</h4>
                <p>Allows keeping accounts of income and personal
            expenses of the domestic economy of a person 
                </p>
                <a className="LinkWebSite" href="https://github.com/Tomasberro/AlkemyTomas" target="_blank">Go</a> 
            </div>
        </div>
    </div>
</div>
</div> 
                    {/* -------------------------------------------------------------------------- */}
                   
<div className="card" >
<div className="card__inner" onClick={ intFrameWidthWeb <= 800 ? ()=>flipped(3) : ''}>
    <div className="card__face card__face--front">
        <h2>Data science</h2>
        <div className={ intFrameWidthWeb < 800 ? "tooltipTitle":"invisible"}>
        click to see the information
        </div>
    </div>
    <div className="card__face card__face--back" >
        <div className="card__content" >
             {/* <div className="card__header">
                {/* <img src={img4} alt="Trabajos Web" className="pp" /> 
            </div> */}
            <div className="card__body">
                <h4>K-Means-Clustering-London</h4>
                <p>At work it's about helping to put security measures in place for
                     banks and helping them predict what will be fakes banknotes. 
                </p>
                 <a className="LinkWebSite" href="https://github.com/Tomasberro/K-Means-Clustering-London" target="_blank">Go</a> 
            </div>
        </div>
    </div>
</div>
</div> 
                    {/* -------------------------------------------------------------------------- */}
             
                    {/* -------------------------------------------------------------------------- */}
                    {/* -------------------------------------------------------------------------- */}
              
                    {/* -------------------------------------------------------------------------- */}

                </div>

            </div>
        </div>
    )
}

export default WebWorks



