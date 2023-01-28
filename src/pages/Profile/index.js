import React, { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: 1,
      tableData: []
    }
  }
  
  componentDidMount() {
      
    // this.setState({ tableData: dataDariAPI })
  }
    
  componentDidUpdate(prevProps, prevState, snapshot) {}
    
  componentWillUnmount() {}
    
  render() {
    return (
      <div>
        <p>TEST</p>
      </div>
    )
  }
}