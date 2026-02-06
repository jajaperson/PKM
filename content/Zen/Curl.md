---
sr-due: 2024-03-21
sr-interval: 11
sr-ease: 270
tags:
  - public
---



[[Infinitesimal calculus MOC]]
# Curl
The **curl** of a vector field $\vab F: \mathbb{R}^3 \to \mathbb{R}^3$ is a measurement of the field's tendency of a field to _twist_.
It is given by
$$
\begin{align*}
\curl \vab F = \nabla \times \vab F
\end{align*}
$$
where $\nabla$ is the nabla operator (sometimes called $\grad$).
The formula for curl is actually derived by an infinitesimal [[circulation]] integral.
Let $C$ be filled disc at $p$ with normal $\unitv u$ and area $\mu(C)$.
Then curl is given by
$$
\begin{align*}
(\nabla \times \vab F)(p) \cdot \unitv u = \lim_{ \mu(C) \to 0 } \frac{1}{\mu(C)} \oint_{\partial C} \vab F \cdot d \vab r
\end{align*}
$$

## Properties
- If $\curl \vab F = \vab 0$ everywhere, then $\vab F$ is a [[Conservative vector field]].
- Conversely, for any continuous, smooth $\nabla f$, $\curl \nabla f = \vab 0$ (this is easy to prove by [[Clairaut's theorem]]).

## Practice problems
These practice problems are for both curl and [[Divergence]].

- 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1149 (§16.5 exercises)

#
---
#state/tidy | #lang/en | #SemBr | #review
