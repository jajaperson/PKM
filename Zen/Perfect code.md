---
tags:
  - public
aliases:
  - perfect $e$-error correcting code
---
[[Coding theory MOC]]
# Perfect code

A $q$-ary [[code]] $\mathcal{C} \sube S_{q}^n$ of length $n$ in alphabet $S_{q}$ is said to be a **perfect $e$-error correcting code**, or briefly a **perfect code**, iff[^1999] #m/def/code 

- it has [[Code#^minimumDistance]] $2e+1$; and
- for every string $x \in S_{q}^n$ there exists a unique codeword $c \in \mathcal{C}$ with $d(x,c) \leq e$.

equivalently, $\mathcal{C}$ has a minimum distance $2e+1$ and [[Code#^coveringRadius]] $e$.
See also [[Quasi-perfect code]].

  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.1, p. 34

## Properties

- [[Sphere packing condition for a perfect code]]
- The [[extended code]] of a [[Linear code|linear]] [[perfect code]] is quasi-perfect.

#
---
#state/tidy | #lang/en | #SemBr
