---
tags:
  - public
---
[[Separable extension]]
# Separability of a finite extension

Let $F:K$ be a [[finite field extension]].
Then the [[Separable degree of an extension|separable degree]] satisfies[^str]
$$
\begin{align*}
[F:K]_{\mathrm{s}} \leq [F:K]
\end{align*}
$$
and the following are equivalent: #m/thm/field 
1. $F=K(\alpha_{i})_{i=1}^r$ for [[Separable extension|separable elements]] $\{ \alpha_{i} \}_{i=1}^r \subset F$; ^S1
2. $K:F$ is a [[separable extension]]; ^S2
3. $[F:K]_{\mathrm{s}} = [F:K]$.[^2009] ^S3

> [!check]- Proof
> $F:K$ is automatically a [[Finitely generated field extension]],
> so $F= K(\alpha_{i})_{i=1}^r$ for some $\{ \alpha_{i} \}_{i=1}^r \subset F$.
> Applying [[Finitely generated field extension#^P1]] and iterating on [[Separable degree of an extension#^P1]] and [[Separable degree of an extension#^P2]],
> we have
> $$
> \begin{align*}
> [F:K]_{\mathrm{s}} &= \prod_{i=0}^{r-1} [K(\alpha_{j})_{j=1}^i(\alpha) : K(\alpha_{j})_{j=1}^i]_{\mathrm{s}} \\
> &= \prod_{i=0}^{r-1} [K(\alpha_{j})_{j=1}^i(\alpha) : K(\alpha_{j})_{j=1}^i] \\
> &\leq [F:K]
> \end{align*}
> $$
> proving the inequality.
> 
> To show [[#^S1]] implies [[#^S3]]:
> If $\{ \alpha_{i} \}_{i=1}^r$ are separable over $K$, then they are separable over all algebraic extensions,
> so equality follows by [[Separable degree of an extension#^P1]].
> 
> To show [[#^S3]] implies [[#^S2]]:
> Suppose $[F:K]_{\mathrm{s}} = [F:K]$,
> and for some $\alpha \in F$ consider the intermediate extension $F:K(\alpha):K$.
> By [[Separable degree of an extension#^P2]], we have
> $$
> \begin{align*}
> [F:K(\alpha)]_{\mathrm{s}} [K(\alpha):K]_{\mathrm{s}} = [F:K]_{\mathrm{s}} = [F:K] = [F:K(\alpha)][K(\alpha):K],
> \end{align*}
> $$
> which can only hold (by the inequality of [[Separable degree of an extension#^P1]]) if in particular
> $$
> \begin{align*}
> [K(\alpha):K]_{\mathrm{s}} = [K(\alpha):K].
> \end{align*}
> $$
> Therefore, again by [[Separable degree of an extension#^P1]], every $\alpha \in F$ is separable, whence by definition $F:K$ is separable.
> 
> That [[#^S2]] implies [[#^S1]] is clear, since a finite extension is finitely generated. <span class="QED"/>

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §VII.4.3, pp. 437–438
  [^str]: Actually, one can show that $[F:K]_{\mathrm{s}} = [F_{\mathrm{sep}}:K]$ where $F:F_{\mathrm{sep}}:K$.


#
---
#state/tidy | #lang/en | #SemBr
