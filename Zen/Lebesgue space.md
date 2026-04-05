---
tags:
  - public
aliases:
  - $p$-norm
  - $p$-seminorm
  - 1-norm
  - 2-norm
  - $\infty$-norm
---
[[Analysis MOC]]
# Lebesgue space

Let $(X,\Sigma,\mu)$ be a [[measure space]] and let $p \in [1,\infty]$.
The **seminormed Lebesgue space** $\mathcal{L}^p(X,\mu)$ is defined as the set of all [[Measurable function|measurable functions]] $f: X \to \mathbb{C}$ with finite $p$-[[Seminormed vector space|seminorm]] given by [[Lebesgue integral]] #m/def/anal/fun 
$$
\begin{align*}
\|f\|_{p} = \left( \int _{X}|f(x)|^p \, d\mu(x)  \right)^{1/p} < \infty
\end{align*}
$$
where in the case of $p = \infty$ (assuming $\mu(X) \neq 0$) we get the [[Essential supremum and infimum|essential supremum]]
$$
\begin{align*}
\|f\|_{\infty} = \inf \{ C \in \mathbb{R}_{\geq_{0}} : \mu(\{ s \in X : |f(s)| > C \}) = 0 \}
\end{align*}
$$
The **Lebesgue space** $L^p(X,\mu)$ is a [[Banach space]] given by the [[A seminorm induces a normed quotient|normed quotient]] $\mathcal{L}^p(X,\mu)$, whose elements are functions up to equality [[almost everywhere]].

> [!check]- Proof of (semi)norm
> [[Seminormed vector space#^S1|Absolute homogeneity]] is immediately clear,
> while the the [[Seminormed vector space#^S2|triangle inequality]] is given by the [[Minkowski inequality]]. <span class="QED"/>

> [!missing]- Proof of Banach space
> #missing/proof

In case $X = \mathbb{N}$ and $\mu$ is the counting measure, one recovers [[Lebesgue sequence space]].
The special case of [[L2 space]] can be be endowed with the structure of a Hilbert space (see below)
## Properties

- [[Lebesgue space forms an inner product space iff p=2]]

## Alternate approach

In the case $X = [a,b] \sube \mathbb{R}$ an alternate approach is followed by [[Lyle Noakes]],
where one first defines $\tilde{L}^p(X) = C[a,b]$ with integration given by the [[Riemann integral]],
and then moving to the [[Banach completion]] which is defined as $L^p[a,b]$.

#
---
#state/tidy | #lang/en | #SemBr 