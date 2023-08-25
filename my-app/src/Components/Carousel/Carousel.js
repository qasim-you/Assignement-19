import React from 'react' ;
import cr1 from '../../Assets/cr1.png';
import cr2 from '../../Assets/cr2.jpg';
import cr3 from '../../Assets/cr3.png';
const Carousel = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide py-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cr1} className="d-block w-100" alt=".." />
          </div>
          <div className="carousel-item">
            <img src={cr2} className="d-block w-100" alt=".." />
          </div>
          <div className="carousel-item">
            <img src={cr3} className="d-block w-100" alt=".." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel 
