# Innovation and Entrepreneurship Training Program for College Students

这是一个校级大创项目，进行时间是2019年下半年到2020年上半年。题目是基于微信小程序的物流平台，主要用于工厂和货车司机的交流。就最终成果来看本小程序粗糙的过了头，权当是给你设了一年的ddl来联系小程序的写法了

本项目分为两个部分

## 第一部分

第一部分的代码在`test`文件夹中

因为对微信小程序一无所知，所以，在正式开始编写之前先通过学习教程，自己做了一个适用于我和我的朋友之间的一个微信小程序。当时有一些小程序提供了从题库选题，定制好问题后发给另一方看看他们对自己了解多少的功能。但我觉得没有我想问的问题，于是就自己做了一个小程序，在做题之后可以查看自己的分数

### 使用方法

直接使用即可，没有使用云函数之类的东西。只需要在云开发中建立相应的表之后即可正常运行

其中的两张表的详细信息如下

**`youtellme`表**

本表用来记录用户提出的意见

| 字段名  | 格式   | 含义                   |
| ------- | ------ | ---------------------- |
| _id     | string | 本条记录的序号         |
| _openid | string | 对应提交用户的唯一序号 |
| title1  | string | 提交的标题             |
| title2  | string | 提交的内容             |

**`grade`表**

本表用来记录做题的分数

| 字段名  | 格式   | 含义                                           |
| ------- | ------ | ---------------------------------------------- |
| _id     | string | 本条记录的序号                                 |
| _openid | string | 对应提交用户的唯一序号                         |
| a1      | number | a1题的分数                                     |
| a2      | number | a2题的分数                                     |
| a3      | number | a3题的分数                                     |
| a4      | number | a3题的分数                                     |
| a5      | number | a5题的分数                                     |
| a6      | number | a6题的分数                                     |
| a7      | number | a7题的分数                                     |
| a8      | number | a8题的分数                                     |
| a9      | number | a9题的分数                                     |
| apart   | number | a部分的总分                                    |
| b1      | number | b1题的分数                                     |
| c1      | number | c1题的分数                                     |
| c2      | number | c2题的分数                                     |
| c3      | number | c3题的分数                                     |
| c4      | number | c4题的分数                                     |
| c5      | number | c5题的分数                                     |
| cpart   | number | c部分的总分                                    |
| name    | string | 填写试卷的名称栏后可通过输入名字查看自己的成绩 |
| total   | number | 总分                                           |

## 第二部分

第二部分的代码在`Innovation and Entrepreneurship Training Program for College Students`文件夹中

在该文件夹中的`file`文件夹，存放有结题时的部分文件可供参考

在完成第一部分，积累了大量经验后开始制作大创要求的小程序

为了满足用户向数据库提交数据的要求，使用了名为add的云函数。因为在当时云开发的数据库权限只有四种，没有新出的可自定义规则选项，也许现在不需要使用云函数了。为了满足通过`_openid`这个用户唯一标识识别登录用户的要求，使用了`login`云函数来获取这一信息

本项目具有两张表，一张表用来记录用户提出的意见，另一张表用来记录所有的订单信息。所有的订单信息都放在一张表中，设置两个布尔变量来区分订单的不同状态。订单的不同状态包括：已发布但无人接收，已发布被接收，已发布接收方确认已完成三种状态

**`forward`表**

本表用来记录所有订单

| 字段名   | 格式    | 含义                         |
| -------- | ------- | ---------------------------- |
| _id      | string  | 本条记录的序号               |
| _openid  | string  | 对应提交用户的唯一序号       |
| cname    | string  | 工厂方（创建货运订单方）姓名 |
| copenid  | string  | 工厂方用户唯一序号           |
| cphone   | string  | 工厂方联系电话               |
| describe | string  | 货物描述                     |
| fplace   | string  | 去何处拉货                   |
| ftime    | string  | 去拉货的日期                 |
| jmessage | string  | 司机方给工厂方的留言         |
| jname    | string  | 司机方（接受订单方）姓名     |
| jopenid  | string  | 司机方用户唯一序号           |
| jphone   | string  | 司机方联系方式               |
| money    | string  | 订单金额                     |
| splace   | string  | 应当将货物送往何处           |
| stime    | string  | 应当送达的日期               |
| type1    | boolean | 订单状态标志                 |
| type2    | boolean | 订单状态标志                 |

**`yijian`表**

本表用来记录用户提出的意见

| 字段名  | 格式   | 含义                   |
| ------- | ------ | ---------------------- |
| _id     | string | 本条记录的序号         |
| _openid | string | 对应提交用户的唯一序号 |
| title1  | string | 提交的标题             |
| title2  | string | 提交的内容             |



