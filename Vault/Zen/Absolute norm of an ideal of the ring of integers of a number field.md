---
tags:
  - public
mathLink: Absolute norm of an ideal of $\mathcal O_K$
---
[[Ring of integers of a number field]]
# Absolute norm of an ideal of $\mathcal{O}_{K}$

Let $\mathcal{O}_{K}$ be the [[ring of integers of a number field]] $K$
and let $\mathfrak{a} \triangleleft \mathcal{O}_{K}$ be an ideal.
Then the **absolute norm** $\opn N(\mathfrak{a})$ of $\mathfrak{a}$ is given by the [[Lagrange's theorem|Lagrange index]] #m/def/ring 
$$
\begin{align*}
\opn N(\mathfrak{a}) := \abs{ \mathcal{O}_{K} / \mathfrak{a}},
\end{align*}
$$
except in the case $\mathfrak{a} = \langle 0 \rangle$, where we define $\opn N(\langle 0 \rangle) := 0$.

## Properties

1. If $\mathfrak{a} = \langle \alpha \rangle$ is a [[principal ideal]] then $\opn N(\mathfrak{a})=\abs{\opn N(\alpha)}$, where the latter is the [[field norm]]. ^P1
2. $\opn N(\mathfrak{a})\opn N(\mathfrak{b}) = \opn N(\mathfrak{a}\mathfrak{b})$. ^P2
3. For any $m \in \mathbb{N}_{0}$, the number of ideals $\mathfrak{a} \trianglelefteq \mathcal{O}_{K}$ such that $\opn N(\mathfrak{a}) = m$ is finite. ^P3

> [!check]- Proof of 1–2
> Let $\{ \omega_{i} \}_{i=1}^n$ $\mathbb{Z}$-span $\mathcal{O}_{K}$,
> whence $\{ \alpha\omega_{i} \}_{i=1}^n$ $\mathbb{Z}$-spans $\mathfrak{a}$.
> Now
> $$
> \begin{align*}
> \begin{bmatrix}
> \alpha\omega_{1} \\
> \vdots \\
> \alpha\omega_{n}
> \end{bmatrix} = A \begin{bmatrix}
> \omega_{1} \\
> \vdots \\
> \omega_{n}
> \end{bmatrix}
> \end{align*}
> $$
> for some $A \in \GL_{n}(\mathbb{Z})$,
> so by [[Subgroup of a free abelian group]] we have $\opn N(\mathfrak{a}) = \abs{\det A}$
> 
> Now for the [[Discriminant of a separable extension|discriminant]] we have
> $$
> \begin{align*}
> \Delta_{K:\mathbb{Q}}(\alpha\omega_{1},\dots,\alpha\omega_{n}) = (\det A)^2 \Delta_{K:\mathbb{Q}}(\omega_{1},\dots,\omega_{n}) = \opn N(\alpha)^2 \Delta_{K:\mathbb{Q}}(\omega_{1},\dots,\omega_{n})
> \end{align*}
> $$
> 
> by basic properties of the determinant and the definition of the discriminant.
> 
> Let $\mathfrak{a},\mathfrak{b} \trianglelefteq \mathcal{O}_{K}$.
> Invoking [[Unique factorization of ideals|UFI]], we have $\mathfrak{a} = \mathfrak{p}_{1}^{s_{1}} \cdots \mathfrak{p}_{m}^{s_{m}}$ and $\mathfrak{b} = \mathfrak{q}_{1}^{t_{1}}\cdots\mathfrak{q}_{n}^{t_{n}}$.
> By the [[Chinese remainder theorem for rings]], 
> $$
> \begin{align*}
> \frac{\mathcal{O}_{K}}{\mathfrak{a} \mathfrak{b}} \cong \bigoplus _{i=1}^m \frac{R}{\mathfrak{p}_{i}^{s_{i}}} \oplus \bigoplus _{i=1}^n \frac{R}{\mathfrak{q}_{i}^{t_{i}}}.
> \end{align*}
> $$
> Thus it suffices to show that for any prime ideal $\mathfrak{p}$ we have
> $$
> \begin{align*}
> \opn N(\mathfrak{p}^n) = \abs{\frac{\mathcal{O}_{K}}{\mathfrak{p}^n}} = \opn N(\mathfrak{p})^n.
> \end{align*}
> $$
> Since we have the chain of ideals
> $$
> \begin{align*}
> \mathcal{O}_{K} \hookleftarrow \mathfrak{p} \hookleftarrow \dots \hookleftarrow \mathfrak{p}^m,
> \end{align*}
> $$
> it is enough to show that for $0 \leq k \leq m-1$ we have $\abs{\mathfrak{p}^k / \mathfrak{p}^{k+1}} = \opn N(\mathfrak{p})$,
> since
> $$
> \begin{align*}
> \frac{\mathcal{O}_{K} / \mathfrak{p}^{k+1}}{\mathfrak{p}^k / \mathfrak{p}^{k+1}} \cong_{\mathbb{Z}} \frac{\mathcal{O}_{K}}{\mathfrak{p}^k}.
> \end{align*}
> $$
> by the [[Module isomorphism theorems#Third isomorphism theorem]].
> We prove the stronger result
> $$
> \begin{align*}
> \frac{\mathcal{O}_{K}}{\mathfrak{p}} \cong_{\mathbb{Z}} \frac{\mathfrak{p}^k}{\mathfrak{p}^{k+1}}
> \end{align*}
> $$
> for each $k$.
> First, we can construct a $\mathbb{Z}$-module homomorphism
> $$
> \begin{align*}
> \varphi : \mathcal{O}_{K} &\to \mathfrak{p}^k / \mathfrak{p}^{k+1} \\
> x &\mapsto \gamma x + \mathfrak{p}^{k+1}
> \end{align*}
> $$
> where $\gamma \in \mathfrak{p}^{k} \setminus \mathfrak{p}^{k+1}$ is arbitrary.
> This induces a map
> $$
> \begin{align*}
> \tilde{\varphi} : \frac{\mathcal{O}_{K}}{\mathfrak{p}} \to \frac{\mathfrak{p}^k}{\mathfrak{p}^{k+1}}
> \end{align*}
> $$
> which will turn out to be a $\mathbb{Z}$-module isomorphism.
> 
> To prove surjectivity of $\varphi$ and thus $\tilde{\varphi}$, we can show that $I := \langle \gamma \rangle + \mathfrak{p}^{k+1} = \mathfrak{p}^k$.
> Since $\mathfrak{p}^k \mid \langle \gamma \rangle$ (after all we are in a [[Containment-division ring]])
> we also have $\mathfrak{p}^k \mid I$.
> But $I \mid \mathfrak{p}^{k+1}$ is a proper divisor, so by unique factorization $I = \mathfrak{p}^k$ as required.
> 
> To prove injectivity, we can show $J := \langle \gamma \rangle \cap \mathfrak{p}^{k+1} = \gamma \mathfrak{p}$,
> since hence follows if $\tilde{\varphi}(x) = 0$ then $\gamma x = \gamma \mathfrak{p}$ so $x \in \mathfrak{p}$.
> Since $\gamma \in \mathfrak{p}^k$ we have $\gamma \mathfrak{p} \sube J$.
> Conversely, let $x \in J$ and write $x = \gamma y$ with $y \in \mathcal{O}_{K}$ and $\gamma y \in \mathfrak{p}^{k+1}$,
> where we have the [[Prime order of an ideal]]
> $$
> \begin{align*}
> \opn{ord}_{\mathfrak{p}}(\gamma) + \opn{ord}_{\mathfrak{p}}(y) = \opn{ord}_{\mathfrak{p}}(\gamma y) \geq k+1.
> \end{align*}
> $$
> Since $\opn{ord}_{\mathfrak{p}}(\gamma) = k$ by construction, it follows $\opn{ord}_{\mathfrak{p}}(y) \geq 1$ whence $y \in \mathfrak{p}$.
> Therefore $x = \gamma y \in \gamma \mathfrak{p}$ and [[#^P2]] is proven.
> 
> For [[#^P3]], note that if $\opn N(\mathfrak{a}) = m$, then $\langle m \rangle \trianglelefteq \mathfrak{a}$.
> Since $\mathcal{O}_{K} /\langle m  \rangle$ is finite by [[The ring of integers of a number field forms a lattice#^C1]], there can only be finitely many such ideals by the [[Ring isomorphism theorems#Fourth isomorphism theorem]], proving [[#^P3]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
