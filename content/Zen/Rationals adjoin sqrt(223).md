---
mathLink: $\mathbb Q(\sqrt{223})$
tags:
  - public
---
[[Real quadratic field]]
# $\mathbb Q(\sqrt{223})$

Consider the monogenic [[Real quadratic field]] $K = \mathbb{Q}(\alpha)$ where $\alpha=\sqrt{ 223 }$. #m/thm/num/alg 

> [!code]- Sage
> ```sage
> K.<α> = QuadraticField(223)
> ```

## Discriminant

By [[Discriminant of an algebraic integer]], we have
$$
\begin{align*}
\Delta_{K} = 2^2 \cdot 223
\end{align*}
$$

## Group of units

Take the reduced element with [[simple continued fraction]]
$$
\begin{align*}
\vartheta = \frac{1}{\alpha-14} = [\overline{1;13,1,28}]
\end{align*}
$$
whence 
$$
\begin{align*}
\epsilon = q_{2} + q_{3} \vartheta  = {14} + 405\vartheta = 15\alpha + 224
\end{align*}
$$
is the [[Fundamental unit of a real quadratic field|fundamental unit]], and we have
$$
\begin{align*}
\mathcal{O}_{K}^\times = \{ \pm \epsilon^m : m \in \mathbb{Z} \}
\end{align*}
$$

## Class group

[[Minkowski's bound]] is given by
$$
\begin{align*}
M_{K} = \sqrt{ 233 } < 15,
\end{align*}
$$
so applying [[Kummer's factorization theorem]]:

| $p$  | $x^2 - 223 \bmod p$ | $\langle p \rangle$                    | norms   |
| ---- | ------------------- | -------------------------------------- | ------- |
| $2$  | $(x-1)^2$           | $\mathfrak{p}_{2}^2$                   | $2$     |
| $3$  | $(x+1)(x-1)$        | $\mathfrak{p}_{3}\mathfrak{p}_{3}'$    | $3,3$   |
| $5$  | $x^2 - 3$           | $\langle 5 \rangle$                    | $5^2$   |
| $7$  | $x^2-6$             | $\langle 7 \rangle$                    | $7^2$   |
| $11$ | $(x+5)(x-5)$        | $\mathfrak{p}_{11} \mathfrak{p}_{11}'$ | $11,11$ |

Some algebraic integers of small [[field norm]] are

| $t$      | $\opn N_{K:\mathbb{Q}}(\alpha+t)$ |
| -------- | --------------------------------- |
| $\pm 14$ | $-3^3$                            |
| $\pm 15$ | $2$                               |
| $\pm 16$ | $3 \cdot 11$                      |

so 

- from $t = 15$, we see $\mathfrak{p}_{2} = \langle \alpha + 15 \rangle \sim \langle 1 \rangle$;
- from $t=16$, we see $\mathfrak{p}_{3}\mathfrak{p}_{11} = \langle \alpha+16 \rangle \sim \langle 1 \rangle$;
- from $t=-14$, wee see $\mathfrak{p}_{3}^3 = \langle \alpha-14 \rangle \sim \langle 1 \rangle$.

Therefore the [[Ideal class group of a number field|ideal class group]] $\Cl K = \langle [\mathfrak{p}_{3}] \rangle$ is cyclic of order 1 or 3.
We show $\mathfrak{p}_{3}$ cannot be principal, whence $\Cl K \cong \mathrm{C}_{3}$.

Suppose towards contradiction $\mathfrak{p}_{3} = \langle \beta \rangle$ for some $\beta \in \mathcal{O}_{K}$, so $\abs{\opn N_{K:\mathbb{Q}}(\beta)}= 3$.
Then $\langle \beta^3 \rangle = \langle \alpha-14 \rangle$,
so $\beta^3 = u(\alpha-14)$ for some $u \in \mathcal{O}_{K}^\times$.
It follows
$$
\begin{align*}
\beta^3 &= \pm \epsilon^k (\alpha - 14), & k \in \{ 0,1,2 \},
\end{align*}
$$
Thus $\beta^3 = \epsilon^k (\alpha - 14)$ for $k \in \{0,1,2\}$,
where by direct calculation
$$
\begin{align*}
	\beta^3 \in \{ \alpha - 14, -434 \alpha + 6481,-14 \alpha - 209 \}.
\end{align*}
$$
Now suppose $\beta = a + b \alpha$, where $\opn N_{K: \mathbb Q}(\beta) = \abs{a^2 - 223b^2} = 3$, so both $a,b \neq 0$.
We have
$$
\begin{align*}
	\beta^3 = a(a^2 + 669b^2) + b(3a^2 +223b^2)\alpha 	
\end{align*}
$$
where the absolute value of the coëfficient of $\alpha$ must be at least $3 + 223 = 226$,
leaving only the case $\beta^3 = -434 \alpha + 6481$.
Thus $a(a^2 + 669b^2) = 6481$, a prime number.
Thus $a$, which must be positive, must equal 1, so $669b^2 = 6480$ for some $b \in \mathbb Z$, which is impossible. 



#
---
#state/develop | #lang/en | #SemBr
