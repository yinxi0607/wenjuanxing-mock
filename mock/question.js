const getQuestionList = require('./data/getQuestionList')

const Mock = require('mockjs')

const Random = Mock.Random
module.exports = [
    {
        url: '/api/question/:id', //获取单个问卷
        method: 'get',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(10, 20),
                    //组件列表
                    componentList: [
                        // info
                        {
                            fe_id: Random.id(),
                            type: 'questionInfo', // 组件类型，不能重复，前后端统一好的
                            title: '问卷标题1',
                            isHidden:false,
                            isLocked: false,
                            props: {
                                title:'个人兴趣调查',
                                desc: '调查个人兴趣',
                            }
                        },

                        // Title
                        {
                            fe_id: Random.id(),
                            type: 'questionTitle', // 组件类型，不能重复，前后端统一好的
                            title: '标题',
                            isHidden:false,
                            isLocked: false,
                            props: {
                                text:'个人信息调研',
                                level: 2,
                                isCenter: false
                            }
                        },
                        // Input
                        {
                            fe_id: Random.id(),
                            type:'questionInput',
                            isHidden:false,
                            isLocked: false,
                            title:'输入框1',
                            props: {
                                title: '输入姓名',
                                placeholder:'请输入。。。'
                            }
                        },
                        // Input
                        {
                            fe_id: Random.id(),
                            type:'questionInput',
                            isHidden:false,
                            isLocked: false,
                            title:'输入框2',
                            props: {
                                title: 'telephone',
                                placeholder:'请输入电话号码。。。'
                            }
                        },
                        // Textarea
                        {
                            fe_id: Random.id(),
                            type:'questionTextarea',
                            isHidden:false,
                            isLocked: false,
                            title:'多行输入',
                            props: {
                                title: '你的品行',
                                placeholder:'请输入。。。'
                            }
                        },
                        // Paragraph
                        {
                            fe_id: Random.id(),
                            type:'questionParagraph',
                            isHidden:false,
                            isLocked: false,
                            title:'一个段落',
                            props: {
                                text: '一行段落',
                                isCenter:false
                            }
                        }
                    ]
                }
            }
        }
    },
    {
        //创建问卷
        url: '/api/question',
        method: 'post',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        //获取问卷列表
        url: '/api/question',
        method: 'get',
        response: (ctx) => {
            console.log(ctx.url)
            const {url,query}= ctx
            const isDeleted = url.indexOf('isDeleted=true') > -1
            const isStar = url.indexOf('isStar=true') > -1
            const pageSize = parseInt(query.pageSize)||10

            console.log('isStar',isStar)
            return {
                errno: 0,
                data: {
                    list: getQuestionList({len:pageSize,isDeleted,isStar}),// 当前页
                    total: 100 //总数，用于分页
                }
            }
        }
    },
    {
        // 更新问卷
        url: '/api/question/:id',
        method: 'patch',
        response: () => {
            return {
                errno: 0,
                data: {}
            }
        }
    },
    {
        // 复制问卷
        url: '/api/question/duplicate/:id',
        method: 'post',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // 批量彻底删除问卷
        url:'/api/question',
        method:'delete',
        response:() => {
            return {
                errno: 0,
                data: {}
            }
        }
    }
]