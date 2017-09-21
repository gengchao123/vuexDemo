<template>
<el-row>
    <el-col :span="24">
      <el-col :span="3">
        <span>性别</span>
      </el-col>
      <el-col :span="17">
          <el-select v-model="value" placeholder="请选择" size='mini'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @change="emitValue(item.value)"
                >
            </el-option>
            </el-select>
      </el-col>
    </el-col>
</el-row>
</template>

<script>
  export default {
    props:['options'],
    data() {
      return {
        value: ''
      }
    },
    methods: {
        emitValue: function(value){
            this.$emit('child-tell-me-something',this.value)
        }
    }
  }
</script>
