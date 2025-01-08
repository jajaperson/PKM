---
tags:
  - public
---
[[Matrix representation]]
# Convolution of matrix representations

Let $\Gamma^\alpha_{ij}, \Gamma^\beta_{kl} \in \mathbb{C}[G]$ be the entries of concrete realizations of unitary irreps.
Then the [[Group ring#definition|group ring convolution]] is given by[^sim] #m/thm/rep 
$$
\begin{align*}
\Gamma^\alpha_{ij} * \Gamma^\beta_{kl} = \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta}\delta_{jk}\Gamma^\alpha_{il}
\end{align*}
$$
> [!check]- Proof
> Using [[Orthonormality of irreps|orthogonality of irreps]] and the fact that $\Gamma^\alpha(g^{-1}) = \Gamma^\alpha(g)^{\dagger}$
> $$
> \begin{align*}
> (\Gamma^\alpha_{ij} * \Gamma^\beta_{kl})(x) &= \sum_{g \in G} \Gamma^\alpha_{ij}(xg^{-1})\Gamma^\beta_{kl}(g) \\
> &= \sum_{p = 1}^{d_{\alpha}}\sum_{g \in G}  \Gamma^\alpha_{ip}(x)\Gamma^\alpha_{pj}(g^{-1}) \Gamma^\beta_{kl}(g) \\
> &= \sum_{p = 1}^{d_{\alpha}}\sum_{g \in G}  \Gamma^\alpha_{ip}(x) \overline{\Gamma^\alpha_{jp}(g)} \Gamma^\beta_{kl}(g) \\
> &=\sum_{p=1}^{d_{\alpha}} \Gamma^\alpha_{ip}(x) \braket{ \Gamma^\alpha_{jp} | \Gamma^\beta_{kl} } \\
> &=  \sum_{p=1}^{d_{\alpha}} \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \delta_{jk}\delta_{pl} \Gamma^\alpha_{ip}(x) \\
> &= \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \delta_{jk} \Gamma^\alpha_{il}(x)
> \end{align*}
> $$
> as required.
> <span class="QED"/>


[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.1, p. 38
#
---
#state/tidy | #lang/en | #SemBr
