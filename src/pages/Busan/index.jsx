import React from 'react';
import BusanMain from '../../assets/busan_main.png'
import Beomeo from '../../assets/beomeo-sa.png'
import Haedong from '../../assets/haedong.png'
import Yongdusan from '../../assets/yongdusan.png'
import Heart from '../../assets/heart.svg'
import Nav from '../../components/Nav/index'
import "./style.css"

const Home = () => {
  return (
<div id="page">
  <Nav></Nav>
    <div id="container">

      <header>

        <section id="title">
          <p className="hl"> SUA PROXIMA VIAGEM: </p>
          <h1> Conheça Busan </h1>
        </section>

        <section id="main">
          <img src={BusanMain} alt="Imagem panoramica de Busan" className="cardimg" />
          <p className="sub"> 
            Busan, a estrela em ascensão da Coreia do Sul, oferece de tudo, desde churrascarias de primeira linha até tradicionais barracas de comida de rua.
            Aqui, exploramos a segunda cidade da Coreia do Sul e descobrimos as suas ofertas culinárias.
          </p>
        </section>

      </header>

      <div id="content">

        <section id="headline">
          <p className="hl"> PARA OS AMANTES DE HISTORIA</p>
          <h2> Descubra 3 destinos imperdíveis em Busan </h2>
          <p>
            As atrações de Busan vão desde templos budistas centenários que pontilham as montanhas e o litoral da cidade até praias imaculadas com águas cristalinas. 
            Esta cidade litorânea tem muitas coisas para fazer o ano todo - as famílias podem passar o tempo em um aquário à beira-mar, 
            os compradores podem explorar bairros vibrantes e os amantes da natureza podem desfrutar de longas caminhadas até mirantes panorâmicos.
            Os santuários budistas que pontilham a costa e as montanhas de Busan têm uma arquitetura impressionante que irá encantar os fotógrafos.
          </p>
        </section>

{/* Card 1: Haedong */}
        <article className="card">
          <img src={Haedong} alt="Imagem do templo de Haedong Yonggungsa, numa bela paisagem litorânea" className="cardimg" />
          <h3> 1. Templo Haedong Yonggungsa</h3>
          <p>
            O Templo Haedong Yonggungsa é um templo budista localizado no extremo nordeste de Busan. Construído em 1376, 
            é um dos poucos templos na Coreia construídos à beira-mar – você pode desfrutar de vistas do Mar do Leste de um lado e de belas montanhas do outro. 
          </p>
          <br />
          <p className="bold"> Bom para: </p>
          <ul>
            <li className="hist"> História </li>
          </ul>
        </article>

{/* Card 2: Beomeo-sa */}
        <article className="card">
          <img src={Beomeo} alt="Imagem panoramica da paisagem do templo Beomeo-sa, com uma linda floresta ao fundo" className="cardimg" />
          <h3> 2. Templo Beomeo-sa</h3>
          <p>
            O Templo Beomeo-sa é um dos maiores santuários da Coreia do Sul. 
            Ele está localizado no alto da borda leste da montanha Geumjeongsa e fica distante da agitação da cidade.
            O Daeungjeon Hall do templo é um exemplo bem preservado da arquitetura da Dinastia Joseon.
          </p>
          <br />
          <p className="bold"> Bom para: </p>
          <ul>
            <li className="hist"> História </li>
          </ul>
        </article>

{/* Card 3: Yongdusan */}
        <article className="card">
          <img src={Yongdusan} alt="Parque Yongdusan, com algumas pessoas passeando em meio a luz do dia, muitas árvores e a cidade ao fundo" className="cardimg" />
          <h3> 3. Parque Yongdusan</h3>
          <p>
            O Parque Yongdusan, localizado no centro de Busan, abriga alguns dos monumentos mais importantes da cidade. Você pode ver vistas espetaculares 
            do topo da Torre Busan, de 120 metros de altura. O parque tem 2 museus – confira os instrumentos musicais tradicionais 
            no Museum of World Folk Instruments e mais de 80 veleiros coreanos no Exhibition Hall of World Model Boats.
          </p>
          <br />
          <p className="bold"> Bom para: </p>
          <ul>
            <li className="s2"> Casais </li>
            <li className="fam"> Famílias </li>
            <li className="orc"> Orçamento </li>
          </ul>
        </article>

      </div>

      <div id="conclusion">

        <p id="conc">
          As melhores coisas para fazer em Busan mostram a reputação da cidade como um importante porto marítimo na Ásia. 
          Frequentemente vista como a essência da Coreia do Sul, você experimentará uma atmosfera única em termos de diversidade étnica e cultural, 
          já que a cidade recebe um público cosmopolita o ano todo. 
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

export default Home;