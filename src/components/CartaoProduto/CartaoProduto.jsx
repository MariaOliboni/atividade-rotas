import styles from "./CartaoProduto.module.css";

const CartaoProduto = ({ nome, preco, imagem }) => {
    return (
        <div>
            <div className={styles.cartaoProduto}>
                <h2 className={styles.nomeProduto}>{nome}</h2>
                <img className={styles.imagemProduto} src={imagem} alt={nome}/>
                <p className={styles.precoProduto}>R$ {preco}</p>

                <button 
                    className={styles.botaoComprar} 
                    onClick={() => 
                    alert(`Adicionando ${nome} ao carrinho`)}
                    >
                    <span class={" material-symbols-outlined "}
                    >
                        shopping_cart
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CartaoProduto;