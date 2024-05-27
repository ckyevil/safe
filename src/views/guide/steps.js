const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: '侧边栏状态',
      description: '通过这个按钮您可以展开 & 收缩侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '当前位置',
      description: '说明您目前所在系统的位置',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: '页面查找',
      description: '通过搜索界面关键词快速导航界面位置',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: '全屏',
      description: '设置系统界面进入全屏模式',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: '栏目大小',
      description: '选择历史记录栏目的条目大小',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: '历史浏览',
      description: '可以通过这个按键查看您的历史浏览界面',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
