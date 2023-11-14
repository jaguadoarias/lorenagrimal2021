import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Contact Form',
    subject: 'Contacto Web', // optional subject of the notification email
    action: '',
    successMessage: 'Gracias por ponerte en conracto conmigo',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   if (this.state.disabled) return

  //   const form = e.target
  //   const data = serialize(form)
  //   this.setState({ disabled: true })
  //   fetch(form.action + '?' + stringify(data), {
  //     method: 'POST'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res
  //       } else {
  //         throw new Error('Network error')
  //       }
  //     })
  //     .then(() => {
  //       form.reset()
  //       this.setState({
  //         alert: this.props.successMessage,
  //         disabled: false
  //       })
  //     })
  //     .catch(err => {
  //       console.error(err)
  //       this.setState({
  //         disabled: false,
  //         alert: this.props.errorMessage
  //       })
  //     })
  // }
  handleSubmit = event => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => console.log('Form successfully submitted'))
      .catch(error => alert(error))
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet>
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          netlify-recaptcha=""
          data-netlify="true"
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}

          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Nombre"
              name="firstname"
              required
            />
            <span>Nombre</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email</span>
          </label>
          {/* <label className="Form--Label has-arrow">
            <select
              className="Form--Input Form--Select"
              name="type"
              defaultValue="Type of Enquiry"
              required
            >
              <option disabled hidden>
                Type of Enquiry
              </option>
              <option>Need to know more</option>
              <option>Found a bug</option>
              <option>Want to say hello</option>
            </select>
          </label> */}
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              placeholder="Mensaje"
              name="message"
              rows="10"
              required
            />
            <span>Mensaje</span>
          </label>
          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--Textarea Form--CheckboxInput"
              name="newsletter"
              type="checkbox"
              required
            />
            <span>He leído y acepto la política de privacidad</span>
          </label>
          <div
            className="g-recaptcha"
            data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
          />
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <button
            className="Button Form--SubmitButton"
            type="submit"
            disabled={this.state.disabled}
          >
            Enviar
          </button>
        </form>
      </Fragment>
    )
  }
}

export default Form
