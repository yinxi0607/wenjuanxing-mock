const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
    {
        url:'/api/test',
        method:'get',
        response:() => {
            return Mock.mock({
                code: 200,
                data: {
                    name: Random.cname(),
                    age: 18
                }
            })
        }
    }
]