---
slug: ltj-zhfonts-and-luatexja-chinese-font-setting
title: 使用套件 ltj-zhfonts, luatexja 時的中文字型設定
author: GJ Lee
author_title: Edward G.J. Lee
author_url: https://github.com/qtnez
author_image_url: https://avatars.githubusercontent.com/u/76939356?v=4
tags: [中文字體]
---

`ltj-zhfonts.sty` 是我從 `luatexja-zhfonts.sty` 修改來的，有需要的朋友可以拿來修改後使用。

可以放在目前工作目錄，或放在 `texlive/texmf-local/tex/latex/local` 目錄下，執行 `texhash` 命令後就可以使用。

選項有一個預設，就是 `myfont`，因此不加參數的話，預設就是 `myfont`。由於明體的粗體是用黑體字（明、宋體的粗體視覺上並不明顯），因此已經自動載入 `titlesec` 套件，並設定在章節標題是用黑體字。
  
註：myfont 所需要的字型可以在這裡下載：
https://github.com/qtnez/luatexja-template/tree/main/fonts

ltj-zhfonts.sty:
https://github.com/qtnez/luatexja-template/blob/main/ltj-zhfonts.sty 

## 補充說明 (Wed Mar  3 20:50:00 CST 2021)

基本上 `myfont` 中文字體的配置如下：

字族的部份：

```
  Roman(\textrm{}) 明體
  sans serif(\textsf{}) 黑體
  Typewriter(\texttt{}) 仿宋體
```

字序（series）的部份：

```
  Medium(\textmd{}) 各依上述設定
  Boldface(\textbf{}) 一律用黑體（Italic 除外）
```

字形（shape）的部份：

```
Italic/Slant(\textit{}, \textsl{}) 一律使用楷體（其粗體使用顏楷體）
※原因是不管中英文都屬於書寫體。
```

另外，如果編譯超大型文件（例如二、三千頁以上），最好設在本文裡頭，不要引用字型的 `package`。這裡頭 $\text{Lua}\TeX$ 引擎對記憶體的配置還有問題，會產生記憶體不夠的情況。

## 更正（Sun Mar  7 16:54:38 CST 2021）

最新版本的 `luatexja` 曾用 `\setmainjfont` 定義過的字型，無法使用 `\newjfontfamily` 再去定義，編譯時會出現錯誤。舊版本中的 `\newjfontfamily` 要修改成 `\setjfontfamily`。  
