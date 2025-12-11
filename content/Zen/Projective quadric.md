---
tags:
  - public
---
[[Projective space]]
# Projective quadric

A **quadric** or **quadratic variety** $\mathcal{Q}$ in [[Projectivization|projective space]] $\mathrm{PG}(n,\mathbb{K})$ is the set of points defined by $Q(\mathbf{X}) = 0$ where $Q$ is a [[quadratic form]], #m/def/geo 
i.e.
$$
\begin{align*}
\mathcal{Q}= \{ [\mathbf{X}] : \mathbf{X} \in \mathbb{K}^{n+1}, Q(\mathbf{X})=0 \}
\end{align*}
$$
and $\mathcal{Q}$ is called the **quadric belonging to $Q$**.
A quadric is said to be **singular** iff by change of coördinates $Q$ can be made to contain fewer variables.

## Canonical forms and classification

Let $\mathcal{Q}_{n} \sube \mathrm{PG}(n,q)$ be a non-singular quadric belonging to the quadratic form $Q_{n}(\mathbf{X})$.
Then $Q_{n}$ may be transformed into one of the following forms:[^2020] #m/thm/geo

1. If $n = 2$ then $\mathcal{Q}_{n}$ is called a **conic**.
2. If $n>2$ is even, $\mathcal{Q}_{n}$ is called **parabolic quadric** and has the canonical form
  $$
  \begin{align*}
  Q_{n}(\mathbf{X}) = X_{0}X_{1}+X_{2}X_{3}+\dots+X_{n-2}X_{n-1}
  \end{align*}
  $$
3. If $n > 2$ is odd, $\mathcal{Q}_{n}$ is called a **hyperbolic quadric** iff it has the canonical form
  $$
  \begin{align*}
  Q_{n}(\mathbf{X}) = X_{0}X_{1} + X_{2}X_{3} + \dots + X_{n-3} X_{n-2} + X_{n-1}X_{n}
  \end{align*}
  $$
  3. If $n > 2$ is odd, $\mathcal{Q}_{n}$ is called an **elliptic quadric** iff it has the canonical form
  $$
  \begin{align*}
  Q_{n}(\mathbf{X}) = X_{0}X_{1} + X_{2}X_{3} + \dots + X_{n-3}X_{n-2} + f(X_{n-1},X_{n})
  \end{align*}
  $$
  where $f(X_{n-1}, X_{n})$ is an [[Polynomial ring#^irreducible]] and homogenous quadratic form.

> [!missing]- Proof
> #missing/proof


[^2020]: 2020\. [[Sources/@kissFiniteGeometries2020|Finite geometries]], ¶4.47–4.48, pp. 99–103

## Properties

- [[A quadric is singular iff its matrix is singular away from 2]]
- [[Orthogonality by a quadric]]

#
---
#state/develop | #lang/en | #SemBr
