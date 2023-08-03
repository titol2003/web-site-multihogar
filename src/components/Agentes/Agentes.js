import React from "react";
import "./Agentes.css";


const Agentes = () => {
  return (
    <div>
      <h1 className="text-center mt-4 pt-3 pb-3">AGENTES</h1>
    
      <div>
        <figure className="perfilagente">
          <img
            src="https://marketplace.canva.com/EAFLaH3yXbI/2/0/1600w/canva-foto-de-perfil-para-facebook-agente-inmobiliaria-profesional-morado-y-blanco-kWUwWpx_5sk.jpg"
            width={200}
            className="figure-img img-fluid rounded"
            alt="..."
          />

          <figcaption className="datos">
            <p className="nombre">
              <h3>JENNY CAROLINA AVENDAÑO</h3>
            </p>
            <p className="telefono">
              <h3>312 565 0978</h3>
            </p>
          </figcaption>
        </figure>

        <figure className="perfilagente">
          <img
            src="https://img.freepik.com/fotos-premium/oficina-retratos-consultor-o-asesor-hombre-negocios-feliz-punto-vista-cliente-discutir-lider-financiero-ayudar-cara-joven-contador-empleado-corporativo-o-persona-asiatica-su-escritorio_590464-183293.jpg"
            width={200}
            className="figure-img img-fluid rounded"
            alt="..."/>

          <figcaption className="datos">
            <p className="nombre">
              <h3>JHONATAN CAMILO PAEZ</h3>
            </p>
            <p className="telefono">
              <h3>323 456 7890</h3>
            </p>
          </figcaption>
        </figure>
        <img
        src="https://quadgen.com/wp-content/uploads/2020/09/nasa-1lfI7wkGWZ4-unsplash-scaled.jpg"
        className="background-position: center center"
        alt="..."
      ></img>
      </div>
    </div>
  );
};

export default Agentes;
