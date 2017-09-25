import React from 'react'

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.incrementCounter = this.updateCounter.bind(this, 1);
    this.decrementCounter = this.updateCounter.bind(this, -1);
  }

  render() {
    return <div>
              <p>
                  Number of Greetings: {this.state.count} &nbsp;
                  <input type='button' value='+' onClick={this.incrementCounter} />
                  <input type='button' value='-' onClick={this.decrementCounter} />
              </p>
           </div>
  }

  updateCounter(count) {
        this.setState({count: this.state.count + count});
    }

}
