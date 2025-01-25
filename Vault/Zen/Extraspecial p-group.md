---
mathLink: Extraspecial $p$-group
tags:
  - public
---
[[p-group]]
# Extraspecial p-group

A [[p-group]] $P$ is called **extraspecial** iff its [[Centre of a group|centre]] $Z(P)$ has order $p$,
and the quotient $P / Z(P)$ is a nontrivial [[Elementary abelian group|elementary abelian]] $p$-group, #m/def/group 
so if $\abs P = p^n$
$$
\begin{align*}
Z(P) &= [P,P] \cong \mathbb{Z}^+_{p} \\
P / Z(P) &\cong (\mathbb{Z}_{p}^+)^{n-1}
\end{align*}
$$
where $[P,P]$ is the [[commutator subgroup]] of $P$.
Equivalently, $P$ is a [[Central extension of an abelian group|central extension]] of the form
$$
\begin{align*}
1 \to \mathbb{Z}_{p}^+ \hookrightarrow P \twoheadrightarrow E \to 1
\end{align*}
$$
where $E$ is an [[Elementary abelian group]]
such that the [[Central extension of an abelian group|associated commutator map]] $c_{0}: E \times E \to \mathbb{Z}_{p}$ is a [[Bilinear form#^nondegenerate]] $\mathbb{Z}_{p}$-[[bilinear form]].

> [!check]- Proof
> Assume $P$ is a $p$-group with $Z(P) \cong \mathbb{Z}_{p}^+$ and $P / Z(P) \cong (\mathbb{Z}_{p}^+)^{n-1}$.
> Then by the [[Abelianization#Main theorem|Main theorem of abelianization]], $[P,P] \trianglelefteq Z(P)$.
> Assume $Z(P) \not\trianglelefteq [P,P]$.
> Then $[P,P] = 1$, which implies $Z(P) = P$ whence $P / Z(P) = 1$, a contradiction.
> Therefore $Z(P) = [P,P]$.
> 
> Now the commutator map $c_{0} : E \times E \to \mathbb{Z}_{p}^+$ is nondegenerate iff for $a \in E$,
> $$
> \begin{align*}
> c_{0}(a,E) = 0 \implies a = 0
> \end{align*}
> $$
> but
> $$
> \begin{align*}
> \mathrm{e}^{c_{0}(a,E)}  = [s_{a},s_{E}] = [s_{a} \mathrm{e}^{\mathbb{Z}_{p}^+}, s_{E} \mathrm{e}^{\mathbb{Z}_{p}^+}] = [\pi^{-1}\{ a \}, P] = 1 
> \end{align*}
> $$
> implies $\pi^{-1} \{ a \} \sube Z(P)$, in which case $a = 0$, as required. <span class="QED"/>

## Special cases

- [[Z2 central extension of an elementary abelian 2-group]]

#
---
#state/tidy | #lang/en | #SemBr
