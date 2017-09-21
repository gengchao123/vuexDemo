<<template>
  <div style="background:#f0faff;margin:10px;padding:10px">
    <el-row >
      <el-col :span="24">
        <el-col :span="14">
          <el-col :span="24" style="text-align:center"></br><span>{{_TITLE}}</span></el-col>
          <el-col :span="24" style="text-align:center"></br><span>{{_DATAF}}</span><span>{{_UNITF}}</span></el-col>
          <el-col :span="24" style="text-align:center"></br><span>{{_DATAS}}</span><span>{{_UNITS}}</span></el-col>
        </el-col>
        <el-col :span="10">
          <el-progress style="padding-top:15px" type="circle" :width=proWidth :percentage=_PERCENTAGE></el-progress>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<<script>
export default {
  props: ['_TITLE', '_DATAF', '_UNITF', '_DATAS', '_UNITS', '_PERCENTAGE'],
  data () {
    return {
      msg: '',
      proWidth: 100
    }
  }
}
</script>
