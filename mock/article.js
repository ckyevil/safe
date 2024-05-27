const Mock = require('mockjs')

const List = []
const List2 = []
const Listupdate = []
const count = 20

let currentId = 0;

function getNextId() {
  return ++currentId;
}

let curId = 0;

function getId() {
  return ++curId;
}

const baseContent = '<p>blood-cell数据集代表图片展示</p><p>EOSINOPHIL</p><p><img src="https://s2.loli.net/2024/05/24/3Itb1vEiPNYWgf9.jpg" alt="Image 1"></p><p>LYMPHOCYTE</p><p><img src="https://s2.loli.net/2024/05/24/INGuMwTRBdg1yqa.jpg" alt="Image 2"></p><p>MONOCYTE</p><p><img src="https://s2.loli.net/2024/05/24/dJry6blAkYKHGu4.jpg" alt="Image 3"></p><p>NEUTROPHIL</p><p><img src="https://s2.loli.net/2024/05/24/5EanS2YXUibFD6N.jpg" alt="Image 4"></p>'

const baseContent1 = '<p>blood-cell数据集代表图片展示</p><p>EOSINOPHIL</p><p><img src="https://s2.loli.net/2024/05/24/3Itb1vEiPNYWgf9.jpg" alt="Image 1"></p><p>LYMPHOCYTE</p><p><img src="https://s2.loli.net/2024/05/24/INGuMwTRBdg1yqa.jpg" alt="Image 2"></p><p>MONOCYTE</p><p><img src="https://s2.loli.net/2024/05/24/dJry6blAkYKHGu4.jpg" alt="Image 3"></p><p>NEUTROPHIL</p><p><img src="https://s2.loli.net/2024/05/24/5EanS2YXUibFD6N.jpg" alt="Image 4"></p>'
const fixedDate1 = '2024-03-01T15:45:03';
const fixedTimestamp1 = +new Date(fixedDate1);

const baseContent2 = '<p>covid19-combo数据集代表图片展示</p><p>COVID-19</p><p><img src="https://s2.loli.net/2024/05/24/i9rxNjWY3ByucUR.png" alt="Image 1"></p><p>NORMAL</p><p><img src="https://s2.loli.net/2024/05/24/mRQJGqwPU4LdZEu.png" alt="Image 2"></p><p>Viral Pneumonia</p><p><img src="https://s2.loli.net/2024/05/24/KEtxUHYf8AIRoa2.png" alt="Image 3"></p>'
const fixedDate2 = '2024-03-03T17:13:24';
const fixedTimestamp2 = +new Date(fixedDate2);

const baseContent3 = '<p>Montgomery-County-CXR数据集代表图片展示</p><p>Abnormal</p><p><img src="https://img2.imgtp.com/2024/05/26/PxhMNuxM.png" alt="Image 1"></p><p>Normal</p><p><img src="https://img2.imgtp.com/2024/05/26/L5oqwXB2.png" alt="Image 2"></p>'
const fixedDate3 = '2024-03-04T10:52:37';
const fixedTimestamp3 = +new Date(fixedDate3);

const baseContent4 = '<p>Corneal Nerve Tortuosity数据集代表图片展示</p><p>扭曲程度低</p><p><img src="https://img2.imgtp.com/2024/05/26/wQpE6xA3.webp" alt="Image 1"></p><p>扭曲程度中</p><p><img src="https://img2.imgtp.com/2024/05/26/N1CGSNbd.png" alt="Image 2"></p><p>扭曲程度高</p><p><img src="https://img2.imgtp.com/2024/05/26/NY3JNSOn.webp" alt="Image 3"></p>'
const fixedDate4 = '2024-03-04T13:27:55';
const fixedTimestamp4 = +new Date(fixedDate4);

const baseContent5 = '<p>IQA数据集代表图片展示</p><p>成像质量差</p><p><img src="https://img2.imgtp.com/2024/05/26/Fd7QwjqB.webp" alt="Image 1"></p><p>成像质量好</p><p><img src="https://img2.imgtp.com/2024/05/26/Uln8RVc0.webp" alt="Image 2"></p><p>成像异常</p><p><img src="https://img2.imgtp.com/2024/05/26/gFE3qzS8.webp" alt="Image 3"></p>'
const fixedDate5 = '2024-03-04T18:36:49';
const fixedTimestamp5 = +new Date(fixedDate5);


const baseContent6 = '<p>Colonoscopic数据集代表图片展示</p><p>adenoma</p><p><img src="https://img2.imgtp.com/2024/05/26/8la9kcM5.png" alt="Image 1"></p><p>高增生性病变</p><p><img src="https://img2.imgtp.com/2024/05/26/wyasHbgW.png" alt="Image 2"></p><p>锯齿状腺瘤</p><p><img src="https://img2.imgtp.com/2024/05/26/7xb3aSr9.png" alt="Image 3"></p>'
const fixedDate6 = '2024-03-08T12:47:21';
const fixedTimestamp6 = +new Date(fixedDate6);

const image_uri = ''

// List.push(Mock.mock({
//   id: '@increment',
//   timestamp: fixedTimestamp1,
//   author: '安全星盟团队',
//   reviewer: '安全星盟团队',
//   title: 'blood-cell数据集',
//   content_short: 'blood-cell四个类别',
//   content: baseContent1,
//   forecast: '@float(0, 100, 2, 2)',
//   importance: '3',
//   'type|1': [''],
//   'status|1': ['已审核'],
//   display_time: '@datetime',
//   comment_disabled: true,
//   pageviews: '@integer(300, 5000)',
//   image_uri,
//   platforms: ['a-platform']
// }))

// const startDate = new Date('2024-03-17').getTime(); // 起始日期的时间戳
// const endDate = new Date('2024-05-25').getTime(); // 结束日期的时间戳

// // 生成一个随机日期数组
// const randomTimestamp = [];
// for (let i = 0; i < count; i++) {
//   const randomDate = Mock.Random.date({
//     start: new Date(startDate),
//     end: new Date(endDate)
//   });
//   // 格式化日期并添加到数组中
//   randomTimestamp.push(+new Date(randomDate));
// }

List.push(Mock.mock({
  id:  getNextId,
  timestamp: () => {
    const startDate = new Date('2024-05-27').setHours(24, 5, 0, 0);
    const endDate = new Date('2024-05-27').setHours(24, 6, 59, 999);
    const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTimeStamp).toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD' format
  },
  // timestamp: +Mock.Random.date('T'),
  author: 'George',
  reviewer: 'George',
  title: 'George',
  content_short: 'mock data',
  content: baseContent,
  forecast: '@float(0, 100, 2, 2)',
  importance: '@integer(1, 3)',
  'type|1': [''],
  'status|1': ['published'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List.push(Mock.mock({
  id:  getNextId,
  timestamp: () => {
    const startDate = new Date('2024-03-17').setHours(0, 0, 0, 0);
    const endDate = new Date('2024-05-26').setHours(23, 59, 59, 999);
    const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTimeStamp).toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD' format
  },
  // timestamp: +Mock.Random.date('T'),
  author: 'Robert',
  reviewer: 'Robert',
  title: 'Robert',
  content_short: 'mock data',
  content: baseContent,
  forecast: '@float(0, 100, 2, 2)',
  importance: '@integer(1, 3)',
  'type|1': [''],
  'status|1': ['published'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

for (let i = 2; i < count; i++) {
  List.push(Mock.mock({
    id:  getNextId,
    timestamp: () => {
      const startDate = new Date('2024-03-17').setHours(0, 0, 0, 0);
      const endDate = new Date('2024-05-26').setHours(23, 59, 59, 999);
      const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
      return new Date(randomTimeStamp).toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD' format
    },
    // timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': [''],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

Listupdate.push(Mock.mock({
    id: getId,
    timestamp: () => {
      const startDate = new Date('2024-05-27').setHours(24, 7, 0, 0);
      const endDate = new Date('2024-05-27').setHours(24, 8, 59, 999);
      const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
      return new Date(randomTimeStamp).toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD' format
    },
    // timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: 'George, Robert',
    ent_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': [''],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))

for (let i = 1; i < count; i++) {
  Listupdate.push(Mock.mock({
    id: getId,
    timestamp: () => {
      const startDate = new Date('2024-03-17').setHours(0, 0, 0, 0);
      const endDate = new Date('2024-05-26').setHours(23, 59, 59, 999);
      const randomTimeStamp = startDate + Math.random() * (endDate - startDate);
      return new Date(randomTimeStamp).toISOString().slice(0, 19).replace('T', ' '); // 'YYYY-MM-DD' format
    },
    // timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: () => {
      // 随机决定生成几个名字，范围是 2 到 4
      const numberOfNames = Mock.Random.integer(2, 4);
      // 生成随机名字的数组
      const names = [];
      for (let i = 0; i < numberOfNames; i++) {
        names.push(Mock.Random.first());
      }
      // 将名字数组转换为字符串，并用中文逗号分隔
      return names.join('，');
    },
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': [''],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}


List2.push(Mock.mock({
  id: 1,
  timestamp: fixedTimestamp1,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'blood-cell数据集',
  content_short: 'blood-cell四个类别',
  content: baseContent1,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List2.push(Mock.mock({
  id: 2,
  timestamp: fixedTimestamp2,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'covid19-combo数据集',
  content_short: 'covid19-combo三个类别',
  content: baseContent2,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List2.push(Mock.mock({
  id: 3,
  timestamp: fixedTimestamp3,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'Montgomery-County-CXR数据集',
  content_short: 'Montgomery-County-CXR两个类别',
  content: baseContent3,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List2.push(Mock.mock({
  id: 4,
  timestamp: fixedTimestamp4,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'Corneal Nerve Tortuosity数据集',
  content_short: 'Corneal Nerve Tortuosity三个类别',
  content: baseContent4,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List2.push(Mock.mock({
  id: 5,
  timestamp: fixedTimestamp5,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'IQA数据集',
  content_short: 'IQA三个类别',
  content: baseContent5,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

List2.push(Mock.mock({
  id: 6,
  timestamp: fixedTimestamp6,
  author: '安全星盟团队',
  reviewer: '安全星盟团队',
  title: 'Colonoscopic数据集',
  content_short: 'Colonoscopic三个类别',
  content: baseContent6,
  forecast: '@float(0, 100, 2, 2)',
  importance: '3',
  'type|1': ['CN'],
  'status|1': ['已审核'],
  display_time: '@datetime',
  comment_disabled: true,
  pageviews: '@integer(300, 5000)',
  image_uri,
  platforms: ['a-platform']
}))

module.exports = [
  
  {
    url: '/vue-element-admin/article/list2',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList2 = List2.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList2 = mockList2.reverse()
      }

      const pageList2 = mockList2.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList2.length,
          items: pageList2
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/updatelist',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList3 = Listupdate.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList3 = mockList3.reverse()
      }

      const pageList3 = mockList3.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList3.length,
          items: pageList3
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/update2',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of Listupdate) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },
  
  {
    url: '/vue-element-admin/article/detail2',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List2) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

