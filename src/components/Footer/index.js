import React from 'react';
import { FooterBase, Autor } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Autor>
        &copy; 2020 | Augusto Calandrino
      </Autor>
      <hr style={{ margin: '0 5%' }} />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
