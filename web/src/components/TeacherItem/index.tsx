import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemPros } from '../../pages/TeacherList';

import './styles.css';
import api from '../../services/api';

const TeacherItem: React.FC<TeacherItemPros> = ({
  teacher: { id, name, bio, cost, avatar, subject, whatsapp }
}) => {

  function handleCreateNewConnection() {
    api.post('connections', {
      user_id: id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>Preço/hora <strong>R$ {cost}</strong></p>
        <a onClick={handleCreateNewConnection} href={`https://wa.me/${whatsapp}`} target="_blank">
          <img src={wppIcon} alt="Entrar em contato" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
