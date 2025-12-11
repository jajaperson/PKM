---
tags:
  - public
---
[[Lie algebras MOC]]
# Nilpotent Lie algebra

A [[Lie algebra]] $\mathfrak{g}$ is **nilpotent** iff its **lower central series** 
$$
\begin{align*}
\mathfrak{g}_{0} &= \mathfrak{g}, & \mathfrak{g}_{n+1} = [\mathfrak{g}, \mathfrak{g}_{n}]
\end{align*}
$$
terminates in the zero subalgebra, #m/def/lie 
i.e. $\mathfrak{g}_{n} = 0$ for some $n \in \mathbb{N}$.[^1972]
Special cases are an [[Abelian Lie algebra]] and a [[Solvable Lie algebra]].

  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §3.2, pp. 11–12

## Properties

1. If $\mathfrak{g}$ is nilpotent, then so too are all subalgebras and homomorphic images. ^P1
2. If $\mathfrak{g} / \mathfrak{z}(\mathfrak{g})$ is nilpotent then so too is $\mathfrak{g}$. ^P2
3. If $\mathfrak{g} \neq 0$ is nilpotent then $\mathfrak{z}(\mathfrak{g}) \neq 0$. ^P3
4. [[Engel's theorem]].


> [!check]- Proof of 1–3
> Clearly if $\mathfrak{a} \leq \mathfrak{g}$, then $\mathfrak{a}_{n} \leq \mathfrak{g}_{n}$ for $n \in \mathbb{N}_{0}$, so if the latter terminates so to does the former.
> Similarly given a [[Lie algebra homomorphism|epimorphism]] $\varphi : \mathfrak{g} \twoheadrightarrow \mathfrak{h}$ we have $\varphi(\mathfrak{g}_{0}) = \mathfrak{h}_{0}$,
> and given $\varphi(\mathfrak{g}_{n}) = \mathfrak{h}_{n}$
> $$
> \begin{align*}
> \varphi(\mathfrak{g}_{n+1}) = \varphi([\mathfrak{g},\mathfrak{g}_{n}]) =[\varphi(\mathfrak{g}),\varphi(\mathfrak{g}_{n})] = [\mathfrak{h}, \mathfrak{h}_{n}] = \mathfrak{h}_{n+1}
> \end{align*}
> $$
> proving [[#^P1]] by induction.
> 
> Say $\mathfrak{g}_{n} \trianglelefteq \mathfrak{z}(\mathfrak{g})$, then $\mathfrak{g}_{n+1}= 0$, proving [[#^P2]].
> 
> The last nonzero term in the lower central series is central., proving [[#^P3]]. <span class="QED"/>



#
---
#state/tidy | #lang/en | #SemBr
