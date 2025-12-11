---
tags:
  - public
---
[[Functor]]
# Contravariant functor
A **contravariant functor** (as opposed to a [[Functor|covariant functor]]) behaves very much like a covariant functor,
except for the fact that it flips morphisms and reverses composition.
Because of this, a contravariant functor $F$ from $\cat C$ to $\cat D$ is equivalent to a covariant functor from the [[Opposite category]] of $\cat C$.

> [!warning]+ Notation
> In these notes, the notation for functors will **always** be covariant.
> We will refer to a functor
> $$
> \begin{align*}
> F : \op{\cat C} \to \cat D
> \end{align*}
> $$
> as contravariant, even though we really mean we have a contravariant functor from $\cat C$ to $\cat D$.

A special kind of contravariant functor is the [[Presheaf]].

---
#state/tidy | #SemBr | #lang/en 