import './sectionMain.css'
import Logo from '../Assets/imgs/noticias.svg'


function Section(props) {
    return(
        <section className="conteudoSecundario">
            <h4>Um pouco sobre quem sou</h4>
            <div className="apresentacao">
                <p>
                    1. Olá, me chamo <mark>Edoardo Rocha Paz</mark>, mas pode me chamar do jeito que quiser :).
                    Tenho 16 anos, sou desenvolvedor web. Estou sempre a procura de novos desafios para assim
                    somar no meu nivel de experiência, então sempre estou pondo a cara a tapa para <mark>projetos</mark> além do meu nível.
                </p>
                <p>
                    2. Para trabalhar com <mark>front-end é back-end</mark> precisamos logicamente de algumas tecnologias,
                    para uso no meu dia a dia uso tecnologias como;
                    <br />            
                        JavaScript. Html.
                    <br />   
                        css. react.
                    <br />
                        nodejs. mySQL.
                    <br />
                        expressJs.
                </p>
                <p>
                    3. Bom é isso!, vou deixar alguns projetos para que possam me conhecer melhor!.
                </p>
            </div>
            <h5>Projetos Concluidos e funcionais</h5>
            <div className="projetos">
                <div className="proj1">
                    <div className='logoProjeto'><img src={Logo} alt="" /></div>
                    <div className='sinopseProjeto'>Projeto feito e elaborado em reactJs</div>
                    <div className='linkProjeto'>https://... </div>
                </div>
                <div className="proj2">
                    <div className='logoProjeto'><img src={Logo} alt="" /></div>
                    <div className='sinopseProjeto'>Projeto feito e elaborado em reactJs</div>
                    <div className='linkProjeto'>https://... </div>
                </div>
                <div className="proj3">
                    <div className='logoProjeto'><img src={Logo} alt="" /></div>
                    <div className='sinopseProjeto'>Projeto feito e elaborado em reactJs</div>
                    <div className='linkProjeto'>https://... </div>
                </div>
                <div className="proj4">
                    <div className='logoProjeto'><img src={Logo} alt="" /></div>
                    <div className='sinopseProjeto'>Projeto feito e elaborado em reactJs</div>
                    <div className='linkProjeto'>https://... </div>
                </div>
            </div>

            <div className="contato">
                <div className="cnttEmail">Email</div>
                <div className="cnttInstagram">Instagram</div>
                <div className="cnttGithub">Github</div>
            </div>
        </section>
    )
}

export default Section;