import React from 'react';
import SydneyMain from '../../assets/sydneymain.png'
import OperaHouse from '../../assets/operahouse.png'
import TheRocks from '../../assets/therocks.png'
import Bondi from '../../assets/bondi.png'
import Nav from '../../components/Nav/index'
import "./style.css"

const Sydney = () => {
    return (
<div id="page">
  <Nav></Nav>
  <div id="container">

    <header>

      <section id="title">
        <p className="hl"> SUA PROXIMA VIAGEM: </p>
        <h1> Conheça Sydney </h1>
      </section>

      <section id="main">
        <img src={SydneyMain} alt="Imagem panorâmica de Sydney" className="cardimg" />
        <p className="sub"> 
          Sydney, a vibrante metrópole da Austrália, é famosa por suas praias icônicas, arquitetura moderna e cultura diversa. 
          Neste destino, exploramos a maior cidade da Austrália e suas maravilhas turísticas.
        </p>
      </section>

    </header>

    <div id="content">

      <section id="headline">
        <p className="hl"> PARA OS AMANTES DE HISTÓRIA</p>
        <h2> Descubra 3 destinos imperdíveis em Sydney </h2>
        <p>
          Sydney é uma cidade cheia de história e atrações impressionantes. Desde o famoso Opera House, com sua arquitetura única, até praias deslumbrantes, 
          a cidade oferece uma infinidade de opções de lazer. Para quem gosta de história, Sydney tem locais incríveis que trazem à tona sua herança colonial e cultural.
        </p>
      </section>

      {/* Card 1: Opera House */}
      <article className="card">
        <img src={OperaHouse} alt="Imagem da Sydney Opera House, com sua arquitetura distinta à beira do mar" className="cardimg" />
        <h3> 1. Sydney Opera House</h3>
        <p>
          A Sydney Opera House é um dos edifícios mais emblemáticos do mundo. Inaugurada em 1973, sua arquitetura ousada e suas apresentações culturais 
          fazem dela um dos maiores símbolos da Austrália. A localização à beira da água oferece uma vista deslumbrante do Porto de Sydney.
        </p>
        <br />
        <p className="bold"> Bom para: </p>
        <ul>
          <li className="hist"> História </li>
        </ul>
      </article>

      {/* Card 2: The Rocks */}
      <article className="card">
        <img src={TheRocks} alt="Imagem histórica de The Rocks, com ruas de paralelepípedos e prédios antigos" className="cardimg" />
        <h3> 2. The Rocks</h3>
        <p>
          The Rocks é o berço de Sydney, onde a cidade foi originalmente fundada em 1788. Com suas ruas de paralelepípedos, mercados históricos e museus, 
          essa área preserva a história da colonização e da evolução de Sydney. É um lugar perfeito para explorar e aprender sobre a rica história australiana.
        </p>
        <br />
        <p className="bold"> Bom para: </p>
        <ul>
          <li className="hist"> História </li>
          <li className="s2"> Casais </li>
        </ul>
      </article>

      {/* Card 3: Bondi Beach */}
      <article className="card">
        <img src={Bondi} alt="Imagem da Bondi Beach, com ondas perfeitas e muitos surfistas" className="cardimg" />
        <h3> 3. Bondi Beach</h3>
        <p>
          Bondi Beach é uma das praias mais famosas da Austrália e um destino obrigatório para quem visita Sydney. Com suas ondas perfeitas para o surfe, 
          é também um ótimo local para caminhar, tomar sol ou desfrutar de um dos muitos cafés e restaurantes à beira-mar.
        </p>
        <br />
        <p className="bold"> Bom para: </p>
        <ul>
          <li className="fam"> Famílias </li>
          <li className="orc"> Orçamento </li>
          <li className="s2"> Casais </li>
        </ul>
      </article>

    </div>

    <div id="conclusion">

      <p id="conc">
        Sydney é uma cidade que oferece o melhor de ambos os mundos: uma rica história e uma moderna vida urbana. 
        Com suas praias de classe mundial, icônicos marcos arquitetônicos e uma cena cultural vibrante, Sydney é um destino que encanta visitantes do mundo inteiro.
      </p>

    </div>

    <footer>
      <p>
        VictorBSz | 2024 | Todos os direitos reservados
      </p>
    </footer>

  </div>
</div>
    )
}

export default Sydney
