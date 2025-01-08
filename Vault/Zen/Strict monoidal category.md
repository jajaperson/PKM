---
aliases:
  - "#monoidal-category/strict"
tags:
  - public
---
[[Monoidal category]]
# Strict monoidal category

A **strict monoidal category** is a [[monoidal category]] in which the associator $\alpha$, left-unitor $\lambda$, and right-unitor $\rho$ are all the [[identity natural transformation]]. #m/def/cat 
Thus a strict monoidal category is precisely a [[monoid object]] in [[Category of small categories]].
Explicitly, a strict monoidal category $\cat C$ is equipped with

1. a [[functor]] $(\otimes) : \cat C \times \cat C \to \cat C$ called the **tensor product**; and
2. an object $1 \in \cat C$ called the **tensor unit**

such that
$$
\begin{align*}
x \otimes 1 = x = 1 \otimes x
\end{align*}
$$
for any object $x \in \cat C$ and
$$
\begin{align*}
(x \otimes y) \otimes z = x \otimes (y \otimes z)
\end{align*}
$$
for any objects $x,y,z \in \cat C$.

## Examples

```dataview
TABLE without id
  ("[[" + file.path + "|" + categoryName + "]]") as name,
  default(symbol, mathLink) as symbol,
  object,
  morphism,
  tensorProduct as product,
  tensorUnit as unit,
  arguments
FROM #monoidal-category/strict
```

#
---
#state/tidy | #lang/en | #SemBr
