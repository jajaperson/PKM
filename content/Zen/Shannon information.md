---
tags:
  - public
aliases:
  - surprisal
---
[[Information theory MOC]]
# Shannon information

The **Shannon information** or **surprisal** of a discrete [[General random variable|random variable]] $X : \xi \to M$ is the [[random function]] #m/def/info
$$
\begin{align*}
I_{X} : M &\to \mathbb{R} \\
x &\mapsto -\log_{b} p_{X}(x) = -\log_{b} \mathbb{P}(X=x)
\end{align*}
$$
where $b=2$ corresponds to the unit $\pu{Sh}$, $b=e$ corresponds to the unit $\pu{nat}$,
and $b=10$ corresponds to the unit $\pu{Hart}$.
Up to choice of $b$, the Shannon information function is the unique function satisfying the following properties:

1. If $p_{X}(x)=1$ then $I_{X}(x) = 0$, i.e. a certain event is perfectly unsurprising.
2. If $p_{X}(x_{1}) < p_{X}(x_{2})$ then $I_{X}(x_{1}) > I_{X}(x_{2})$, i.e. the more unlikely an event the more surprising.
3. If two independent events are measured, the total Shannon information gained is the sum of the Shannon information of the individual events.

> [!missing]- Proof
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
