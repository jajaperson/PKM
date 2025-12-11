---
tags:
  - public
---
[[Fundamental theorem of calculus]]
# Острогра́дский's divergence theorem

Let $\Omega$ be a solid and $\partial\Omega$ be its oriented boundary.
Let $\vab F$ be a vector field differentiable in $\Omega$. 
Then #m/thm/calculus 
$$
\begin{align*}
\oiint_{\partial \Omega} \vab F \cdot d\vab a = 
\iiint_{\Omega} \vab \nabla \cdot \vab F \,d\tau
\end{align*}
$$
Note the left hand side is equivalent to the [[flux]] through the surface of $\Omega$,
the right hand side refers to [[Divergence]].
Heuristically, if a region has no divergence, there is no nett in-flow or out-flow, and therefore the flux through the boundary is zero.

[^2016]: 2016\. [[Sources/@stewartCalculus2016|Calculus]], p. 1181

## Corollaries

1. $$
  \begin{align*}
  \iiint_{\Omega} (\vab{\nabla} \times \vab A) \,d\tau = -\oiint_{\partial\Omega} \vab A \times d\vab a
  \end{align*}
  $$
  ^C1

> [!check]- Proof
> For any vector $\vab c \in \mathbb{R}^3$, we have
> $$
> \begin{align*}
> \vab c \cdot \oiint_{\partial\Omega} \vab A \times \vab da &= -\oiint_{\partial\Omega} (\vab A \times \vab c) \cdot d\vab a \\
> &= -\iiint_{\Omega} \vab{\nabla}\cdot(\vab A \times \vab c) \,d\tau \\
> &= \vab c \cdot \iiint_{\Omega} (\vab{\nabla}\times \vab A) \,d\tau
> \end{align*}
> $$
> proving [[#^C1]]. <span class="QED"/>

## Practice problems
- 2016\. [[Sources/@stewartCalculus2016|Calculus]], pp. 1185–1186 (§16.9 exercises)

#
---
#state/develop | #lang/en | #SemBr | #review
