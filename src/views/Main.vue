<template>
	<section >
		<el-row type="flex"  justify="center">
				<el-col :span="8" >
					<completion :_PERCENTAGE=PERCENTAGE_RK :_TITLE=TITLE_RK :_DATAF=DATAF_RK :_UNITF=UNITF_RK :_DATAS=DATAS_RK :_UNITS=UNITS_RK></completion>
				</el-col>
				<el-col :span="8"  class="grid-content bg-purple">
					<completion :_PERCENTAGE=PERCENTAGE_CK :_TITLE=TITLE_CK :_DATAF=DATAF_CK :_UNITF=UNITF_CK :_DATAS=DATAS_CK :_UNITS=UNITS_CK></completion>
				</el-col>
				<el-col :span="8"  class="grid-content bg-purple">
					<completion :_PERCENTAGE=PERCENTAGE_FJ :_TITLE=TITLE_FJ :_DATAF=DATAF_FJ :_UNITF=UNITF_FJ :_DATAS=DATAS_FJ :_UNITS=UNITS_FJ></completion>
				</el-col>
				</el-col>
		</el-row>
		<el-row>
		 <el-col :span="24"> <echarts></echarts></el-col>
		</el-row>
	</section>
</template>

<script>
import completion from '@/components/Completion.vue'
import echarts from './home/echarts'
export default {
  data () {
    return {
      loginUsername: '',
      isCollapse: true,
      menuTip: '展开菜单',
      TITLE_RK: '入库完成情况',
      DATAF_RK: '100',
      UNITF_RK: '托',
      DATAS_RK: '3000',
      UNITS_RK: '件',
      PERCENTAGE_RK: 62,
      TITLE_CK: '出库完成情况',
      DATAF_CK: '200',
      UNITF_CK: '托',
      DATAS_CK: '2000',
      UNITS_CK: '件',
      PERCENTAGE_CK: 35,
      TITLE_FJ: '分拣完成情况',
      DATAF_FJ: '200',
      UNITF_FJ: '托',
      DATAS_FJ: '1000',
      UNITS_FJ: '件',
	  PERCENTAGE_FJ: 47,
	  loading: true
    }
  },
  components: {
    completion, echarts
  },
  methods: {
    // 退出登录
    logout: function () {
      this.$confirm('确认退出吗?', '提示', {
        // type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('user')
        this.$router.push('/login')
      }).catch(() => {

      })
    },
    handlerMenu: function () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.menuTip = '展开菜单'
      } else {
        this.menuTip = '收起菜单'
      }
    }
  },
  mounted () {
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.loginUsername = user.data.name || ''
    }
  }
}
</script>

<style scoped>

</style>