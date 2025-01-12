---
tags:
  - public
mathLink-blocks:
  system: projective system
---
[[Linear code]]
# Projective code

A $[k,n]-$[[linear code]] $\mathcal{C} \leq \mathbb{K}_{q}^n$ is said to be **projective** iff its [[dual code]] $\mathcal{C}^\perp$ has [[Code#^minimumDistance]] $d \geq 3$, #m/def/code 
or equivalently, iff any [[Linear code#^generator]] $G$ of $\mathcal{C}$ has pairwise [[Linear (in)dependence|linearly independent]] columns.[^1999] 

Yet a more complex characterization, which may shed light on the name:[^2017]
Let $c_{i} : \mathcal{C} \to \mathbb{K}_{q}$ denote the $i$th coördinate function, whence $\{ c_{i} \}_{i=1}^n$ are a [[Span|spanning set]] of $\mathcal{C}$.
Further, let $C_{i} = \mathbb{K}_{q}c_{i}$,
which is a point in the [[Galois geometry]] $\opn  P(\mathcal{C}^*) \cong \opn{PG}(k-1,q)$.
Then $\mathcal{C}$ is **projective** iff $C_{i} \in \opn P(\mathcal{C}^*)$ are distinct,
whence $\{ C_{i} \}_{i=1}^n$ is called its **projective system**. ^system


  [^1999]: 1999\. [[Sources/@vanlintIntroductionCodingTheory1999|Introduction to coding theory]], §3.3, p. 38
  [^2017]: 2017\. [[Sources/@kwiatkowskiGraphsProjectiveCodes2017|The graphs of projective codes]], §2.2, p. 3

#
---
#state/develop | #lang/en | #SemBr
