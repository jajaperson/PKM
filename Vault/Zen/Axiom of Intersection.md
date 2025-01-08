---
tags:
  - public
---
[[Material set theory]]
# Axiom of Intersection

In typical [[material set theory]] such as [[ZF]], it is not necessary to take the existence of an intersection as an axiom, as it can be derived from the [[Axiom of Union]] and [[Specification Axiom Schema]].
That is, it is a theorem of [[ZF]] that #m/thm/set/zf 
$$
\begin{align*}
\vdash (\forall \shood \mathcal{E})(\exists \shood B)[x \in B \iff (\forall \shood X \in \mathcal{E})[x \in X]]
\end{align*}
$$
which is to say,
for any set $\mathcal{E}$ there exists an **intersection** $B$ consisting of the elements of elements of $\mathcal{E}$, which by [[Axiom of Extensionality|extensionality]] is unique, and we denote $\bigcap \mathcal{E}$.

> [!check]- Proof in [[ZF]]
> By the [[Axiom of Union]], $\bigcup \mathcal{E}$ exists. Consider the formula
> $$
> \begin{align*}
> \phi(x) \iff (\forall \shood X \in E)[x \in E]
> \end{align*}
> $$
> then using this with the [[Specification Axiom Schema]] on $\bigcup \mathcal{E}$ gives
> $$
> \begin{align*}
> B= \{ x \in \bigcup \mathcal{E} : \phi(x) \}
> \end{align*}
> $$
> which is the $B$ demanded above. <span class="QED"/>

## Axiom of Intersection for classes

For [[Class|classes]], on the other hand, the **Axiom of Intersection**[^2015] plays an imortant role in replacing the [[Specification Axiom Schema]]:
$$
\begin{align*}
(\forall \chood X)(\forall \chood Y)(\exists \chood Z)(\forall u)[u \in Z \iff u \in X \land u \in Y]
\end{align*}
$$

  [^2015]: 2015\. [[Sources/@mendelsonIntroductionMathematicalLogic2015|Introduction to Mathematical Logic]], §4.1, p. 236

#
---
#state/tidy | #lang/en | #SemBr
