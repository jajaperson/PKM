---
aliases:
  - centralizer group
tags:
  - public
---
[[Group theory MOC]]
# Centralizer in a group
The **centralizer** $C_{G}(a)$ of an element $a \in G$ is a [[Subgroup]] of $G$ containing all elements that commute with $a$,[^gallian] #m/def/group 
i.e.
$$
\begin{align*}
C_{G}(a) = \{ b \in G \mid ab = ba \}
\end{align*}
$$
[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 68

More generally, the **centralizer** $C_{G}(S)$ of any set $S \sube G$ contains elements which commute with the whole of $S$, i.e.
$$
\begin{align*}
C_{G}(S) = \{ x \in G : (\forall s \in S)[xs = sx] \}
\end{align*}
$$

> [!check]- Proof of subgroups
> Let $a \in G$.
> Clearly $e \in C(a)$,
> Given any $b,c \in C(a)$,
> clearly $(bc)a = b(ca) = b(ac) = (ba)c = (ab)c = a(bc)$,
> hence $C(a)$ is closed under the binary operation.
> Similarly, $ab = ba$ may be both pre- and postmultiplied by $b^{-1}$ to obtain $b^{-1}a = ab^{-1}$,
> so $C(a)$ is closed under the inverse operation.
> Hence $C(a)$ is a subgroup of $G$ by [[Subgroup#Two step subgroup test]].
> 
> Since [[the intersection of subgroups is a subgroup]], $C_{G}(S) = \bigcap_{s \in S} C_{G}(s)$ must also be a subgroup. <span class="QED"/>


A related notion is the [[Centre of a group]] $Z(G) = C_{G}(G)$,
which includes only those elements that commute with all group elements.

## Additional properties

- Clearly the centraliser itself need not be abelian,
  since the centraliser of any $z \in Z(G)$ will be the entire group.
  For example, in the non-abelian group $D_{4}$, the centraliser $C(R_{180^º}) = D_{4}$.

#
---
#state/tidy | #lang/en | #SemBr 