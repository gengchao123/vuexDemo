<template>
<section>
  <el-row>
    <el-col :span="24">
      <el-col :span="12" align="center">
        <el-collapse v-model="activeNames">
          <el-collapse-item style="text-align:left" title="工作量" name="1">
            <el-col :span="24" align="center" style="padding-bottom: 10px;padding-top: 10px;">
              <el-col :span="14">
                <completion :_PERCENTAGE=PERCENTAGE_RK :_TITLE=TITLE_RK :_DATAF=DATAF_RK :_UNITF=UNITF_RK :_DATAS=DATAS_RK :_UNITS=UNITS_RK></completion>
              </el-col>
              <el-col :span="10">
                <MyWork :_TITLE=TITLE_WORK :_DATAF=DATAF_WORK :_UNITF=UNITF_WORK :_DATAS=DATAS_WORK :_UNITS=UNITS_WORK></MyWork>
              </el-col>
            </el-col>
          </el-collapse-item>
          <el-collapse-item style="text-align:left" title="待入库卷烟" name="2">
            <el-col style="padding-bottom: 10px;padding-top: 10px;">
              <infoTable :tableData=tableData :colHeader=colHeader></infoTable>
            </el-col>
          </el-collapse-item>
          <el-collapse-item style="text-align:left" title="待上架托盘" name="3">
            <el-col style="padding-bottom: 10px;padding-top: 10px;">
              <infoTable :tableData=tableData :colHeader=colHeader></infoTable>
            </el-col>
          </el-collapse-item>
        </el-collapse>
      </el-col>

      <el-col :span="12" style="padding-bottom: 10px;padding-top: 10px;">
        <taskForm></taskForm>
      </el-col>
	  
    </el-col>
  </el-row>
</section>
</template>

<script>
import Completion from '@/components/Completion'
import MyWork from '@/components/MyWork'
import infoTable from '@/components/Table'
import taskForm from './taskForm'
export default {
  data () {
    return {
      activeNames: ['1', '2', '3'],
      msg: '入库上架页面',
      TITLE_WORK: '我的工作',
      DATAF_WORK: '50',
      UNITF_WORK: '托',
      DATAS_WORK: '600',
      UNITS_WORK: '件',
      TITLE_RK: '入库完成情况',
      DATAF_RK: '100',
      UNITF_RK: '托',
      DATAS_RK: '3000',
      UNITS_RK: '件',
      PERCENTAGE_RK: 62,
      colHeader: [{
        prop: 'name',
        label: '卷烟名称'
      }, {
        prop: 'sumCount',
        label: '总数量（件）'
      }, {
        prop: 'rkCount',
        label: '待入库'
      }],
      tableData: [{
        name: '中华（软）',
        sumCount: '100',
        rkCount: '53'
      }, {
        name: '中华（硬）',
        sumCount: '200',
        rkCount: '123'
      }, {
        name: '黄鹤楼1916',
        sumCount: '100',
        rkCount: '41'
      }, {
        name: '黄金叶',
        sumCount: '200',
        rkCount: '170'
      }, {
        name: '九五之尊',
        sumCount: '150',
        rkCount: '20'
      }, {
        name: '大前门',
        sumCount: '200',
        rkCount: '123'
      }, {
        name: '中华（硬）',
        sumCount: '200',
        rkCount: '123'
      }]
    }
  },
  components: {
    Completion, infoTable, MyWork, taskForm
  }
}
</script>

