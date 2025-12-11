---
tags:
  - public
---
[[Topological degree]]
# Degree of a circle endomorphism

Let $f: \mathbb{S}^1 \to \mathbb{S}^1$ be continuous.
Then there is a unique continuous $\varphi : [0,1] \to \mathbb{R}$ with the property $\varphi(0) = 0$ and $f \ex = f(1) \cdot \ex \varphi$, #m/thm/homotopy 
so the following diagram commutes[^loose]

<img align="center" src="https://i.upmath.me/svg/%5Cbegin%7Btikzcd%7D%0A%09%7B%5B0%2C1%5D%7D%20%26%26%20%7B%5Cmathbb%20R%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B%5Cmathbb%20S%5E1%7D%20%26%26%20%7B%5Cmathbb%20S%5E1%7D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bex%7D%7D%22'%2C%20from%3D1-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7Bf(1)%5Cmathrm%7Bex%7D%7D%22%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22%7Bdescription%7D%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Bf%5Cmathrm%7Bex%7D%7D%22%7Bdescription%7D%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%5Cvarphi%22%2C%20dashed%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D#invert" alt="\begin{tikzcd}
	{[0,1]} &amp;&amp; {\mathbb R} \\
	\\
	{\mathbb S^1} &amp;&amp; {\mathbb S^1}
	\arrow[&quot;{\mathrm{ex}}&quot;', from=1-1, to=3-1]
	\arrow[&quot;{f(1)\mathrm{ex}}&quot;, from=1-3, to=3-3]
	\arrow[&quot;f&quot;{description}, from=3-1, to=3-3]
	\arrow[&quot;{f\mathrm{ex}}&quot;{description}, from=1-1, to=3-3]
	\arrow[&quot;\varphi&quot;, dashed, from=1-1, to=1-3]
\end{tikzcd}" />

Then the degree $\deg f$ of $f$ is given by
$$
\begin{align*}
\deg f = \varphi(1)
\end{align*}
$$
which is always a whole number.

> [!check]- Proof
> Without loss of generality we may assume $f(1) = 1$,
> since otherwise we may use $g(x) = f(1)^{-1}f(x)$
> First we will show that if such a $\varphi$ exists it is necessarily unique.
> Let $\varphi, \psi : [0,1] \to \mathbb{R}$ with $\varphi(0) = \psi(0) = 0$ and $\ex \varphi = \ex \psi = f \ex$.
> Then
> $$
> \begin{align*}
> \frac{\ex \varphi}{\ex \psi}(t) = \ex(\varphi(t) - \psi(t)) = 1
> \end{align*}
> $$
> for all $t \in [0,1]$, 
> which may be the case iff $\varphi(t) - \psi(t) \in \mathbb{Z}$ for all $t \in [0,1]$.
> Since $\varphi$ and $\psi$ are continuous so is $\varphi-\psi$,
> and thus $\varphi-\psi$ is a constant map.
> Thus $(\varphi - \psi)(t) = (\varphi-\psi)(0) = 0$ for all $t \in [0,1]$,
> i.e. $\varphi=\psi$.
> 
> Since $f \ex : [0,1] \to \mathbb{S}^1$ is continuous it is [[Uniform continuity|uniformly continuous]] by the [[Heine-Cantor theorem]],
> we can divide $[0,1]$ by $0 = t_{0} < t_{1} < \cdots < t_{k} = 1$ with finite $k$ so that
> $$
> \begin{align*}
> t \in [t_{j}, t_{j+1}] \implies \abs{f \ex (t) - f \ex (t_{j})} < 2
> \end{align*}
> $$
> for all integers $0 \leq j \leq k - 1$.
> We write $j(t)$ to denote the value of $j$ corresponding to some $t$.
> whence it follows that $f \ex (t)$ and $f \ex (t_{j(t)})$ are not antipodes, namely
> $$
> \begin{align*}
> \frac{f \ex (t)}{f \ex( t_{j(t)})} \neq -1
> \end{align*}
> $$
> and therefore the [[Main branch of the complex logarithm]] $\mathrm{Ln}(f \ex(t) / f \ex (t_{j(t)}))$ is well-defined.
> We define $\varphi$ as follows
> $$
> \begin{align*}
> \varphi(t) = \frac{1}{2\pi i} \sum_{n=1}^{j(t)} \mathrm{Ln} \frac{f \ex(t_{n})}{f \ex (t_{n-1})} + \mathrm{Ln} \frac{f \ex (t)}{f \ex (t_{j(t)})}
> \end{align*}
> $$
> which is continuous by properties of the [[Main branch of the complex logarithm]].
> Additionally, $\varphi(0) = 0$ and clearly $\ex\varphi = f \ex$.
> 
> All that's left to show is that $\varphi(1) \in \mathbb{Z}$.
> This is true since by definition $f(1)\ex \varphi (1) = f \ex(1) = f(1)$ and hence $\ex \varphi(1) = 1 \implies \varphi(1) \in \mathbb{Z}$.
> <span class="QED"/>

[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], pp. 37–41

## Generalisation to closed path

If $\alpha : \mathbb{S}^1 \to \mathbb{C}$ is a closed continuous path,
then we may define the winding number of $\alpha$ around $z$ as
$$
\begin{align*}
n(\alpha; z) = \deg f_{\alpha, z}
\end{align*}
$$
where $f_{\alpha, z} : \mathbb{S}^1 \to \mathbb{S}^1$
$$
\begin{align*}
f_{\alpha,z}(\zeta) = \frac{\alpha(\zeta) - z}{\abs{\alpha(\zeta) - z}}
\end{align*}
$$

## Ring isomorphism

$\hTop(\mathbb{S}^1, \mathbb{S}^1)$ is a [[ring]] with function multiplication as addition and composition as multiplication.
Then $\deg : (\hTop(\mathbb{S}^1, \mathbb{S}^1), \cdot, \circ) \to (\mathbb{Z}, +, \cdot)$ is a ring isomorphism, since [[Circle endomorphisms are homotopic iff they are of equal degree]] and $\deg z^n = n$ for all $n \in \mathbb{Z}$,

## Examples

- $\deg cT$ for any [[Constant map]]
- $\deg \id = 1$
- $\deg z^n = n$

## Properties

- [[Circle endomorphisms are homotopic iff they are of equal degree]]



#
---
#state/tidy | #lang/en | #SemBr
