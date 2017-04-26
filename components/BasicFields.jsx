import React from 'react';

export default class BasicFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.details.name,
      email: this.props.details.email
    };

    this.saveAndNext = this.saveAndNext.bind(this);
  }

  saveAndNext (event) {
    event.preventDefault();

    var data = this.props.details;
    data.name = this.state.name;
    data.email = this.state.email;

    this.props.saveDetails(data);
    this.props.nextStep();
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <br/>
        <h2> Basic Details Form </h2>
        <hr/>
        <div className='row'>
          <div className='col-6 offset-3'>
            <form>
              <div className='form-group'>
                <label>Name:</label>
                <input type='text' defaultValue={name} onChange={(e) => this.setState({name: e.target.value})} className='form-control' placeholder='Enter Name'/>
              </div>
              <div className='form-group'>
                <label>Email address:</label>
                <input type='email' defaultValue={email} onChange={(e) => this.setState({email: e.target.value})} className='form-control' placeholder='Enter email'/>
              </div>
              <button type='submit' onClick={this.saveAndNext} className='btn btn-primary'>Save & Next</button>
            </form>
          </div>
        </div>
        <hr/>
      </div>);
  }
}
