---
aliases:
  - Every group is isomorphic to a subgroup of its symmetric group
tags:
  - public
---
[[Group theory MOC]]
# Cayley's theorem

**Cayley's theorem** states that any group $G$ of order $n$ is isomorphic to a subset of the (its) [[symmetric group]] $G! \cong S_{n}$. #m/thm/group 

Given an arbitrary group $(G, \cdot)$ we can define an injective [[Group monomorphism|monomorphism]] into the [[symmetric group]] of its underlying set $G$.
For any $h \in G$, we define the bijection
$$
\begin{align*}
\varphi_{h} : G &\to G \\
: g &\mapsto h \cdot g 
\end{align*}
$$
Then $f : G \to G! : h \mapsto \varphi_{h}$ is an monomorphism.

> [!check]- Proof
> Let $a, b, x \in G$.
> Clearly
> $$
> \begin{align*}
> (\varphi_{a} \circ \varphi_{b})(x) = \varphi_{a}(\varphi_{b} (x)) = \varphi_{a} (b \cdot x) = a \cdot b \cdot x = \varphi_{a \cdot b}(x)
> \end{align*}
> $$
> hence $f$ is a [[Group homomorphism]].
> $f$ is also injective: $\varphi_{a}(x) = \varphi_{b}(x)$ iff $ax = bx$ iff $a = b$.
> Hence $f$ is a monomorphism.
> <span class="QED"/>

A generalization is the [[Yoneda lemma]].

#
---
#state/tidy | #lang/en | #SemBr
