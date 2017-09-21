<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<h4>查询条件<span class="el-icon-circle-cross" style="float:right" @click="open2"></span></h4>
			<el-col :span="24">
			<queryItem :query="query"  style="margin-bottom:10px" v-on:child-tell-me-something='listenToMyBoy'></queryItem>
			</el-col>
			<el-col :span="24">
				<el-col :span="3">
				<span>性别</span>
				</el-col>
				<el-col :span="17">
					<el-select v-model="filters.sex" placeholder="请选择" size='mini' @change='listenToMyBoy1'	>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"								 			
						>
					</el-option>
					</el-select>
				</el-col>
			</el-col>			
		</el-col>    
		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="生日" width="120" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	import queryItem from '@/components/query/queryTag'
	import querySelect from '@/components/query/querySelect'
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: '',
					sex: ''
				},
				loading: false,
				users: [
				],
				dynamicTags: [],
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
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
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
		    parentLisen(evtValue) {    
                //evtValue 是子组件传过来的值
				this.filters.name = evtValue;				
			},
			listenToMyBoy (msg) {
				this.dynamicTags  = msg;
				this.filters.name = this.dynamicTags.map(item => item.name) 
				this.getUser();
			},
			listenToMyBoy1 (msg) {
				this.filters.sex = msg 
				this.getUser();
			},
			open2() {
				this.$confirm('清空查询选项, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.dynamicTags = [];
					this.$message({
					type: 'success',
					message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
					type: 'info',
					message: '已取消删除'
					});          
				});
			}
		},
		events: {
         'child-tell-me-something' (evtValue) {
               this.filters.name = evtValue;
          }
        },
		components: {queryItem, querySelect},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>