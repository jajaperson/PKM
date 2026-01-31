---
alias: polynomial ring over a noetherian ring is noetherian
tags:
  - public
---
[[Polynomial ring]]
# Hilbert's basis theorem

Let $R$ be a [[Noetherian ring]].
Then the [[polynomial ring]] $R[x]$ is also Noetherian. #m/thm/ring 

> [!check]- Proof
> Let $I \trianglelefteq R[x]$. We prove $I$ is finitely generated.
> For $f(x) \in R[x]$, let $\opn{lead} f$ denote the leading coëfficient of $f$.
> Consider the ideal
> $$
> \begin{align*}
> A = \{ 0 \} \cup \{ a \in R  : (\exists f(x) \in I)[\opn{lead} f = a] \} \trianglelefteq R,
> \end{align*}
> $$
> which is finitely generated since $R$ is noetherian.
> It follows there exist $\{ f_{i}(x) \}_{i=1}^r \subset I$ such that $A = \langle \{a_{i} \}_{i=1}^r \rangle_{R}$ where
> $$
> \begin{align*}
> a_{i} = \opn{lead} f_{i}.
> \end{align*}
> $$
> Let $d = \max \{ \deg f_{i} \}_{i=1}^r$, and consider the $R$-submodule
> $$
> \begin{align*}
> M = \langle \{ x^i \}_{i=0}^{d-1} \rangle_{R} \leq_{R} R[x]
> \end{align*}
> $$
> consisting of all polynomials of degree $< d$.
> Since $M$ is $R$-module-finite, it is $R$-module-noetherian by [[Noetherian module#^P2]].
> Therefore
> $$
> \begin{align*}
> M \cap I = \langle \{ g_{i}(x) \}_{i=1}^s \rangle_{R} \leq_{R} M
> \end{align*}
> $$
> for some $\{ g_{i}(x) \}_{i=1}^s \subset I$.
> 
> We claim
> $$
> \begin{align*}
> I = \langle \{ f_{i}(x) \}_{i=1}^r \cup \{ g_{i}(x) \}_{i=1}^s \rangle_{R[x]}
> \end{align*}
> $$
> which proves the theorem.
> It suffices to show $I \sube \langle \{ f_{i}(x) \}_{i=1}^r \cup \{ g_{i}(x) \}_{i=1}^s \rangle_{R}$.
> To this end, let $\alpha(x) \in I$.
> If $e := \deg \alpha \geq d$, let $a = \opn{lead} \alpha$,
> whence there exist $\{ b_{i} \}_{i=1}^r \in R$ such that
> $$
> \begin{align*}
> a = \sum_{i=1}^r b_{i} a_{i}
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> \alpha(x) - \sum_{i=1}^r b_{i} x^{e - \deg f_{i}} f_{i}(x)
> \end{align*}
> $$
> has degree $< e$.
> By iterating this procedure one finds $\{ \beta_{i} \}_{i=1}^r \subset R[x]$ such that
> $$
> \begin{align*}
> \alpha(x) - \sum_{i=1}^r \beta_{i}(x) f_{i}(x)
> \end{align*}
> $$
> has degree $< d$ and is thus contained in $M \cap N$, so
> $$
> \begin{align*}
> \alpha(x) - \sum_{i=1}^r \beta_{i}(x) f_{i}(x) = \sum_{i=1}^s c_{i} g_{i}(x)
> \end{align*}
> $$
> for some $\{ c_{i} \}_{i=1}^s \subset R$, whence
> $$
> \begin{align*}
> \alpha(x) = \sum_{i=1}^r \beta_{i}(x) f_{i}(x) + \sum_{i=1}^sc_{i} g_{i}(x)
> \end{align*}
> $$
> as required. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §V.1.1, pp. 245

It a simple corollary of this that any [[Commutative R-monoid of finite type]] for noetherian $R$ is a noetherian ring, applying [[Noetherian module#^P1]]

#
---
#state/tidy | #lang/en | #SemBr
