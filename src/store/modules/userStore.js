import { getUserList} from '@/api/api'
const userStore = {
    state: {
        filters: {
            name: '',
            sex: ''
        },
        query: [{
            title: '姓名'
            },{
            title: '性别'
            }
        ],
        options: [{
            value: '1',
            label: '男'
        }, {
            value: '0',
            label: '女'
        }]
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
        getUser: function () {
            let para = {
                name: this.filters.name,
                sex: this.filters.sex
            };
            this.loading = true;
            //NProgress.start();
            getUserList(para).then((res) => {
                this.users = res.data.users;
                this.loading = false;
                //NProgress.done();
            });
        },
    },
    getters: {
    
    }
 
  }
  
  export default userStore