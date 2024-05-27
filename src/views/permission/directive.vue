<template>
  <div class="app-container">
    <el-input v-model="searchText" placeholder="Enter search text" style="width:250px;" prefix-icon="el-icon-search"></el-input>
    <el-button style="margin-left: 10px;" type="primary" @click="handleSearch">Search</el-button>
    <el-button style="margin-left: 10px;" type="primary" @click="handleLearn">Learn</el-button>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Imp" width="120px">
        <template slot-scope="{row}">
          <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" label="UpdateData" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'SelectExcel',
  data() {
    return {
      list: null,
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: '',
      searchText: '', // 添加搜索文本属性
      originalList: [] // 保存原始数据
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items.filter(item => item.status === 'published');
        this.originalList = response.data.items; // 保存原始数据
        this.listLoading = false
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
          const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
          const list = this.multipleSelection
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename
          })
          this.$refs.multipleTable.clearSelection()
          this.downloadLoading = false
        })
      } else {
        this.$message({
          message: 'Please select at least one item',
          type: 'warning'
        })
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleSearch() {
      // 根据搜索文本过滤数据
      if (this.searchText.trim() === '') {
        // 如果搜索文本为空，则显示全部数据
        this.list = this.originalList;
      } else {
        // 使用正则表达式进行模糊匹配搜索
        const regex = new RegExp(this.searchText.trim(), 'i');
        this.list = this.originalList.filter(item => regex.test(item.title));
      }
    },
    handleLearn() {
      // 显示遮罩
      this.$loading({
        lock: true,
        text: 'Learning...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      // 2秒后关闭遮罩并显示成功提示弹窗
      setTimeout(() => {
        this.$loading().close();
        this.$message({
          message: 'Learning successful!',
          type: 'success'
        });
      }, 3000);
    }
  }
}
</script>
