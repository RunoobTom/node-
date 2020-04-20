###CSS###
1.实现垂直居中
`
    // table-cell
    {
        position: relative;
        width: 100px;
        height: 100px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
`

`
    // flex实现  父元素
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

`
    //在子元素上设置，transform: translate(-50%, -50%);  用于平面的2D转换，后面的百分比以自身的宽高为参考，定位后将元素的左上角置于父级中央，之后再用 transform 进行
    //偏移，相当于上面设置的 margin-top 和 margin-left。

    {
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

`
    // 子元素确定宽高，使用绝对定位

    {
        position: absolute;
        width: 100px;
        height: 100px;
        top, left, bottom, right: 0;
        margin: auto;
    }
`


###js基础###
1.作用域（scope) 变量的访问规则