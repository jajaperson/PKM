---
tags:
  - public
---
[[Group representation theory MOC]]
# Orthonormality of unitary irreducible representations

Let $\Gamma^\alpha_{jk} \in \mathbb{C}[G]$ be [[Matrix representation|concrete reälizations]] of [[Reducibility of representations|irreps]] $\Gamma^\alpha : G \to \mathbb{C}^{d_{\alpha}}$ for each $\alpha \in \hat{G}$.
Then $\{ \sqrt{ d_{\alpha} } \Gamma^\alpha_{ij} \}$ with $\alpha \in \hat{G}$, $1 \leq i,j \leq d_{\alpha}$ form an [[Orthonormal basis]] of the [[Group ring|Group ring]] under a certain [[Group ring#Hilbert space|inner product]].[^sim] #m/thm/rep 
In particular
$$
\begin{align*}
(\Gamma^\alpha_{jk}|\Gamma^\beta_{j'k'}) = \frac{1}{\abs G}\sum_{g \in G} \overline{\Gamma^\alpha_{jk}(g)}\Gamma^\beta_{j'k'}(g) = \frac{1}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jj'}\delta_{kk'}
\end{align*}
$$

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.1

> [!check]- Proof of orthonormality
> Let $\mathbf{A} : \mathbb{C}^{d_{\alpha}} \to \mathbb{C}^{d_{\beta}}$ be an arbitrary [[linear map]].
> Define a linear map
> $$
> \begin{align*}
> \tilde{\mathbf{A}} &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta(g)\mathbf{A}\Gamma^\alpha(g)^{-1} \\
> &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta(g) \mathbf{A} \overline{\Gamma^\alpha(g)}
> \end{align*}
> $$
> It follows that for any $h \in G$
> $$
> \begin{align*}
> \Gamma^\beta(h)\tilde{\mathbf{A}} &= \frac{1}{\abs{G}} \sum_{g \in G} \Gamma^\beta(hg) \mathbf{A} \Gamma^\alpha(g)^{-1} \\
> &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta(g) \mathbf{A} \Gamma^\alpha(h^{-1}g)^{-1} \\
> &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta(g) \mathbf{A} \Gamma^\alpha(g^{-1}h) \\
> &= \frac{1}{\abs G}\sum_{g \in G} \Gamma^\beta(g) \mathbf{A} \Gamma^\alpha(g)^{-1}\Gamma^\alpha(h) \\
> &= \tilde{\mathbf{A}}\Gamma^\alpha (h)
> \end{align*}
> $$
> so $\tilde{\mathbf{A}}$ is an intertwining operator
> and therefore by [[Schur's lemma]] either $\tilde{\mathbf{A}} = \mathbf{O}$ or $\alpha=\beta$,
> so $\mathbf{A} = \tilde{\mathbf{A}} = c \mathbf{I}$ with $c = \Tr \mathbf{A} / d_{\alpha}$.
> Combining these two possibilities gives
> $$
> \begin{align*}
> \tilde{\mathbf{A}} = \frac{1}{d_{\alpha}} \Tr (\mathbf{A}) \delta_{\alpha\beta} \mathbf{I}
> \end{align*}
> $$
> If we chose $\mathbf{A}$ to  $A_{pq} = \delta_{pk'}\delta_{qk}$ then $\Tr A = \delta_{kk'}$, thus
> $$
> \begin{align*}
> \tilde{A}_{jj'} &= \frac{1}{d_{\alpha}}\delta_{\alpha\beta}\delta_{jj'}\delta_{kk'} \\
> &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta(g) \mathbf{A} \overline{\Gamma^\alpha(g)} \\
> &= \frac{1}{\abs G} \sum_{g \in G} \Gamma^\beta_{jk} (g) \overline{\Gamma^\alpha_{j'k'}(g)} \\
> &= ( \Gamma^\alpha_{jk} | \Gamma^\beta_{j'k'})
> \end{align*}
> $$
> thus the matrix elements fulfil the orthonormality condition.
 <span class="QED"/>

> [!check]- Proof of spanning set
> Let $A = \Span \{ \sqrt{ d_{\alpha} }\Gamma^\alpha_{jk} \}$, so we must prove $A = \mathbb{C}[G]$.
> The tensor product of irreps is reducible, which for concrete reälizations may be stated as
> $$
> \begin{align*}
> \Gamma^\alpha_{ij}(g)\Gamma^\beta_{kl}(g) = \sum_{\mu,p,q} T^\mu_{jp} \Gamma^{\alpha_{\mu}}_{pq}(y) \overline{T^\mu_{kq}}
> \end{align*}
> $$
> for some numbers $T^\mu_{jp}$.
> Thus the point-wise product of basic functions is in $A$,
> and by distributivity $A$ is closed under point-wise multiplication.
> Since [[Irreps collectively distinguish group elements]],
> it follows from [[Stone-Weierstraß theorem#Finite version]] that $A = \mathbb{C}[G]$.
> From this and above, $\{ \sqrt{ d_{\alpha} } \Gamma^\alpha_{ij} \}$ is an orthonormal basis under $(\cdot|\cdot)$.
> <span class="QED"/>

Since the number of basis elements equals the dimension of the vector space, it follows that [[Square sum of irrep dimensions]] is given by
$$
\begin{align*}
\sum_{\gamma \in \hat{G}} (d_{\gamma})^2 = \abs{G}
\end{align*}
$$


See also [[Orthonormality of irreducible characters]]

#
---
#state/tidy | #lang/en | #SemBr 