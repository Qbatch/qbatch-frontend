import React from 'react';

export default class Show extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <br/>
        <h2> Show Data </h2>
        <hr/>
        <div className='row'>
          <div className='col-6 offset-3'>
            <form>
              <div className='form-group'>
                <label>Name: {this.props.details.name}</label>
              </div>
              <div className='form-group'>
                <label>Email address: {this.props.details.email}</label>
              </div>
              <div className='form-group'>
                <label>Address: {this.props.details.address}</label>
              </div>
              <div className='form-group'>
                <label>Contact No: {this.props.details.contact_no}</label>
              </div>
            </form>
          </div>
        </div>
      </div>);

  }
}
