import React from 'react';

export default class ContactFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.details.address,
      contact_no: this.props.details.contact_no
    };
    this.saveAndNext = this.saveAndNext.bind(this);
  }

  saveAndNext (event) {
    event.preventDefault();

    var data = this.props.details;
    data.address = this.state.address;
    data.contact_no = this.state.contact_no;

    this.props.saveDetails(data);
    this.props.nextStep();
  }

  render() {
    return (
      <div className='container'>
        <br/>
        <h2> Contact Details Form </h2>
        <hr/>
        <div className='row'>
          <div className='col-6 offset-3'>
            <form>
              <div className='form-group'>
                <label>Address:</label>
                <input type='text' onChange={(e) => this.setState({address: e.target.value})} className='form-control' placeholder='Enter address'/>
              </div>
              <div className='form-group'>
                <label>Contact No.:</label>
                <input type='email' onChange={(e) => this.setState({contact_no: e.target.value})} className='form-control' placeholder='Enter Contact No.'/>
              </div>
              <button type='submit' onClick={this.props.previousStep} className='btn btn-primary'>Previous</button>
              <button type='submit' onClick={this.saveAndNext} className='btn btn-primary'>Save & Next</button>
            </form>
          </div>
        </div>
      </div>);
  }

}
