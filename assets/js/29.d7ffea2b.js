(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{454:function(e,r,t){"use strict";t.r(r);var s=t(4),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"linux中-bashrc-与-bash-profile-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux中-bashrc-与-bash-profile-的区别"}},[e._v("#")]),e._v(" linux中 .bashrc 与  .bash_profile 的区别")]),e._v(" "),t("p",[e._v("具体参考 "),t("a",{attrs:{href:"https://blog.csdn.net/sch0120/article/details/70256318",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于“.bash_profile”和“.bashrc”区别的总结 | CSDN"),t("OutboundLink")],1),e._v(" 。")]),e._v(" "),t("blockquote",[t("p",[e._v("由此可见，“profile”系列文件的主要目的在于为“登录shell”设置环境变量和启动程序；而“rc”系列文件的主要目的在于设置功能和别名。")]),e._v(" "),t("p",[e._v("顺便提一句，Linux中“rc”是英文“run command”的缩写，表示文件中存放需要执行的命令。其实这也非常符合逻辑，设置功能就要执行"),t("code",[e._v("shopt")]),e._v("命令，而设置别名要执行"),t("code",[e._v("alias")]),e._v("命令。与“rc”系列互补，“profile”系列用来设置环境变量，它不会去调用这两个命令，但却经常需要使用"),t("code",[e._v("export")]),e._v("语句。不信你可以看一看这两个文件。")]),e._v(" "),t("p",[e._v("如果你想对bash的功能进行设置或者是定义一些别名，推荐你修改"),t("code",[e._v("~/.bashrc")]),e._v("文件，这样无论你以何种方式打开shell，你的配置都会生效。而如果你要更改一些环境变量，推荐你修改"),t("code",[e._v("~/.bash_profile")]),e._v("文件，因为考虑到shell的继承特性，这些更改确实只应该被执行一次（而不是多次）。针对所有用户进行全局设置，推荐你在"),t("code",[e._v("/etc/profile.d")]),e._v("目录下添加以"),t("code",[e._v(".sh")]),e._v("结尾的文件，而不是去修改全局startup文件。")])])])}),[],!1,null,null,null);r.default=o.exports}}]);