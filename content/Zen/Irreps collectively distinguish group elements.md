---
tags:
  - public
---
[[Matrix representation]]
# Irreps collectively distinguish group elements

Let $\Gamma^\alpha_{jk} \in \mathbb{C}[G]$ be entries of matrix representations of each irrep $\alpha \in \hat{G}$.
Then the function subspace spanned by all such entries distinguishes all group elements in $G$, where for any $x \in G$ there exists a linear combination
$$
\begin{align*}
f_{x} = \sum_{\gamma \in \hat{G}} \sum_{j=1}^{d_{\gamma}} \sum_{k=1}^{d_{\gamma}} C_{\gamma jk} \Gamma^\gamma_{jk}
\end{align*}
$$
such that $f_{xy}(x)=1$ and $f_{xy}(y)=0$ for $y\neq x$. #m/thm/rep 

> [!check]- Proof
> This follows from the existence of the [[Regular group representation]] $\Lambda:G \to \mathbb{C}[G]$.
> For we can define
> $$
> \begin{align*}
> f_{x}(y) = \braket{ \delta_{x} | \Lambda(y)\delta_{e} } 
> \end{align*}
> $$
> using the [[Group ring#Hilbert space|unnormalised inner product]] on $\mathbb{C}[G]$, which has the required property,
> and since $\Lambda$ is a representation it is unitarily equivalent to a direct sum of irreps, i.e.
> $$
> \begin{align*}
> \Lambda &= \bigoplus_{\mu} T \Gamma^\mu T^{\dagger} \\
> \Lambda_{jk}(y) &= \sum_{\mu,p,q} T^\mu_{jp} \Gamma^{\alpha_{\mu}}_{pq}(y) \overline{T^\mu_{kq}}
> \end{align*}
> $$
> and so treating $x$ and $e$ as indices
> $$
> \begin{align*}
> f(y) = \Lambda_{xe}(y) &= \sum_{\mu,p,q} T^\mu_{xp} \Gamma^{\alpha_{\mu}}_{pq}(y) \overline{T^\mu_{eq}}
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
