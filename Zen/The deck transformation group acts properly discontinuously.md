---
tags:
  - public
---
[[Deck transformation]]
# The deck transformation group acts properly discontinuously

Let $p : \tilde{X} \twoheadrightarrow X$ be a connected and locally path-connected [[covering]] and $\Gamma = \Aut_{\Cov_{X}}(p)$ be its [[Deck transformation|deck transformation group]] with its natural action on $\tilde{X}$.
Then $\Gamma$ acts on $\tilde{X}$ [[Properly discontinuous group action|properly discontinuously]].

> [!check]- Proof
> Since $\Cov_{(X, x_{0})}$ is thin, $\gamma_{1}(\tilde{x}_{0}) \neq \gamma_{2}(\tilde{x}_{0})$ for any $\gamma_{1},\gamma_{2} \in \Gamma$ with $\gamma_{1} \neq \gamma_{2}$.
> Let ${x}_{0} = p(\tilde{x}_{0})$, and let $U$ be an evenly covered path-connected open neighbourhood of $x_{0}$ with $\tilde{U}$ the sheet over $U$ containing $\tilde{x}_{0}$
> Since [[A deck transformation maps sheets to sheets]], both $\gamma_{1}(\tilde{U})$ and $\gamma_{2}(\tilde{U})$ are sheets over $U$, and since they each contain a different element of the fibre $p^{-1}\{ \tilde{x}_{0} \}$, they are disjoint.
> Therefore $\Gamma$ acts [[Properly discontinuous group action|properly discontinuously]]
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
