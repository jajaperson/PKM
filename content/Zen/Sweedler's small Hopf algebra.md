---
tags:
  - public
---
[[Hopf theory MOC]]
# Sweedler's small Hopf algebra

**Sweedler's small Hopf algebra** $H_{4}$ is a 4-dimensional noncommutative noncocommutative [[Hopf algebra]] with basis $\{ 1,g,x,xg \}$. #m/def/falg/hopf 
If $H$ is [[Sweedler's large Hopf algebra]],
then
$$
\begin{align*}
I := \langle x^2, g^2 - 1, gx + xg \rangle 
\end{align*}
$$
defines a [[Hopf ideal]],
and
$$
\begin{align*}
H_{4} = H / I
\end{align*}
$$
is the [[Quotient Hopf algebra]].

## Representation theory

The [[Simple module|simple modules]] for $H_{4}$ correspond to those for $\mathbb{K}\mathbb{Z}_{2}$, namely
$$
\begin{align*}
S_{0} &= \mathbb{K}v_{0}, & g v_{0} &= v_{0}, & xv_{0} &= 0; \\
S_{1} &= \mathbb{K}v_{1}, & g v_{1} &= -v_{1}, & xv_{1} &= 0. \\
\end{align*}
$$
where one can show the composition series
$$
\begin{align*}
[H_{4}] = 2[S_{0}] + 2[S_{1}].
\end{align*}
$$
The projective covers are
$$
\begin{align*}
P_{0} &= \Span_{\mathbb{K}} \{ 1 + g, x + xg \}; & P_{1} &= \Span_{\mathbb{K}}\{ 1 - g, x - xg \} 
\end{align*}
$$
whence the Cartan matrix is
$$
\begin{align*}
\begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix}
\end{align*}
$$

> [!check]- Proof
> First we will show that $P_{0}$ and $P_{1}$ are indecomposable projective modules.
> Since
> $$
> \begin{align*}
> g \{ 1+g, x+xg \} = \{ 1+g, -x -xg \} \sube P_{0}, \\
> x \{ 1+g, x+xg \} = \{ x+xg, 0 \} \sube P_{0}, \\
> g \{ 1-g, x-xg \} = \{ -1 + g, x-xg \} \sube P_{1}, \\
> x \{ 1 - g, x-xg \} = \{ x-xg, 0 \} \sube P_{1};
> \end{align*}
> $$
> we see that $P_{0},P_{1}$ are $H_{4}$-modules and are thus projective modules since
> $$
> \begin{align*}
> H_{4} \cong_{H_{4}} P_{0} \oplus P_{1}
> \end{align*}
> $$
> 
> Indecomposability follows from the fact that each of these have unique submodules
> $$
> \begin{align*}
> S_{1} \cong_{H_{4}} \langle x+xg \rangle &\leq_{H_{4}} P_{0}, & 
> S_{0} \cong_{H_{4}} \langle x-xg \rangle &\leq_{H_{4}} P_{1}.
> \end{align*}
> $$
> 
> Now
> $$
> \begin{align*}
> S_{0} &\cong_{H_{4}} \frac{P_{0}}{\langle x+xg \rangle }, &
> S_{1} & \cong_{H_{4}} \frac{P_{1}}{\langle x-xg \rangle }.
> \end{align*}
> $$
> so we see $P_{i}$ is indeed the projective cover of $S_{i}$ for $i \in \{ 1,2 \}$.
> Moreover we have the composition series
> $$
> \begin{align*}
> [P_{i}] = [S_{0}] + [S_{1}]
> \end{align*}
> $$
> for $i \in \{ 1,2 \}$, giving the Cartan matrix above. <span class="QED"/>

## Dual

The dual to $H_{4}$ has the basis $\{ \chi_{0},\chi_{1}, f_{2},f_{3} \}$ 
where $\chi_{0},\chi_{1}$ are the characters of $S_{0},S_{1}$ respectively and are thus grouplike,
while $f_{2} = 1_{x} + 1_{xg}$ and $f_{3} = 1_{x} - 1_{xg}$.

#
---
#state/tidy | #lang/en | #SemBr
