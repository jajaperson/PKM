---
tags:
  - public
---
[[Group ring]]
# Regular representation

The (left) [[Regular representation]] for a group is both a [[group representation]] $\Lambda : G \to \mathrm{GL}(\mathbb{C}[G])$ of a group $G$
and a [[∗-representation of the complex group ring|∗-representation]] $\Lambda_{\mathbb{C}[G]} : \mathbb{C}[G] \to \mathrm{GL}(\mathbb{C}[G])$ of its complex [[group ring]] carried by the group ring itself and defined using the group ring's convolution operation.
For $a,b \in \mathbb{C}[G]$ and $g \in G$
$$
\begin{align*}
\Lambda_{\mathbb{C}[G]}(a)b &= a * b \\
\Lambda(g)b &= \delta_{g} * b \\
\end{align*}
$$
and thus for $g,h \in G$ and $a \in \mathbb{C}[G]$
$$
\begin{align*}
\Lambda(g)\delta_{h} &= \delta_{gh} \\
\Lambda(g)a(h) &= a(g^{-1} h)
\end{align*}
$$

> [!check]- Proof these are representations
> If we prove that $\Lambda_{\mathbb{C}[G]}$ is a [[∗-representation of the complex group ring|∗-representation]] it follows that $\Lambda$ is a unitary representation.
> Properties 1, 2, and 4 follow from properties of the ∗-algebra (distributivity, associativity, monoid identity),
> hence all that is left to prove is that $\braket{ c | a*b } = \braket{ a^{\dagger}*c | b }$ for any $a,b,c \in \mathbb{C}[G]$.
> Using $\braket{ a | b }$ as defined in the Zettel for [[Group ring]]
> $$
> \begin{align*}
> \braket{ c | a*b } &= \sum_{x \in G} \overline{c(x)}(a * b)(x) \\
> &= \sum_{x \in G} \sum_{y \in G} \overline{c(x)} a(xy^{-1})b(x) \\
> &= \sum_{x \in G}\sum_{y \in G} \overline{c(x)a^{\dagger}(yx^{-1})}b(x) \\
> &= \sum_{x \in G} \overline{(a^{\dagger} * c)(x)}b(x) \\
> &= \braket{ a^{\dagger} * c | b } 
> \end{align*}
> $$
> as required.
> <span class="QED"/>

The right regular representation $\Rho$ is defined the same way using right multiplication.

## Matrix
If group elements are identified with indices for a matrix then for each $x \in G$
$$
\begin{align*}
\Lambda_{gh}(x) = \begin{cases}
1 & xh = g \\
0 & xh \neq g
\end{cases}
\end{align*}
$$
i.e. $\braket{ \delta_{g} | \Lambda(x) \delta_{h} } = \delta_{g}(xh)$, so each $\Lambda(x)$ is basically the group table.

## Properties

- [[The regular representation contains all irreducible representations]]

#
---
#state/tidy | #lang/en | #SemBr
