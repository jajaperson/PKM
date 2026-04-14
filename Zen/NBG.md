---
aliases:
  - Von Neumann-Bernays-Gödel set theory
  - "#m/def/set/nbg"
  - "#m/thm/set/nbg"
tags:
  - public
mathLink: $\mathrm{NBG}$
---
[[Axiomatic set theory]]
# Von Neumann-Bernays-Gödel set theory

**Von Neumann-Bernays-Gödel set theory** or $\mathrm{NBG}$[^Halmos] is a [[Material set theory]] and [[conservative extension]] of [[ZFC]], in which the notion of a [[Class]] is treated directly.
Notably, there exists a [[Complement Axiom for classes|universal class]] $V$ of all elements.

  [^Halmos]: [[Paul Halmos]], who was not a fan, joked that this should stand for “No Bloody Good”.

## Setup

We consider a universe $\mathcal{W}$ of objects.
We modify the [[Material set theory#Setup|setup of material set theory]] so that **sethood** is replaced with **classhood**, namely we have the primitive notions

- $x = y$ iff $x$ is the same object as $y$
- $\chood(x)$ iff $x$ is a [[Class]];
- $x \in y$ iff $\chood(y)$ and $x$ is a member of $y$

We also have a sethood predicate $\shood(x)$, however it is no longer primitive, since one can define

$$
\begin{align*}
\shood(x) \stackrel{\text{def}}\iff \chood(x) \land (\exists \chood y)[x \in y]
\end{align*}
$$

and any class $x$ which is not a set is a [[proper class]], denoted $\pchood(x)$.
As with my treatment of other material set theories, we will allow for the existence of an [[Urelement]].

## Axioms

We take the following axioms[^2015]: #m/def/set/nbg 

##### Fundamentals

1. [[Axiom of Extensionality#Axiom of Extensionality for Classes]]
2. [[Emptyset Axiom]]
3. [[Axiom of Pairing#Axiom of Pairing for Classes]]

##### Axioms of Class Existence

1. [[Elementhood Relation Class Axiom]]
2. [[Axiom of Intersection#Axiom of Intersection for Classes]]
3. [[Complement Axiom for classes]]
4. [[Domain Axiom for classes]]
5. [[Universal Relation Axiom]]
6. [[Axioms of Permutation for classes]]

whence follows the important [[Class existence theorem schema]], which generalizes these axioms into instances of a single schema.

##### Set axioms

7. [[Axiom of Union]]
8. [[Powerset Axiom]]
9. [[Axiom of Subsets]]
10. [[Axiom of Replacement for classes]]
11. [[Axiom of Infinity]]

  [^2015]: 2015\. [[Sources/@mendelsonIntroductionMathematicalLogic2015|Introduction to Mathematical Logic]], §4.1, pp. 231ff.


## Lemmata

- [[Class existence theorem schema]]

  #
---
#state/stub | #lang/en | #SemBr
