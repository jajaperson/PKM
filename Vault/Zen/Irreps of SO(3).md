---
aliases:
  - Irreps of 𝔰𝔬(3)
tags:
  - public
---
[[Real special orthogonal group of dimension 3]]
# Irreps of SO(3)

The Lie algebra $\mathfrak{so}(3)$ has $2j+1$ dimensional irreps $d\Gamma^j$ for $j \in \frac{1}{2} \mathbb{N}_{0}$,
while the group $\mathrm{SO}(3)$ only has irreps for $j \in \mathbb{N}_{0}$. #m/thm/rep/lie 

> [!check]- Proof
> Let $J_{1},J_{2},J_{3} \in \mathfrak{so}(3)$ be the basis defined in [[Real special orthogonal group of dimension 3#Lie algebra]],
> and $J^2 = \vec J \cdot \vec J$ be the [[Casimir element#Quadratic Casimir element|quadratic Casimir element]].
> Now consider a [[Lie algebra representation|representation]] $d\Gamma : \mathfrak{so}(3) \to \mathfrak{gl}(V)$ on a finite-dimensional vector space $V$,
> which we will invoke implicitly.
> Let $\ket{j,m} \in V$ such that
> $$
> \begin{align*}
> J^2 \ket{j,m} &= j(j+1) \ket{j,m} \\
> J_{3}\ket{j,m} &= m\ket{j,m} 
> \end{align*}
> $$
> Then
> $$
> \begin{align*}
> J_{\pm} = J_{1} \pm iJ_{2}
> \end{align*}
> $$
> are [[Ladder operator|Ladder operators]] of $J_{3}$.
> It follows that $J_{\pm}\ket{j,m} = (m \pm 1) \ket{j,m \pm 1}$ transforms in the same irrep as $\ket{j,m}$.
> Since $V$ is finite dimensional this must terminate at both ends,
> hence there exist $p < q$ such that
> $$
> \begin{align*}
> J_{3}\ket{j,p}  &= p\ket{j,p} & J_{-}\ket{j,p} &= 0 \\ 
> J_{3}\ket{j,q}  &= q\ket{j,q} & J_{+}\ket{j,q} &= 0 \\ 
> \end{align*}
> $$
> In addition since
> $$
> \begin{align*}
> J_{\mp}J_{\pm} &= (J_{1}\mp iJ_{2})(J_{1} \pm iJ_{2}) = J_{1}^2 + J_{2}^2 \pm i[J_{1},J_{2}] \\
> &= J_{1}^2 + J_{2}^2 \mp J_{3}
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> J^2 = J_{3}^2 + J_{\mp}J_{\pm} \pm J_{3}
> \end{align*}
> $$
> and thus
> $$
> \begin{align*}
> J^2\ket{j,p} &=  (J_{3}^2 -J_{3}+J_{+}J_{-})\ket{j,p} = p(p-1)\ket{j,p} \\
> J^2\ket{j,q} &=  (J_{3}^2 +J_{3}+J_{-}J_{+})\ket{j,q} = p(p+1)\ket{j,q} \\
> \end{align*}
> $$
> hence
> $$
> \begin{align*}
> j(j+1)=p(p-1) = q(q+1)
> \end{align*}
> $$
> and since $p<q$ we have $p = -j$ and $q = j$.
> Now since $2j =q-p \in \mathbb{N}_{0}$,
> we have $2j+1$ dimensional irreps $d\Gamma^j$ of $\mathfrak{so}(3)$ labelled by $j = 0, \frac{1}{2}, 1, \dots$.
> Now assume $d\Gamma$ has a corresponding [[Representation|group representation]] $\Gamma^j$.
> Then
> $$
> \begin{align*}
> \delta_{mm'}[](Group%20representation.md)bra{j,m} e^{-2\pi iJ_{3}}\ket{j,m'} \\ &= \bra{j,m} e^{-2\pi im'} \ket{j,m'}
> = e^{-2\pi im'}\delta_{mm'}  
> \end{align*}
> $$
> which is a contradiction unless $m' \in \mathbb{Z}$ and thus $j \in \mathbb{N}_{0}$.[^2023]
> <span class="QED"/>


[^2023]: 2023\. [[Sources/@keppelerGroupsRepresentations2023|Groups and representations]], §6.8, pp. 93–96

#
---
#state/develop | #lang/en | #SemBr
