前段时间一直在忙着一个项目上线，最近终于完事了~有一段清闲，正好研究研究React的服务端渲染；

其实React服务端渲染就是用Node.js的v8引擎，在Node端执行JS代码，把React的DOM树渲染成html，然后页面就可以直接加载了，省去页面再执行React代码的时间~当然客户的还是要执行React代码的，因为我们的事件还需要绑定到对应的DOM上；

言归正传：这个项目的结构绝大部分都参考的是陈屹先生的《深入React技术栈》中React服务端渲染中的例子，https://github.com/arcthur/react-book-examples 这个就是书中例子的链接，有React-Redux的例子，React服务端渲染的例子等等；

我采用的就是React服务端这个例子的结构，不过陈屹先生的服务端渲染例子并没有Redux，我加上去了；此外还有一些结构上的变动等，我根据自己的项目更改的等；

而且陈屹先生的那个例子只是参考并不太复杂，我的稍微复杂一些基本上我把一个主页需要具备的轮播图，内容框，各种State的管理，组件的复用，CSS的处理等都加上去了；

地址是https://github.com/sven36/ReactReduxExample   大家有感兴趣的可以看一下；

 

首先：先看一下项目的结构(如图)：如果你想运行的话需要先在react-server目录npm install服务端JS的依赖包，再在assets目录npm install客户端JS的依赖包，在assets目录运行webpack生成本地JS，再回到react-server目录 执行npm run start 就可以了；

![image](https://github.com/sven36/ReactReduxExample/blob/master/react-server/app/assets/src/images/React.png)

 

其次：服务端渲染涉及到的知识点还是非常多的，包括Koa，Redux，Koa的各种中间件，Redux的功能扩展包，react-redux的高级用法，sass打包，babel与webpack配置等等；初涉其中可能感觉眼花缭乱，不知所云，这时候就需要耐心一个一个的知识点去看，我个人是先根据文档尝试其最初始的写法然后再一步一步更换到其更精简的写法（一般都是引入新的插件等等），这个过程尤其要注意各个模块的版本号，比如React-Router4.00的版本和2.00的版本相比基本上就是一个新的模块了，此外这个过程中还有非常多的各种各样的小问题，突然这么一想有些想不起来了，不过耐心，多看代码，多思考基本上都会解决的 ；

最后贴几个主页的效果（我是侠客风云传前传的粉丝）：

![image](https://github.com/sven36/ReactReduxExample/blob/master/react-server/app/assets/src/images/React2.png)

![image](https://github.com/sven36/ReactReduxExample/blob/master/react-server/app/assets/src/images/React3.png)

![image](https://github.com/sven36/ReactReduxExample/blob/master/react-server/app/assets/src/images/React6.png)


 
