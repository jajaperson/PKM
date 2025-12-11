---
tags:
  - public
---
[[Reducibility of representations]]
# Character irreducibility criterion

Let $\Gamma : G \to \mathrm{GL}(V)$ be a complex [[Group representation]] and $\chi : G \to \mathbb{C}$ be the corresponding [[Group character]].
Then $\Gamma$ is [[Reducibility of representations|reducible]] iff #m/thm/rep
$$
\begin{align*}
\frac{1}{\abs G} \sum_{g \in G} \abs{\chi(g)}^2 = 1
\end{align*}
$$
and otherwise the sum is $> 1$.

> [!check]- Proof
> Let $\Gamma : G \to \Vect_{\mathbb{C}}$ be a (in general reducible) representation with
> $$
> \begin{align*}
> \Gamma \cong \bigoplus_{j = 1}^m \bigoplus_{k = 1}^{a_{j}} \Gamma^j
> \end{align*}
> $$
> i.e. each irrep $\Gamma^j$ occurs $a_{j}$ times.
> Then it follows from the definition of a character as a [[trace]] that
> $$
> \begin{align*}
> \chi(g) = \sum_{j}^{m} a_{j} \chi^j(g)
> \end{align*}
> $$
> and then since by [[Orthonormality of irreducible characters]]
> $$
> \begin{align*}
> \sum_{g \in G} \overline{\chi^j(g)} \chi^k(g) = \abs G \delta^{jk}
> \end{align*}
> $$
> it follows that
> $$
> \begin{align*}
> \frac{1}{\abs G} \sum_{g \in G} \abs{\chi(g)}^2 = \sum_{j,k}a_{j}a_{k } \delta^{jk} = \sum_{j} (a_{j})^2
> \end{align*}
> $$
> as required.
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
