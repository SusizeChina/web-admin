<template>
  <div class="app-container">
    <el-form :model="dataForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名称">
            <el-input v-model="dataForm.roleName" placeholder="用户名称" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="getList()"> 查询</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="dataListLoading" :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="180"
      />
    </el-table>
  </div>
</template>

<script>
import { getUserList } from '@/api/sys-user'
export default {
  name: 'User',
  data() {
    return {
      dataListLoading: false,
      tableData: [],
      dataForm: {
        roleName: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    // this.getList()
  },
  methods: {
    getList() {
      // this.dataListLoading = true
      getUserList(this.dataForm).then(data => {
        this.tableData = data.body
      })
    }
  }
}
</script>
