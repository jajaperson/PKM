---
tags:
  - public
---
[[Regular group representation]]
# The regular representation contains all irreducible representations

The **regular representation** $\Lambda: G \to \mathrm{GL(\mathbb{C}[G])}$ contains all irreps of $G$, where an irrep $\Gamma^\mu$ appears with multiplicity $\dim \Gamma^\mu = d_{\nu}$. #m/thm/rep 
$$
\begin{align*}
\Lambda \cong \bigoplus_{\mu \in \widehat{G}} d_{\mu} \Gamma^\mu
\end{align*}
$$

> [!check]- Proof
> The [[Group character]] of this representation is
> $$
> \begin{align*}
> \chi^\Lambda(g) = \sum_{h \in G} \braket{ \delta_{h} | \Lambda(g) \delta_{h}} = \sum_{h \in G} \braket{ \delta_{h} | \delta_{gh} } 
> = \begin{cases}
> \abs{G} & g=e \\
> 0 & g\neq e
> \end{cases}
> \end{align*}
> $$
> and using the [[Orthonormality of irreducible characters]] we find that the multiplicity $a_{k}$ of each $\Gamma^k$ is
> $$
> \begin{align*}
> a_{k} = \frac{1}{\abs G} \sum_{g \in G} \overline{\chi^k(g)}\chi^\Lambda(g) = \frac{1}{\abs G} \chi^k(e) \abs G = d_{k} \
> \end{align*}
> $$
> as required.
> <span class="QED"/>

As a corollary, the squares of the dimensions of all irreps sum to $\abs G$, i.e.
$$
\begin{align*}
\sum_{k = 1}^\abs{G / {\sim}} (d_{n})^2 = \abs{G}
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr
