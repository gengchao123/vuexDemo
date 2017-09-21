<template>
<div>
  <el-table :data=tableData height="200" border style="width:100%">
    <el-table-column v-for="item in colHeader" :key="item.id" :prop="item.prop" :label="item.label" style="width:33%;" align="center"></el-table-column>
  </el-table>
  <div class="block" style="text-align:right">
  </div>
</div>
</template>

<script>
  export default {
    props: ['tableData', 'colHeader'],
    data () {
      return {
        msg: ''
      }
    }
  }
</script>