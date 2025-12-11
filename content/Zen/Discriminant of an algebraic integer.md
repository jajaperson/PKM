---
tags:
  - public
---
[[Discriminant of a number field]]
# Discriminant of an algebraic integer

Let $\alpha$ be an [[algebraic integer]] of degree $n$ with [[Algebraic element|minimal polynomial]] $f_{\alpha}(x) \in \mathbb{Z}[x]$ and $K = \mathbb{Q}(\alpha)$.
The [[Discriminant of a separable extension|discriminant]] of $\alpha$ is then #m/thm/num/alg 
$$
\begin{align*}
\Delta_{K:\mathbb{Q}}(\alpha) = (-1)^{n \choose 2} \opn N_{K:\mathbb{Q}}(f'(\alpha))
\end{align*}
$$
where $\opn N_{K:\mathbb{Q}}$ is the [[Norm of a number field|field norm]] and $f'(x) \in \mathbb{Z}[x]$ is the formal derivative. 

> [!check]- Proof
> Let $F(\alpha) := (-1)^{n \choose 2} \opn N_{K:\mathbb{Q}}(f'(\alpha))$,
> $\sigma_i : K \hookrightarrow \mathbb C$ be the $n$ distinct embeddings of $K$ in $\mathbb C$,
> and thus $\alpha_i = \sigma_i(\alpha)$ be the $n$ conjugates of $\alpha$.
> Expanding the definition of the field norm,
> $$
> \begin{align*}
> F(\alpha) = (-1)^{n \choose 2} \prod_{i=1}^n \sigma_i(f'(\alpha) )	
> 		= (-1)^{n \choose 2} \prod_{i=1}^n f'(\alpha_i),
> \end{align*}
> $$
> where since
> $$
> \begin{align*}
> f(x) = \prod_{i=1}^n (x-\alpha_i),
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> f'(\alpha_i) = 
> \left( \prod_{1\leq j < i}(\alpha_i - \alpha_j) \right)
> \left( \prod_{i < j \leq n}(\alpha_i - \alpha_j) \right),
> \end{align*}
> $$
> and thus
> $$
> \begin{align*}
> \prod_{i=1}^n f'(\alpha_i) &= 
> 		\left( \prod_{1\leq j < i \leq n}(\alpha_i - \alpha_j) \right)
> 		\left( \prod_{1 \leq i < j \leq n}(\alpha_i - \alpha_j) \right) \\
> 		&= \left( \prod_{1\leq j < i \leq n}(\alpha_i - \alpha_j) \right)^2 (-1)^{n \choose 2}.
> \end{align*}
> $$
> Now the term being squared is precisely the determinant of the [[Vandermonde matrix]]
> $$
> \begin{align*}
> T(\alpha) =
> 		\begin{bmatrix}
> 			1 & \alpha_1 & \cdots & \alpha_1^{n-1} \\
> 			\vdots & \vdots & \ddots & \vdots \\
> 			1 & \alpha_n & \cdots & \alpha_n^{n-1}
> 		\end{bmatrix}
> 
> \end{align*}
> $$
> therefore $F(\alpha) = \det T(\alpha)^2 = \Delta(\alpha)$. <span class="QED"/>

In particular, if the minimal polynomial is of the form
$$
\begin{align*}
m_{\alpha}(x) = x^n + ax + b \in \mathbb{Z}[x]
\end{align*}
$$
then we have 
$$
\begin{align*}
	\Delta(\alpha) = (-1)^{\frac{n(n-1)}2}
	\left(
		(-1)^{n-1}(n-1)^{n-1} a^n +n^n b^{n-1}
	\right).
\end{align*}
$$

> [!check]- Proof
> Let $\beta = f'(\alpha) = n \alpha^{n-1} + a \in \mathcal O_K$.
> Since $f$ annihilates $\alpha$, we have
> $$
> \begin{align*}
> 	\beta &= -(n-1)a - nb \alpha^{-1}, \\
> 	\alpha &= - \frac{nb}{\beta + (n-1) a};	
> \end{align*}
> $$
> whence $K = \mathbb Q(\alpha) = \mathbb Q(\alpha^{-1}) = \mathbb Q(\beta)$ and $\deg_\mathbb{Q} \beta = n$.
> Now since
> $$
> \begin{align*}
> 	0 &= f(\alpha) = f	\left(- \frac{nb}{\beta + (n-1) a} \right) \\
> 	&= (-nb)^n(\beta + (n-1)a)^{-n} -anb (\beta + (n-1)a)^{-1} + b,
> \end{align*}
> $$
> we can multiply by $(\beta + (n-1)a)^n$ to get
> $$
> \begin{align*}
> 0 &= (-nb)^n - anb 	(\beta + (n-1)a)^{n-1} + b (\beta + (n-1)a)^n,
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> 	g(x) = (x + (n-1)a)^n	- an (x + (n-1)a)^{n-1} + (-n)^nb^{n-1} \in \mathbb Z[x]
> \end{align*}
> $$
> is a monic annihilating polynomial for $\beta$,
> which must be minimal since $\deg_x g(x) = n = \deg_{\mathbb Q} \beta$.
> Again invoking the fact $K = \mathbb Q(\beta)$,
> we have
> $$
> \begin{align*}
> 	(-1)^n \opn N_{K: \mathbb Q}(\beta) &= g(0) = (n-1)^na^n - (n-1)^{n-1} na^n + (-n)^n b^{n-1} \\
> 		&= -(n-1)^{n-1} a^n + (-n)^n b^{n-1},
> \end{align*}
> $$
> whence $\Delta(\alpha) = (-1)^{\frac{n(n-1)}2} \left( (-1)^{n-1}(n-1)^{n-1} a^n +n^n b^{n-1} \right)$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
