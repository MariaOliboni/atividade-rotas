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
    </div>
  )
}

export default Contatos
