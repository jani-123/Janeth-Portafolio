import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
//import { ScrollMenu} from "./action";
import portada1 from './img/portada3.jpeg';
import portada from './img/portada5.jpeg';
import chio from './img/chio.jpg';
import hacka from "./img/hacka.jpg";
import uno from './img/uno.png';
import dos from './img/dos.png';
import tres from "./img/tres.png";
import cuatro from './img/cuatro.png';
import cinco from './img/cinco.png';
import seis from "./img/seis.png";
import siete from './img/siete.png';
import ocho from "./img/ocho.png";


const Contactame = () => {
  return (
    <div className="container-fluid" id="Contactame">
      <div className="row">
        <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 datos">
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8"><h1>Contáctame</h1></div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8">
            <p>Si te gusto mi trabajo puedes contactarme mandandome un mensaje o llamandome al número telefónico.</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 icons">
            <button className="btn btn-glyt"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span></button>
            <p>El Pedregal C-3 Paucarpata</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 icons">
            <button className="btn btn-glyt"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></button>
            <p>janina.rqa@gmail.com</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 icons cono">
            <button className="btn btn-glyt"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
            <p>985-656497 - (054)-462944</p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 icons cono">
            <a href="https://github.com/jani-123/jani-123.github.io/raw/master/static/media/JANETH-CV.pdf"><button className="btn btn-glyt descarga"><span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span> CV</button></a>
          </div>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 datos-person">
          <div className="formulario">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="text" placeholder="Your Name*" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email*" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" id="comment" placeholder="Message*" required ></textarea>
              </div>
              <button type="submit" className="btn btn-default btn-lg">Enviar</button>
            </form>
          </div>
        </div>
        <footer>
          <div className="footer">
            <div className="nombre">
              <div className="jr-songTitle">
                <a href="https://www.linkedin.com/in/janeth-rocio-quispe-apaza-0b1a90150/"><i class="fa fa-linkedin-square icons" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/janeth.quispeapaza?ref=bookmarks"><i class="fa fa-facebook-square icons" aria-hidden="true"></i></a>
                <a href="https://github.com/jani-123"><i class="fa fa-github-square icons" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

const Portafolio = () => {
  return (
    <div className="container-fluid" id="Portafolio">
      <div className="row">
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 portf-title" >
          <h1>Portafolio</h1>
        </div>
        <div id="fotos">
          <figure className="snip1548"><img src={uno} alt="sample114" />
            <figcaption>
              <h3>Food Center</h3>
              <a href="https://jani-123.github.io/Japanesefood/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/Japanesefood" className="demos"><h5>GitHub</h5></a>
            </figcaption>
          </figure>
          <figure className="snip1548"><img src={dos} alt="sample114" />
            <figcaption>
              <h3>Trello</h3>
              <a href="https://jani-123.github.io/TrelloFirebase-Redux/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/TrelloFirebase-Redux" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={tres} alt="sample115" />
            <figcaption>
              <h3>Trivia</h3>
              <a href="https://jani-123.github.io/REACT-TRIVIA/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/REACT-TRIVIA" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={cuatro} alt="sample114" />
            <figcaption>
              <h3>Lab-Studio</h3>
              <a href="https://jani-123.github.io/Lab-studio/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/Lab-studio" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={cinco} alt="sample114" />
            <figcaption>
              <h3>FreeLancer</h3>
              <a href="https://jani-123.github.io/FreeLanze/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/FreeLanze" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={seis} alt="sample115" />
            <figcaption>
              <h3>Lyft</h3>
              <a href="https://jani-123.github.io/Lyft-CarII/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/Lyft-CarII" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={siete} alt="sample115" />
            <figcaption>
              <h3>Courses</h3>
              <a href="https://jani-123.github.io/Simple-Routing/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/Simple-Routing" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
          <figure className="snip1548"><img src={ocho} alt="sample115" />
            <figcaption>
              <h3>Tea Lovers</h3>
              <a href="https://jani-123.github.io/Tea-Lovers/" className="demos"><h5>Demo</h5></a>
              <a href="https://github.com/jani-123/Tea-Lovers" className="demos"><h5>GitHub</h5></a>
            </figcaption><a href="#"></a>
          </figure>
        </div>
      </div>
    </div>
  )
}

const Habilidades = () => {
  return (
    <div className="container-fluid" id="habilidades">
      <div className="row">
        <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 contenido">
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1>Habilidades</h1>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <img src={hacka} className="img-responsive img-rounded hacka" />
          </div>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 bars">
          <div className="barWrapper">
            <span className="progressText">HTML</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="100%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">CSS</span>
            <div className="progress ">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="90%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">JAVASCRIPT</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="96%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">JQUERY</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="80%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">REACT</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="90%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">REDUX</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="80%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">SASS</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="70%"> </span>
              </div>
            </div>
          </div>
          <div className="barWrapper">
            <span className="progressText">GITHUB</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <span className="popOver" data-toggle="tooltip" data-placement="top" title="90%"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const AcercadeMi = () => {
  return (
    <div className="container-fluid about" id="Acerca">
      <div className="row">
        <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 descripcion">
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1 id="mio">Acerca de Mí</h1>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <p id="sobreMi">Me encanta el mundo tecnológico y aprender nuevas tecnologías.
              Soy desarrolladora Front-End Jr. Egresada de la carrera profesional de
              Ingeniería de sistemas. Con creatividad y paciencia he desarrollado aplicaciones
              Web haciendo uso de distintas tecnologías, aplicando metodología Agile, trabajo
              en equipo y trabajo bajo presión. Con fácil adaptabilidad. Soy una persona alegre me
              gusta escuchar música, ver películas y salir a comer helado con mis amigos.
            </p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <span className="glyphicon glyphicon-film gustos" aria-hidden="true"></span>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <span className="glyphicon glyphicon-headphones gustos" aria-hidden="true"></span>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <span className="glyphicon glyphicon-ice-lolly-tasted gustos" aria-hidden="true"></span>
          </div>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 caja-foto">
          <img src={chio} className="img-rounded img-responsive foto" />
        </div>
      </div>
    </div>
  )
};
const NewIntroduct = () => {
  return (
    <div className="container-fluid">
      <img src={portada} className="selector"/>
      <header className="main_h">
        <div className="row">
          <div className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#Acerca">Acerca de Mí</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#Portafolio">Portafolio</a></li>
              <li><a href="#Contactame">Contáctame</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className=" col-sm-12 col-xs-12 col-md-12 col-lg-12 texto">
        <h1></h1>
        <a href="#Acerca"><button className="btn btn-lg btn-about">Acerca De Mí</button></a>
      </div>
    </div>
  )
}

const App = ({ images }) => {
  return (
    <div className="App">
      <NewIntroduct />
      <AcercadeMi />
      <Habilidades />
      <Portafolio />
      <Contactame />
    </div>
  );
}

const mapToProps = ({ images }) => ({ images });

export default connect(mapToProps)(App);
