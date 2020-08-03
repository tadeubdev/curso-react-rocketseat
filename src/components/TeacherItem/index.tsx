import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/4499999?s=460&u=43622f77e15ec22906e28f378467f7e32b5f9cea&v=4" alt="Profile" />
        <div>
          <strong>Tadeu Barbosa</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /><br />
            Modi cum dolores quam est voluptatem. Odio expedita corrupti accusamus sint neque. Ex nisi aliquid optio quam quia explicabo, asperiores illum quaerat!
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="Entrar em contato" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
