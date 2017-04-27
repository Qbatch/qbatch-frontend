import React from 'react';
import BasicFields from './BasicFields.jsx';
import ContactFields from './ContactFields.jsx';
import Show from './Show.jsx';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      details: {
        name: '',
        email: '',
        address: '',
        contact_no: ''
      }
    };

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  nextStep() {
    this.setState((prevstate) => ({ step: prevstate.step + 1 }));
  }

  previousStep(event) {
    event.preventDefault();
    this.setState((prevstate) => ({ step: prevstate.step - 1 }));
  }

  saveDetails(details) {
    this.setState({ details: details  });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <BasicFields details={this.state.details}
                            nextStep={this.nextStep}
                            saveDetails={this.saveDetails}/>
      case 2:
        return <ContactFields details={this.state.details}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveDetails={this.saveDetails} />
      case 3:
        return <Show details={this.state.details}/>
    }
  }
}
