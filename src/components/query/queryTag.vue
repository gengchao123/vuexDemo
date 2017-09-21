<<template>
  <el-row>
    <el-col  v-for="item in query" :key="item.index" :span="24">
      <el-col :span="3">
        <span>{{item.title}}</span>
      </el-col>
      <el-col :span="17">
        <el-tag :key="tag.name" v-for="tag in dynamicTags" :closable="true" :close-transition="false" @close="handleClose(tag)">
          {{tag.name}}
        </el-tag>
      </el-col>
      <el-col :span="4">
        <i type="primary" @click="showDialog(item)" class="el-icon-plus"></i>
      </el-col>
    </el-col>

    <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
			<el-form :inline="true" >
          <el-form-item>
            <el-input v-model="filters.name" placeholder="条件" @change="queryInfo"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="queryInfo">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="users" height="250" ref="multipleTable" @selection-change="selsChange">
          <el-table-column  type="selection" width="55"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" ></el-table-column>
          <el-table-column align="center" prop="sex" label="性别" :formatter="formatSex"></el-table-column>
        </el-table>
      <div align="right">
        </br>
        <el-button type="primary" @click="submitSelect" icon="check"></el-button>
      </div>
    </el-dialog>
    
  </el-row>
</template>
<script>
	import { getUserList } from '../../api/api';
export default {
  props: ['query'],
  data () {
    return {
      queryData: [],
      filters: {
          name: '',
          sex: '',
			},
      sels: [], // 弹出框选中的列
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      users: [],
      dialogTableVisible: false,
      dialogTitle: ''
    }
  },
  methods: {
    showDialog (item) {
      this.dialogTitle = item.title
      this.dialogTableVisible = true
    },
    selsChange (sels) {
      this.sels = sels
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.sels.splice(this.sels.indexOf(tag), 1)
      this.$emit('child-tell-me-something',this.dynamicTags)
    },
    submitSelect () {
      let nameMap = this.sels.map(item => item)
      this.dynamicTags = nameMap// this.dynamicTags.concat(nameMap)
      this.dialogTableVisible = false
     // this.$emit('newNodeEvent', '我是子元素传过来的')
     // this.$dispatch('child-tell-me-something',this.filters.name)
      this.$emit('child-tell-me-something',this.dynamicTags)
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
      this.users.forEach(function (element) {
        if ((element.name.indexOf(param) > -1) ||
        (element.jybm.indexOf(param) > -1) ||
        (element.tsm.indexOf(param) > -1)) {
          this.queryData.push(element)
        }
      }, this)
      this.$refs.multipleTable.data = this.queryData
    },
  	formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
		},
    getUser: function () {
				let para = {
          name: this.filters.name,
          sex: this.filters.sex
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
          this.users = res.data.users;
          this.users1 = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
    }
  },
  mounted() {
		this.getUser();
	}
}
</script>
<style>
   el-tag {
     margin-left: 5px
   }
  h4 {
   border-bottom: 1px solid silver
  }
</style>

