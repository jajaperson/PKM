---
tags:
  - public
---
[[Type theory MOC]]
# Type of booleans

The **type of booleans** $\mathbb{2}$ has two canonical terms: $0$ and $1$, often called `false` and `true`.
In (non-dependent) programming and classical mathematics, predicates are usually thought of as having values in $\mathbb{2}$.

```python
0 == 1 # False
1 == 1 # True
```

This is justified by the fact that, in the category [[Category of sets]] of classical mathematics,[^1] the corresponding set $\mathbb{2}$ is a [[subobject classifier]].
In constructive contexts where the [[Law of excluded middle]] is not assumed, however, this is not the case (we instead need a [[Universe of propositions]] $\Omega$),
so the role played by $\mathbb{2}$ is quite different.

## Standard presentation

The type of booleans is usually defined in a type theory as a [[positive type|positive]] [[inductive type]].
The standard presentation is as follows: #m/def/type/ind

1. Formation rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \AxiomC{}
  \UnaryInfC{$\vdash \mathbb{2}$}
  \end{prooftree}
  $$
2. Introduction rules
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \AxiomC{}
  \UnaryInfC{$\vdash 0 : \mathbb{2}$}
  \end{prooftree}
  \qquad
  \begin{prooftree}
  \def\fCenter{\vdash}
  \AxiomC{}
  \UnaryInfC{$\vdash 1 : \mathbb{2}$}
  \end{prooftree}
  $$
3. Induction rule
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1), p : \mathbb{2} \fCenter \opn{ind}_{\mathbb{\mathbb{2}}}(c_{0},c_{1},p) : C(p)$
  \end{prooftree}
  $$
4. Judgemental computation rules
  $$
  \begin{align*}
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1) \fCenter \opn{ind}_{\mathbb{2}}(c_{0},c_{1},0) = c_{0} : C(0)$
  \end{prooftree}
  \\\\
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1) \fCenter \opn{ind}_{\mathbb{2}}(c_{0},c_{1},1) = c_{1} : C(1)$
  \end{prooftree}
  \end{align*}
  $$

> [!code]- Agda
> [1Lab](https://1lab.dev/Prim.Data.Bool.html)
> ```agda
> data Bool : Type where
>   true false : Bool
> ```

#
---
#state/develop | #lang/en | #SemBr

[^1]: See [[ETCS]].
