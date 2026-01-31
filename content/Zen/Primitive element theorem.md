---
tags:
  - public
---
[[Simple extension]]
# Primitive element theorem

Every [[Finite field extension|finite]] [[separable extension]] $L : K$ is a [[simple extension]], i.e. $L = K(\vartheta)$ for some $\vartheta \in L$. #m/thm/field

> [!check]- Proof
> Arguing inductively, it suffices to prove that if $L=K(\alpha,\beta)$ with $\alpha,\beta$ [[Separable extension|separable elements]] over $K$, then $L$ is simple.
> We also assume that $K$ is infinite, since the finite case is covered by [[Finite extension of a Galois field]].
> 
> Suppose we have distinct [[Morphism of field extensions|morphisms of field extensions]] $\iota,\iota' \in \Fld_{K}(F, \overline{K})$.
> Then the [[Polynomial ring|polynomials]]
> $$
> \begin{align*}
> \iota(\alpha)x+\iota(\beta), \iota'(\alpha)x+\iota'(\beta) \in \overline{K}[x]
> \end{align*}
> $$
> are distinct, for otherwise $\iota(\alpha) = \iota'(\alpha)$ and $\iota(\beta) = \iota'(\beta)$ implying $\iota = \iota'$.
> Therefore the polynomial
> $$
> \begin{align*}
> f(x) = \prod_{\iota \neq \iota'} ((\iota(\alpha)x + \iota(\beta))- (\iota'(\alpha)x + \iota'(\beta))) \in \overline{K}[x]
> \end{align*}
> $$
> is not identically zero.
> Since $K$ is infinite, it follows that there exists a $c \in K$ so that the evaluation $f(c) \neq 0$.
> This means distinct $\iota \in \Fld_{K}(F,\overline{K})$ map $\gamma = c\alpha + \beta$ to distinct elements $\iota(\gamma) = \iota(\alpha)c + \iota(\beta)$.
> Since the cardinality of $\Fld_{K}(F, \overline{K})$ is the [[Separable degree of an extension|separable degree]] $[F:K]_{\mathrm{s}}$,
> and each $\iota(\gamma)$ is a root of the minimal polynomial of $\gamma$ over $K$, we have
> $$
> \begin{align*}
> [F:K]_{\mathrm{s}} \leq [K(\gamma):K] \leq [F:K].
> \end{align*}
> $$
> But by hypothesis the extension is separable, so the upper and lower bounds are equal,
> squeezing $[K(\gamma):K]=[F:K]$,
> whence $K(\gamma) = F$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
