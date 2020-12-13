import Logo from '../../assets/img/logo.png';
import ButtonLink from '../components/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src= {Logo} alt="ReactFlix Logo" />
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;