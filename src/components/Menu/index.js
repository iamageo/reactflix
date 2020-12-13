import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src= {Logo} alt="ReactFlix Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;