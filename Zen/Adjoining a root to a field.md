---
tags:
  - public
---
[[Field theory MOC]]
# Adjoining a root to a field

Let $K$ be a field and $f(x) \in K(x)$ be a nonzero [[Polynomial ring#^irreducible]].
Then
$$
\begin{align*}
K(\alpha):= \frac{K[x]}{\langle f(x) \rangle }
\end{align*}
$$
is a [[Simple extension|simple]] [[Field extension|extension field]] of $K$, with primitive element $\alpha = \pi(x)$. 
Moreover, if $L:K$ is a field extension so that $f(x)$ has a root in $L$, 
then we have a [[Intermediate field extension|tower of field extensions]] $L:K[\alpha]:K$.[^2009] #m/thm/field

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §V.5.2, pp. 283–284

> [!check]- Proof
> Since $K[x]$ [[The polynomial ring over a field is a Euclidean domain|is a Euclidean domain]] and thus in particular a [[Principal ideal domain|PID]].
> By [[Maximal ideal iff prime ideal in a PID]], it follows $\langle f(x) \rangle$ is maximal and thus $K(\alpha)$ as defined is indeed a field ([[Condition for a quotient commutative ring to be a field]]).
> Let $\pi : K[x] \twoheadrightarrow K(\alpha)$ denote the projection.
> Then
> $$
> \begin{align*}
> f(\pi(x)) = \pi(f(x)) = 0.
> \end{align*}
> $$
> Since all we adjoined was $\alpha=\pi(x)$, this is indeed simple.
> 
> Now suppose $L:K$ is an extension with $f(\beta) = 0$, $\beta \in L$,
> so the [[Polynomial ring#Evaluation map]] $\epsilon(\beta) : K[t] \to L$ vanishes at $f(x)$,
> whence $\langle f(x) \rangle \leq \ker \epsilon(\beta)$ and thus by the universal property of quotients there is a unique homomorphism
> $$
> \begin{align*}
> j : K(\alpha) \to L
> \end{align*}
> $$
> which gives the desired tower of extensions. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
