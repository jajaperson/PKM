---
tags:
  - public
---
[[Group theory MOC]]
# Semidirect product

The **semidirect product** $N \rtimes A$ of groups is a generalization of the internal and external [[direct product of groups]]
where only one of the operands[^triangle] is required to be a [[normal subgroup]] of the resulting group. 
Semidirect products are a special case of [[group extension]], called a [[Group extension#^split]]
$$
\begin{align*}
1 \to N \hookrightarrow N \rtimes  A \twoheadrightarrow A \to 1
\end{align*}
$$
since the epimorphism [[Split epimorphism|splits]] (in fact all split extensions have this form up to equivalence).

[^triangle]: that to which the triangle points, so $N$ is normal in $N \rtimes A$ and $A \ltimes N$.

## Internal semidirect product

The simpler characterization is for the internal construction.
Let $N \trianglelefteq G$ and $A \leq G$ be subgroups, the first of which is normal,
such that $N \cap H = \{ e \}$ and $NH = G$.
Then $G$ is the **internal semidirect product** $N \rtimes A$. #m/def/group

## External semidirect product
For the external construction, let $N$ be a group and let $A$ be a group [[Group action|acting]] on $N$ by automorphisms,
i.e. equipped with a homomorphism $\varphi_{-} : A \to \Aut (N)$.
Then the **external semidirect product** $N \rtimes_{\varphi} A$ is the set $N \times A$ with group multiplication given by #m/def/group 
$$
\begin{align*}
(n,a)•(m,b) = (n \varphi_{a} (m) , ab)
\end{align*}
$$
the identity is $e = (e,e)$, and the inverse is $(n,a)^{-1}= (\varphi_{a^{-1}}(n^{-1}),a^{-1})$.

> [!check]- Proof of group
> For associativity, note
> $$
> \begin{align*}
> ((n,a)•(m,b)) • (l,c) 
> &= (n\varphi_{a}(m), ab) • (l,c)
> = (n\varphi_{a}(m) \varphi_{ab}(l),abc) \\
> &= (n\varphi_{a}(m\varphi_{b}(l),abc) = (n,a) • (m\varphi_{b}(l), bc) \\
> &= (n,a) • ((m, b) • (l,c))
> \end{align*}
> $$
> as required.
> For identity, note
> $$
> \begin{align*}
> (n,a) • (e,e) = (n, a) = (n,a) • (e,e)
> \end{align*}
> $$
> as required.
> For inverse, note
> $$
> \begin{align*}
> (n,a) • (\varphi_{a^{-1}}(n^{-1}),a^{-1}) &= (n \varphi_{a}(\varphi_{a^{-1}}(n^{-1})),aa^{-1}) \\
> &= (n\varphi_{aa^{-1}}(n^{-1}),e) = (nn^{-1},e) \\
> &= (e,e) \\
> (\varphi_{a^{-1}}(n^{-1}),a^{-1}) • (n,a) &= (\varphi_{a^{-1}}(n^{-1})\varphi_{a^{-1}}(n), a^{-1}a) \\
> &= (\varphi_{a^{-1}}(n^{-1}n),e) = (\varphi_{a^{-1}}(e),e) \\
> &= (e,e)
> \end{align*}
> $$
> as required.
> <span class="QED"/>

> [!info]- Right action convention
> If we instead have right actions, we define the product by $N \rtimes_{\varphi} H$
> $$
> \begin{align*}
> (n_{1},h_{1})(n_{2},h_{2}) = (n_{1}n_{2}^{(h_{1}^{-1})\varphi},h_{1}h_{2})
> \end{align*}
> $$
> for $n_{i} \in N$ and $h_{i} \in H$ with
> $$
> \begin{align*}
> (n,h)^{-1} = ((n^{-1})^{(h)\varphi},h^{-1})
> \end{align*}
> $$
> for $n \in N$, $h \in H$.

## Relationship between internal and external semidirect product

If $G$ is the internal semidirect product $N \rtimes A$,
then $G$ is isomorphic to the external semidirect product $N \rtimes_{\varphi} A$, #m/thm/group 
where $\varphi$ denotes the [[Conjugation by an element|conjugation action]] (which leave $N$ invariant by normality).

Likewise, if $G$ is the external semidirect product $N \rtimes_{\varphi} A$,
then 

- the subset $N_{G} = N \times \{ e_{A} \} \sube G$ is a normal subgroup isomorphic to $N$
- the subset $A_{G}= \{ e_{N} \} \times A \sube G$ is a subgroup isomorphic to $A$
- $G$ is the internal semidirect product $N_{G} \rtimes A_{G}$
- Conjugation of an element of $N_G$ by an element of $A_{G}$ is the group action $\varphi$.

Hence if the action $\varphi$ is trivial, then the semidirect product coïncides with the [[direct product of groups]].

> [!check]- Proof
> Let $N \trianglelefteq G$ be a normal subgroup and $A \sube G$ be subgroups such that $G = NA$ and $N \cap A = \{ e \}$.
> Since $N$ is normal it is invariant under $\mathrm{Inn}(G)$, so conjugation by elements of $A$ is a group action on $N$, which we denote $\varphi$.
> Let $\tilde{G} = N \rtimes_{\varphi} A$, and $\Psi: \tilde{G} \to G : (n,a) \mapsto na$.
> Then for any $n,m \in N$ and $a,b \in A$
> $$
> \begin{align*}
> \Phi((n,a)•(m,b)) 
> &= \Phi(n\varphi_{a} m,ab)
> = \Phi(nama^{-1},ab) \\
> &= nama^{-1}ab = namb \\
> &= \Phi(n,a)\Phi(m,b)
> \end{align*}
> $$
> hence $\Phi$ is a [[Group homomorphism|homomorphism]], in particular it is an [[Group epimorphism|epimorphism]] $NA = G$.
> Now let $n \in N$ and $a \in A$ such that $\Phi(n,a) = na = e$.
> It follows that $n = a^{-1}$, so both $N$ and $A$ must contain $n$,
> which can only be true if $n = a = e$.
> Therefore $\Phi$ is a [[Group monomorphism|monomorphism]] and thus an isomorphism.
> 
> Now let $N,A$ be arbitrary groups, $\varphi_{-} : A \to \Aut(N)$ be a (left) [[group action]] of $A$ on $N$, and $G = N \rtimes_{\varphi} A$.
> Furthermore let $N_{G} = N \times \{ e \}$ and $A_{G} = \{ e \} \times A$ as sets.
> Since $(n,e) • (m,e) = (nm,e)$ for any $n,m \in N$,
> and likewise $(e,a)•(e,b) = (e,ab)$, it is clear that $N_{G}$ and $A_{G}$ are subgroups of $G$ isomorphic to $N$ and $A$ respectively.
> 
> Note that 
> $$
> N_{G}A_{G} = (N, e) • (e, A) = (\varphi_{A}N, A) = (N,A)
> $$
> so $G = N_{G}A_{G}$.
> 
> Let $n \in N$ and $a \in A$.
> Then
> $$
> \begin{align*}
> (e,a)•(n,e) • (e,a)^{-1} &= (e,a) • (n,e) • (e, a^{-1}) \\
> &= (\varphi_{a}(n), a) • (e, a^{-1}) \\
> &= (\varphi_{a}(n),e)
> \end{align*}
> $$
> as claimed above.
> This also shows that $N_{G} \trianglelefteq G$,
> since conjugating by any element is equivalent to conjugating by an element of $N$, and then conjugating by an element of $A$.
> Clearly $N_{G} \cap A_{G} = \{ (e,e) \}$,
> so $G = N_{G} \ltimes A_{G}$ internally.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
