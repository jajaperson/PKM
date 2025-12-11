---
aliases:
  - irreducible vector
tags:
  - public
---
[[Group representation theory MOC]]
# Irreducible orthonormal basis

Let $\Gamma : G \to \mathrm{GL}(V)$ be a [[unitary representation]] of a finite group with decomposition
$$
\begin{align*}
\Gamma \cong \bigoplus_{\nu \in \widehat{G}} a_{\nu} \Gamma^\nu
\end{align*}
$$
and let $\{ e_{\beta}^{\nu\alpha} \}_{\alpha,\beta=1}^{a_{\nu} d_\nu} \sube V$ be an [[orthonormal basis]] transforming under $G$ in[^term] a unitary [[irrep]] $\Gamma^\nu$ for each $\nu$, i.e. for all $g \in G$
$$
\begin{align*}
\Gamma(g) e_{\beta'}^{\nu\alpha} = \sum_{\beta=1}^{d_{\nu}}  e_{\beta}^{\nu\alpha} \Gamma_{\beta \beta'}^{\nu}(g)
\end{align*}
$$
then $\braket{ e^{\nu\alpha}_{\beta} | e^{\mu\alpha'}_{\beta'} } = \delta_{\nu\mu}\delta_{\alpha\alpha'}\delta_{\beta\beta'}$.[^keppler] #m/thm/rep


> [!check]- Proof
> Applying [[Orthonormality of irreps|orthogonality or irreps]] on the third line:
> $$
> \begin{align*}
> \braket{ \psi^\nu_{\alpha} | \psi^\mu_{\beta} } &= \frac{1}{\abs G} \sum_{g \in G} \braket{ \Gamma(g)\psi^\nu_{\alpha} | \Gamma(g)\psi^\mu_{\beta} } \\
> &= \frac{1}{\abs G} \sum_{g \in G} \braket{ \sum_{\gamma = 1}^{d_{\nu}} \psi_{\gamma}^\nu \Gamma_{\gamma\alpha}^\nu(g) | \sum_{\gamma'=1}^{d_{\mu}} \psi_{\gamma'}^\mu \Gamma_{\gamma'\beta}^\mu(g) } \\
> &= \sum_{\gamma=1}^{d_{\nu}}\sum_{\gamma'=1}^{d_{\mu}} \frac{1}{\abs G} \sum_{g \in G} \overline{\Gamma_{\gamma\alpha}^\nu(g)} \Gamma_{\gamma'\beta}^\mu(g) \braket{ \psi^\nu_{\gamma} | \psi^\mu_{\gamma'} } \\
> &= \sum_{\gamma=1}^{d_{\nu}}\sum_{\gamma'=1}^{d_{\mu}} \frac{1}{d_{\nu}} \delta_{\nu\mu}\delta_{\gamma\gamma'}\delta_{\alpha\beta} \braket{ \psi^\nu_{\gamma} | \psi^\mu_{\gamma'}} \\
> &= \frac{1}{d_{\nu}} \sum_{\gamma = 1}^{d_{\nu}} \delta_{\nu\mu}\delta_{\alpha\beta} \braket{ \psi^\nu_{\gamma} | \psi^\nu_{\gamma} } \\
> &= \delta_{\nu\mu}\delta_{\alpha\beta}
> \end{align*}
> $$
> as required.
> <span class="QED"/>

$e^{\nu\alpha}_{\beta}$ are thus called **irreducible basis vectors** transforming under irrep $\Gamma^\nu$.
Every $\psi \in V$ may then be expressed as such, with
$$
\begin{align*}
\psi = \sum_{\nu;\alpha,\beta} c^{\nu\alpha}_{\beta}e^{\nu\alpha}_{\beta}
\end{align*}
$$
and the application of $\Gamma$ gives
$$
\begin{align*}
\Gamma(g) \psi = \sum_{\nu;\alpha,\beta,\beta'} c^{\nu\alpha}_{\beta} e^{\nu\alpha}_{\beta'} \Gamma^{\nu}_{\beta'\beta}(g)
\end{align*}
$$
which motivates the [[Generalized projection operator of a representation]].


[^keppler]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], p. 44 (§4.1 lemma 8)
[^term]: the invariant subspace of $\Gamma$ corresponding to

## Explanation

Irreducible basis functions $e^\nu_{\beta}$ have special symmetry properties under $G$,
and the above theorem basically states these functions are orthogonal to each other.


#
---
#state/tidy | #lang/en | #SemBr
