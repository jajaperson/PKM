---
tags:
  - public
---
[[Representation operator]]
# Wigner-Eckart theorem

Let $U : G \to \mathrm{GL}(V)$ be a [[unitary representation]] with its [[Decomposition of a representation|decomposition into irreps]].
Let $\{ \mathcal{O}^\mu_{i} \}_{i=1}^{d_{\mu}}$ be [[Representation operator|irreducible operators]] transforming in $\Gamma^\mu$ and $\{ \ket{e^{\nu\alpha}_{j}} \}_{i=1}^{d_{\nu}}$ be an [[irreducible orthonormal basis]] transforming in $\Gamma^{\nu}$.
Following [[Irreducible operators applied to an irreducible orthonormal basis transform in the product representation]], let $\ket{i,j}$ denote $\mathcal{O}^{\mu}_{i} \ket{e^{\nu\alpha}_{j}}$,
and $\ket{w^{\lambda\gamma}_{\ell}} = \ket{\gamma,\lambda,\ell}$ denote the decomposed basis for the product.
Then[^kep] #m/thm/rep
$$
\begin{align*}
\bra{e^{\lambda\alpha}_{\ell}} \mathcal{O}^\mu_{i} \ket{e^{\nu\beta}_{j}} = \sum_{\gamma} \braket{ \gamma,\lambda,\ell (\mu,\nu) i,j  } \braket{  \alpha, \lambda {\|} \mathcal{O}^\mu {\|} \beta, \nu   }_{\gamma}  
\end{align*}
$$
where the so-called **reduced matrix element** is given by
$$
\begin{align*}
\braket{  \alpha,\lambda {\|} \mathcal{O}^\mu {\|} \beta,\nu   }_{\gamma} 
= \frac{1}{d_{\lambda}} \sum_{k} \braket{ e^{\lambda\alpha}_{k} | \gamma,\lambda, k } 
\end{align*}
$$
[^kep]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], §4.2, pp. 54–55

> [!check]- Proof
> Both $\{ \ket{e^{\mu\alpha}_{i}} \}_{i=1}^{d_{\mu}}$ and $\{ \ket{\gamma,\lambda,\ell} \}_{\lambda=1}^{d_{\lambda}}$ are [[Irreducible orthonormal basis]] vectors, but may not coïncide exactly for each irreducible invariant subspace, hence the reduced matrix element:
> $$
> \begin{align*}
> \bra{e^{\lambda\alpha}_{\ell}} \mathcal{O}^\mu_{i} \ket{e^{\nu\beta}_{j}} &= \sum_{\rho;\gamma,m} \braket{ e^{\lambda\alpha}_{\ell} | \gamma,\rho,m }  \braket{ \gamma,\rho,m | i,j  } \\
> &= \sum_{\rho;\gamma,m} \braket{ \gamma,\rho,m | i,j  } \frac{1}{d_{\lambda}} \sum_{k} \braket{ e^{\lambda\alpha}_{k} | \gamma,\lambda,k } \\
> &= \sum_{k} \braket{ e^{\lambda\alpha}_{k} | \gamma,\lambda,k } \braket{  \alpha,\lambda {\|} \mathcal{O}^\mu {\|} \beta,\nu   }_{\gamma} 
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
