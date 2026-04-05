---
tags:
  - public
---
[[Real random variable]]
# Sum of independent random variables

Let $X_{1},X_{2} : \xi \to \mathbb{R}$ be [[Independence of random variables|independently distributed]] [[Real random variable|real random variables]].
Then the distribution of $Y=X_{1}+X_{2}$ is given by the [[convolution]] of that of $X_{1}$ with that of $X_{2}$, #m/thm/prob
i.e. in the discrete case the [[Discrete random variable|probability mass function]] is
$$
\begin{align*}
p_{Y}(y) = \sum_{x_{1} \in \mathrm{supp}(X_{1})} p_{X_{2}}(y-x_{1}) p_{X_{1}}(x_{1})
\end{align*}
$$
and in the continuous case the [[probability density function]] is
$$
\begin{align*}
f_{Y}(y) = \int_{-\infty}^{\infty} f_{X_{2}}(y-x_{1}) f_{X_{1}}(x_{1}) \, dx_{1} 
\end{align*}
$$


#
---
#state/tidy | #lang/en | #SemBr
