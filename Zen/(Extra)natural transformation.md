---
aliases:
  - extranatural transformation
tags:
  - public
---
[[Natural transformation]]
# (Extra)natural transformation

Let $F : \cat A \times \cat B \times \op{\cat B} \to \cat D$ and $G : \cat A \times \cat C \times \op{\cat C} \to \cat D$ be [[Functor|functors]].
A transformation (family of morphisms) with components
$$
\begin{align*}
\alpha_{a,b,c} : F(a,b,b) \to G(a,c,c)
\end{align*}
$$
can of course never be [[Natural transformation|natural]] in $b$ or $c$, but it can be **extraordinary-natural**, or **extranatural** in $b$ and $c$.
Extranaturality in an argument appearing in the domain is given by the diagram on left,
whille extranaturality an argument appearing in the codomain is given by the diagram on the right.[^1966] #m/def/cat 

![[extranatural-transformation.svg#invert|c]]

A transformation is said to be **(extra)natural** iff it is [[Natural transformation|natural]] in arguments appearing in both its domain and codomain, and extranatural in any arguments appearing both covariantly and contravariantly in either its domain or codomain only.

  [^1966]: 1966\. [[Sources/@eilenbergGeneralizationFunctorialCalculus1966|A generalization of the functorial calculus]], p. 367
#
---
#state/tidy | #lang/en | #SemBr
