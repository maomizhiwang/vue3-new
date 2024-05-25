<template>
  <div class="videotime">
    <h1>总时长: {{ totalltime }}</h1>
    <p>单级时长</p>
    <div v-for="(time, index) in inputValues" :key="index" class="time-input">

      <input type="number" v-model.trim="time.hours" @input="updateInputValue" @blur="checkInputValue(time, 'hours')">
      <span>小时</span>
      <input type="number" v-model.trim="time.minutes" @input="updateInputValue" @blur="checkInputValue(time, 'minutes')">
      <span>分钟</span>
      <input type="number" v-model.trim="time.seconds" @input="updateInputValue" @blur="checkInputValue(time, 'seconds')">
      <span>秒</span>


    </div>
    <button class="button" @click="addInput">增加</button>
    <button class="button" @click="resetall">重置</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const inputValues = ref([{ hours: 0, minutes: 0, seconds: 0 }])
const totalTime = ref([{ hours: 0, minutes: 0, seconds: 0 }])
interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}
let totalltime=computed({
  get(){
    return  totalTime.value[0].hours+ '小时'+ totalTime.value[0].minutes +'分钟'+ totalTime.value[0].seconds+'秒'
  },
  set(){}
})
function checkInputValue(time: Time, key: keyof Time) {
  //把超出60的直接去除
  if(key!=='hours'){
    if(time[key]>60){
      time[key]=60;
    }
  }
  //去除小数
  if(!Number.isInteger(time[key])){
    time[key]=Math.floor(time[key])  
  }
  //去除负数
  if (time[key] < 0 ) {
    time[key]=0
  }
  updateInputValue()
}
// 计算总时长
function updateInputValue() {

  let hours = 0, min = 0, sec = 0;
  for (const time of inputValues.value) {
    hours += time.hours
    min += time.minutes
    sec += time.seconds
  }

  min += Math.floor(sec / 60)
  sec %= 60;
  hours += Math.floor(min / 60)
  min %= 60;
  totalTime.value[0].hours = hours
  totalTime.value[0].minutes = min
  totalTime.value[0].seconds = sec
}

function addInput() {
  let length=inputValues.value.length;
  for(let i=length-1;i<length;i++){
    if(inputValues.value[i]['hours']===0&&inputValues.value[i]['minutes']===0&&inputValues.value[i]['seconds']===0){
      alert('请输入时间')
    }else{
      inputValues.value.push({ hours: 0, minutes: 0, seconds: 0 })
    }
  }
}
function resetall() {
  totalTime.value[0].hours = 0
  totalTime.value[0].minutes = 0
  totalTime.value[0].seconds = 0
  inputValues.value.length = 1
  inputValues.value[0].hours = 0
  inputValues.value[0].minutes = 0
  inputValues.value[0].seconds = 0
  updateInputValue()
}
// 更新 totalTime 的值

</script>

<style scoped>
.videotime {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 3px;
}

.time-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

input[type="number"] {
  width: 80px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

span {
  margin: 0 5px;
}

.button {
  margin-top: 10px;
  margin-right: 5px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
</style>