import React from 'react' ;
import img from "../../Assets/feature-1.png" ;
import img2 from "../../Assets/feature-2.png" ;
import img3 from "../../Assets/feature-3.png" ;
import img4  from "../../Assets/feature-4.png" ;
import Hr from '../../common/Hr';
import "./HeroSec.css" ;



const HeroSec = () => {
  return (
      <div className='feature' >      
    <div className="row">
    <div className="text-col">


        <h2>Enjoy on your TV.
        </h2>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
    </div>
    <div className="img-col">
        <img src={img} alt="/" />
    </div>
</div>
<Hr />

<div className="row">
    
    <div className="img-col">
        <img src={img2} alt="/" />
    </div>
    <div className="text-col">
        <h2>Download your shows to watch offline.
        </h2>
        <p>Save your favorites easily and always have something to watch.</p>
    </div>

</div>
<Hr />

<div className="row">
    <div className="text-col">
        <h2>Watch everywhere.
        </h2>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    </div>
    <div className="img-col">
        <img src={img3} alt="/" />
    </div>
</div>

<Hr />
<div className="row">
    <div className="img-col">
        <img src={img4} alt="/" />
    </div>
    <div className="text-col">
        <h2>Create profiles for kids.
        </h2>
        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your
            membership.</p>
    </div>

</div>
</div>
  )
}

export default HeroSec
