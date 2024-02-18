import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    firstErr: '',
    last: '',
    lastErr: '',
    showLogin: true,
  }

  onChangeFirst = event => {
    this.setState({first: event.target.value, firstErr: ''})
  }

  onBlurFirst = () => {
    const {first} = this.state
    if (first === '') {
      this.setState({firstErr: 'Required'})
    }
  }

  onBlurLast = () => {
    const {last} = this.state
    if (last === '') {
      this.setState({lastErr: 'Required'})
    }
  }

  renderFirstName = () => {
    const {first, firstErr} = this.state
    return (
      <>
        <label htmlFor="firstname" className="label">
          FIRST NAME
        </label>
        <input
          value={first}
          onChange={this.onChangeFirst}
          onBlur={this.onBlurFirst}
          type="text"
          id="firstname"
          className={`input ${firstErr}`}
          placeholder="First name"
        />
        <p className="error">{firstErr}</p>
      </>
    )
  }

  onChangeLast = event => {
    this.setState({last: event.target.value, lastErr: ''})
  }

  renderLastName = () => {
    const {last, lastErr} = this.state

    return (
      <>
        <label htmlFor="lastname" className="label">
          LAST NAME
        </label>
        <input
          value={last}
          onChange={this.onChangeLast}
          onBlur={this.onBlurLast}
          type="text"
          id="lastname"
          className={`input ${lastErr}`}
          placeholder="Last name"
        />
        <p className="error">{lastErr}</p>
      </>
    )
  }

  onSubmitSuccess = () => {
    this.setState({
      showLogin: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {first, firstErr, lastErr, last, showLogin} = this.state
    console.log(first, last, showLogin)

    if (first === '' && last === '') {
      this.setState({firstErr: 'Required', lastErr: 'Required'})
    } else if (first === '') {
      this.setState({firstErr: 'Required'})
    } else if (last === '') {
      this.setState({lastErr: 'Required'})
    } else if (firstErr === '' && lastErr === '') {
      this.onSubmitSuccess()
    }
  }

  onClickAnother = () => {
    this.setState({
      showLogin: true,
      first: '',
      last: '',
      firstErr: '',
      lastErr: '',
    })
  }

  render() {
    const {showLogin} = this.state
    console.log('showLogin', showLogin)

    return (
      <div className="bg-container">
        <div className="form-bg-container">
          <h1 className="heading">Registration</h1>

          {showLogin ? (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-container">{this.renderFirstName()}</div>
              <div className="input-container">{this.renderLastName()}</div>
              <div className="button-bg">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <>
              <img
                className="success-logo"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <div className="button-bg">
                <button
                  onClick={this.onClickAnother}
                  type="button"
                  className="button"
                >
                  Submit Another Response
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
