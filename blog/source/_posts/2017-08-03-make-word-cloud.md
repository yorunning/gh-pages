---
title: 制作简单词云
date: 2017-08-03 02:42:21
categories:
  - Programming
---

在网上有各种各样的一键生成词云的工具，起初我觉得好高大上，但是只有固定的图片模板，使用时有局限。就在想有没有什么方法可以用自定义图片，后来一次机会发现可以用 Python 实现，然后在这里做一个记录。

环境：Python3.5
模块：jieba，wordcloud，PIL，numpy，matplotlib

## 引入相关模块

```python
# 分词
import jieba
# 生成词云的一个库
from wordcloud import WordCloud, ImageColorGenerator
# 图片的显示以及文字位置的计算
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
```

## 分词处理（注：英文文本可以跳过此步骤）

1.准备一段文本，保存为.txt 格式。

2.使用 jieba 分词。

```python
fr = open('test.txt','r').read()
result = jieba.lcut(fr, cut_all=Ture) # 使用全模式cut_all把所有的词拆开
```

3.统计词频

```python
word = {}  # 必须为{'词': 数量}形式
for i in result:
    if not i in word:
        word[i] = 1
    word[i] += 1
```

## 制作词云图片

1.准备一张.jpg 图片

![wordcloud1](/images/make-word-cloud/1.jpg)

2.Wordcloud 中文显示的一点问题处理

下载一个中文字体，例如 simher.ttf
然后 `pip3 show wordcloud` 查看 wordcloud 模块路径
把下载的字体放到 wordcloud 模块的根目录下
修改**wordcloud.py**的**FONT_PATH**

```python
FONT_PATH = os.environ.get("FONT_PATH",
os.path.join(os.path.dirname(__file__),"simhei.ttf"))
```

3.生成词云的一些准备

```python
# 打开一张图片
alice_mask = np.array(Image.open('test.jpg', 'r'))

# 新建一个Wordcloud
wc = WordCloud(
    background_color="white", # 背景颜色
    max_words=10000, # 最多词数数量
    # font_step=2,   # 词的步长
    max_font_size=100, # 词的最大字号
    # min_font_size=5, # 词的最小字号
    # random_state=19, # 颜色随机方案
    mask=alice_mask,   # 图片掩罩，就是使用上面打开的图片生成词云
    stopwords={"词云"}  # 屏蔽的词
)

# 创建该Wordcloud
wc.fit_words(word) # fit_words, 字典格式
'''
若是英文文本，不需要分词，直接打开一个文本fr传入下面方法即可
wc.generate(fr) # genarete, 文本文件
'''

# 使用背景图的颜色
image_colors = ImageColorGenerator(alice_mask)
```

4.图片显示的样式

```python
'''随机颜色显示'''
# 以图片的形式显示
plt.imshow(wc)
# 标题
plt.title('random color')
# 有无坐标
plt.axis('off')

'''按图片颜色显示'''
# 新建画布
plt.figure()
plt.imshow(wc.recolor(color_func=image_colors))
plt.title('image color')
plt.axis('off')

'''显示原图'''
plt.figure()
plt.imshow(alice_mask)
plt.title('')
plt.axis('off')

# 显示
plt.show()
```

![wordcloud2](/images/make-word-cloud/2.png)

## 参考的两篇文档

[jieba 分词](https://github.com/fxsjy/jieba/blob/master/README.md)
[Wordcloud 中文翻译](https://zhuanlan.zhihu.com/p/20436581)
