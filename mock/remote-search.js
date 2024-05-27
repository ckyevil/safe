const Mock = require('mockjs')

const NameList = []
const count = 100

// 填充 NameList 数组
for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}

NameList.push({ name: 'mock-Pan' })

module.exports = [
  // username search
  {
    url: '/vue-element-admin/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })
      return {
        code: 20000,
        data: { items: mockNameList }
      }
    }
  },

  // transaction list
  {
    url: '/vue-element-admin/transaction/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: 20,
          'items|20': [{
            order_no: () => {
              // 确保每次调用都生成新的随机名字组合
              const names = NameList.map(item => item.name)
              const randomNames = Mock.Random.shuffle(names).slice(0, Mock.Random.integer(2, 3))
              return randomNames.join(' ')
            },
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            date: () => {
              const startDate = new Date('2024-03-12').getTime();
              const endDate = new Date('2024-05-27').getTime();
              const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
              return new Date(randomTimeStamp).toISOString().slice(0, 10); // 'YYYY-MM-DD' format
            },
            status: () => ['Higher', 'Lower'][Mock.Random.integer(0, 1)] // 确保每次调用都生成新的状态
           }]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/transaction/list2',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: 20,
          'items|20': [{
            order_no: () => {
              // 确保每次调用都生成新的随机名字组合
              const names = NameList.map(item => item.name)
              const randomNames = Mock.Random.shuffle(names).slice(0, Mock.Random.integer(2, 3))
              return randomNames.join(' ')
            },
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            date: () => {
              const startDate = new Date('2024-03-12').getTime();
              const endDate = new Date('2024-05-27').getTime();
              const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
              return new Date(randomTimeStamp).toISOString().slice(0, 10); // 'YYYY-MM-DD' format
            },
            status: () => ['Higher', 'Lower'][Mock.Random.integer(0, 1)] // 确保每次调用都生成新的状态
           }]
        }
      }
    }
  }
]