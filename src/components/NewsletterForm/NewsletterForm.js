import React, { useState } from 'react'
import { addUser } from '../../services/DummyService'
import './NewsletterForm.css'

const NewsletterForm = () => {

  const [submitButtonText, setSubmitButtonText] = useState('Enviar agora')

  const submitNewsletter = (e) => {
    e.preventDefault()
    const form = e.target
    if (form.checkValidity()) {
      setSubmitButtonText('Salvando...')
      const newsletterUser = { 
        'name': form.name.value, 
        'email' : form.email.value 
      }
      addUser(newsletterUser)
        .then(() =>  setSubmitButtonText('Usuário salvo! :)'))
    }
  }
  
  return (
    <section className="newsletter">
      <h2 className="title">Receba nossas ofertas em primeira mão!</h2>
      <p>Cadastre-se e fique por dentro das novidades ;)</p>
      <form id="newsletter-form" onSubmit={submitNewsletter}>
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required min-length="2" className="input"/>
          </div>
          <div className="field">
            <label htmlFor="name">E-mail:</label>
            <input type="email" id="email" name="email" required className="input"/>
          </div>
        </div>
        <input type="submit" className="button regular" value={submitButtonText}/>
      </form>
    </section>
  )
}

export default NewsletterForm