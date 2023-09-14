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
                    id: Random.id,
                    title: Random.ctitle(10, 20),
                }
            }
        }
    },
    {
        url: '/api/question', //获取单个问卷
        method: 'post',
        response: () => {
            return {
                errno: 0,
                data: {
                    id: Random.id,
                }
            }
        }
    }
]