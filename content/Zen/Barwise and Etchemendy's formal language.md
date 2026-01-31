---
tags:
  - public
---
[[@barwiseLiarEssayTruth1989]]
# Barwise and Etchemendy's formal language

In order to have a way to systematically present statements complex enough to explore the [[Liar paradox]] and other issues of semantics,
Barwise and Etchemendy develop a simple [[Formal language]] $\mathcal{L}$.
$\mathcal{L}$ has the following resources

- Constant symbols. The situation to be described involves a card game played between `Claire` and `Max`.
  As such, the constant symbols are the names `Claire` and `Max`, and the symbols for cards.
- Propositional demonstratives `this`, `that₁`, `that₂`, &c.
- Logical connectives `¬`, `∨`, `∧`.
- Scope indicator `↓`
- Binary relations `Has` and `Believes`, written in infix notation
- Unary relation `True`, written as a function.

we have atomic formulae

- `(a Has c)` where `a` is name and `c` is a card
- `(a Believes th)` where `a` is a name and `th` is a propositional demonstrative
- `True(th)` where `th` is a propositional demonstrative

and the class of all $\mathcal{L}$-formulae is the closure of atomic formulae such that if `φ` and `ψ` are formulae, so too are the following 
- `(φ ∧ ψ)`
- `(φ ∨ ψ)`
- `¬φ`
- `(True φ)`
- `(a Believes φ)` where `a` is a name
- `↓φ`

`this` always refers to the sentence enclosed in a scope indicator `↓`.

#
---
#state/develop | #lang/en | #SemBr
