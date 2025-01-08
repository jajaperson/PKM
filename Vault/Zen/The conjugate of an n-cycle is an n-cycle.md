---
tags:
  - public
---
[[Conjugacy classes of a symmetric group are determined by cycle structure]]
# Conjugate of an n-cycle is an n-cycle

Let $\alpha, \tau \in S_{n}$ where $\alpha$ an $k$-cycle with the form
$$
\begin{align*}
\alpha = (a_{1} \, a_{2} \cdots a_{k-1} \, a_{k})
\end{align*}
$$
where $a_{i} \in \mathbb{N}_{n}$ then the conjugate $\tau\alpha \tau^{-1}$ is given by
$$
\begin{align*}
\tau\alpha \tau^{-1} = (\tau(a_{1}) \, \tau(a_{2}) \cdots \tau(a_{k-1}) \, \tau(a_{k}))
\end{align*}
$$
and is hence also a $k$-cycle #m/thm/group/sym

> [!check]- Proof
> Let $1 \leq i \leq k$.
> Then $\tau\alpha\tau^{-1} \tau (a_{i}) = \tau \alpha (a_{i}) = \tau(a_{i + 1 \mod k})$.
> For any $b \in \mathbb{N}_{n} \setminus \{ a_{i} \}_{i=1}^k$, $\alpha(b) = b$, so $\tau\alpha \tau^{-1} \tau(b) = \tau(b)$.
> Hence $\tau \alpha \tau^{-1}$ maps numbers of the form $\tau(a_{i})$ to $\tau(a_{i + 1 \mod k})$,
> and leaves all others invariant.
> Thus
> $$
> \begin{align*}
> \tau \alpha \tau^{-1} &= (\tau(a_{2}) \, \tau(a_{3}) \cdots \tau(a_{k}) \, \tau(a_{1})) \\
> &= (\tau(a_{1}) \, \tau(a_{2}) \cdots \tau(a_{k-1}) \, \tau(a_{k}))
> \end{align*}
> $$
> as claimed.
> <span class="QED"/>

This is a lemma for [[Conjugacy classes of a symmetric group are determined by cycle structure]].

#
---
#state/tidy | #lang/en | #SemBr
