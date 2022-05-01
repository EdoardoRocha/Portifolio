import './Main.css';
import Section from './SectionMain';
import LogoIcon from '../Assets/imgs/icon-ok-2.png'
import { Fragment } from 'react';

function Main(props) {
    return <Fragment>
        
        <main className='main'>
            <section className='conteudoPrincipal'>
                <h2>Principais projetos</h2>
                <div className='apresentacao'>
                    <div className='projeto1'>
                        <h4>QRcode</h4>
                        <p>Projeto consiste</p>
                        <p>em gerar um codigo Qr </p>
                        <p>em tempo real</p>
                        <abbr title="Clique aqui">
                        <a href="https://edoardorocha.github.io/Gerador-de-QRcode/" rel='noopener noreferrer' target={'_blank'} >
                            <img src={LogoIcon} alt="Icon ok" />
                        </a>
                        </abbr>
                    </div>
                    <div className='projeto2'>
                    <h4>Controle de poltrona</h4>
                        <p>Projeto consiste</p>
                        <p>em fazer um controle</p>
                        <p>de poltronas</p>
                        <a href="https://github.com/EdoardoRocha/theater-progam" rel='noopener noreferrer' target={'_blank'} >
                            <img src={LogoIcon} alt="Icon ok" />
                        </a>
                    </div>
                    <div className='projeto3'>
                    <h4>Busca-CEP</h4>
                        <p>Projeto consiste</p>
                        <p>Captar informações</p>
                        <p>de um determinado CEP</p>
                        <a href="https://github.com/EdoardoRocha/Buscador-de-CEP" rel='noopener noreferrer' target={'_blank'}>
                            <img src={LogoIcon} alt="Icon ok" />
                        </a>
                    </div>
                </div>
            </section>
            
            <Section/>
        </main>
    </Fragment>
}


export default Main