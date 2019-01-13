import React, { Component } from 'react'


const allDetails = [
    {id:1,title:'message1',content:'content1'},
    {id:3,title:'message3',content:'content3'},
    {id:5,title:'message5',content:'content5'}
]
export default class MessageDetail extends Component {
  render() {
      const id = this.props.match.params.id * 1
      const detail = allDetails.find((m,index) => m.id === id)
    return (
      <ul>
          <hr/>
          <li>Id:{id}</li>
          <li>Title:{detail.title}</li>
          <li>Content:{detail.content}</li>
      </ul>
    )
  }
}
