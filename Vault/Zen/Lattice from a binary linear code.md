---
tags:
  - public
---
[[Binary linear code]]
# Lattice from a binary linear code

Let $\mathcal{C} \leq \mathcal{P}(\Omega)$ be a [[binary linear code]] and $\mathbb{K}$ be a field with [[Characteristic|$\opn{char}\mathbb K = 0$]].
and let $\mathbb{K}[\Omega]$ be the [[free module]] so that
$$
\begin{align*}
\mathbb{K}[\Omega] = \bigoplus _{k \in \Omega} \mathbb{K} \alpha_{k}
\end{align*}
$$
which we make a [[quadratic space]] with the bilinear form
$$
\begin{align*}
\langle \alpha_{k}, \alpha_{\ell} \rangle = 2[k=\ell]
\end{align*}
$$
where we have used an [[Iverson bracket]],
and we take $\mathbb{Z}[\Omega] \leq_{\Ab} \mathbb{K}[\Omega]$ in the natural way.
For $S \sube \Omega$ define
$$
\begin{align*}
\alpha_{S} = \sum_{k \in S} \alpha_{k}
\end{align*}
$$
then the **associated lattice** $L_{\mathcal{C}}$ of $\mathcal{C}$ is the [[rational lattice]] #m/def/code
$$
\begin{align*}
L_{\mathcal{C}} = \sum_{C \in \mathcal{C}} \mathbb{Z} \frac{1}{2} \alpha_{C} + \mathbb{Z}[\Omega]
= \left\{  \sum_{k \in \Omega}m_{k}\alpha_{k} : m_{k} \in \frac{1}{2}\mathbb{Z}, \left\{  k : m_{k} \in \mathbb{Z} + \frac{1}{2}  \right\} \in \mathcal{C}  \right\}
\end{align*}
$$
so the [[Dual of a rational lattice|dual lattice]] is the lattice of the [[orthogonal code]][^1988]
$$
\begin{align*}
L_{\mathcal{C}}^\circ = \sum_{C \in \mathcal{C}^\perp} \mathbb{Z} \frac{1}{2} \alpha_{C} + \mathbb{Z}[\Omega]
= \left\{  \sum_{k \in \Omega}m_{k}\alpha_{k} : m_{k} \in \frac{1}{2}\mathbb{Z}, \left\{  k : m_{k} \in \mathbb{Z} + \frac{1}{2}  \right\} \in \mathcal{C}^\perp  \right\}
\end{align*}
$$

> [!tip]- Informal explanation
> We start with the lattice $\mathbb{Z}[\Omega]$ and add points at half-odd coördinates corresponding to codewords.
> The $\mathbb{Z}_{2}$-linearity of $\mathcal{C}$ is compatible with $L_{\mathcal{C}}$,
> since $\0 \in \mathcal{C}$ corresponds to the $\mathbb{Z}[\Omega]$ lattice points, and for any $C,D \in \mathcal{C}$
> $$
> \begin{align*}
> \frac{1}{2} \alpha_{C} + \frac{1}{2}\alpha_{D} + \mathbb{Z}[\Omega] = \frac{1}{2}\alpha_{C+D} + \mathbb{Z}[\Omega]
> \end{align*}
> $$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §10.2, pp. 302–303

## Properties

- $\mathcal{C}$ is [[Orthogonal code|self-orthogonal]] of [[FLM code types I and II|FLM type II]] iff $L_{\mathcal{C}}$ is [[Unimodular lattice|type II unimodular]].

#
---
#state/develop | #lang/en | #SemBr
