<template>
 <section>
  <h2>组件3</h2>
  <div id="note-editor">
    <div class="form-group">
      <input type="text" name="title"
        class="title form-control"
        placeholder="请输入标题"
        @input="updateNote"
        v-model="activeNote.title">
      <textarea
        v-model="activeNote.content" name="content"
        class="form-control" row="3" placeholder="请输入正文"
        @input="updateNote"></textarea>
    </div>
  </div>
 </section>
</template>

<script>
  // import { editNote } from '../../store/actions';
  // import { activeNote } from '../../store/getters';
  import { mapGetters,  mapActions} from 'vuex'

  export default {
    // vuex: {
    //   getters: {
    //     activeNote
    //   },
    //   actions: {
    //     editNote
    //   }
    // },
    computed: {
      // 通过计算属性得到的一个对象，这样子我们就能愉快的使用 v-model 了
      ...mapGetters([
        'activeNote'
      ])
    },
    methods: {
      ...mapActions([
        'updateActiveNote', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'EDIT_NOTE'
      ]),
      updateNote() {
        //this.EDIT_NOTE();
        this.$store.dispatch('EDIT_NOTE')
      }
    }
  }
</script>