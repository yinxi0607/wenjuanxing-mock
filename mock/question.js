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
                    url: Random.url()
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