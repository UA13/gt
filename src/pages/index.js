import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="Acerca de"
        title="GRUPO TUCÁN, TU AGENCIA DE MARKETING"
        paragraph="Somos una Agencia de Marketing Digital que busca ayudar a empresas y emprendimientos a volar. Brindamos diversos servicios y asesoramiento para convertir y potenciar tu marca. Creamos y fortalecemos tu identidad, te brindamos un estilo único para diferenciarte del resto. Desarrollamos estratégicamente tu presencial online: Creamos el sitio web ideal para tu objetivo y reforzamos tu imagen y posicionamiento en las redes sociales para así atraer a más potenciales clientes."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Quiero saber más" cta="Quiero saber más" />
        </Link>
      </TextBlock>
      
      <TextBlockImg
        id="perks"
        title="Contamos con un equipo  diverso y creativo, junto al sistema de construcción y publicación de sitios web más fácil e intuitivo del mundo, ¡para brindarte el mejor servicio!"
        subtitle="¡Aprovechá lo último en desarrollo web!"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Creatividad a tiempo"
            content="Buscaremos brindarte la creatividad que haga falta para llevar tu emprendimiento a otro nivel!

Confiamos que eso te ahorrará mucho tiempo! "
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Compromiso y economía"
            content="¡Amamos ayudarte!

Creemos en el trabajo en equipo y la cooperación, también que con pocos recursos se pueden lograr grandes cosas. "
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Soporte"
            content="Estaremos para lo que necesites, te mantendremos al tanto de nuestro trabajo.

Te brindaremos un seguimiento  y responderemos cualquier duda que tengas."
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Nuestros servicios"
        para="Elegí la solución perfecta para tu emprendimiento: con beneficios que se adaptan a todo tipo de presupuestos, Grupo Tucán está para ofrecerte un valor excepcional y asesoramiento especializado"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Diseño Gráfico">
            <ul>
              <li>
                <MdDone />Producciones a medida
              </li>
              <li>
                <MdDone />
                Asesoría personalizada
              </li>
              <li>
                <MdDone />
                En tiempo record
              </li>
              <li>
                <MdDone />
                Compatible al 100%
              </li>
            </ul>
            <Link to="Contacto" smooth={true} duration={500}>
              <Button label="¡Perfecto!" cta="¡Perfecto!" />
            </Link>
          </Package>
          <Package title="Desarrollo Web" active={true}>
            <ul>
              <li>
                <MdDone />
                Con la metodología más adaptable
              </li>
              <li>
                <MdDone />
                Creado completamente personalizado
              </li>
              <li>
                <MdDone />
                Soporte las 24 horas, los 7 días
              </li>
              <li>
                <MdDone />
                Actualizado a diario según necesario
              </li>
            </ul>
            <Link to="Contacto" smooth={true} duration={500}>
              <Button label="¡Perfecto!" cta="¡Perfecto!" />
            </Link>
          </Package>
          <Package title="Marketing personalizado">
            <ul>
              <li>
                <MdDone />
                Asesoría integral previa
              </li>
              <li>
                <MdDone />
                Copywriting y traducciones
              </li>
              <li>
                <MdDone />
                Campañas estratégicas de Ads
              </li>
              <li>
                <MdDone  />
                Automatización de contenidos
              </li>
            </ul>
            <Link to="Contacto" smooth={true} duration={500}>
              <Button label="¡Perfecto!" cta="¡Perfecto!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="Contacto"
        title="Nuestra Misión, Tus Resultados"
        subtitle="Contactanos y mirá cómo tu negocio despega completamente"
      />
    </>
  )
}

export default HomePage
