---
tags:
  - public
---
[[Monoidal category]]
# Examples of monoidal categories

Note that some of the categories listed here may have multiple possible monoidal structures;
listed here is just the “most canonical” one.


```dataview
TABLE without id
  ("[[" + file.path + "|" + categoryName + "]]") as name,
  default(symbol, mathLink) as symbol,
  object,
  morphism,
  tensorProduct as product,
  tensorUnit as unit,
  arguments,
  filter(file.etags, (x) => startswith(x, "#category/monoidal/")) as also
FROM #category/monoidal
```


#
---
#state/tidy | #lang/en | #SemBr
