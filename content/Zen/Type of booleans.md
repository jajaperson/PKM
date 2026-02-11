---
tags:
  - public
---
[[Type theory MOC]]
# Type of booleans

The **type of booleans** $\mathbb{2}$ is defined in a dependent type theory as an [[inductive type]].
The standard presentation is as follows: #m/def/type/ind

1. Formation rules
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
3. Elimination rules
  $$
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1), p : \mathbb{2} \fCenter \opn{ind}_{\mathbb{\mathbb{2}}}^C(c_{0},c_{1},p) : C(p)$
  \end{prooftree}
  $$
4. Judgemental computation rules
  $$
  \begin{align*}
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1) \fCenter \opn{ind}_{\mathbb{2}}^C(c_{0},c_{1},0) = c_{0} : C(0)$
  \end{prooftree}
  \\\\
  \begin{prooftree}
  \def\fCenter{\vdash}
  \Axiom$\Gamma, x : \mathbb{2} \fCenter C(x)$
  \UnaryInf$\Gamma, c_{0} : C(0), c_{1} : C(1) \fCenter \opn{ind}_{\mathbb{2}}^C(c_{0},c_{1},1) = c_{1} : C(1)$
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
