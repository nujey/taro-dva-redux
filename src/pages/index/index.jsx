import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'

import { add, minus, asyncAdd } from '../../store/actions/counter'

@connect(({ counter }) => ({
  ...counter
}))

class Index extends Component {
  state = {
    num: 1
  }
  componentWillMount () {
    console.log(this.props, this.state)
  }

  componentDidHide () { }
  add = () => {
    this.props.dispatch(add())
  }
  dec = () => {
    this.props.dispatch(minus())
  }
  render () {
    return (
      <View className='index'>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.dec}>-</Button>
        <Button onClick={() => this.props.dispatch(asyncAdd())}>异步请求</Button>
        <Text>counter: {this.props.num}</Text>
      </View>
    )
  }
}

export default Index
