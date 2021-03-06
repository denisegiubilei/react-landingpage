import React, { useState } from 'react';
import { addUser } from '../../services/store';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const [submitButtonText, setSubmitButtonText] = useState('Enviar agora');

  const submitNewsletter = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      setSubmitButtonText('Salvando...');
      const newsletterUser = {
        name: form.name.value,
        email: form.email.value,
      };
      addUser(newsletterUser)
        .then(() => setSubmitButtonText('Usuário salvo! :)'));
    }
  };

  return (
    <section data-testid="newsletter-section" className="newsletter">
      <h2 className="title">Receba nossas ofertas em primeira mão!</h2>
      <p>Cadastre-se e fique por dentro das novidades ;)</p>
      <form id="newsletter-form" onSubmit={submitNewsletter}>
        <div className="fields">
          <input type="text" id="name" name="name" placeholder="Nome" required min-length="2" className="input" />
          <input type="email" id="email" name="email" placeholder="Endereço de e-mail" required className="input" />
        </div>
        <input data-testid="btn-submit-newsletter" type="submit" className="button" value={submitButtonText} />
      </form>
    </section>
  );
};

export default NewsletterForm;
