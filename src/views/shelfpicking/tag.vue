<<template>
  <el-row >
    <el-col :span="17">
      <el-tag :key="tag.name" v-for="tag in dynamicTags" :closable="true" :close-transition="false" @close="handleClose(tag)">
        {{tag.name}}
      </el-tag>
    </el-col>
    <el-col :span="4">
      <!-- <el-button type="primary" @click="showDialog" icon="plus"></el-button> -->
      <span class="el-icon-plus"  @click="showDialog"></span>
    </el-col>
    <el-dialog title="卷烟信息" :visible.sync="dialogTableVisible">
			<el-form :inline="true" >
				<el-form-item>
					<el-input v-model="filter" placeholder="条件" @change="queryInfo"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="queryInfo">查询</el-button>
				</el-form-item>
			</el-form>
            
      <el-table :data="gridData" height="250" ref="multipleTable" @selection-change="selsChange">
        <el-table-column  type="selection" width="55"></el-table-column>
        <el-table-column align="center" property="jybm" label="卷烟编码" width="150"></el-table-column>
        <el-table-column align="center" property="name" label="卷烟名称" width="200"></el-table-column>
        <el-table-column align="center" property="tsm" label="条形码"></el-table-column>
      </el-table>

      <div align="right">
        </br>
        <el-button type="primary" @click="submitSelect" icon="check"></el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<<script>
export default {
  data () {
    return {
      queryData: [],
      title: '卷烟',
      filter: '',
      sels: [], // 弹出框选中的列
      dynamicTags: [{
        id: '1',
        name: '大前门'
      }
      ],
      inputVisible: false,
      inputValue: '',
      gridData: [{
        name: '中华（软）',
        jybm: 'TS15532006',
        tsm: '145222006'
      }, {
        name: '中华（硬）',
        jybm: 'TS15532001',
        tsm: '145222001'
      }, {
        name: '黄鹤楼1916',
        jybm: 'TS15532002',
        tsm: '145222002'
      }, {
        name: '黄金叶',
        jybm: 'TS15532003',
        tsm: '145222003'
      }, {
        name: '九五之尊',
        jybm: 'TS15532004',
        tsm: '145222004'
      }, {
        name: '大前门',
        jybm: 'TS15532005',
        tsm: '145222005'
      }, {
        name: '中华（硬）',
        jybm: 'TS15532001',
        tsm: '145222001'
      }],
      dialogTableVisible: false
    }
  },
  methods: {
    showDialog () {
      this.dialogTableVisible = true
    },
    selsChange (sels) {
      this.sels = sels
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.sels.splice(this.sels.indexOf(tag), 1)
    },
    submitSelect () {
      let nameMap = this.sels.map(item => item)
      this.dynamicTags = nameMap// this.dynamicTags.concat(nameMap)
      this.dialogTableVisible = false
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    queryInfo () {
      this.queryData = []
      let param = this.filter
      this.gridData.forEach(function (element) {
        if ((element.name.indexOf(param) > -1) ||
        (element.jybm.indexOf(param) > -1) ||
        (element.tsm.indexOf(param) > -1)) {
          this.queryData.push(element)
        }
      }, this)
      this.$refs.multipleTable.data = this.queryData
    }
  }
}
</script>

<style scoped>
 el-tag {
   margin-left: 5px
 }
</style>