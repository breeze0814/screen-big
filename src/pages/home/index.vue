<!-- Home -->
<template>
  <div class="main">
    <div class="top">
      <div class="p1">
        <p class="title">出勤情况</p>
        <div class="list">
          <div>姓名</div>
          <div>部门</div>
          <div>时间</div>
        </div>
        <vue3-seamless-scroll
          :list="attendData"
          :step="1"
          :singleHeight="30"
          hover
          class="temper-scroll">
          <div
            class="scroll-item"
            v-for="(item, index) in attendData"
            :key="index">
            <span>{{ item.name }}</span>
            <span>{{ item.depart }}</span>
            <span>{{ item.time }}</span>
          </div>
        </vue3-seamless-scroll>
      </div>
      <div class="p2">
        <div class="c1"></div>
        <div class="c2"></div>
        <!-- 饼图 -->
        <div class="c3">
          <div id="shouldTotal"></div>
        </div>
        <div class="c4">
          <div class="dec">
            <div class="number">
              <p class="title">公司应到人数</p>
              <p class="numb">500</p>
            </div>
            <div class="number">
              <p class="title">部门应到人数</p>
              <p class="numb">500</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="p3">
          <p class="title">部门统计</p>
          <div id="departTotal"></div>
        </div>
        <div class="p4">
          <p class="title">出勤人数分析</p>
          <div id="peopleTotal"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="b1">
      <div class="dec">500</div>
      <div class="bg"></div>
      <div class="tag">正常人数</div>
    </div>
    <div class="b2">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="dec">0</div>
      <div class="tag">缺勤</div>
    </div>
    <div class="b3">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="dec">0</div>
      <div class="tag">迟到</div>
    </div>
    <div class="b4">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="dec">500</div>
      <div class="tag">已出勤人数</div>
    </div>
    <div class="b5">
      <div class="bg"></div>
      <div class="dec">0%</div>
      <div class="tag">缺勤比率</div>
    </div>
    <div class="b6">
      <div class="bg"></div>
      <div class="dec">0%</div>
      <div class="tag">迟到比率</div>
    </div>
    <div class="b7">
      <div class="bg"></div>
      <div class="dec">0%</div>
      <div class="tag">早退比率</div>
    </div>
    <div class="b8">
      <div class="dec">100%</div>
      <div class="bg"></div>
      <div class="tag">出勤比率</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
import * as echarts from 'echarts'

// 模拟数据
let attendData = ref([
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '人力部', time: '2022.08.30' },
  { name: '王五', depart: '研发部', time: '2022.08.30' },
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '行政部', time: '2022.08.30' },
  { name: '王五', depart: '人力部', time: '2022.08.30' },
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '人力部', time: '2022.08.30' },
  { name: '王五', depart: '研发部', time: '2022.08.30' },
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '行政部', time: '2022.08.30' },
  { name: '王五', depart: '人力部', time: '2022.08.30' },
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '人力部', time: '2022.08.30' },
  { name: '王五', depart: '研发部', time: '2022.08.30' },
  { name: '张三', depart: '研发部', time: '2022.08.30' },
  { name: '李四', depart: '行政部', time: '2022.08.30' },
  { name: '王五', depart: '人力部', time: '2022.08.30' },
])

watchEffect(
  () => {
    draw1()
    draw2()
    draw3()
  },
  { flush: 'post' }
)

function draw1() {
  let departTotal = document.getElementById('departTotal')
  departTotal.removeAttribute('_echarts_instance_')
  let myChart = echarts.init(departTotal)

  let options = {
    grid: {
      left: '0',
      top: '30',
      right: '0',
      bottom: '10',
      containLabel: true,
    },
    legend: {
      top: 0,
      left: 20,
      textStyle: {
        color: '#fff',
        fontSize: '14',
      },
      itemWidth: 10, // 设置宽度
      itemHeight: 10, // 设置高度
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },

    xAxis: {
      type: 'category',
      data: ['A部门', 'B部门', 'C部门', 'D部门'],
      axisTick: {
        show: true,
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'dotted',
        },
      },
      axisLabel: {
        //X轴文字
        fontSize: 12,
        color: '#fff',
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        //分割线
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'dotted',
        },
      },

      axisLabel: {
        //Y轴刻度值
        formatter: '{value}',
        fontSize: 12,
        color: '#fff',
      },
      axisLine: {
        //---坐标轴 轴线
        show: false, //---是否显示
      },
    },
    series: [
      {
        name: '应到人数',
        type: 'bar',
        data: [3, 7, 4, 8],
        barWidth: 15,
        barGap: 1,
        itemStyle: {
          borderRadius: 50,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#397ace',
            },
            {
              offset: 1,
              color: '#26d4cd',
            },
          ]),
        },
      },
      {
        name: '实到人数',
        type: 'bar',
        data: [6, 2, 5, 4],
        barWidth: 15, //柱图宽度
        itemStyle: {
          //设置颜色的渐变
          borderRadius: 50,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#08dd9d',
            },
            {
              offset: 1,
              color: '#26d4cc',
            },
          ]),
        },
      },
    ],
  }

  myChart.setOption(options)
}

function draw2() {
  let peopleTotal = document.getElementById('peopleTotal')
  peopleTotal.removeAttribute('_echarts_instance_')
  let myChart = echarts.init(peopleTotal)

  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b',
        },
      },
    },
    legend: {
      top: '0%',
      data: ['1天', '7天'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '16',
      },
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true,
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)',
          },
        },

        data: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20,
      },
    ],

    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },

        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '1天',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          color: '#0184d5',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)',
              },
              {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: [
          3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2,
          4,
        ],
      },
      {
        name: '7天',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          color: '#00d887',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)',
              },
              {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: [
          5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1,
          4,
        ],
      },
    ],
  }

  myChart.setOption(options)
}

function draw3() {
  let shouldTotal = document.getElementById('shouldTotal')
  shouldTotal.removeAttribute('_echarts_instance_')
  let myChart = echarts.init(shouldTotal)

  let options = {
    color: [
      '#00f1fc',
      '#00b7ee',
      '#5578cf',
      '#5ebbeb',
      '#d16ad8',
      '#f8e19a',
      '#00b7ee',
      '#81dabe',
      '#5fc5ce',
    ],
    grid: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 20,
    },
    // legend: {
    //   top: 10,
    //   textStyle: {
    //     fontSize: 10,
    //     color: "rgba(255,255,255,.7)",
    //   },
    //   data: ["境外", "境内"],
    // },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '80%',
        center: ['48%', '55%'],
        data: [
          { value: 335, name: '境外' },
          { value: 310, name: '境内' },
        ],
        labelLine: {
          show: false,
        },
        // itemStyle: {
        //   emphasis: {
        //     shadowBlur: 10,
        //     shadowOffsetX: 0,
        //     shadowColor: "rgba(0, 0, 0, 0.5)",
        //   },
        // },
      },
    ],
  }

  myChart.setOption(options)
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
