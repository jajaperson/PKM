---
alias: quadratic intger
tags:
  - public
---
[[Quadratic field]]
# Quadratic integers

The **quadratic integers** within a [[quadratic field]] $\mathbb{Q}(\sqrt{ d })$ where $d$ is a squarefree integer are #m/thm/ring
$$
\begin{align*}
\mathcal{O}_{\mathbb{Q}(\sqrt{ d })} = \begin{cases}
\mathbb{Z}[\sqrt{ d }] & d \equiv 2,3 \pmod 4 \\
\mathbb{Z}\left[ \frac{1+\sqrt{ d }}{2} \right] & d \equiv 1  \pmod 4 
\end{cases}
\end{align*}
$$

> [!check]- Proof
> Let $K = \mathbb{Q}(\sqrt{ d })$
> Clearly an element of $K$ of degree 1 is an algebraic integer iff it is an integer.
> Let $\alpha = a + b \sqrt{ d } \in K$ be a degree 2 element.
> Then the minimal polynomial of $\alpha$ is
> $$
> \begin{align*}
> m_{\alpha}(x) = x^2 - 2ax + a^2 - b^2d
> \end{align*}
> $$
> By [[Algebraic integer#^P1]],
> we have $\alpha \in \mathcal{O}_{K}$ iff $m_{\alpha}(x) \in \mathbb{Z}[x]$,
> which is precisely the case when $2a, a^2 - b^2d \in \mathbb{Z}$.
> It follows $(2b)^2d \in \mathbb{Z}$, so since $d$ is squarefree $2b \in \mathbb{Z}$.
> Letting $r = 2a$, $s = 2b$, we have $\alpha \in \mathcal{O}_{K}$ iff $r,s \in \mathbb{Z}$ and $r^2 - dn^2 \equiv_{4} 0$.
> Since $d$ is squarefree it follows $d \not\equiv_{4} 0$, so we need only consider the cases
> 
> 1. If $d \equiv_{4} 1$ then $0 \equiv_{4} r^2 - ds^2 \equiv_{4} r^2 - s^2$ which holds iff $r \equiv_{2} s$;
> 2. If $d \equiv_{4}2$ then $0 \equiv_{4} r^2 - ds^2 \equiv_{4} r + 2s^2$ which holds iff $r,s \equiv_{2} 0$;
> 3. If $d \equiv_{4} 3$ then $0 \equiv_{4} r^2 - ds^2 \equiv_{4} r^2 + s^2$ which holds iff $r,s \equiv_{2} 0$.
> 
> It follows that the general expression for an algebraic integer $\alpha \in \mathcal{O}_{K}$ is
> 
> 4. $\alpha = p+q\sqrt{ d }$ if $d \not\equiv_{4} 1$
> 5. $\alpha  = p + q \frac{1 + \sqrt{ d }}{2}$ if $d \equiv_{4} 1$
> 
> where $p,q \in \mathbb{Z}$, whence the above. <span class="QED"/>

In general, a quadratic integer is the solution to some monic quadratic with integer coëfficients.

#
---
#state/tidy | #lang/en | #SemBr
