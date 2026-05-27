import styles from './SalaDeRotacao.module.css';
import CartaoProduto from '../../components/CartaoProduto/CartaoProduto';

import CaixaMisteriosa from '../../assets/caixaMisteriosa.jpg';
import camisaTerror from '../../assets/camisaTerror.jpg';
import kitCinema from '../../assets/kitCinema.jpg';

import coqueteleira from '../../assets/coqueteleira.jpg';
import relogioBolso from '../../assets/relogioBolso.jpg';
import mochilaSCIFI from '../../assets/mochilaSCIFI.jpg';

import luminaria from '../../assets/luminaria.jpg';
import jaqueta from '../../assets/jaqueta.jpg';
import caderno from '../../assets/caderno.jpg';

const SalaDeRotacao = () => {
  return (
    <div className={styles.salaDeRotacao}>
      <div>
        <h2 className={styles.tituloSala}>Lançamento - Semana do Terror!</h2>
        <p className={styles.descricaoSala}>Prepare-se para uma semana de arrepiar! Estamos trazendo uma seleção especial de produtos inspirados nos clássicos do terror. De camisetas com estampas icônicas a acessórios que vão fazer você se sentir parte do filme, temos tudo para os fãs de horror. Não perca a chance de vestir seu amor pelo cinema de terror e transformar seu guarda-roupa em um verdadeiro set de filmagem assustador!</p>
      </div>

      <div className={styles.cardsContainer}>
        <CartaoProduto
          nome="Caixa Misteriosa de Terror"
          preco="219,90"
          imagem={CaixaMisteriosa}
        />
        <CartaoProduto
          nome="Camisa temática de Terror"
          preco="129,90"
          imagem={camisaTerror}
        />
        <CartaoProduto
          nome="Kit cinema temático de Terror"
          preco="199,90"
          imagem={kitCinema}
        />
      </div>

      <h3 className={styles.produtos}>Outros Produtos!</h3>
      
      <div className={styles.cardsContainer}>
        <CartaoProduto
          nome="Mochila Sci-Fi"
          preco="259,90"
          imagem={mochilaSCIFI}
        />
        <CartaoProduto
          nome="Relógio de Bolso Clássico"
          preco="169,90"
          imagem={relogioBolso}
        />
        <CartaoProduto
          nome="Coqueteleira Retrô"
          preco="129,90"
          imagem={coqueteleira}
        />
      </div>

       <div className={styles.cardsContainer}>
        <CartaoProduto
          nome="Jaqueta de Couro Estilo Anos 80"
          preco="229,90"
          imagem={jaqueta}
        />
        <CartaoProduto
          nome="Luminaria de Mesa"
          preco="115,90"
          imagem={luminaria}
        />
        <CartaoProduto
          nome="Caderno de Filme Clássico"
          preco="79,90"
          imagem={caderno}
        />
      </div>

      <h3 className={styles.emBreve}>Em Breve mais produtos!</h3>
      <p className={styles.emBreveDescricao}>Fique ligado, porque a cada semana trazemos uma nova temática para você explorar. Seja um clássico do cinema, um gênero específico ou uma homenagem a um diretor icônico, nossa sala de rotação é o lugar onde a magia do cinema ganha vida em forma de produtos exclusivos. Não perca a chance de descobrir novidades e se apaixonar por cada tema que preparamos com tanto carinho para você!</p>

    </div>
  )
}

export default SalaDeRotacao
