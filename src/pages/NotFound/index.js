import React from 'react';
import PageDefault from '../../components/PageDefault';
import { NotFoundWrapper } from './style';

const NotFound = () => (
  <PageDefault>
    <NotFoundWrapper>
      <p>
        Opss!! A página solicitada não existe ): !
        Mas espere, você encontrou um easter egg, vamos jogar?
      </p>
      <iframe
        title="Let's play"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        scrolling="no"
      />
    </NotFoundWrapper>
  </PageDefault>
);

export default NotFound;
