import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';
import logo from '../../assets/logoCineGiro.png';

const Menu = () => {
    return (
        <header >
          
            <nav className={styles.navegacao}>
                <img src={logo} alt="Logo do Cine Giro" className={styles.logo} />
                <MenuLink to = "/" >Home</MenuLink>
                <MenuLink to = "/sala-de-rotacao" >Sala de Rotação</MenuLink>
                <MenuLink to = "/contatos" >Contatos</MenuLink>
                <span
                class={styles.botaoCarrinho + " material-symbols-outlined "}
                onClick={() => alert('Abrindo carrinho de Compras...')}
                >
                shopping_cart
                </span>
            </nav>
        </header>
    )
}


export default Menu;