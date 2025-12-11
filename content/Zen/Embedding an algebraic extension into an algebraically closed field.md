---
tags:
  - public
---
[[Algebraically closed field]]
# Embedding an algebraic extension into an algebraically closed field

Assume [[Zorn's lemma]].
If $L:K$ is a field extension with $L$ [[Algebraically closed field|algebraically closed]] and $F:K$ is any [[Algebraic element|algebraic extension]], then there exists a [[morphism of field extensions]]
$$
\begin{align*}
i_{F} \in \cat{Fld}_{K}(F,L)
\end{align*}
$$

> [!check]- Proof
> Consider the restricted [[Poset of intermediate extensions]]
> $$
> \begin{align*}
> Z = \{ (M,i_{M}) \mid K : M : F, \; i_{M} \in \cat{Fld}_{K}(M, L)  \}
> \end{align*}
> $$
> where we note all fields in $Z$ are algebraic extensions of $K$.
> We show that every [[Poset#^chain]] $C$ in $Z$ has an upper bound.
> Let $M_{C} = \bigcup_{(M,i_{M}) \in Z} M$ which is a field.
> If $\alpha \in M_{C}$, then we define $i_{M_{C}}(\alpha) = i_{M}(\alpha) \in L$ for some $(M, i_{M}) \in C$,
> which is clearly independent of the choice of $M$.
> Then $(M_{C}, i_{M_{C}}) \in Z$ is an upper bound of $C$.
> 
> By [[Zorn's lemma]], $Z$ has a maximal element $(G,i_{G})$.
> Since $G$ is algebraic,
> $$
> \begin{align*}
> H:=i_{G}(G) \leq \overline{K} = (L:K)^\circ \leq L
> \end{align*}
> $$
> We claim that $H = F$, whence $i_{F} = i_{H} \in \cat{Fld}_{K}(F,L)$ is the desired morphism.
> $$
> \begin{matrix}
> L \\
> | \\
> (L:K)^\circ & \geq H = i_{G}(G) \cong G\\
> | \\
> F \\
> \parallel \\
> G  \\
> | \\
> M \\
> | \\
> K
> \end{matrix}
> $$
> 
> Suppose towards contradiction there exists $\alpha \in F \setminus G$ and consider the [[simple extension]] $G(\alpha) : G$.
> Since $\alpha \in F$ is algebraic over $K$, it is algebraic over $G$,
> thus it is the root of an irreducible $p(x) \in G[x]$.
> Abusing notation to invoke the induced homomorphism
> $$
> \begin{align*}
> i_{G} : G[x] \to H[x]
> \end{align*}
> $$
> let $h(x) = i_{G}(g(x))$, which is irreducible over $H$,
> and has a root $\beta$ in $L$ — here we use that $L$ is algebraically closed.
> Now by [[Simple extension#^P2]], the isomorphism $i_{G} : G \to H$ lifts to an isomorphism 
> $$
> \begin{align*}
> i_{G(\alpha)} : G(\alpha) \to H(\beta) \leq L
> \end{align*}
> $$
> sending $\alpha$ to $\beta$, contradicting the maximality of $(G, i_{G})$.
> Therefore $G=F$, and we're done. <span class="QED"/>

This lemma is used to prove uniqueness of the [[Algebraic closure]].

#
---
#state/tidy | #lang/en | #SemBr
