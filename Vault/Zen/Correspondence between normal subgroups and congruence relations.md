---
tags:
  - public
---
[[Normal subgroup]]
# Correspondence between normal subgroups and congruence relations

A [[Normal subgroup]] $N \triangleleft G$ uniquely defines a [[congruence relation]] $\equiv$ on $G$ and vice versa, #m/thm/group 
such that $[e]_{\equiv} = N$,
and for any $g \in G$ the congruence classes correspond to cosets of $N$:
$$
\begin{align*}
[g]_{\equiv} = gN = Ng
\end{align*}
$$

> [!check]- Proof
> First, we will prove that $[e]_{\equiv}$ is a subgroup.
> Clearly $e \in [e]_{\equiv}$.
> Let $a,b \in [e]_{\equiv}$, i.e. $a \equiv b \equiv e$.
> Then $ab^{-1} \equiv b b^{-1} = e$
> and therefore $ab^{-1} \in [e]_{\equiv}$.
> Therefore $[e]_{\equiv}$ is a subgroup by [[Subgroup#One step subgroup test]].
> 
> Next, we will show that $N =[e]_{\equiv}$ is a [[Normal subgroup]].
> Let $g \in G$ and $n \in N$.
> Then $gng^{-1} \equiv geg^{-1} = e$
> and thus $gng^{-1} \in N$.
> Hence $gNg^{-1} = N$ for any $g \in G$,
> Therefore $N$ is normal.
> 
> Finally we show the equivalence between (left) cosets of $N$ and congruence classes.
> For any $g,h \in G$
> $$
> \begin{align*}
> &h \in [g]_{\equiv} \\
> \iff &h \equiv g \\
> \iff &g^{-1}h \equiv e \\
> \iff &g^{-1}h \in N \\
> \iff &h \in gN
> \end{align*}
> $$
> as required.
> <span class="QED"/>

As a result of this theorem,
normal subgroups may be used to form a [[Quotient group]] (following the usual notion of [[Algebraic quotient]])
where each coset is taken as a group element.

#
---
#state/tidy | #lang/en | #SemBr
