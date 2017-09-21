import { getrkTableInfo} from '@/api/api'
const shelfpicking = {
    state: {
        count: 10,
        shelpickQuery: {
            jy: '',
            position: ''
        },
        shelpickTable: {

        },
        token: ''
    },  
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        },
        SET_ShelfpickQuery(state,newObj){
            Object.assign(state.shelpickQuery, newObj);
        },
        SET_shelpickTable(state,newObj){
            Object.assign(state.shelpickTable, newObj);
        }
    },
    actions: {
        increment ({ commit }, userInfo) {
            commit('INCREMENT')
        },
        decrement ({ commit }, userInfo) {
            commit('DECREMENT')
        },
         // 获取用户信息
         getrkTableInfo ({ commit, state }) {
            return new Promise((resolve, reject) => {
              getrkTableInfo(state.token).then(response => {
                const data = response.data
                commit('SET_shelpickTable', data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
          })
        }
    },
    getters: {
        getCount (state) {
            return state.count
        }
    }
 
  }
  
  export default shelfpicking