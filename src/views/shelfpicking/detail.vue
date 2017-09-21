<<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="拣货单">
      <el-input v-model="form.jhd"></el-input>
    </el-form-item>
    <el-form-item label="拣货位置">
      <el-input v-model="form.jhwz"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span='24'>
          <el-col :span='4' align="center">
            <span>大前门</span>
          </el-col>
          <el-col :span='16' align="center">
            <!-- <el-input-number v-model="getCount" :min="1" ></el-input-number> -->
             Clicked: {{ getCount }} times
    <button @click="add">+</button>
    <button @click="dec">-</button>
          </el-col>
          <el-col :span='4' align="center">
            <el-button type="primary">完成</el-button>
          </el-col>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>
<script>
  import { mapGetters,mapState } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        jhd: 'T201700001021',
        jhwz: '01-A-01'
      },
      num1: 1
    }
  },
  computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'getCount'
        // ...
      ]),
      ...mapState(['count'])
  },
  methods: {
  // ...mapActions([
  //   'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
  //   'decrement'
  // ])
    ...mapActions({
      add: 'increment', // 映射 this.add() 为 this.$store.dispatch('increment')
      

      }),
      dec(){
          this.$store.dispatch('decrement')
      }
  }
}
</script>