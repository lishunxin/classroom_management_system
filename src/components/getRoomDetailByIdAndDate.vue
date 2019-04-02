<template>
<div>
  <p>教室详情</p>
  <div>
    <span>教学楼</span><span>教一</span>
  </div>
  <div>
    <span>教室号</span><span>430</span>
  </div>
  <div>
    <span>教室位置</span><span>东南角</span>
  </div>
  <div>
    <span>教室位置</span><span>120</span>
  </div>
  <div>
    <span>教室器材</span><span>投影仪</span>
  </div>
  <span>请选择日期</span>
  <div>
    <div class="block">
      <span class="demonstration">起始日期</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">截止日期</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00">
      </el-date-picker>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          label="时间"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
        </el-table-column>
      </el-table>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>

</style>
