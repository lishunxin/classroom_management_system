<template>
<div>
  <div>
    <span>请选择日期</span>
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
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
    export default {
        name: "getApprovalDetail"
    }
</script>

<style scoped>

</style>
