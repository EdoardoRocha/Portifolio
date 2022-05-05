import './App.css';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Header from '../components/Header';


function App(props) {
    return <div className='app'>
                <Header title="Portifolio"/>
                <Main />
                <Footer/>
            </div> 
}


export default App;