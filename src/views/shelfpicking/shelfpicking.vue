<template>
<section>
  <el-row>
    <el-col :span="24" >
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
              <infoTable :tableData='tableData1.tableData' :colHeader='tableData1.tableHeader'></infoTable>
            </el-col>
          </el-collapse-item>
          <el-collapse-item style="text-align:left" title="待上架托盘" name="3">
            <el-col style="padding-bottom: 10px;padding-top: 10px;">
              <infoTable :tableData=tableData2.tableData1 :colHeader=tableData2.colHeader></infoTable>
            </el-col>
          </el-collapse-item>
        </el-collapse>
      </el-col>

      <el-col :span="12" style="padding:10px;">
        <h4>任务筛选和调度<span class="el-icon-circle-cross" style="float:right" ></span></h4> 
        <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
          <el-form-item label="卷烟">
              <tagVue></tagVue>
          </el-form-item>
          <el-form-item label="位置">
              <tagVue></tagVue>
          </el-form-item>       
          <el-form-item label="全盘出库">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="自动调度">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>         
        </el-form>
      </el-col>
      <el-col :span="12" style="padding:10px;">
        <h4>拣货明细<span class="el-icon-circle-cross" style="float:right" ></span></h4>          
        <detail></detail>
      </el-col>

    </el-col>
  </el-row>
</section>
</template>

<script>
import Completion from '@/components/Completion'
import MyWork from '@/components/MyWork'
import infoTable from '@/components/Table'
import taskForm from '../nav2/taskForm'
import tagVue from './tag'
import detail from './detail'

export default {
  data () {
    return {
      activeNames: ['1', '2', '3'],
      TITLE_WORK: '我的工作',
      DATAF_WORK: '50',
      UNITF_WORK: '托',
      DATAS_WORK: '600',
      UNITS_WORK: '件',
      TITLE_RK: '出库完成情况',
      DATAF_RK: '100',
      UNITF_RK: '托',
      DATAS_RK: '3000',
      UNITS_RK: '件',
      PERCENTAGE_RK: 75,
      tableData1: {},
      tableData2: {
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
        tableData1: [{
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
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
	  }
    }
  },
  methods: {
    getTableInfo(){
          this.$store.dispatch('getrkTableInfo').then(data => {
            this.logining = false
            if (data.status != 200) {
              this.$message({
                message: data.msg,
                type: 'error'
              })
            } else {             
               Object.assign(this.tableData1, data.data);
               console.log(this.tableData1)
            }
          }).catch((e) => {
            this.logining = false
            this.$message('系统异常，请联系管理员！')
          })
    }
  },
  mounted: function(){
    this.getTableInfo();
  },
  components: {
    Completion, infoTable, MyWork, tagVue, detail
  }
}
</script>

<style scoped>
    .el-collapse {
       border: '' !important
    }  
    .el-collapse-item__wrap {
     border-bottom: '' !important
     }
</style>

