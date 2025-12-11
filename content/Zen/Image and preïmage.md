---
aliases:
  - image
  - preïmage
tags:
  - public
---
[[Function]]
# Image and preïmage

Given a function $f : X \to Y$, 
the **image**[^Bild] $f^\star(A)$ of a subset $A \sube X$ is the set containing all output values $f(a)$ for $a \in A$ #m/def/general,
whereas the **preïmage**[^Urbild] $f_{\star}(B)$ of a subset $B \sube Y$ is the set containing all elements of $X$ with an image in $B$. #m/def/general
$$
\begin{align*}
f^\star(A) &= \{ f(a) : a \in A \} \\
f_{\star}(B) &= \{ x \in X : f(x) \in B \}
\end{align*}
$$
[^Bild]: German _Bild_
[^Urbild]: German _Urbild_

## Properties
[A stack exchange answer](https://math.stackexchange.com/questions/359693/overview-of-basic-results-about-images-and-preimages#359694)


- [[The preïmage of the image and image of the preïmage are not necessarily the identity]]
- [[The image map of a bijection is a bijection]]
- $g_{\star}f_{\star} = (f \circ g)_{\star}$
- $f^\star g^\star = (f \circ g)^\star$


#
---
#state/tidy | #lang/en | #SemBr
