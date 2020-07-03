import Mock from 'mockjs'

export default Mock.mock('/getCounterList', 'post', {
  success: true,
  message: '@cparagraph',
  'list|1-5': [{
    'cid|+1': 1,
    'userId|5': ''
  }]
})
