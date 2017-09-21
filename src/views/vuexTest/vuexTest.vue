<template>
  <div  class="app">
    <el-row>
       <el-col :span="24">
           <el-col :span="7">
             <toolbar></toolbar>
           </el-col>
           <el-col :span="7">
             <notes-list></notes-list>
           </el-col>
           <el-col :span="10">
             <editor></editor>
           </el-col>
       </el-col>
    </el-row>   
  </div>
</template>

<style>
  html, #app {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
</style>

<script>
  import Toolbar from '../../components/vuexTest/Toolbar';
  import NotesList from '../../components/vuexTest/NotesList';
  import Editor from '../../components/vuexTest/Editor';
  // import store from '../../store/storeIndex';
  // import { initStore } from '../../store/actions';

  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    // components: {
    //   Toolbar,
    //   NotesList,
    //   Editor
    // },
    // vuex: {
    //   actions: {
    //     initStore
    //   }
    // },
    // ready() {
    //   this.initStore()
    // },
    components: {
      Toolbar,
      NotesList,
      Editor
    },
    methods: {
      ...mapActions(
        {initStore: 'INIT_STORE'}
      )
    },
    mounted: function(){
      //this.initStore()
      this.$store.dispatch('INIT_STORE')
    }
  }
</script>