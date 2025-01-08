---
tags:
  - public
---
[[Group ring]]
# Convolution of group characters

Let $\chi^\alpha, \chi^\beta \in \mathbb{C}[G]$ be [[Group character|irreducible characters]].
Then the [[Group ring#definition|group ring convolution]] is given by[^sim] #m/thm/rep
$$
\begin{align*}
\chi^\alpha * \chi^\beta = \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \chi^\alpha
\end{align*}
$$

> [!check]- Proof
> By [[Convolution of matrix representations]]
> $$
> \begin{align*}
> \chi^\alpha * \chi^\beta &= \left( \sum_{i =1}^{d_{\alpha}} \Gamma^\alpha_{ii} \right) * \left( \sum_{j=1}^{d_{\beta}} \Gamma^\beta_{jj} \right) \\
> &= \sum_{i=1}^{d_{\alpha}} \sum_{j=1}^{d_{\beta}} \Gamma^\alpha_{ii} * \Gamma^\beta_{jj} \\
> &= \sum_{i=1}^{d_{\alpha}} \sum_{j=1}^{d_{\beta}} \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \delta_{ij} \Gamma^\alpha_{ij} \\
> &= \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \sum_{i=1}^{d_{\alpha}} \Gamma^\alpha_{ii} \\
> &= \frac{\abs G}{d_{\alpha}} \delta_{\alpha\beta} \chi^\alpha
> \end{align*}
> $$
> as required.
> <span class="QED"/>

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §III.2, p. 41

#
---
#state/tidy | #lang/en | #SemBr
