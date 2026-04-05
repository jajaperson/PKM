---
tags:
  - public
---
[[Probability theory MOC]]
# Probability-generating function
The **probability generating function** is a [[generating function]] for the [[Discrete random variable|probability mass function]] of a $\mathbb{N}_{0}$-valued [[discrete random variable]] $X : \xi \to \mathbb{N}_{0}$ defined by #m/def/prob 
$$
\begin{align*}
g_{X}(t) := \sum_{x=0}^\infty p_{X}(x) \, t^x = \Ex[t^X]
\end{align*}
$$
by the [[Law of the unconscious statistician]].
This is well-defined as a convergent function $g_{X}: [-1,1] \to [-1,1]$.

## Properties

1. If the [[Moment-generating function]] exists, for $t < 0$
$$
\begin{align*}
g_{X}(t) = \Ex[t^X] = \Ex[\mathrm{e}^{X \ln t}] = M_{X}(\ln t)
\end{align*}
$$
2. $$
  \begin{align*}
  \mathbb{P}[X=x]= \frac{g_{X}^{(x)}(0)}{x!}
  \end{align*}
  $$
3. Let $X,Y : \xi \to \mathbb{N}_{0}$ be [[Independence of random variables|independent random variables]]. Then
  $$
  \begin{align*}
  g_{\lambda X+\mu Y}(t) = g_{X}(t^\lambda) + g_{Y}(t^\mu)
  \end{align*}
  $$

#
---
#state/tidy | #lang/en | #SemBr
