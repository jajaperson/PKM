---
tags:
  - public
---
[[Differential geometry MOC]]
# Lie derivative

Let $v^a \in \mathfrak{X}(M)$ be a [[vector field]] generating the [[Flow on a manifold|flow]] $\varphi$.
The **Lie derivative**
$$
\begin{align*}
\mathcal{L}_{v} : \mathcal{T}^p_{q} (M) \to \mathcal{T}^p_{q}(M)
\end{align*}
$$
is an $\mathbb{R}$-linear map defined by[^2009] #m/def/geo/diff 
$$
\begin{align*}
\mathcal{L}_{v} T^{a_{1} \cdots a_{p}}_{{b_{1}\cdots b_{q}}} = \lim_{ t \to 0 } \left( \frac{(\varphi^t)^* T^{a_{1} \cdots a_{p}}_{b_{1} \cdots b_{q}} - T^{a_{1}\cdots a_{p}}_{b_{1}}\cdots b_{q}}{t} \right) = \left. \frac{\mathrm{d}}{\mathrm{d}t} (\varphi^t)^* T^{a_{1}\cdots a_{p}}_{b_{1} \cdots b_{q}} \right|_{t=0}.
\end{align*}
$$
It is also possible to define the Lie derivative along a vector $v^a \in T_{p}M$ at a single point.

  [^2009]: 2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], pp. 439–441, C.2

## Algebraic properties


1. **Agreement with other derivatives:** $\mathcal{L}_{v}f = v(f) = \mathrm{d}f_{a} v^a = \nabla_{v}f$.
2. **Leibniz rule:** $\mathcal{L}_{v} (S \otimes T) = (\mathcal{L}_{v}S) \otimes T + S \otimes(\mathcal{L}_{v}T)$.
3. **Commutes with contraction:** $\mathcal{L}_{v}(T^{a_{1} \cdots c \cdots a_{p}}_{b_{1} \cdots c \cdots b_{q}}) = \mathcal{L}_{v}(T^{a_{1} \cdots c \cdots a_{p}}_{b_{1} \cdots c \cdots b_{q}})$.

## Relation to the covariant derivative

For any [[affine connexion]] $\nabla$, we have
$$
\begin{align*}
\mathcal{L}_{v} T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}} = v^c \nabla_{c} T^{a_{1} \cdots a_{p}}_{b_{1}\cdots b_{q}} - \sum_{i=1}^p T^{a_{1} \cdots c_{i} \cdots a_{p}}_{b_{1} \cdots b_{q}} \nabla_{c_{i}} v^{a_{i}} + \sum_{i=1}^q T^{a_{1}\cdots a_{p}}_{b_{1}\cdots c_{i} \cdots b_{q}} \nabla_{b_{i}} v^{c_{i}}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
