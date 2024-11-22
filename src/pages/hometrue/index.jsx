import React from 'react';
import BusanMain from '../../assets/busan_main.png'
import SydneyMain from '../../assets/sydneymain.png'
import BerlinMain from '../../assets/berlinmain.png'
import Ger from '../../assets/countries/germany.png'
import Kor from '../../assets/countries/korea.png'
import Aus from '../../assets/countries/australia.png'
import Nav from '../../components/Nav/index'
import "./style.css"
import { NavLink } from 'react-router-dom';

const Test = () => {
    return (
<div id="page">
  <Nav></Nav>
  <div id="container"></div>
        <header>
            <h1>Bem vindo ao seu site de locais para viagem!</h1>
            <br/>
            <h2> Aqui queremos te dar ideias de onde você pode ir para aproveitar os melhores tempos de sua vida!</h2>
        </header>

        <section>
            <ul id="paises">
                <li>
                    <NavLink to='/'><img src={BusanMain} alt="" className='cardlink' /></NavLink>
                    <h3 className="title">
                        Busan, Coréia do Sul
                        <img src={Kor} alt="" className='flag' />
                        </h3>
                </li>
                <li>
                    <NavLink to ='/sydney'><img src={SydneyMain} alt="" className='cardlink'/></NavLink>
                    <h3 className="title">
                        Sydney, Austrália
                        <img src={Aus} alt="" className='flag' />
                        </h3>
                </li>
                <li>
                    <NavLink to='/berlin'><img src={BerlinMain} alt="" className='cardlink'/></NavLink>
                    <h3 className="title">
                        Berlin, Alemanha
                        <img src={Ger} alt="" className='flag' />
                    </h3>
                </li>
            </ul>
        </section>
</div>
  )
}

export default Test