<template>
  <div class="article-list">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="标题" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摘要" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.summary }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tags }}</span>
        </template>
      </el-table-column>
      <el-table-column label="浏览量" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.scan }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        title: '树莓派',
        date: '2016-05-02',
        summary: '上海市普陀区金沙江路 1518 弄',
        tags: '上海市',
        scan: 1221
      }, {
        title: '树莓派',
        date: '2016-05-02',
        summary: '上海市普陀区金沙江路 1518 弄',
        tags: '上海市',
        scan: 1221
      }, {
        title: '树莓派',
        date: '2016-05-02',
        summary: '上海市普陀区金沙江路 1518 弄,上海市普陀区金沙江路 1518 弄',
        tags: '上海市',
        scan: 1221
      }, {
        title: '树莓派',
        date: '2016-05-02',
        summary: '上海市普陀区金沙江路 1518 弄',
        tags: '上海市',
        scan: 1221
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .article-list {
    .cell {
      text-align: center;
    }
  }
</style>
