---
tags:
  - public
---
[[Discriminant of a number field]]
# Annoying index

Given a [[number field]] $K$ with ring of integers $\mathcal{O}_{K}$,
and a $\mathbb{Q}$-basis $\{ \alpha_{i} \}_{i=1}^n \subset \mathcal{O}_{K}$ of $K$, we call the quantity
$$
\begin{align*}
\abs{\frac{\mathcal{O}_{K}}{\mathbb{Z}\alpha_{1}+\dots+\mathbb{Z}\alpha_{n}}}
\end{align*}
$$
the **annoying index**,[^1] #m/def/num/alg 
since it measures the degree to which $\{ \alpha_{i} \}_{i=1}^n$ fails to be an [[Bases for a number field#Integral basis]] for $K$

## Properties

1. If $\Delta_{K:\mathbb{Q}}(\alpha_{1},\dots,\alpha_{n})$ is squarefree, then  $\{ \alpha_{i} \}_{i=1}^n$ is an integral basis. ^P1
2. If the [[Algebraic element|minimal polynomial]] $m_{\alpha}(x)$ for $\alpha \in \mathcal{O}_{K}$ is [[Eisenstein's criterion|Eisenstein]] at $p$, then $p$ does not divide $\abs{\mathcal{O}_{K} / \mathbb{Z}[\alpha]}$. ^P2

> [!check]- Proof
> [[#^P1]] follows immediately from [[Discriminant of a number field#^EQ1]].
> 
> For [[#^P2]], suppose towards contradiction that $p$ divides the annoying index.
> Then by [[Cauchy's order theorem]] there exists $\xi \in \mathcal{O}_{K}$ such that $\xi + \mathbb{Z}[\alpha]$ has order $p$,
> i.e. $\xi \notin \mathbb{Z}[\alpha]$ and $p\xi \in \mathbb{Z}[\alpha]$.
> It follows we can write
> $$
> \begin{align*}
> p\xi = \sum_{i=0}^{n-1} b_{i} \alpha^{i}
> \end{align*}
> $$
> for some $b_{i} \in \mathbb{Z}$ where some $b_{j}$ is not divisible by $p$.
> Fix $j$ to be the smallest such index.
> It follows
> $$
> \begin{align*}
> \eta = \xi - \sum_{i=0}^{j-1} \frac{b_{i}}{p} \alpha^i = \sum_{i=j}^{n-1} \frac{b_{i}}{p} \alpha^i
> \end{align*} \in \mathcal{O}_{K}.
> $$
> and so
> $$
> \begin{align*}
> \eta \alpha^{n-j-1} = \frac{b_{j}}{p} \alpha^{n-1} + \frac{\alpha^n}{p} \sum_{i=0}^{n-j-2} b_{i+j+1}\alpha^i \in \mathcal{O}_{K}.
> \end{align*}
> $$
> Since
> $$
> \begin{align*}
> \frac{\alpha^n}{p} = -\sum_{i=0}^{n-1} \frac{a_{i}}{p} \alpha^i \in \mathcal{O}_{K}
> \end{align*}
> $$
> it follows $\beta = \frac{b_{j}}{p} \alpha^{n-1} \in \mathcal{O}_{K}$,
> so the [[Norm of a number field|field norm]] $\opn N_{K : \mathbb{Q}}(\beta) \in \mathbb{Z}$.
> 
> On the other hand
> $$
> \begin{align*}
> \opn N_{K:\mathbb{Q}}(\beta) = \frac{b_{j}^n}{p^n} \opn N_{K:\mathbb{Q}}(\alpha)^{n-1} = \pm \frac{b_{j}^n a_{0}^{n-1}}{p^n} \notin \mathbb{Z}
> \end{align*}
> $$
> since $p \not\mid b_{j}$ and $p^2 \not\mid a_{0}$, a contradiction. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr

[^1]: This term is taken from lectures by [[Florian Breuer]] and should not be taken too seriously.
