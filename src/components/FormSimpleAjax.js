import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'contact-form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Gracias por ponerte en contacto conmigo',
    errorMessage:
      'Ha habido un problema con el envio de tu mensaje, por favor intenta contactarme por email.'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
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
          // netlify-recaptcha=""
          data-netlify="true"
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}

          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Tu nombre"
              name="firstname"
              required
            />
            <span>Tu nombre</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Tu mejor email"
              name="emailAddress"
              required
            />
            <span>Tu mejor email</span>
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
          <div className="Form--Label Form-Checkbox">
            <input className="Form--Radio" type="radio" id="profesional" name="fav_language" value="profesional" />
            <label className="Form--Label" for="profesional">
            Soy profesional del sector (psicología, coaching, mentoría)*
            </label>
          </div>
          <div className="Form--Label Form-Checkbox">
            <input className="Form--Radio" type="radio" id="no_profesional" name="fav_language" value="no_profesional" />
            <label for="no_profesional">No soy profesional del sector*</label>
          </div>
          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--Textarea Form--CheckboxInput"
              name="profesional"
              type="checkbox"
              required
            />
            <span>
              * Acepto las condiciones de privacidad y ley de protección de
              datos
            </span>
          </label>
          {/* <div
            className="g-recaptcha"
            data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
          /> */}
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <button
            className="Button Form--SubmitButton"
            type="submit"
            disabled={this.state.disabled}
          >
            Suscribirme
          </button>
        </form>
      </Fragment>
    )
  }
}

export default Form
