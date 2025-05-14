---
aliases:
  - tensor irrep
tags:
  - public
---
[[Complex general linear group]]
# Tensor representation

Let $\Gamma$ be the defining representation of $\mathrm{GL}_{N}(\mathbb{C})$.
A **tensor representation** of $\mathrm{GL}_{N}(\mathbb{C})$ is a [[Reducibility of representations|subrepresentation]] of $\Gamma^{\otimes n}$ for some $n \in \mathbb{N}$. #m/def/rep/lie
[[#Weyl's construction]] associates every tensor irrep for fixed $N$ to a Young diagram.

## Weyl's construction

Let $V = \mathbb{C}^N$, $\mathrm{GL}_{N}(\mathbb{C})$ act on $V^{\otimes n}$ by $\Gamma^{\otimes n}$ and $S_{n}$ act on $V^{\otimes n}$ by the permutation representation $D$.
In addition let $\mathbb{C}[S_{n}]$ act by the corresponding [[∗-representation of the complex group ring|∗-representation]].

Let $Y$ be the set of [[Young diagram|Young diagrams]] of $n$ boxes and at most $N$ rows.
For each $\lambda \in Y$ let $L_{\lambda}= \mathbb{C}[S_{n}] * \mathfrak{e}_{\lambda}$ be the corresponding [[Ideal of the complex group ring|minimal left ideal]] with basis $\{ f_{\lambda}^{\beta} \}_{\beta=1}^{d_{\lambda}}$.
For a given $\ket{v} \in V^{\otimes n}$, $\{ f_{\beta} v \}_{\beta=1}^{d_{\lambda}}$ either vanish or transform in the irrep $D^\lambda$ (see below).
Let $\{\ket{v_{\lambda}^\alpha} \}_{\alpha=1}^{m_{\lambda}}$ be a complete[^comp] set of tensors such that each $f_{\lambda}^\beta \ket{v_{\lambda}^\alpha}$ is unique.
Then
$$
\begin{align*}
\ket{\lambda,\alpha,\beta} = f_{\lambda}^\beta \ket{v_{\lambda}^\alpha} 
\end{align*}
$$
form an [[irreducible orthonormal basis]] under both $\mathrm{GL}_{N}(\mathbb{C})$ and $S_{n}$,
where
$$
\begin{align*}
T_{\lambda}(\alpha) = \Span \{ \lambda,\alpha,\beta \}_{\beta=1}^{d_{\lambda}}
\end{align*}
$$
is a $d_{\lambda}$-dimensional irreducible invariant subspace under $S_{n}$ and
$$
\begin{align*}
T'_{\lambda}(\beta) = \Span \{ \lambda,\alpha,\beta \}_{\alpha=1}^{m_{\lambda}}
\end{align*}
$$
is a $m_{\lambda}$-dimensional irreducible invariant subspace transforming under $\mathrm{GL}_{N}(\mathbb{C})$ in an irrep henceforth labeled $\Gamma^\lambda$.
Thus
$$
\begin{align*}
V^{\otimes n} = \bigoplus _{\lambda \in Y} \bigoplus_{\alpha =1}^{m_{\lambda}} T_{\lambda}(\alpha) = \bigoplus _{\lambda \in Y} \bigoplus _{\beta=1}^{d_{\lambda}} T'_{\lambda}(\beta)
\end{align*}
$$
where $d_{\lambda}$ is given by the [[Hook length formula]] and $m_{\lambda}$ is given by [[Stanley's hook content formula]].

[^comp]: In the sense that all such that all such subspaces are generated.


> [!check]- Proof of vanishing property
> For $\ket{v} \in T_{\lambda}(\alpha)$ there exists some $r \in L_{\lambda}$ s.t. $\ket{v} = r \ket{v_{\lambda}^\alpha}$.
> Then $p \ket{v_{\lambda}^\alpha} = pr \ket{v_{\lambda}^\alpha} \in T_{\lambda}(\alpha)$ for $p \in S_{n}$ since $pr \in L_{\lambda}$, giving invariance.
> Clearly $\{f_{\lambda}^\beta\ket{v_{\lambda}^\alpha} \}_{\beta=1}^{d_{\lambda}}$ is a basis of $T_{\lambda}(\alpha)$.
> We define a matrix representation $D^\lambda_{ij}$ by
> $$
> \begin{align*}
> p f_{\lambda}^i = f_{\lambda}^j D^\lambda_{ji}(p)
> \end{align*}
> $$
> with summation convention.
> Then
> $$
> \begin{align*}
> pf_{\lambda}^{i} \ket{v_{\lambda}^\alpha} = f_{\alpha}^{j}D^\lambda_{ji}(p) \ket{v_{\lambda}^\alpha} = f_\lambda^{j} \ket{v_{\lambda}^\alpha} D^\lambda_{ji}(p) 
> \end{align*}
> $$
> as required.
> <span class="QED"/>

> [!missing]- Proof
> #missing/proof See [[07 Tensor method for constructing irreps of GL(n) and subgroups]] for discussion.

## Tensor representations of $\mathrm{U}(N)$ and $\mathrm{SU}(N)$

[[Every irrep of GLₙ(ℂ) is an irrep of U(n) and SU(n)]], so tensor irreps given above are also tensor irreps for these subgroups.
However, since each column of length $N$ corresponds to the determinant representation, which is trivial for $\mathrm{SU}(N)$, such columns may be removed without changing the representation up to equivalence.

## Properties

- [[Product of tensor representations]]
- Conjugate representations of $\mathrm{SU}(N)$ are given by completing every column to be of length $N$, and rotating the added shape 90°.

#
---
#state/develop | #lang/en | #SemBr
