---
tags:
  - public
aliases:
  - Galois correspondence
---
[[Field theory MOC]]
# Fixed field of an automorphism group

Let $F:K$ be a [[field extension]] and $G \leq \Aut(F:K)$ be a group of [[Automorphism of a field extension|field extension automorphisms]].
The **fixed field** of $G$ is the [[Intermediate field extension|intermediate field]] #m/def/field 
$$
\begin{align*}
F^G := \{ \alpha \in F : (\forall g \in G)[g\alpha = \alpha] \}
\end{align*}
$$

The induced correspondence from intermediate fields $F : E : K$ to subgroups of $G \leq \Aut(F:K)$ is called the **Galois correspondence**, which is an example of a [[Galois connection]] in that it is order-reversing:
$$
\begin{align*}
F^G \leq F^H \iff H \leq G.
\end{align*}
$$
Moreover, for any $G \leq \Aut(F:K)$ and $F : E : K$,
$$
\begin{align*}
E &\leq F^{\Aut(F : E)}, & G &\leq \Aut(F:F^G) ;
\end{align*}
$$
Further still, if $G_{1},G_{2} \leq \Aut(F:K)$ and $F : E_{1},E_{2} : K$,
$$
\begin{align*}
\Aut(F:E_{1}E_{2}) &= \Aut(F:E_{1}) \cap \Aut(F:E_{2}), \\
F^{\langle G_{1},G_{2} \rangle } &= F^{G_{1}} \cap F^{G_{2}};
\end{align*}
$$
where $E_{1}E_{2}$ and $\langle G_{1},G_{2} \rangle$ are the generated fields and groups respectively.

> [!check]- Proof
> The only of these which is not immediate are the last ones.
> Suppose $\sigma \in \Aut(F:E_{1}) \cap \Aut(F:E_{2})$.
> Then $\sigma$ must also fix anything which can be written as a product of elements in $E_{1}$ ands $E_{2}$, hence $\sigma \in \Aut(F:E_{1}E_{2})$,
> and therefore $\Aut(F:E_{1}) \cap \Aut(F:E_{2}) \leq \Aut(F:E_{1}E_{2})$.
> Since $E_{1},E_{2} \leq E_{1}E_{2}$, the other inclusion is immediate.
> 
> Similarly, suppose $\alpha \in F^{G_{1}} \cap F^{G_{2}}$.
> Then $\alpha$ must be fixed by any product of elements from $G_{1}$ and $G_{2}$,
> hence $\alpha \in F^{\langle G_{1},G_{2} \rangle}$.
> Since $G_{1},G_{2} \leq \langle G_{1},G_{2} \rangle$, the other inclusion is immediate. <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr
