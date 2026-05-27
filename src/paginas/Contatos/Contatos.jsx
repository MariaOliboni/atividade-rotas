import styles from './Contatos.module.css';

const Contatos = () => {
  return (
    <div className={styles.contatosContainer}>
      <div>
        <h1 className={styles.contatosTitulo}>Contatos</h1>
        <p className={styles.contatosDescricao}>
          Quer falar com a equipe CineGiro? Envie seu nome e e-mail abaixo que retornaremos em breve.
        </p>
      </div>

      <form className={styles.formContatos}>
        <label className={styles.labelField} htmlFor="nome">
          Nome
          <input
            id="nome"
            name="nome"
            className={styles.inputField}
            type="text"
            placeholder="Digite seu nome"
          />
        </label>

        <label className={styles.labelField} htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            className={styles.inputField}
            type="email"
            placeholder="seu@email.com"
          />
        </label>

        <button type="submit" className={styles.btnEnviar}>
          Enviar
        </button>
      </form>

      <hr />
      <div className={styles.infoContato}>
        <h2 className={styles.infoTitulo}>Informações de Contato</h2>
        <p className={styles.infoDescricao}>
          Endereço: Rua do Cinema, 123 - Cidade do Filme<br />
          Telefone: (11) 1234-5678<br />
          E-mail: contato@cinegiro.com
        </p>
      </div>
    </div>
  )
}


export default Contatos
