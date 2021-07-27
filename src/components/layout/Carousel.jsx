import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://pbs.twimg.com/media/EwOZjseWEAQixnY?format=jpg" className="d-block w-100 banner" alt="banner" />
                </div>
                <div className="carousel-item">
                    <img src="https://moviefilmsla.files.wordpress.com/2017/11/26c04-justice_league_bannereng3_mf.jpeg" className="d-block w-100 banner" alt="banner" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/a5a81283db60ea6df5c852846be9ae29.jpg" className="d-block w-100 banner" alt="banner" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default Carousel
