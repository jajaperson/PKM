---
tags:
  - public
---
[[Probability theory MOC]]
# General random variable

A **random variable** assigns elements of some [[Measure space|measurable space]] $(\mathcal{X},\Sigma)$ to possible outcomes/world-states in a [[probability model]] $(\xi,\mathcal{F},\mathbb{P})$. #m/def/prob 
Formally a random variable on $(\xi, \mathcal{F}, \mathbb{P})$ of $(\mathcal{X}, \Sigma)$ is a [[measurable function]]
$$
\begin{align*}
X : \xi \to \mathcal{X}
\end{align*}
$$
and the probability of any measurable $A \in \Sigma$ is given by the [[Measurable function#^P1|induced measure]] $\mathbb{P} \circ X^{-1} \restriction \Sigma$, i.e.
$$
\begin{align*}
\mathbb{P}[X \in A] = \mathbb{P} \{ \epsilon \in \xi : X(\epsilon \in A) \}
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
