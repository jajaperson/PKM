---
tags:
  - public
---
[[Algebraic number theory MOC]]
# Logarithmic embedding

Let $K$ be a [[number field]] with [[Signature of a number field|signature]] $(r_{1},r_{2})$ with real embeddings $\{ \sigma_{i} \}_{i=1}^{r_{1}}$ and representative unreal embeddings $\{ \tau_{i} \}_{i=1}^{r_{2}}$.
The **Logarithmic embedding** $L : K^\times \to \mathbb{R}^{r_{1}+r_{2}}$ is a [[group homomorphism]] defined by #m/def/num/alg 
$$
\begin{align*}
L(\alpha) = (\ln \abs{\sigma_{1}(\alpha)}, \dots , \ln \abs{\sigma_{r_{1}}(\alpha)}, \ln \abs{\tau_{1}(\alpha)}^2 , \dots, \ln \abs{\tau_{r_{2}}}^2).
\end{align*}
$$

We call $G= L(\mathcal{O}_{K}^*)$ the **unit lattice** for $K$,
and its covolume is called the [[Regulator of a number field|regulator]].

## Properties

1. The [[Norm of a number field|norm]] of an element is related to the sum of its image by
  $$
  \begin{align*}
  \ln \abs{\opn N(\alpha)} = \Sigma L(\alpha)
  \end{align*}
  $$
  where $\Sigma : \mathbb{R}^{r_{1}+r_{2}} \to \mathbb{R}$ is the summation map.
2. $\ker (L \restriction \mathcal{O}_{K}) = W_{K}$, the group of roots of unity, by [[Kronecker's root of unity lemma]].

#
---
#state/develop | #lang/en | #SemBr
