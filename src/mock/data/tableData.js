// 入库上架页面-待入库卷烟表头
const rkColHeader = [{
    prop: 'name',
    label: '卷烟名称'
  }, {
    prop: 'sumCount',
    label: '总数量（件）'
  }, {
    prop: 'rkCount',
    label: '待入库'
  }]
  // 入库上架页面-待入库卷烟数据
  const rkTableData = [{
    name: '中华（软）',
    sumCount: '200',
    rkCount: '53'
  }, {
    name: '中华（硬）',
    sumCount: '200',
    rkCount: '123'
  }, {
    name: '黄鹤楼1916',
    sumCount: '100',
    rkCount: '41'
  }, {
    name: '黄金叶',
    sumCount: '200',
    rkCount: '170'
  }, {
    name: '九五之尊',
    sumCount: '150',
    rkCount: '20'
  }, {
    name: '大前门',
    sumCount: '200',
    rkCount: '123'
  }, {
    name: '中华（硬）',
    sumCount: '200',
    rkCount: '123'
  }]
  
  const xjjxTableData = [{
    name: '中华（软）',
    jybm: 'TS15532006',
    tsm: '145222006'
  }, {
    name: '中华（硬）',
    jybm: 'TS15532001',
    tsm: '145222001'
  }, {
    name: '黄鹤楼1916',
    jybm: 'TS15532002',
    tsm: '145222002'
  }, {
    name: '黄金叶',
    jybm: 'TS15532003',
    tsm: '145222003'
  }, {
    name: '九五之尊',
    jybm: 'TS15532004',
    tsm: '145222004'
  }, {
    name: '大前门',
    jybm: 'TS15532006',
    tsm: '145222005'
  }, {
    name: '中华（硬）',
    jybm: 'TS15532001',
    tsm: '145222001'
  }]
  export { rkColHeader, rkTableData,xjjxTableData };
  // 通过向大括号中添加LoginUsers, Users ，变量并且export输出，就可以将对应变量值以LoginUsers, Users 变量标识符形式暴露给其他文件而被读取到
  