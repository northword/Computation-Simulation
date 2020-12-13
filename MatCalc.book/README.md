# 不完全不准确不系统的计算模拟入坑记录



![学不会系列之材料计算](./logo.png)

---

本文档是一个菜鸡的上课笔记和实践踩坑的一些记录。

课程为学不会系列之《能源环境材料计算模拟方法》，授课教师四川大学建筑与环境学院岑望来老师。

教学大纲：

1. 绪论（3学时）：介绍计算模拟方法在能源环境材料研究与开发中的应用情况，理论与方法体系，课程安排和考核办法，Windows系统下个人电脑计算模拟软件安装与调试。
2. Linux操作系统基础（6学时）：服务器系统结构，权限，用户管理，文件管理；vi编辑器使用方法。
3. Materials Studio软件使用基础（6学时）：Materials Studio软件介绍及其Visualizer模块的使用方法；CASTEP模块使用方法；分别以O2 分子和NaCl晶体结构优化为例作操作练习。
4. VASP软件基础（6学时）：VASP软件介绍，分别以O2分子和NaCl晶体结构优化为例作操作练习。
5. 结构化学基础（3学时）：介绍点群、晶体对称性、晶面和倒空间；介绍原子和分子电子结构；用Materials Studio做晶面建模练习。
6. 电子结构理论及计算方法（12学时）：自洽场理论、能带理论、态密度、电荷密度；自旋电荷密度分析，电荷密度差分析，静电势分析，Bader 电荷分析，态密度，能带结构；实践操作。
7. 反应路径与分子动力学计算方法（9学时）：NEB计算方法与操作实践；系综理论，控温方法，输入文件准备，计算过程，结果分析。
8. 计算模拟高级工具（9学时）：Shell, Python编程基础, 原子模拟环境ASE基础

---

同为初学者，水平有限，如有错误还请指出。

Bug/typo/error reports should be sent to:

[Zhang' email](mailto:zhangjianbei@stu.scu.edu.cn) or reported as an [issue](https://github.com/northword/Computation-Simulation/issues).

---

**Tips:** 

移动端，左上角汉堡菜单选择章节；桌面端右上角菜单选择章节，左侧栏查看当前章节大纲。

桌面端食用体验更加~

本笔记中，代码块行前有`$`的，表示在终端输入的命令，实际不需要输入`$`符号。

本笔记中的命令的语法表示中：`<参数>`表示必须参数，`[参数]`表示可选参数，可参考 [命令行语法格式中常用符号的含义](https://www.cnblogs.com/uakora/p/11809501.html) 。

---



> Powered by [VuePress](https://www.gitbook.com/), 	Hosted by [Github Pages](https://pages.github.com/). 	
>
> Link of This [repository](https://github.com/northword/Computation-Simulation) in GitHub. 		
>
> Repository synced by [Gitee](https://gitee.com/northword/Computation-Simulation). 
>
> 晋ICP备18010037号-1. 	
>
> ©2020 [Northword]().  	

Overseas link:  [Github Pages](http://blog.northword.cn/Computation-Simulation) 

Mainland link:  [northword.gitee.io/computation-simulation](http://northword.gitee.io/computation-simulation)

菜鸡小张，2020年。
