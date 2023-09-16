const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt = {}) {
    const {len = 10, isDeleted = false, isStar = false} = opt
    const list = []
    console.log('getQuestionList: len:%s,isDeleted:%s,isStar:%s', len, isDeleted, isStar)
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(),
            title: Random.ctitle(),
            isPublished: Random.boolean(),
            isStar: isStar,
            answerCount: Random.natural(5, 100),
            createdAt: Random.datetime(),
            isDeleted: isDeleted
        })
    }
    return list
}

module.exports = getQuestionList