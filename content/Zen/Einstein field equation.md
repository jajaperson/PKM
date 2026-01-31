---
tags:
  - public
---
[[General relativity MOC]]
# Einstein field equation

The **Einstein field equation** is the extremal to the [[Einstein-Hilbert action]].
We have
$$
\begin{align*}
G_{ab} + \Lambda g_{ab} = \kappa T_{ab}
\end{align*}
$$
where $G_{ab} := R_{ab} - \tfrac 1 2 R g_{ab}$ is the [[Einstein tensor]], $T_{ab}$ is the [[Stress-energy tensor]], $\Lambda$ is the [[Cosmological constant]], and
$$
\begin{align*}
\kappa = \frac{8\pi G}{c^4} \approx \pu{2.07665E-43 N-1}
\end{align*}
$$
is the Einstein gravitational constant.

> [!missing]- Proof
> #missing/proof

## Einstein field equation in vacuum

In a vacuum $T_{ab} = 0$, so the Einstein field equation becomes $G_{ab} = \Lambda g_{ab}$.
On a manifold $M$ of dimension $m \neq 2$ this becomes
$$
\begin{align*}
R_{ab} = \frac{2\Lambda}{n-2} g_{ab}.
\end{align*}
$$

> [!check]- Proof
> We have
> $$
> \begin{align*}
> 0 &= R_{ab} - \tfrac 1 2 R g_{ab} + \Lambda g_{ab}.
> \end{align*}
> $$
> Contracting with $g^{ab}$, we have
> $$
> \begin{align*}
> 0 &= (1 - \tfrac n 2) R + n\Lambda \\
> \implies R &= \frac{2n\Lambda}{n-2}
> \end{align*}
> $$
> so the Einstein field equation becomes
> $$
> \begin{align*}
> 0 &= R_{ab} - \frac{n\Lambda}{n-2}g_{ab} + \Lambda g_{ab} 
> = R_{ab}  - \frac{2\Lambda}{n-2} g_{ab}
> \end{align*}
> $$
> giving the claimed equation. <span class="QED"/>

Thus solutions to the Einstein field equation in a vacuum for arbitrary $\Lambda$
are precisely those for which the [[Ricci curvature]] is proportional to the [[Semi-Riemannian manifold|metric tensor]].
Such a manifold is called an [[Einstein manifold]].
In particular, for $\Lambda = 0$, we see the solution is precisely a [[Ricci curvature|Ricci flat]] metric.

#
---
#state/develop | #lang/en | #SemBr
