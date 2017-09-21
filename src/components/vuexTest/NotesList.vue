<template>
<section>
  <div id="notes-list">
    <div id="list-header">
      <h2>组件2</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="updateShow('all')"
            :class="{active: show === 'all'}">All Notes</button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="updateShow('favorite')"
            :class="{active: show === 'favorite'}">Favorites</button>
        </div>
      </div>
    </div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
         class="list-group-item" href="#"
         :class="{active: activeNote === note}"
         @click.stop.prevent="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</section>  
</template>

<script>
  // import { updateActiveNote, updateShow } from '../../store/actions';
  // import { show, filteredNotes, activeNote } from '../../store/getters';
  import { mapGetters, mapActions } from 'vuex'
  export default {
    // vuex: {
    //   getters: {
    //     show,
    //     filteredNotes,
    //     activeNote
    //   },
    //   actions: {
    //     updateActiveNote,
    //     updateShow
    //   }
    // },
    // methods: {
    //   toggleShow(show) {
    //     this.updateShow(show);
    //   }
    // },
    computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'show',
        'filteredNotes',
        'activeNote'
        // ...
      ])
    },
    methods: {
      ...mapActions({
      // 'updateActiveNote': 'updateActiveNote', // 映射 this.increment() 为 this.$store.dispatch('increment')
       'updateShow':'updateShow'
      }),
      updateActiveNote(note){
         this.$store.dispatch('updateActiveNote',note).then(response => {
          console.log(1111111)
        }).catch(error => {
          reject(error)
        })
      }
    }
  }
</script>
<style>
 .active{
   background-color: blue;
   color: red 
 }
</style>
