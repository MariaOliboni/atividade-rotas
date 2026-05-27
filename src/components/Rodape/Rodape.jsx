import styles from './Rodape.module.css';

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <h3>CineGiro</h3>
            <p>© 2026 CineGiro. Todos os direitos reservados</p>
            <p>Desenvolvido por Maria Oliboni</p>
            <a href="https://github.com/MariaOliboni" target="_blank" rel="noopener noreferrer">GitHub</a>
        </footer>
    )
}

export default Rodape