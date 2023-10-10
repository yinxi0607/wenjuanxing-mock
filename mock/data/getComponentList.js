const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList(){
    return [
        // info
        {
            fe_id: 'c1',
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
            fe_id: 'c2',
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
            fe_id: 'c3',
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
            fe_id: 'c4',
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
            fe_id: 'c5',
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
            fe_id: 'c6',
            type:'questionParagraph',
            isHidden:false,
            isLocked: false,
            title:'一个段落',
            props: {
                text: '一行段落',
                isCenter:false
            }
        },
        // Radio
        {
            fe_id: 'c7',
            type:'questionRadio',
            isHidden:false,
            isLocked: false,
            title:'单选',
            props: {
                title: '单选标题',
                isVertical: false,
                options: [
                    {value:"item1",text:"选择1"},
                    {value:"item2",text:"选择2"},
                    {value:"item3",text:"选择3"},
                ],
                value: ''
            }
        },// Radio
        {
            fe_id: 'c8',
            type:'questionCheckbox',
            isHidden:false,
            isLocked: false,
            title:'多选',
            props: {
                title: '多选标题',
                isVertical: false,
                list: [
                    {value:"item1",text:"选择1",checked:false},
                    {value:"item2",text:"选择2",checked:false},
                    {value:"item3",text:"选择3",checked:false},
                ]
            }
        }
    ]
}

module.exports = getComponentList