---
tags:
  - public
---
[[Degree of a circle endomorphism]]
# Circle endomorphisms are homotopic iff they are of equal degree

Let $f_{0}, f_{1} \in \Top(\mathbb{S}^1, \mathbb{S^1})$.
Then $f_{0} \simeq f_{1}$[^h] iff $\deg f_{0} = \deg f_{1}$. #m/thm/homotopy 

> [!check]- Proof
> Without loss of generality we may assume $f_{0}(0) = f_{1}(0) = 1$,
> since $f_{0} \simeq f_{0}(1)^{-1}f_{0}$ and has the same degree.
> First we will show that $F : f_{0} \simeq f_{1}$ implies $\deg f_{0} = \deg f_{1}$.
> Let $f_{s}(x) = F(x,s)$,
> where we may assume without loss of generality that $f_{t}(1) = 1$.
> Let $\varphi_{s} : [0,1] \to \mathbb{R}$ be the [[Degree of a circle endomorphism|uniquely defined morphism]] for each $s \in [0,1]$ with $\varphi_{s}(0) = 0$ and $f_{s} \ex = \ex \varphi_{s}$.
> Since $f_{-} \ex : [0,1] \times [0,1] \to \mathbb{S}^1$ is continuous and thus [[Uniform continuity|uniformly continuous]] by the [[Heine-Cantor theorem]],
> we can divide $[0,1]$ by $0 = t_{0} < t_{1} < \cdots < t_{k} = 1$ with finite $k$ so that for all $s \in [0,1]$
> $$
> \begin{align*}
> t \in [t_{j}, t_{j+1}] \implies \abs{f_{s} \ex (t) - f_{s} \ex (t_{j})} < 2
> \end{align*}
> $$
> for all integers $0 \leq j(t) \leq k - 1$.
> As in [[Degree of a circle endomorphism|the proof of this theorem]],
> we define $\varphi_{s}$ as follows
> $$
> \begin{align*}
> \varphi_{s}(t) = \frac{1}{2\pi i} \sum_{n=1}^{j(t)} \mathrm{Ln} \frac{f_{s} \ex(t_{n})}{f_{s} \ex (t_{n-1})} + \mathrm{Ln} \frac{f_{s} \ex (t)}{f_{s} \ex (t_{j(t)})}
> \end{align*}
> $$
> which is continuous by properties of the [[Main branch of the complex logarithm]].
> Then $\Phi : [0,1] \times [0,1] \to \mathbb{R} : (x,t) \mapsto \varphi_{t}(x)$ is continuous,
> and thus a constant map since it is always an integer.
> Herefore
> $$
> \begin{align*}
> \deg f_{0} = \varphi_{0}(1) = \varphi_{1}(1) = \deg f_{1}
> \end{align*}
> $$
> as required.
> For the converse, let $\deg f_{0}=\deg f_{1}$.
> Then let $\varphi_{k}$ be the [[Degree of a circle endomorphism|uniquely defined morphisms]] with $\varphi_{k}(0) =0$ and $f_{k}\ex = \ex \varphi_{k}$ for $k \in \{ 0,1 \}$.
> We may extend this to $s \in [0,1]$ by
> $$
> \begin{align*}
> \Phi :(s,t) \mapsto \varphi_{s}(t) = (1-s)\varphi_{0}(t) + s\varphi_{1}(t)
> \end{align*}
> $$
> which has the property that $\varphi_{s}(1) = \varphi_{0}(1) = \varphi_{1}(1) \in \mathbb{Z}$ for all $s \in [0,1]$.
> Then $\ex \varphi_{s}(1) = 1 = \ex \varphi_{s}(1)$ for all $s \in [0,1]$.
> Note that $\ex \times \id : [0,1] \times [0,1] \to \mathbb{S}^1 \times [0,1]$ is just the natural projection for the [[quotient topology]],
> and thus by its universal property there exists a unique continuous $H : \mathbb{S} \times [0,1] \to \mathbb{S}^1$ such that $H \circ (\ex \times \id) = \ex \circ \Phi$.
> This unique $H$ defines a [[Homotopy of maps|homotopy]] $f_{0} \simeq f_{1}$, since
> $$
> \begin{align*}
> H(\ex t, k) = \ex \varphi_{k}(t) = f_{k}(\ex t)
> \end{align*}
> $$
> for all $k \in \{ 0,1 \}$ and $\ex$ is a [[monomorphism]], implying $H(t, k) = f_{k}(t)$ as required.
> <span class="QED"/>

[^h]: [[Homotopy of maps]]

#
---
#state/tidy | #lang/en | #SemBr
