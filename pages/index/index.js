const weatherMap = {
  'sunny': '晴天',
  'cloudy': '多云',
  'overcast': '阴',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪'
}

Page({
data:{
nowtemp:'',
nowweather:''
},

onLoad(){
  const requestTask = wx.request({
    url: 'https://test-miniprogram.com/api/weather/now', 
    data: {
     city:'上海市'
    },
    success: res=> {
      console.log(res)
      let result = res.data.result
      console.log(result)
      let temp = result.now.temp
      console.log(temp)
      let weather = result.now.weather
      console.log(weather)
      console.log(temp,weather)
      this.setData({
        nowtemp:temp,
        nowweather:weatherMap[weather]
      })
    }
  })

  
}

})