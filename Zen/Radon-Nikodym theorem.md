---
tags:
  - public
alias: Radon-Nikodym derivative
---
[[Measure theory MOC]]
# Radon-Nikodym theorem

The **Radon-Nikodym theorem** states that given two [[Measure space|measures]] $\mu,\nu$ on a [[Measure space|measurable space]] $(X, \Sigma)$ such that [[Dominating measure#^eq]],
there exists a [[measurable function]] $f : X \to [0,\infty)$ 
such that for any $A \in \Sigma$ #m/thm/measure 
$$
\begin{align*}
\nu(A)= \int_{A} f(x) \, d\mu(x) 
\end{align*}
$$
which is unique $\mu$-[[almost everywhere]].
Such an $f$ is called the **Radon-Nikodym derivative**, denotes
$$
\begin{align*}
f = \frac{d\nu}{d\mu}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr 