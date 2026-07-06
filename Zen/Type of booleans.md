---
tags:
  - public
---
[[Type theory MOC]]
# Type of booleans

The **type of booleans** $\mathbb{2}$ has two canonical terms: `true` and `false`.
In (non-dependent) programming and classical mathematics, predicates are usually thought of as having values in $\mathbb{2}$.

```python
0 == 1 # False
1 == 1 # True
```

This is justified by the fact that, in the category [[Category of sets]] of classical mathematics,[^1] the corresponding set $\mathbb{2}$ is a [[Subobject classifier]].
In constructive contexts where the [[Law of excluded middle]] is not assumed, however, this is not the case (we instead need a [[Universe of propositions]] $\Omega$),
so the role played by $\mathbb{2}$ is quite different.

## Standard presentation

Here we give a formal presentation of $\mathbb{2}$ in the [[cartesian calculus of substitutions]], following _[[@angiuliPrinciplesDependentType2025|Principles of dependent type theory]]_. #m/def/type/ind
The formation rule is
$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\mathbb{2}$)}
\UnaryInf$\Gamma \fCenter \mathbb{2}$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\RL{($\mathbb{2}$-N).}
\UnaryInf$\Delta \fCenter \mathbb{2}[\gamma] = \mathbb{2}$
\end{prooftree}
$$

$\mathbb{2}$ is an [[inductive type]] with two constructors for “true” and “false”

$$
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\mathbb{2}\mathrm{I}_{\mathrm{t}}$)}
\UnaryInf$\Gamma \fCenter \mathbf{true}: \mathbb{2}$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\AxiomC{$\Gamma \vdash$}
\RL{($\mathbb{2}\mathrm{I}_{\mathrm{f}}$)}
\UnaryInf$\Gamma \fCenter \mathbf{false}: \mathbb{2}$
\end{prooftree}
$$

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\RL{($\mathbb{2}\mathrm{I}_{\mathrm{t}}$-N)}
\UnaryInf$\Gamma \fCenter \mathbf{true}[\gamma] = \mathbf{true} : \mathbb{2}$
\end{prooftree}
\qquad
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\RL{($\mathbb{2}\mathrm{I}_{\mathrm{f}}$-N)}
\UnaryInf$\Gamma \fCenter \mathbf{false}[\gamma] = \mathbf{false} : \mathbb{2}$
\end{prooftree}
$$

Thus the induction principle gives the elimination rule

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma. \mathbb{2} \fCenter A$
\Axiom$\Gamma \fCenter a_{\mathrm{t}} : A[\mathbf{id}. \mathbf{true}]$
\Axiom$\Gamma \fCentera_{\mathrm{f}} : A[\mathbf{id}.\mathbf{false}]$
\Axiom$\Gamma \fCenter b : \mathbb{2}$
\RL{($\mathbb{2}$E)}
\QuaternaryInf$\Gamma \fCenter \mathbf{if}(b, a_{\mathrm{t}}, a_{\mathrm{f}}) : A[\mathbf{id}.b]$

\end{prooftree}
$$

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Delta \fCenter \gamma : \Gamma$
\Axiom$\Gamma. \mathbb{2} \fCenter A$
\Axiom$\Gamma \fCenter a_{\mathrm{t}} : A[\mathbf{id}. \mathbf{true}]$
\Axiom$\Gamma \fCentera_{\mathrm{f}} : A[\mathbf{id}.\mathbf{false}]$
\Axiom$\Gamma \fCenter b : \mathbb{2}$
\RL{($\mathbb{2}$E-N)}
\QuinaryInf$\Gamma \fCenter \mathbf{if}(b, a_{\mathrm{t}}, a_{\mathrm{f}})[\gamma] = \mathbf{if}(b[\gamma], a_{\mathrm{t}}[\gamma], a_{\mathrm{f}}[\gamma]) : A[\gamma.b[\gamma]]$

\end{prooftree}
$$

and [[β-computation]] rules

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma . \mathbb{2} \fCenter A$
\Axiom$\Gamma \fCenter a_{\mathrm{t}} : A[\mathbf{id}. \mathbf{true}]$
\Axiom$\Gamma \fCenter a_{\mathrm{f}} : A[\mathbf{id}]. \mathbf{false}$
\RL{($\mathbb{2} \beta_{\mathrm{t}}$)}
\TrinaryInf$\Gamma \fCenter \mathbf{if}(\mathbf{true}, a_{\mathrm{t}}, a_{\mathrm{f}}) = a_{\mathrm{t}} : A[\mathbf{id}.\mathbf{true}]$
\end{prooftree}
$$

$$
\begin{prooftree}
\def\fCenter{\vdash}
\Axiom$\Gamma . \mathbb{2} \fCenter A$
\Axiom$\Gamma \fCenter a_{\mathrm{t}} : A[\mathbf{id}. \mathbf{true}]$
\Axiom$\Gamma \fCenter a_{\mathrm{f}} : A[\mathbf{id}]. \mathbf{false}$
\RL{($\mathbb{2} \beta_{\mathrm{f}}$)}
\TrinaryInf$\Gamma \fCenter \mathbf{if}(\mathbf{false}, a_{\mathrm{t}}, a_{\mathrm{f}}) = a_{\mathrm{f}} : A[\mathbf{id}.\mathbf{false}]$
\end{prooftree}
$$

We omit an [[η-unicity]] rule in the standard presentation, since it can be shown given an [[Extensional equality type]].


> [!code]- Agda
> [1Lab](https://1lab.dev/Prim.Data.Bool.html)
> ```agda
> data Bool : Type where
>   true false : Bool
> ```

## Internalizing judgemental structure

In terms of [[Internalizing judgemental structure]], we have for any context $\Gamma$

$$
\begin{align*}
\mathbb{2}_{\Gamma} &\in \opn{Ty}(\Gamma);
&
\mathbf{true}_{\Gamma}, \mathbf{false}_{\Gamma} \in \opn{Tm}(\Gamma, \mathbb{2})
\end{align*}
$$

and for any dependent type $\Gamma. \mathbb{2} \vdash A$,
$$
\begin{align*}
((\mathbf{id}. \mathbf{true})^*, (\mathbf{id}. \mathbf{false})^*) : \opn{Tm}(\Gamma . \mathbb{2}, A) \cong \opn{Tm}(\Gamma, A[\mathbf{id}. \mathbf{true}]) \times \opn{Tm}(\Gamma, A[\mathbf{id}. \mathbf{false}]),
\end{align*}
$$
is a bijection natural in $\Gamma$, where we have used the pullback meta-function [[Cartesian calculus of substitutions#^PB3]] and the universal property of the [[Products and coproducts|product]] in the metatheory.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: See [[ETCS]].
