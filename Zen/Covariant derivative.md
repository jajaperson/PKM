---
tags:
  - public
---
[[Differential geometry MOC]]
# Covariant derivative

Let $(M,\mathscr{A})$ be a $C^\alpha$-[[Differentiable manifold|manifold]] equipped with an [[affine connexion]] $\nabla$.
The **covariant derivative** gives a coördiante-independent notion of the [[directional derivative]] of any [[tensor field]] along a [[vector field]]. #m/def/geo/diff 

We extend the [[Affine connexion#As a differential operator|connexion as a differential operator]] $\nabla : \mathfrak{X}(M) \to \mathcal{T}^1_{1}(M)$ to tensor fields of arbitrary rank to get an $\mathbb{R}$-linear map
$$
\begin{align*}
\mathcal{T}^p_{q}(M) &\to \mathcal{T}^p_{q+1}(M) \\
X^{a_{1}\cdots a_{p}}{}_{b_{1}\cdots b_{q}} &\mapsto \nabla_{c}X^{a_{1}\cdots a_{p}}{}_{b_{1}\cdots b_{q}}
\end{align*}
$$
which is compatible with

- the [[exterior derivative]] on [[scalar field|scalar fields]] so that 
    $$
    \nabla_{a} f = (\mathrm{d}f)_{a}
    $$
 for $f \in C^\alpha(M)$;
- index contraction so that
    $$
    \nabla _d(A^{a_{1} \cdots c \cdots a_{p}}{}_{b_{1}\cdots c \cdots b_{q}}) = \nabla _dA^{a_{1} \cdots c \cdots a_{p}}{}_{b_{1}\cdots c \cdots b_{q}}
    $$
  for $A^{a_{1} \cdots a_{p}}{}_{b_{1}\cdots b_{q}} \in \mathcal{T}^p_{q}(M)$;
- the [[Derivation on an algebra|Leibniz rule]] so that
    $$
    \begin{align*}
    \nabla_{e}(A^{a_{1} \cdots a_{p}}{}_{b_{1}\cdots b_{q}} B^{c_{1}\cdots c_{p'}}{}_{d_{1}\cdots d_{q'}}) &= (\nabla_{e}A^{a_{1} \cdots a_{p}}{}_{b_{1}\cdots b_{q}}) B^{c_{1}\cdots c_{p'}}{}_{d_{1}\cdots d_{q'}}  \\
    &+ A^{a_{1} \cdots a_{p}}{}_{b_{1}\cdots b_{q}} (\nabla_{e} B^{c_{1}\cdots c_{p'}}{}_{d_{1}\cdots d_{q'}})
    \end{align*}
    $$
    for $A^{a_{1} \cdots a_{p}}{}_{b_{1}\cdots b_{q}} \in \mathcal{T}^p_{q}(M)$ and $B^{a_{1} \cdots a_{p'}}{}_{b_{1}\cdots b_{q'}} \in \mathcal{T}^{p'}_{q'}(M)$.


## Bibliography

-  2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], p. 31

#
---
#state/tidy | #lang/en | #SemBr
