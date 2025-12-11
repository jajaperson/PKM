---
tags:
  - public
---
[[Group character]]
# Orthonormality of irreducible characters

Let $\chi^\mu : G \to \mathbb{C}$ be [[Group character|irreducible characters]] for each $\mu \in \hat{G}$.
Then $\{ \chi^\mu \}$ form an [[Orthonormal basis]] of the [[Centre of the group ring]] $Z(\mathbb{C}[G])$ (i.e. [[Group class function|class functions]] into $\mathbb{C}$) under a certain [[Group ring#Hilbert space|inner product]].[^sim] #m/thm/rep 
In particular,
$$
\begin{align*}
(\chi^\alpha | \chi^\beta) = \frac{1}{\abs G} \sum_{g \in G} \overline{\chi^\alpha(g)} \chi^\beta(g) = \delta_{\alpha\beta}
\end{align*}
$$

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.1

> [!check]- Proof of orthonormality and completeness
> That each $\chi^\mu$ is central follows from [[Trace#Properties]], since
> $$
> \begin{align*}
> \chi^\mu(yxy^{-1}) = \Tr \Gamma^\mu(yxy^{-1}) = \Tr \Gamma^\mu(xy^{-1}y)  = \Tr \Gamma^\mu(x) = \chi^\mu(x)
> \end{align*}
> $$
> Orthonormality follows easily from [[Orthonormality of irreps]]:
> $$
> \begin{align*}
> (\chi^\alpha|\chi^\beta) = \sum_{j=1}^{d_{\alpha}} \sum_{k=1}^{d_{\beta}} (\Gamma^\alpha_{jj} | \Gamma^\beta_{kk}) = \sum_{j=1}^{d_{\alpha}} \sum_{k=1}^{d_{\beta}} \frac{1}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jk} = \delta_{\alpha\beta}
> \end{align*}
> $$
> Completeness follows from that of irreps too, by first noting
> $$
> \begin{align*}
> \frac{1}{\abs G}\sum_{y \in G} \Gamma^\mu_{ij}(yxy^{-1}) &= \frac{1}{\abs G}\sum_{y \in G} \sum_{k,l} \Gamma^\mu_{ik}(y)\Gamma^\mu_{kl}(x) \overline{\Gamma^\mu_{jl}(y)} \\
> &= \sum_{k,l} (\Gamma^\mu_{jl}|\Gamma^\mu_{ik})\,\Gamma^\mu_{kl}(x) \\
> &= \sum_{k,l} \frac{1}{d_{\mu}} \delta_{ji} \delta_{lk} \Gamma^\mu_{kl}(x) \\
> &= \frac{1}{d_{\mu}} \delta_{ij} \chi^\mu(x)
> \end{align*}
> $$
> and therefore for any $f \in Z(\mathbb{C}[G])$,
> from completness of irreps $f = \sum_{\mu;i,j} c^\mu_{ij}\Gamma^\mu_{ij}$ for some $c^\mu_{ij}$,
> thus
> $$
> \begin{align*}
> f(x) &= \frac{1}{\abs G} \sum_{y \in G} f(yxy^{-1}) \\
> &= \sum_{\mu;i,j} c^\mu_{ij} \frac{1}{\abs G} \sum_{y \in G} \Gamma^\mu_{ij}(yxy^{-1}) \\
> &= \sum_{\mu;i,j} c^\mu_{ij}\frac{1}{d_{\mu}} \delta_{ij} \chi^\mu(y)
> \end{align*}
> $$
> thus $f \in \Span \{ \chi^\mu \}$.
> <span class="QED"/>

> [!check]- Alternate proof of completeness via Schur's lemma and matrix algebra isomorphism
> Let $f \in Z(\mathbb{C}[G])$.
> Then by the [[Isomorphism between the complex group ring and direct sum of matrix algebras on carriers of irreducible representations]],
> each $\widehat{f}^\alpha$ commutes in its $d_{\alpha} \times d_{\alpha}$ matrix algebra,
> which includes with the concrete reälization of $\Gamma^\alpha$
> $$
> \begin{align*}
> \widehat{f}^\alpha_{} \Gamma^\alpha(g) = \Gamma^\alpha(g) \widehat{f}^\alpha
> \end{align*}
> $$
> and therefore by [[Schur's lemma]] $\widehat{f}^\alpha = c_{\alpha} \mathbf{I}_{\alpha}$ so 
> $$
> f = \frac{1}{\abs G} \sum_{\alpha;jk} d_{\alpha} c_{\alpha} \delta_{jk} \Gamma^\alpha_{jk} = \frac{1}{\abs G} \sum_{\alpha} d_{\alpha} c_{\alpha}  \chi^\alpha
> $$
> as required.
> <span class="QED"/>

Since $\chi^\alpha$ are class functions, the orthonormality may be rewritten for the [[character table]].

## Corollaries

- [[The number of conjugacy classes equals the number of non-equivalent irreps of a group]]
- The decomposition of a character into irreducible characters is always possible reveals the composition of the characterised representation.
- [[Character irreducibility criterion]]

#
---
#state/tidy | #lang/en | #SemBr 