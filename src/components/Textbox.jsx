import React from 'react';

export default class Textbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'default text is this',
    }

    this.addText.bind(this);
  }

  addText() {
    this.setState({ text: "hhshhhh" });
  }

  render() {
    const { rows, cols } = this.props;
    return (
      <div>
        <textarea rows={rows} cols={cols} value={this.state.text} />
        <button onClick={() => this.addText()}>abc</button>
      </div>
    );
  }
}
