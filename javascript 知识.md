#JavaScript之“深拷贝/浅拷贝”


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	在学习JavaScript的**拷贝(复制)**之前必须要对JavaScript对象在内存中存储的方式有所了解。因为这里所说的**拷贝(复制)**都是针对JavaScript对象而言的，所以先在这里简单介绍一下JavaScript中对象的存储方式。我们都知道，JavaScript将数据分为两大类，分别是**原始数据类型（String、Number、Bigint、Boolean、Undefined、Null...）**和**引用数据类型（Object、Function、Array...）**。

###2、基本数据类型（存储在栈内存中）
**基本数据类型**是指存放在栈中的简单数据段，数据大小确定，内存空间大小可以分配，它们是直接按值存放的，所以可以直接按值访问。
<pre>
	let a = 10;
	let b = a;
	b = 20;
	console.log(a); // 10
	console.log(b); // 20
</pre>
变量b获取的是a值得一份拷贝，虽然，两个变量的值相等，但是两个变量保存了两个不同的基本数据类型值。b只是保存了a复制的一个副本。所以，b的改变，对a没有影响。

**内存中的存储方式：**
![avatar](https://img-blog.csdn.net/20180106112332019?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VpeGluXzM4Nzg4OTQ3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

###1、引用数据类型（存储在堆内存中，栈内存中只是存储对象的指针/地址）
**引用数据类型**是存放在堆内存中的对象，变量其实是保存的在栈内存中的一个指针（保存的是堆内存中的引用地址），这个指针指向堆内存。

**如下代码：**这里创建了3个对象person1、person2、person3。
<pre>
	var obj1 = {name:'jozo'}; 
	var obj2 = {name:'jozo'};
</pre>
**内存中的存储方式：**

![avatar](https://user-gold-cdn.xitu.io/2018/10/29/166bdbcd010284ec)

###3、深拷贝（深复制）

###4、浅拷贝（浅复制）