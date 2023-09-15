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
        response: () => {
            return {
                errno: 0,
                data: {
                    list: getQuestionList(),// 当前页
                    total: 100 //总数，用于分页
                }
            }
        }
    }
]