---
tags:
  - public
---
[[Differential geometry MOC]]
# Spherical coördinates in differential geometry

> [!warning]+ Convention
> This Zettel uses the [[Spherical coördinates#Physics convention]]

The standard global [[coördinate chart]] for $\mathbb{R}^3$ is given by the identity map.
We call these coördinates $(x,y,z)$.
[[Spherical coördinates]] are better suited to situations with spherical symmetry.
Let $U = \mathbb{R}^3 \setminus \{ 0 \}$.
The coördinate chart $(r^I) = (r,\vartheta,\varphi) : U \to \mathbb{R}^3$ is defined so that
$$
\begin{align*}
x &= r \sin \vartheta \cos \varphi \\
y &= r \sin \vartheta \sin\varphi \\
z &= r \cos \vartheta
\end{align*}
$$
The metric is
$$
\begin{align*}
\dj s^2 = \mathrm{d} r^2 + r^2 \, \mathrm{d}\vartheta^2 + r^2 \sin^2 \vartheta \,\mathrm{d}\varphi^2
\end{align*}
$$
so we see the coördinate basis is orthogonal but not orthonormal.
Thus we can adjust to get a [[vielbein]]
$$
\begin{align*}
\hat{r}_{1}{}^a &= \hat{r}^a = \partial _{0}{}^a \\
\hat{r}_{2}{}^a &= \hat{\vartheta}^a = \frac{1}{r} \partial_{1}{}^a \\
\hat{r}_{3}{}^a &= \hat{\varphi}^a = \frac{1}{r \sin \vartheta} \partial_{3}{}^a
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
