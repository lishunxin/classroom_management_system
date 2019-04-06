<template>
<div>
  <header>
    <div id="title">审批</div>
    <i class="el-icon-arrow-left" @click="tohome"></i>
  </header>
  <div>
    <el-date-picker
      v-model="value7"
      size="mini"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>
      </div>
  <div>

      <div class="crumbs">
        <div class="cantainer">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              prop="date"
              label="教学楼"
              width="70">
            </el-table-column>
            <el-table-column
              prop="name"
              label="教室号"
              width="70">
            </el-table-column>
            <el-table-column
              prop="address"
              label="日期"
              width="70">
            </el-table-column>
            <el-table-column
              prop="address"
              label="时间"
              width="70">
            </el-table-column>
            <el-table-column
              prop="address"
              label="申请人"
              width="70">
            </el-table-column>
            <el-table-column
              prop="address"
              label="申请描述"
              width="80">
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作">
              <el-row>
                <el-button size="mini">同意</el-button>
                <el-button size="mini">驳回</el-button>
              </el-row>
            </el-table-column>
            <el-table-column
              prop="address"
              label="驳回原因">
              <input typeof="text"/>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      tohome:function () {
        this.$router.push({path:'./#'})
      }
    },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      }
    }
  }
</script>

<style scoped>
  header{
    width: 100%;
    height:1.58rem;
    background-color: #fff;
  }
  .el-icon-arrow-left{
    font-size: 1.45rem;
    position: absolute;
    left: 1.5rem;
    top: 3.65rem;
  }
  header #title{
    float: left;
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
    height: 1.58rem;
    line-height: 1.68rem;
    margin-bottom: 1rem;
  }
</style>
