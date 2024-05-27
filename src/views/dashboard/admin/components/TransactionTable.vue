<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="训练历史" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="日期" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.date | formatDate }}
      </template>
    </el-table-column>
    <el-table-column label="训练状态" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'
import { transactionList2 } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        Lower: 'Lower',
        Higher: 'Higher'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    },
    formatDate: function(value) {
    if (!value) return ''
    return new Date(value).toLocaleDateString('en-CA') // 格式化为 '月/日/年' 的形式，例如 '05/27/2024'
  }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
    this.fetchData2()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    },

    fetchData2() {
      transactionList2().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
