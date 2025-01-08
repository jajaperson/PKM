---
tags:
  - public
alias: initial object, terminal object, zero object
---

[[Universal construction]]
# Initial and terminal objects

**Initial** and **terminal objects** are objects within a category which, if they exist, are unique up to isomorphism.
Loosely speaking, all objects ‘flow’ from the initial object and to the terminal object.
More precisely, in a category $\cat C$, objects $\mathbf{0}$ and $\mathbf{1}$ are called the initial and terminal objects respectively if for any object $X$ there exist unique morphisms $I \in \cat C(\mathbf{0}, X)$ and $T \in \cat C(X, \mathbf{1})$. #m/def/cat 
$$
\begin{align*}
\mathbf{0} \xrightarrow{\quad I\ \quad} X \xrightarrow{\quad T\ \quad} \mathbf{1}
\end{align*}
$$
Concisely, $\cat C(\mathbf{0},-)$ and $\cat C(-,\mathbf{1})$ always contain exactly one morphism.


> [!check]- Uniqueness up to isomorphism
> Let $\mathbf{0'}$ be an object in $\cat C$ with the initial property.
> Then there exists unique $f \in \cat C(\mathbf{0, \mathbf{0'}})$ and $g \in \cat C(\mathbf{0'},\mathbf{\mathbf{0}})$.
> Likewise the only endomorphisms are $\id_{\mathbf{0}}$ and $\id_{\mathbf{0'}}$.
> Hence $gf = \id_{\mathbf{0}}$ and $fg = \id_{\mathbf{0'}}$, therefore $\mathbf{0} \cong \mathbf{0'}$.
> 
> Likewise let $\mathbf{1'}$ be an object in $\cat C$ with the initial property.
> Then there exists unique $f \in \cat C(\mathbf{1, \mathbf{1'}})$ and $g \in \cat C(\mathbf{1'},\mathbf{\mathbf{1}})$.
> Likewise the only endomorphisms are $\id_{\mathbf{0}}$ and $\id_{\mathbf{0'}}$.
> Hence $gf = \id_{\mathbf{1}}$ and $fg = \id_{\mathbf{1'}}$, therefore $\mathbf{1} \cong \mathbf{1'}$.
> <span class="QED"/>

## As limits and colimits

Formulated as [[Limits and colimits]], the terminal object is the limit of the [[empty diagram]] and the initial object is its colimit.

## Examples
### In a [[Poset]]
The simplest example is perhaps in posets, viewed as categories, in which the initial and terminal objects represent the smallest and largest values respectively.

### In [[Category of sets|Set]] and [[Category of topological spaces|Top]]

In the category $\Set$, it is required that a unique morphism exists mapping the empty set $\emptyset$ for every set $A$. 
Hence $\emptyset$ is the initial object.

In a similar fashion, it is clear that one and only one mapping exists from each set to a singleton set $\set *$, 
and that all singletons are isomorphic. 
Hence the singleton is the terminal object.

### In [[Hask]]
Analogously, in $\Hask$, the initial object is the `Void` type

```haskell
absurd :: Void -> a
```

While the terminal object is the canonical singleton type `()`

```haskell
unit :: a -> ()
unit _ = ()
```

### In [[Category of vector spaces|Vect]]
In $\Vect_\mathbb{K}$, both the initial and terminal object, hence the zero object, 
is the [[trivial vector space]] $O$.
Clearly, all trivial vector spaces are isomorphic
(e.g. the trivial subspace of $\mathbb R^2$ and $\mathbb R^3$).
For any vector space $V \in \Ob(\Vect_{\mathbb{K}})$,
there exists exactly one linear transformation $f \in \Vect_{\mathbb K}(V, \{ \vab 0 \})$,
and this is also clearly epic.
$$
\begin{align*}
f &: V \rightarrowtail O \\
&: v \mapsto \vab 0
\end{align*}
$$
Likewise, there exists exactly one (monic) linear transformation $g \in \Vect_{\mathbb K}(\{ \vab 0 \}, V)$
$$
\begin{align*}
g &: O \twoheadrightarrow V \\
&: \vab 0 \to \vab 0
\end{align*}
$$
and we therefore have $f \circ g = \id_{O}$

### In [[Category of groups|Grp]]

The trivial group $\{ e \}$ is both the initial and terminal object.


---
#state/tidy | #SemBr | #lang/en 