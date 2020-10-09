import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'

@connect(({ index }) => ({
  ...index
}))

class Index extends Component {
  state = {
    num: 1
  }
  componentWillMount () {
    console.log(this.props)
  }
  add = () => {
    this.props.dispatch({
      type: 'index/updateVersion',
      payload: {
        v: '1.0.2',
        page: 1
      }
    })
  }
  dec = () => {
    this.props.dispatch({
      type: 'index/updateVersion',
      payload: {
        v: '1.0.0',
        page: 1
      }
    })
  }
  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.dec}>-</Button>
        {/* <Button onClick={() => this.props.dispatch(asyncAdd())}>异步请求</Button> */}
        <Text>counter: {this.props.v}</Text>
      </View>
    )
  }
}

export default Index
