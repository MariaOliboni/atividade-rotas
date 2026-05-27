import styles from "./CartaoProduto.module.css";

const CartaoProduto = ({ nome, preco, imagem }) => {
    return (
        <div>
            <div className={styles.cartaoProduto}>
                <h2 className={styles.nomeProduto}>{nome}</h2>
                <img className={styles.imagemProduto} src={imagem} alt={nome} />
                <p className={styles.precoProduto}>R$ {preco}</p>
            </div>
        </div>
    );
};

export default CartaoProduto;