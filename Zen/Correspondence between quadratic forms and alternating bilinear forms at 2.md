---
tags:
  - public
---
[[Quadratic form]]
# Correspondence between quadratic forms and alternating bilinear forms at 2

Let $\mathbb{K}$ be a [[field]] with [[Characteristic|$\opn{char}\mathbb K = 2$]] and $V$ be a [[vector space]] over $\mathbb{K}$.
1. For every [[quadratic form]] $q : V\to \mathbb{K}$
  the [[Quadratic form|polar form]] 
  $$
  \begin{align*}
  b_{q} : V \times V &\to \mathbb{K} \\
  (v,w) &\mapsto q(v+w) - q(v) - q(w)
  \end{align*}
  $$
  is an [[Alternating multilinear map|alternating]] [[bilinear form]].[^minus] ^P1
2. For every [[quadratic form]] $q : V \to \mathbb{K}$ there exists a (in general not unique) [[bilinear form]] $\varepsilon_{0} : V \times V \to \mathbb{K}$ such that $q(v) = \varepsilon_{0}(v,v)$, and we have
  $$
  \begin{align*}
  b_{q}(v,w) = \varepsilon_{0}(v,w) - \varepsilon_{0}(w,v)
  \end{align*}
  $$
  ^P2
3. For every [[Alternating multilinear map|alternating]] [[bilinear form]] $b : V \times V \to \mathbb{K}$ there exists a [[quadratic form]] $q : V \to \mathbb{K}$ such that $b_{q} = b$.
   The complete set of such quadratic forms is $\{ q + \eta : \eta \in V^* \}$. ^P3

> [!missing]- Proof
> [[#^P1]] follows immediately.
> Let $b : V \times V \to \mathbb{K}$ be an alternating bilinear form with [[Gram matrix]] $B$, so that
> $$
> \begin{align*}
> b(v,w) = \tp v B w
> \end{align*}
> $$
> Noting that the diagonal entries of $B$ must be zero,
> there exist unique strict upper and strict lower triangular matrices $B_{\pm}$ respectively, so that
> $$
> \begin{align*}
> B = B_{+} + B_{-}
> \end{align*}
> $$
> where $B_{-} = \tp B_{+}$.
> Then
> $$
> \begin{align*}
> \varepsilon_{0}(v,w) = \tp v B_{+} v
> \end{align*}
> $$
> is a bilinear form and
> $$
> \begin{align*}
> q(v) = \varepsilon_{0}(v,v) + \eta(v) = \tp v B_{+} v + \eta v
> \end{align*}
> $$
> defines a quadratic form.
> Then
> $$
> \begin{align*}
> b_{q}(v,w) &= q(v+w) - q(v) - q(w) + \eta(v+w) - \eta v - \eta w \\
> &= \tp{(v+w)} B_{+} (v+w) - \tp v B_{+} v - \tp w B_{+}w \\
> &= \tp v B_{+}(v+w) + \tp w B_{+}(v+w) - \tp v B_{+}v - \tp w B_{+}w \\
> &= \tp v B_{+}w + \tp wB_{+} v = \tp v B_{+} w + \tp vB_{-} w \\
> &= \tp v B \tp w = b(v,w)
> \end{align*}
> $$
> as required.


  [^minus]: Note that any minus signs in this Zettel could be replaced with plus signs.

#
---
#state/tidy | #lang/en | #SemBr
