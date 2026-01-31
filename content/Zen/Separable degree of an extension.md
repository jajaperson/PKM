---
tags:
  - public
aliases:
  - separable degree
---
[[Field theory MOC]]
# Separable degree of an extension

Let $F:K$ be an [[Algebraic element|algebraic extension]].
The **separable degree** of $F:K$ is given by the number of embeddings of this extension into the [[algebraic closure]] $\overline{K}$, #m/def/field i.e.
$$
\begin{align*}
[F:K]_{\mathrm{s}} := \abs{ \cat{Fld}_{K}(F,\overline{K}) }
\end{align*}
$$
and is nonzero assuming [[Zorn's lemma]], see [[Embedding an algebraic extension into an algebraically closed field]].

## Properties

1. Let $K(\alpha):K$ be a [[Simple extension|simple]] [[Algebraic element|algebraic extension]].
   Then $[K(\alpha):K]_{\mathrm{s}}$ equals the number of distinct roots in $\overline{K}$ of the [[Algebraic element|minimal polynomial]] $m_{\alpha}(x) \in K[x]$, and thus $[K(\alpha) : K]_{\mathrm{s}} \leq [K(\alpha):K]$, with equality iff $\alpha$ is [[Separable extension|separable]]. ^P1
2. If $F:L:K$ is a tower of [[Algebraic element|algebraic extensions]] then $[F:K]_{\mathrm{s}} = [F:L]_{\mathrm{s}}[L:K]_{\mathrm{s}}$. ^P2

> [!check]- Proof of 1–2.
> The proof of [[#^P1]] is very similar to that of the [[Bound on the automorphism group of a finite simple extension]].
> Associate with each $\iota \in \cat{Fld}_{K}(K(\alpha), \overline{K})$ the image $\iota(\alpha)$,
> which must be a root of $m_{\alpha}(x)$.
> Since $\iota(\alpha)$ completely determines $\iota$, this correspondence is injective.
> For surjectivity, let $\beta \in \overline{K}$ be a root of $m_{\alpha}(x)$.
> Then by [[Simple extension#^P1]], there exists an isomorphism $K(\alpha) \to K(\beta)$ sending $\alpha \mapsto \beta$,
> and composing this with the embedding $K(\beta) \hookrightarrow \overline{K}$ gives the corresponding $\iota$, proving [[#^P1]]. 
> 
> For [[#^P2]], suppose $F:L:K$ is such a tower of extensions,
> and identify $\overline{L} = \overline{K}$.
> It is not difficult to see that we have a bijection
> $$
> \begin{align*}
>  \psi : \cat{Fld}_{L}(F,\overline{K})  \times \cat{Fld}_{K}(L,\overline{K}) \to \cat{Fld}_{K}(F,\overline{K}).
> \end{align*}
> $$
> by first extending $K \hookrightarrow \overline{K}$ to $L \hookrightarrow \overline{K}$
> and then extending $L \hookrightarrow \overline{K}$ to $F \hookrightarrow \overline{K}$. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.4.3, pp. 436–438

### Results

- [[Separability of a finite extension]]

#
---
#state/tidy | #lang/en | #SemBr
