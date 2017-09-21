

const vuexTest = {
    state: {
        notes: [],
        activeNote: {},
        show: ''
    },  
    mutations: {
      // 初始化 state
        INIT_STORE(state, data) {   
            const initNote = {
                id: +new Date(),
                title: '我的笔记',
                content: '第一篇笔记内容1111111111111111111111111111111111111111111111111111',
                favorite: false
            };
            const initNote2 = {
                id: +new Date(),
                title: '我的笔记2',
                content: '第2篇笔记内容222222222222222222222222222222222222222222222222222222',
                favorite: true
            };
            const initNote3 = {
                id: +new Date(),
                title: '我的笔记3',
                content: '第3篇笔记内容33333333333333333333333333333333333',
                favorite: false
            };
            // 模拟初始化数据
            const initData = {
            show: 'all',
            notes: [initNote, initNote2,initNote3],
            activeNote: initNote2
            };

            state.notes = initData.notes,
            state.show = initData.show;
            state.activeNote = initData.activeNote;
        },
        // 新增笔记
        NEW_NOTE(state) {
            var newNote = {
            id: +new Date(),
            title: '',
            content: '',
            favorite: false
            };
            state.notes.push(newNote);
            state.activeNote = newNote;
        },
        // 修改笔记
        EDIT_NOTE(state) {
           // state.activeNote = note;
            // 修改原始数据
            for (var i = 0; i < state.notes.length; i++) {
                if(state.notes[i].id === state.activeNote.id){
                    state.notes[i] = state.activeNote;
                    break;
                }
            };
        },
        // 删除笔记
        DELETE_NOTE(state) {
            //state.notes.$remove(state.activeNote);
            state.notes = state.notes.filter(note => note !== state.activeNote);
            state.activeNote = state.notes[0] || {};
        },
        // 切换笔记的收藏与取消收藏
        TOGGLE_FAVORITE(state) {
            state.activeNote.favorite = !state.activeNote.favorite;
        },
        // 切换显示数据列表类型：全部 or 收藏
        SET_SHOW_ALL(state, show){
            state.show = show;
            // 切换数据展示，需要同步更新 activeNote
            if(show === 'favorite'){
            state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
            }else{
            state.activeNote = state.notes[0] || {};
            }
        },
        // 设置当前激活的笔记
        SET_ACTIVE_NOTE(state, note) {
            state.activeNote = note;
        }
    },
    actions: {
        INIT_STORE ({ commit }, initData) {
            commit('INIT_STORE')
        },
        NEW_NOTE ({ commit }, state) {
            commit('NEW_NOTE')
        },
        DELETE_NOTE ({ commit }, state) {
            commit('DELETE_NOTE')
        },
        TOGGLE_FAVORITE ({ commit }, initData) {
            commit('TOGGLE_FAVORITE')
        },
        EDIT_NOTE ({ commit }, state) {
            commit('EDIT_NOTE')
        },
        SET_SHOW_ALL ({ commit }, state,initData) {
            commit('SET_SHOW_ALL')
        },
        updateActiveNote ({ commit }, note) {
            commit('SET_ACTIVE_NOTE',note)
        },
        updateShow ({ commit }, show) {
            commit('SET_SHOW_ALL',show)
        }
    },
    getters: {
        filteredNotes (state) {
              if(state.show === 'all'){
                return state.notes || {};
              }else if(state.show === 'favorite'){
                return state.notes.filter(note => note.favorite) || {};
              }
        },
        activeNote(state) {
            return state.activeNote;
        },
        show (state) {
            return state.show;
        }
    }
}
export default vuexTest