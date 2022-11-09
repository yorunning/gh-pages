---
title: Markdown语法
date: 2017-06-30 11:19:42
categories:
  - Programming
---

## 1.斜体和粗体

使用 `*文字*` 和 `**文字**` 表示斜体和粗体。

示例：

这是 _斜体_，这是 **粗体**。

## 2.删除线

使用 `~文字~` 表示删除线。

示例：

~这是一段错误的文本。~

## 3.分级标题

使用 `===` 表示一级标题，使用 `---` 表示二级标题。

示例:

```text
这是一个一级标题
===

这是一个二级标题
---

### 这是一个三级标题
```

也可以选择在行首加井号表示不同级别的标题 (h1-h6)
例如：# h1, ## h2, ### h3，#### h4

## 4.外链接

使用 `[描述](链接地址)` 为文字增加外链接。

示例：

这是去往[本人博客](https://yorun.me/)的链接。

## 5.插入图像

使用 `![描述](图片链接地址)` 插入图像。

示例：

![logo](/images/logo.png)

## 6.文字引用

使用 `>` 表示文字引用。

示例：

> 怕什么真理无穷，进一寸有一寸的欢喜。

## 7.行内代码块

使用 `` `代码` `` 表示行内代码块。

示例：

人生苦短，我用 `Python`。

## 8.代码块

使用 四个缩进空格 表示代码块。

示例：

    这是一个代码块，此行左侧有四个不可见的空格。

## 9.加强的代码块

使用如下的格式实现语法高亮，行号显示。
\`\`\`python
some code
\`\`\`

命令行示例：

```
sudo apt-get update
```

python 代码示例：

```python
def hello():
    print('Hello world!')

hello()

>>> Hello world!
```

## 10.无序列表

使用 `*` `+` `-` 表示无序列表。

示例：

- 无序列表项一
- 无序列表项二
- 无序列表项三

## 11.有序列表

使用数字和点 `1.` 表示有序列表。

示例：

1. 有序列表项一
2. 有序列表项二
3. 有序列表项三

## 12.表格支持

```
| Name |  Age |  Job   |
| ---- | ---: | :----: |
| Alan |   22 |  Web   |
| Jack |   25 | Python |
```

示例：

| Name | Age |  Job   |
| ---- | --: | :----: |
| Alan |  22 |  Web   |
| Jack |  25 | Python |

## 13.Html 标签

```
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
    </tr>
    <tr>
        <td>Alan</td>
        <td>22</td>
        <td>Web</td>
    </tr>
    <tr>
        <td>Jack</td>
        <td>25</td>
        <td>Python</td>
    </tr>
</table>
```

示例：

<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
    </tr>
    <tr>
        <td>Alan</td>
        <td>22</td>
        <td>Web</td>
    </tr>
    <tr>
        <td>Jack</td>
        <td>25</td>
        <td>Python</td>
    </tr>
</table>
