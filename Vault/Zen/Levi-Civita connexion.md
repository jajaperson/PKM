---
tags:
  - public
---
[[Affine connexion]]
# Levi-Civita connexion

Let $(M,g_{ab})$ be a [[semi-Riemannian manifold]].
The **Levi-Civita connexion** $\nabla$ is the _unique_ [[affine connexion]] on $M$ 
which is [[Torsion tensor|torsion-free]]
and compatible with the [[Semi-Riemannian manifold|metric tensor]] in the sense that
$$
\begin{align*}
\nabla_{c}g_{ab} = 0,
\end{align*}
$$
i.e. $g_{ab}$ is _covariantly constant_.

> [!check]- Proof of existence and uniqueness
> Let $\tilde{\nabla}$ be any [[Torsion tensor|torsion-free]] [[affine connexion]],
> which must exist at least locally since we may consider [[partial derivative as a local affine connexion]].
> We solve for the [[connexion disagreement tensor]] $C^c{}_{ab}$ of $\nabla$ with $\tilde{\nabla}$
> so that the former is Levi-Civita.
> By [[Connexion disagreement tensor#Covariant derivative disagreement on tensor fields]] we have
> $$
> \begin{align*}
> 0 
> &= \nabla_{c} g_{ab}
> = \tilde{\nabla}_{c}g_{ab} - C^d{}_{ca} \,g_{db} - C^d{}_{cb}\,g_{ad}
> \end{align*}
> $$
> or after [[Raising and lowering of indices|lowering indices]]
> $$
> \begin{align*}
> C_{bca} + C_{acb} = \tilde{\nabla}_{c} g_{ab}.
> \end{align*}
> $$
> By [[Connexion disagreement tensor#^P1]] we have
> $$
> \begin{align*}
> 2C_{cab} = \tilde{\nabla}_{a}g_{bc} + \tilde{\nabla}_{b}g_{ac} - \tilde{\nabla}_{c}g_{ab}.
> \end{align*}
> $$
> which fully determines $\nabla$.[^2009]

From the above proof we see that $\nabla$ is related to any other affine connexion $\tilde{\nabla}$ by the [[connexion disagreement tensor]]
$$
\begin{align*}
C_{cab} = \tfrac 1 2 (\tilde{\nabla}_{a}g_{bc} + \tilde{\nabla}_{b}g_{ac} - \tilde{\nabla}_{c}g_{ab})
\end{align*}
$$
so that
$$
\begin{align*}
\nabla_{a}X^b = \tilde{\nabla}_{a}X^b + C^b{}_{ac}X^c.
\end{align*}
$$
In particular this gives the [[Christoffel symbols]] as the [[Connexion disagreement tensor|connexion coëfficients]].

  [^2009]: 2009\. [[Sources/@waldGeneralRelativity2009|General relativity]], theorem 3.1.1, pp. 35–36.

## Properties

Consider the [[Riemannian curvature]] $R^c{}_{dab}$ associated to $\nabla$,
along with the [[Ricci curvature]] $R_{ab}$ and [[scalar curvature]] $R$.

1. $R_{abcd} = R_{[ab]cd}$, i.e. $R_{abcd} = -R_{bacd}$.
2. $R_{abcd} = R_{cdab}$.
3. $R_{ab} = R_{(ab)}$, i.e. $R_{ab} = R_{ba}$.
4. **Bianchi identity II.** $\nabla_{a} R^d{}_{ebc} + \nabla_{b}R^d{}_{eca} + \nabla_{c}R^d{}_{eab} = 0$.
5. The number of independent components in $R_{cdab}$ is $\tfrac{1}{12} m^2(m^2-1)$ for a manifold of dimension $m$.
   In particular we have $0,1,6,20$ for $m=1,2,3,4$ respectively.
6. If $R^c{}_{dab}$ vanishes, then there exist local coördinate systems with the metric $g_{\mu\nu} = \eta_{\mu\nu}$.

> [!missing]- Proof
> #missing/proof

#
---
#state/tidy | #lang/en | #SemBr
