import React from 'react';
import BerlinMain from '../../assets/berlinmain.png'
import BrandenburgGate from '../../assets/brandenburggate.png'
import MuroBerlin from '../../assets/muroberlin.png'
import IlhaMuseu from '../../assets/museumisland.png'
import Nav from '../../components/Nav/index'
import "./style.css"

const Berlin = () => {
    return (
<div id="page">
  <Nav></Nav>
  <div id="container">

    <header>

      <section id="title">
        <p className="hl"> SUA PROXIMA VIAGEM: </p>
        <h1> Conheça Berlim </h1>
      </section>

      <section id="main">
        <img src={BerlinMain} alt="Imagem panorâmica de Berlim" className="cardimg" />
        <p className="sub"> 
          Berlim, a capital da Alemanha, é uma cidade de contrastes, onde história e modernidade se encontram. 
          Explore a vibrante cultura da cidade e seus marcos históricos importantes, que narram séculos de transformação.
        </p>
      </section>

    </header>

    <div id="content">

      <section id="headline">
        <p className="hl"> PARA OS AMANTES DE HISTÓRIA</p>
        <h2> Descubra 3 destinos imperdíveis em Berlim </h2>
        <p>
          Berlim é uma cidade que carrega séculos de história e transformações. Desde a icônica Porta de Brandemburgo até o Berlin Wall, 
          a cidade oferece uma grande variedade de marcos históricos. Para quem ama história, Berlim tem locais que representam a era medieval, as guerras mundiais e a Guerra Fria.
        </p>
      </section>

      {/* Card 1: Brandenburg Gate */}
      <article className="card">
        <img src={BrandenburgGate} alt="Imagem da Porta de Brandemburgo, um dos marcos mais famosos de Berlim" className="cardimg" />
        <h3> 1. Porta de Brandemburgo</h3>
        <p>
          A Porta de Brandemburgo é um dos símbolos mais emblemáticos de Berlim. Construída no século XVIII, ela representa a união da cidade após a queda do Muro de Berlim e é um local de grande importância histórica.
        </p>
        <br />
        <p className="bold"> Bom para: </p>
        <ul>
          <li className="hist"> História </li>
        </ul>
      </article>

      {/* Card 2: Berlin Wall */}
      <article className="card">
        <img src={MuroBerlin} alt="Imagem do Muro de Berlim, com arte grafitada e marcas da história" className="cardimg" />
        <h3> 2. Muro de Berlim</h3>
        <p>
          O Muro de Berlim foi o divisor simbólico entre a Berlim Ocidental e Oriental durante a Guerra Fria. Hoje, fragmentos do muro estão preservados e são um poderoso lembrete da história da divisão da Alemanha.
        </p>
        <br />
        <p className="bold"> Bom para: </p>
        <ul>
          <li className="hist"> História </li>
          <li className="s2"> Casais </li>
        </ul>
      </article>

      {/* Card 3: Museum Island */}
      <article className="card">
        <img src={IlhaMuseu} alt="Imagem de Museum Island, com vários museus e belas paisagens" className="cardimg" />
        <h3> 3. Ilha dos Museus (Museum Island)</h3>
        <p>
          A Ilha dos Museus é um dos centros culturais mais importantes do mundo. Localizada no coração de Berlim, abriga museus renomados como o Museu Pergamon e o Altes Museum, que exibem coleções de arte e história antiga.
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
        Berlim é uma cidade fascinante, onde história, cultura e modernidade se encontram. Com seus marcos históricos e uma cena artística vibrante, 
        Berlim é um destino que encanta viajantes de todos os cantos do mundo.
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

export default Berlin
