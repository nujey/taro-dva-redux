import Taro from '@tarojs/taro'
import React from 'react'
import { connect } from "react-redux";
import { View, Text, Button } from '@tarojs/components'
const Main = ({
  dispatch,
  common,
  main
}) => {
  console.log(dispatch, common, main)
  const handleList = (type) => {
    dispatch({
      type: 'main/getList',
      payload: {
        type: type
      }
    })
  }
  return (
    <View>
      <View>{common.isModel}</View>
      {
        main.list.map(e => <Text>{e}</Text>)
      }
      <View>
        <Button onClick={() => handleList(1)}>数字</Button>
        <Button onClick={() => handleList(2)}>字母</Button>
        <Button onClick={() => handleList(3)}>汉字</Button>
      </View>
    </View>
  )
}

export default connect(({ common, main }) => ({
  common,
  main
}))(Main)
