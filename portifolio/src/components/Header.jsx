import './Header.css';
import Logo from '../Assets/imgs/noticias.svg'


function Header(props) {
    return (
        <header className='header'>
            <h1>Portifolio</h1>
            <div className='logo'>
                <img src={Logo} alt="Logo portifolio"/>
            </div>
        </header>
    )
};

export default Header;