---
aliases:
  - RC root system
  - general root system
tags:
  - public
---
[[Geometry MOC]]
# Root system

A **root system** $\Phi$ is a finite set of vectors, called **roots**, in the [[quadratic space]] $\mathbb{E} = \mathbb{Q}^{n,0}$ such that #m/def/geo 

1. $\Phi$ [[span|spans]] $\mathbb{E}$; ^R1
2. for every root $\alpha \in \Phi$, the reflection $\sigma_{\alpha}$ through the hyperplane[^cod] perpendicular to $\alpha$ leaves $\Phi$ invariant. ^R2

Often one also requires

3. (**reduced root system**) if $\alpha,\beta \in \Phi$ and $\beta \propto \alpha$, then $\beta = \pm \alpha$  ^R3
4. (**crystallographic root system**) if $\alpha,\beta \in \Phi$, the projection of $\alpha$ onto $\beta$ is an integer or half-integer multiple of $\beta$  ^R4

We will call a reduced crystallographic root system an **RC root system**.
A root system which is not necessarily RC will sometimes be called a **general root system** for emphasis.
Denoting the bilinear product on $\mathbb{E}$ as $(\cdot ,\cdot)$ we define
$$
\begin{align*}
\langle \beta,\alpha \rangle = 2 \frac{(\beta,\alpha)}{(\alpha,\alpha)} 
\end{align*}
$$
which is linear in $\beta$ only, whence
$$
\begin{align*}
\sigma_{\alpha}(\beta) = \beta - \langle \beta,\alpha \rangle \alpha
\end{align*}
$$
and we may reëxpress [[#^R4]] as[^1972]

4. (**crystallographic root system**) if $\alpha,\beta \in \Phi$, then $\langle \beta,\alpha  \rangle \in \mathbb{Z}$. ^R4b

  [^cod]: i.e. subspace of codimension 1


  [^1972]: 1972\. [[Sources/@humphreysIntroductionLieAlgebras1972|Introduction to Lie Algebras and Representation Theory]], §9.1–9.2, pp. 42–43

## Further notions

- An **isomorphism** $\varphi : \Phi \to \Phi'$ of root systems is an isometry $\varphi \in \opn O(\mathbb{E})$ of $\mathbb{E}$ such that $\varphi(\Phi) = \Phi'$.
- The subgroup of automorphisms generated by reflections $\sigma_{\alpha}$ is called its [[Weyl group]].
- [[Dual root system]]

## Properties

1. [[Reflections of a general root system]]
2. [[Conjugation of a Weyl element]]

#
---
#state/develop | #lang/en | #SemBr
