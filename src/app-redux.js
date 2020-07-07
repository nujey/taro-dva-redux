/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

  componentDidMount () {
    console.log(111)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    console.log(this.props)
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
// Taro.render(<App />, document.getElementById('app'))
