---
tags:
  - public
---
[[Group ring]]
# Isomorphism between the complex group ring and direct sum of matrix algebras on carriers of irreducible representations

Consider unitary irreps $\Gamma^\alpha : G \to \mathrm{GL}(\mathbb{C}^{d_{\alpha}})$ for $\alpha \in \hat{G}$.
Then there exists a unitary isomorphism from the [[Group ring]] to the direct sum of matrix algebras
$$
\begin{align*}
\mathbb{C}[G] \to \bigoplus_{\alpha \in \hat{G}} \Vect_{\mathbb{C}}(\mathbb{C}^{d_{\alpha}}, \mathbb{C}^{d_{\alpha}})
\end{align*}
$$
defined by $f \mapsto \widehat{f}$ with[^sim] #m/thm/rep
$$
\begin{align*}
\widehat f^\alpha_{jk} = \sum_{g \in G} \overline{\Gamma^\alpha_{jk} (g)} f(g) = \braket{ \Gamma^\alpha_{jk} | f }
\end{align*}
$$
and likewise
$$
\begin{align*}
f = \frac{1}{\abs G} \sum_{\alpha;jk} d_{\alpha} \widehat f^\alpha_{jk} \Gamma^\alpha_{jk}
\end{align*}
$$
which is unitary from $\braket{ \cdot | \cdot }$ to the following inner product
$$
\begin{align*}
\braket{ \widehat{f} | \widehat{h} } &= \frac{1}{\abs G} \sum_{\alpha} d_{\alpha} \Tr [(\hat{f}^\alpha)^{\dagger} \widehat{h}^\alpha]  \\ &= \frac{1}{\abs G} \sum_{\alpha;i,j} d_{\alpha} \overline{\widehat{f}^\alpha_{ij}} \widehat{h}^\alpha_{ij} 
\end{align*}
$$
and a homomorphism in the sense that
$$
\begin{align*}
\widehat{(f * h)}^\alpha_{ij} = \sum_{k=1}^{d_{\alpha}} \widehat{f}^\alpha_{ik} \widehat{h}^\alpha_{kj}
\end{align*}
$$

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.1, pp. 38–39

> [!check]- Proof
> To verify the given inverse, note that by [[Orthonormality of irreps|orthogonality of irreps]], $\{ \sqrt{ d_{\alpha} } \Gamma^\alpha_{jk} \}$ form an orthonormal basis with respect to the inner product $(\cdot|\cdot)$
> $$
> \begin{align*}
> f &= \frac{1}{\abs G} \sum_{\alpha;j,k} d_{\alpha} \widehat{f^\alpha_{jk}}\Gamma^\alpha_{jk} \\
> &= \sum_{\alpha; j,k} \sqrt{ d_{\alpha} } \Gamma^\alpha_{jk} \,( \sqrt{ d_{\alpha} } \Gamma^\alpha_{jk} | f ) \\
> &= f \\ \\
> \widehat{f^\alpha_{ij}}&=  \braket{ \Gamma^\alpha_{ij} | f } \\
> &= ( \Gamma^\alpha_{ij} | \sum_{\beta;k,l} d_{\alpha} \widehat{f}^\alpha_{kl} \Gamma^\beta_{kl} ) \\
> &= \sum_{\beta;k,l} \widehat{f}^\alpha_{kl} (\sqrt{ d_{\alpha}}\Gamma^\alpha_{ij} | \sqrt{ d_{\alpha}} \Gamma^\beta_{kl}) \\
> &= \widehat{f}^\alpha_{jk}
> \end{align*}
> $$
> and hence it is a linear bijection.
> Since
> $$
> \begin{align*}
> \braket{ f | h } &= \braket{ \frac{1}{\abs G} \sum_{\alpha;i,j} d_{\alpha} \widehat f^\alpha_{ij} \Gamma^\alpha_{ij} | \frac{1}{\abs G} \sum_{\beta;kl} d_{\beta} \widehat h^\beta_{kl} \Gamma^\beta_{k,l} } \\
> &= \frac{1}{\abs G^2} \sum_{\alpha;i,j} \sum_{\beta;k,l} d_{\alpha} d_{\beta} \overline{\widehat{f}^\alpha_{ij}} \widehat{h}^\beta_{kl} \braket{ \Gamma^\alpha_{ij} | \Gamma^\beta_{kl} } \\
> &= \frac{1}{\abs G} \sum_{\alpha;i,j} \sum_{\beta;k,l} d_{\beta} \overline{\widehat{f}^\alpha_{ij}} \widehat{h}^\beta_{kl} \delta_{\alpha\beta}\delta_{ik}\delta_{jl} \\
> &= \frac{1}{\abs G} \sum_{\alpha;i,j} d_{\alpha} \overline{\widehat{f}^\alpha_{ij}} \widehat{h}^\alpha_{ij} \\
> &= \braket{ \widehat{f} | \widehat{h} } 
> \end{align*}
> $$
> it is unitary.
> From [[Convolution of matrix representations]], it follows that
> $$
> \begin{align*}
> \widehat{(\Gamma^\alpha_{ij} * \Gamma^\beta_{kl})}^\gamma_{pq} &= \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jk} \widehat{(\Gamma^\alpha_{il})}^\gamma_{pq} \\ 
> &= \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jk} \braket{ \Gamma^\gamma_{pq} | \Gamma^\alpha_{il} } \\
> &= \frac{\abs G^2}{(d_{\alpha})^2} \delta_{\alpha\beta}\delta_{jk}\delta_{\gamma\alpha}\delta_{pi}\delta_{lq} \\
> &= \sum_{m=1}^{d_{\gamma}}\frac{\abs G}{(d_{\gamma})^2} \delta_{\gamma\alpha}\delta_{pi}\delta_{mj}\delta_{\gamma\beta}\delta_{mk}\delta_{ql}
> \\&= \sum_{m=1}^{d_{\gamma}} \braket{ \Gamma^\gamma_{pm} | \Gamma^\alpha_{ij} } \braket{ \Gamma^\gamma_{mq} | \Gamma^\beta_{kl} } 
> \\&= \sum_{m=1}^{d_{\gamma}} \widehat{(\Gamma^\alpha_{ij})}^\gamma_{pm} \widehat{(\Gamma^\beta_{kl})}^\gamma_{mq}
> \end{align*}
> $$
> hence $\widehat{\cdot}$ preserves the algebra operations.
> <span class="QED"/>

The isomorphism is denoted in such a way to evoke the [[Fourier transform]] due to similar properties.
This may be viewed as a special case of the [[Wedderburn–Artin theorem]].

#
---
#state/tidy | #lang/en | #SemBr
