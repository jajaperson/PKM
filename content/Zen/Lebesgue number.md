---
tags:
  - public
---
[[Analysis MOC]]
# Lebesgue number

Let $(X,d)$ be a [[Compact space|compact]] [[metric space]] and $\mathcal{U}$ be an [[Cover set|open cover]].
Then there exists a **Lebesgue number** $\lambda > 0$ such that every $Y \sube X$ with [[Diameter of a set|diameter]] less than $\lambda$ is contained entirely within one of the covering sets, #m/thm/anal 
i.e.
$$
\begin{align*}
\mathrm{diam}(Y) < \lambda \implies (\exists U \in \mathcal{U}) [Y \sube U]
\end{align*}
$$
> [!check]- Proof
> Since $\mathcal{U}$ is an [[Cover set|open cover]], for every $x \in X$ there exists some neighbourhood $U \in \mathcal{ U}$ of $x$, and hence some $\delta_{x} > 0$ so that $\mathrm{B}_{\delta_{x}}(x) \sube U$.
> Then $\{ \mathrm{B}_{\delta_{x}}(x) : x \in X \}$ is an open cover, and since $X$ is [[Compact space|compact]] there exists some finite subcover $\{ \mathrm{B}_{\delta_{x_{i}}}(x_{i}) \}_{i=1}^n$ where $(x_{i})_{i=1}^n$ are points in $X$.
> Then $\lambda = \min \{ \delta_{x_{i}} \}_{i=1}^n$ is a Lebesgue number.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
