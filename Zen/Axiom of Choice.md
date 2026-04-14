---
aliases: AC
tags:
  - public
---
[[Set theory MOC]]
# Axiom of Choice

The **Axiom of Choice** is a controversial axiom of set theory. 
In addition to those of [[ZF]] it forms the final axiom of [[ZFC]].
Some equivalent formulations are #m/def/set/zfc 

1.  For any set $X$ of inhabited sets, there exists a [[choice function]] $f : X \rightarrowtail \bigcup X$.
  $$
  \begin{align*}
  (\forall \shood X)\left[(\forall x \in X)(\exists y \in x) \implies \left( \exists f : X \to \bigcup X \right) (\forall A \in X)[f(A) \in A]\right] 
  \end{align*}
  $$
2. Let $A,B$ be functions and $P \sube A \times B$ be a [[Relation set]].
  If $P$ is [[total relation|left-total]], i.e. relates every $x \in A$ with at least one $y \in B$, then there exists a [[choice function]] that selects such a $y$ for each $x$, i.e.
$$
\begin{align*}
(\forall x \in A)(\exists y \in B)P(x,y) \implies (\exists f: A\to B)(\forall x \in A)P(x,f(x))
\end{align*}
$$
3. The [[cartesian product]] of an arbitrary collection of inhabited sets is itself inhabited.
  $$
  \begin{align*}
  (\forall \alpha \in A)[X_{\alpha} \neq \0] \implies \prod_{\alpha \in A}X_{\alpha} \neq \0
  \end{align*}
  $$
4. Every [[Surjectivity, injectivity, and bijectivity|surjection]] in [[Category of sets]] is [[Split epimorphism|split epic]].
   This _structuralist_ formulation is an example of the [[External Axiom of Choice]].

> [!missing]- Proof of equivalence over [[ZF]]
> #missing/proof

## Other equivalences

- Set-theoretic
  - [[Well ordering principle]]
  - [[Cardinal comparability hypothesis]]
  - [[Maximal chain principle]]
  - [[Zorn's lemma]]
- Topological
  - [[Tikhonov's theorem]]

## Relationship to other axioms

### Weakenings

Over [[ZF]]

- [[Boolean prime ideal theorem]]
- [[Axiom of Dependent Choice]] $\implies$ [[Countable Axiom of Choice]]

#
---
#state/tidy | #lang/en | #SemBr 