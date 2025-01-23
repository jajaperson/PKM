---
tags:
  - public
aliases:
  - associated squaring map
---
[[Extraspecial p-group]]
# Extraspecial 2-group

An [[Extraspecial p-group|extraspecial]] [[p-group|2-group]] $P$ may be characterized as a [[Central extension of an abelian group|central extension]] 
$$
\begin{align*}
1 \to \mathbb{Z}_{2}^+ \stackrel{\exp}{\hookrightarrow} P \stackrel{\pi}{\twoheadrightarrow} E \to 1
\end{align*}
$$
where $E$ is a $\mathbb{Z}_{2}$-[[vector space]] such that the **associated squaring map**
$$
\begin{align*}
q : E &\to \mathbb{Z}_{2} \\
a &\mapsto \ln (s_{a}^2)
\end{align*}
$$
which is a [[quadratic form]] independent of $s_{(-)}$, is [[Quadratic space#^nondegenerate]]. #m/thm/group
Moreover, the [[Correspondence between quadratic forms and symmetric bilinear forms away from 2|polar form]] of $q$ is the [[Central extension of an abelian group|associated commutator map]] $c_{0}$,
and we have a [[Surjectivity, injectivity, and bijectivity|bijection]] between (arbitrary) central extensions of the above form and quadratic forms on $E$.[^1988]

> [!check]- Proof
> Clearly equivalent extensions determine the same squaring map.
> Noting that $\pi (s_{a}^2) = 2a = 0$, it follows that $q$ is well defined, 
> and since for any $p \in \mathbb{Z}_{2}$,
> $$
> \begin{align*}
> \ln(s_{a}\mathrm{e}^{p} s_{a} \mathrm{e}^{p}) =
> \ln(s_{a}^2 \mathrm{ e}^{2p}) = \ln(s_{a}^2) + 2p = \ln(s_{a}^2)
> \end{align*}
> $$
> so $q$ is independent of the section chosen.
> Now let $s_{a}s_{b}\mathrm{e}^p = s_{a+b}$.
> Then
> $$
> \begin{align*}
> b_{q}(a,b) &= q(a + b) - q(a) - q(b) \\
> &= \ln(s_{a+b}^2) - \ln(s_{a}^2) - \ln(s_{b}^2) \\
> &= \ln(s_{a}s_{b}\mathrm{e}^ps_{a}s_{b}\mathrm{e}^ps_{a}^{-2}s_{b}^{-2}) \\
> &= \ln(s_{a}s_{b}s_{a}^{-2}s_{a}s_{b}s_{b}^{-2}) \\
> &= \ln[s_{a},s_{b}] = c_{0}
> \end{align*}
> $$
> as claimed.
> 
> Let $q : E \to \mathbb{Z}_{2}$ be a quadratic form, $\{ x_{i} \}_{i=1}^n$ be a $\mathbb{Z}_{2}$-[[Vector basis|basis]] of $E$, and define a unique bilinear map so that
> $$
> \begin{align*}
> \varepsilon_{0} : E \times E &\to \mathbb{Z}_{2} \\
> (x,x) &\mapsto q(x) \\
> (x_{i}, x_{j}) &\mapsto 0 & i<j
> \end{align*}
> $$
> Then by the [[Central group extension#Correspondence between 2-cocycles and central extensions]] there is a central extension
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{2}^+ \hookrightarrow \hat{E} \twoheadrightarrow E \to 1
> \end{align*}
> $$
> with the 2-cocycle $\varepsilon_{0}$ and thus the squaring map $q$.
> 
> Now for uniqueness, suppose
> $$
> \begin{align*}
> 1 \to \mathbb{Z}_{2}^+ \hookrightarrow B \stackrel{\varphi}\twoheadrightarrow E \to 1
> \end{align*}
> $$
> is a central extension with squaring map $q$.
> Then the associated bilinear map is the polar form $b_{q}$.
> Defining a $\Set$-section $s_{(-)}$ of $\varphi$ so that
> $$
> \begin{align*}
> s_{(-)} : \sum_{k=1}^n m_{k}x_{k} = \prod_{k=1}^n s_{x_{k}}^{m_{k}}
> \end{align*}
> $$
> it is easily shown that $\varepsilon_{0}$ is the corresponding 2-cocyle and so $(B,\varphi)$ is equivalent. <span class="QED"/>

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §5.3, pp. 108–110

## See also

- [[Induced extraspecial 2-group of a Z2 extension of a free abelian group]]

#
---
#state/tidy | #lang/en | #SemBr
