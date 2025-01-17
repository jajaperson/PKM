---
tags:
  - public
mathLink-blocks:
  minimumDistance: minimum distance
  minimumWeight: minimum weight
  rate: information rate
  coveringRadius: covering radius
  weight: weight
---
[[Coding theory MOC]]
# Code

A $q$-ary **code** $\mathcal{C}$ of length $n$ is a nonempty subset $\mathcal{C} \sube S_{q}^n$,
where $S_{q}$ is a set (called an **alphabet**) containing $q$ letters.[^1999] #m/def/code 

- An element $x \in \mathcal{C}$ is thence called a **codeword**.
- The [[Hamming distance]] $d(x,y)$ between codewords $x,y \in C$ is the number of positions in which they differ, and makes $S_{q}$ a [[metric space]].
- The **weight** of a code is the distance from the zero-codeword $\wt x = d(\vab 0, x)$,
  where $\vab 0$ consists of some distinguished letter $0 \in S$. ^weight

Following [[@vanlintIntroductionCodingTheory1999|van Lint]], a code if length $n$ with $M$ codewords and [[#^minimumDistance]] $d$ is called an **$(n,M,d)$-code**.
An important special case is a [[linear code]], where we take $S_{q} = \mathbb{K}_{q}$, the [[Galois field]] of order $q$, and require $\mathcal{C} \leq \mathbb{K}_{q}^n$ to be a [[vector subspace]].


## Further notions

- The **minimum distance** of a non-unary code $\mathcal{C}$ is
$$
\begin{align*}
\min \{ d(x,y) : x,y \in \mathcal{C}; x \neq y \}
\end{align*}
$$ 
^minimumDistance
- The **minimum weight** of a non-unary code is
  $$
  \begin{align*}
  \min \{ \wt x : x \in \mathcal{C}; x \neq \vab 0 \}
  \end{align*}
  $$
  ^minimumWeight
- The **information rate** of a $q$-ary code $\mathcal{C}$ of length $n$ is
  $$
  \begin{align*}
  R = n^{-1} \log_{q} \abs{\mathcal{C}}
  \end{align*}
  $$
  ^rate
- The **covering radius** of a a code $\mathcal{C} \sube S_{q}^n$ is the minimum radius required for Hamming balls around codewords to cover the whole space, i.e.
  $$
  \begin{align*}
  \opn{cov}(\mathcal{C} ) = \max \{ \min \{ d(c,x): c \in \mathcal{C} \}: x \in S_{q}^n \}
  \end{align*}
  $$
  ^coveringRadius
- [[Equivalence of codes]]

## Special kinds of code

- [[Linear code]]
- [[Perfect code]]
- [[Systematic code]]

  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.1, pp. 33–34


#
---
#state/tidy | #lang/en | #SemBr
