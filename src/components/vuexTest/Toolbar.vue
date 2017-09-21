<template>
 <section>
  <h2>组件1</h2>
  <div id="toolbar">
    <ul>
    <li class="glyphicon logo">1</li>
    <li @click="NEW_NOTE" class="glyphicon glyphicon-plus">增加</li>
    <li @click="TOGGLE_FAVORITE" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}">当前激活的笔记</li>
    <li @click="DELETE_NOTE" class="glyphicon glyphicon-remove">删除</li>
    </ul>
  </div>
</section>
</template>

<script>
// import { newNote, deleteNote, toggleFavorite } from '../../store/actions';
// import { activeNote } from '../../store/getters';
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

export default {
  // vuex: {
  //   getters: {
  //     activeNote
  //   },
  //   actions: {
  //     newNote,
  //     deleteNote,
  //     toggleFavorite
  //   }
  // }
    computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'activeNote'
        // ...
      ])
    },
    methods: {
      ...mapActions([
        'NEW_NOTE', // 映射 this.increment() 为 this.$store.dispatch('increment')
        'DELETE_NOTE',
        'TOGGLE_FAVORITE'
      ])
    }
    // ...mapActions({
    //    add: 'increment', // 映射 this.add() 为 this.$store.dispatch('increment')
    //  }),
    //  dec(){
    //      this.$store.dispatch('decrement')
    //  }
    // }
}
</script>

<style lang="scss" scoped>
  #toolbar{
    float: left;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;

    .starred {
      color: #F7AE4F;
    }

    li{
      font-size: 30px;
      margin-bottom: 35px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.5s ease;

      &:hover{
        opacity: 1;
      }
    }
  }
</style>