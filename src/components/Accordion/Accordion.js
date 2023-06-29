import React from 'react'


const Accordion = () => {
  return (
    <div>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Las mejores ofertas
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>
                        ¡No busques más! En nuestra inmobiliaria encontrarás las mejores ofertas que te dejarán sin aliento.
                    </strong> Sumérgete en un mar de posibilidades y descubre tu hogar ideal a precios insuperables. Desde acogedores apartamentos en la ciudad hasta espaciosas casas en los suburbios, nuestra amplia selección de propiedades se adapta a todos los estilos de vida y presupuestos. Con la garantía de calidad y confianza que nos respalda, nuestra inmobiliaria se enorgullece de ofrecerte las oportunidades más exclusivas. ¡No pierdas tiempo y aprovecha las mejores ofertas en viviendas! Tu sueño de tener un hogar perfecto está a solo un paso de convertirse en realidad. ¡Ven y descubre la inmobiliaria que hará tus deseos realidad!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Confiabilidad y calidad 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>
                        Descubre la inmobiliaria que te brinda confiabilidad y calidad en cada paso del camino hacia tu nuevo hogar.
                    </strong> Nuestra misión es asegurarnos de que encuentres la propiedad perfecta que cumpla con todas tus expectativas y necesidades. Nos enorgullece ofrecer un servicio de excelencia respaldado por años de experiencia y un equipo de profesionales comprometidos contigo. Desde el primer momento en que nos contactes, te brindaremos asesoramiento personalizado y soluciones adaptadas a tus preferencias. Nuestra selección de propiedades ha sido meticulosamente elegida para garantizar que cada una cumpla con altos estándares de calidad. Ya sea que estés buscando un acogedor apartamento en la ciudad o una lujosa casa en los suburbios, podemos ayudarte a encontrar el lugar ideal donde crear recuerdos inolvidables. No comprometas tu tranquilidad y satisfacción, confía en nosotros para guiarte en el emocionante proceso de compra o alquiler de tu nuevo hogar. ¡Descubre una experiencia inmobiliaria confiable y llena de calidad hoy mismo!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Acompañamiento en el proceso de compra
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong> 
                        En nuestra inmobiliaria, entendemos lo importante que es recibir un acompañamiento cercano y profesional durante el proceso de compra de tu nueva propiedad.
                    </strong> Nos comprometemos a estar a tu lado en cada paso del camino, brindándote el apoyo y la asesoría necesaria para tomar decisiones informadas y seguras. Nuestro equipo de expertos en bienes raíces se dedica a entender tus necesidades y objetivos, para así encontrar la vivienda perfecta que se ajuste a tus preferencias y presupuesto.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion