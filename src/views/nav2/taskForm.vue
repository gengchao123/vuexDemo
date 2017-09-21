<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="上架单">
      <el-input v-model="form.code"></el-input>
    </el-form-item>
    <el-form-item label="组垛时间">
      <el-input v-model="form.ddsj"></el-input>
    </el-form-item>
    <el-form-item label="开始时间">
      <el-input v-model="form.kssj"></el-input>
    </el-form-item>
    <el-form-item label="卷烟编码">
      <el-input v-model="form.jybm"></el-input>
    </el-form-item>
    <el-form-item label="条形码">
      <el-input v-model="form.tsm"></el-input>
    </el-form-item>
    <el-form-item label="卷烟名称">
      <el-input v-model="form.jymc"></el-input>
    </el-form-item>
    <el-form-item label="上架数量">
      <el-input v-model="form.sjsl"></el-input>
    </el-form-item>
    <el-form-item label="上架位置">
      <el-input v-model="form.sjwz"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">挂起</el-button>
      <el-button>完成</el-button>
    </el-form-item>
  </el-form>
</template>
<<script>
export default {
  data () {
    return {
      form: {
        code: 'ATE12345678',
        ddsj: '18:16:23',
        kssj: '18:42:11',
        jybm: 'TS15532006',
        tsm: '145222006',
        jymc: '大前门',
        sjsl: '20',
        sjwz: '01-A-22'
      }
    }
  }
}
</script>
