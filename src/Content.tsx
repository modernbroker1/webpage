import {ContentData, RentalPropertyGroup} from "./interface";
import {RentalProperty} from "./RentalProperty";


export function Content(data: RentalPropertyGroup) {

    console.log(data)

    return <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Start</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">Opis</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Oferty</a></li>
                        <li className="nav-item"><a className="nav-link" href="#signup">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">{ data.nazwaFirmy }</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">{ data.krotkiOpis }</h2>
                    </div>
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    {/*@ts-ignore*/ }
                    <div className="col-lg-4"><img className="img-fluid mb-3 mb-lg-0" src={ data.zdjecieOsoby.url }
                                                   alt="..."/></div>
                    <div className="col-lg-8">
                        <div className="featured-text text-center text-lg-left" style={ { marginLeft: "60px" } }>
                            <h4 className="text-white">{ data.opisOsobyTytul }</h4>
                            <p className="text-white-50 mb-0">
                                { data.opisOsoby }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                { data.obiekty.map(obiekt => <RentalProperty { ...obiekt } />) }
            </div>
        </section>
        <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Nip</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50">{ data.nip }</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50"><a href="#!">{ data.email }</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Telefon</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50">{ data.telefon }</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        <footer className="footer bg-black small text-center text-white-50">
            <div className="container px-4 px-lg-5">Modern Broker 2022</div>
        </footer>
    </div>;
}