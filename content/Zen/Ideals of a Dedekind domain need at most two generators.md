---
tags:
  - public
---
[[Dedekind domain]]
# Ideals of a Dedekind domain need at most two generators

Let $R$ be a [[Dedekind domain]] and $I \trianglelefteq R$ be an [[ideal]].
Then for any $\alpha \in I$, there exists a $\beta \in I$ such that $I = \langle \alpha,\beta \rangle$. #m/thm/ring 

> [!check]- Proof
> It suffices to prove the case where $I$ is not [[Principal ideal|principal]].
> Since [[A Dedekind domain admits UFI]], we have
> $$
> \begin{align*}
> I = \prod_{i} \mathfrak{p}_{i}^{a_{i}}.
> \end{align*}
> $$
> for distinct prime ideals $\mathfrak{p}_{i}$ and exponents $a_{i} \in \mathbb{N}$.
> Choose some $\alpha \in I$ and consider $\langle \alpha \rangle \sube I$.
> Since [[A Dedekind domain is a CDR]], we have
> $$
> \begin{align*}
> \langle \alpha \rangle = \left( \prod_{i} \mathfrak{p}_{i}^{b_{i}} \right) \left( \prod_{j} \mathfrak{q}_{j}^{c_{j}} \right)
> \end{align*}
> $$
> where $\mathfrak{q}_{i}$ are distinct from each other and the $\mathfrak{p}_{i}$
> and $b_{i},c_{i} \in \mathbb{N}$ with $a_{i} \leq b_{i}$.
> 
> We seek
> $$
> \begin{align*}
> \beta \in \bigcap_{i} (\mathfrak{p}_{i}^{a_{i}} \setminus \mathfrak{p}_{i}^{a_{i}+1}) \setminus \bigcap_{j} \mathfrak{q}_{j}.
> \end{align*}
> $$
> For each $\mathfrak{p}_{i}$, let $x_{i} \in \mathfrak{p}_{i}^{a_{i}} \setminus \mathfrak{p}_{i}^{a_{i}+1}$,
> and for each $\mathfrak{q}_{i}$, let $y_{i} \notin \mathfrak{q}_{i}$.
> By the [[Chinese remainder theorem for rings]], we have a surjective homomorphism
> $$
> \begin{align*}
> \varphi : R \twoheadrightarrow \bigoplus _{i} \frac{R}{\mathfrak{p}_{i}^{a_{i}+1}} \oplus \bigoplus _{j} \frac{R}{\mathfrak{q}_{i}}.
> \end{align*}
> $$
> Then any
> $$
> \begin{align*}
> \beta \in \varphi^{-1} \{ (x_{1} + \mathfrak{p}_{1}^{a_{1}+1}, \dots, y_{1} + \mathfrak{q}_{1}, \dots) \}
> \end{align*}
> $$
> will do the trick.
> 
> We claim $I = \langle \alpha,\beta \rangle$.
> Note
> $$
> I = \prod_{i} \mathfrak{p}_{i}^{a_{i}}
> \supne \langle \alpha,\beta \rangle 
> \supne \left( \prod_{i} \mathfrak{p}_{i}^{b_{i}} \right) \left( \prod_{j} \mathfrak{q}_{j}^{c_{j}} \right) = \langle \alpha \rangle. 
> $$
> and also $\langle \alpha,\beta \rangle \supne \langle \beta \rangle$ where $\langle \beta \rangle$ is not divisible by any $\mathfrak{p}_{i}^{a_{i}+1}$ or $\mathfrak{q}_{j}$.
> Hence $\langle \alpha,\beta \rangle = I$. <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
