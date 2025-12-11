---
aliases:
  - "#category"
tags:
  - public
---
[[Category]]
# Glossary of categories


```dataview
TABLE without id
  ("[[" + file.path + "|" + categoryName + "]]") as name,
  default(symbol, mathLink) as symbol,
  object,
  morphism,
  arguments
FROM #category
```


---
#state/tidy | #SemBr | #lang/en