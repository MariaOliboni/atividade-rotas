import styles from './Home.module.css';
import fotoCamisas from '../../assets/fotoCamisasInicial.jpg';

const Home = () => {
  return (
    <div>
      <div className={styles.apresentacao}>
        <h1 className={styles.tituloHome}>CineGiro : Vista seu Amor pelo Cinema</h1>
        <p>Seja bem-vindo ao CineGiro, o e-commerce definitivo para quem não apenas assiste a filmes, mas vive cada cena.</p>
        <p>Nós nascemos da paixão pelas grandes histórias, pelas trilhas sonoras marcantes e por aquela estética única que só a sétima arte tem. Nossa missão é tirar a magia das telas e levá-la direto para o seu dia a dia, transformando clássicos e lançamentos do cinema em produtos exclusivos de alta qualidade.</p>
      </div>
      
      <div className={styles.camisasHome}>
        <img src={fotoCamisas} alt="Foto de Camisas" className={styles.fotoCamisas} />
        <p>Mais do que uma loja, o ponto de encontro de quem vive as telas. Na CineGiro, transformamos suas cenas, diretores e personagens favoritos em produtos premium para decorar o seu espaço ou atualizar o seu guarda-roupa.</p>
      </div>

    </div>
  )
}

export default Home
