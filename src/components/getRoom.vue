<template>
<div>
  <div>
    <el-row class="block-col-3">
      <el-col :span="12">
        <span class="demonstration">教学楼</span>
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        教一<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>教一</el-dropdown-item>
            <el-dropdown-item>教二</el-dropdown-item>
            <el-dropdown-item>教三</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="12">
        <span class="demonstration">教室大小</span>
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        大<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>大</el-dropdown-item>
            <el-dropdown-item>小</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
  <div>
    <span>教室查询</span>
    <el-input placeholder="请输入内容" v-model="input5" >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="教学楼"
        width="65">
      </el-table-column>
      <el-table-column
        prop="name"
        label="教室号"
        width="65">
      </el-table-column>
      <el-table-column
        prop="address"
        label="座位大小"  width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="教室地址" width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"width="80" >
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
    export default {
        name: "getRoom"
    }
</script>

<style scoped>

</style>
