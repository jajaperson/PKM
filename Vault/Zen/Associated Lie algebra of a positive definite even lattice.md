---
tags:
  - public
---
[[Lie algebras MOC]]
# Associated Lie algebra of a positive definite even lattice

Let $L$ be a [[Positive definite lattice|positive definite]] [[even lattice|even]] [[rational lattice]].
Let $\mathfrak{h} = L_{\mathbb{K}}$ for [[Characteristic|$\opn{char}\mathbb K = 0$]], and set
$$
\begin{align*}
c_{0} : L \times L &\to \mathbb{Z}_{2} \\
(\alpha,\beta) &\mapsto \langle \alpha ,\beta \rangle  + 2\mathbb{Z}
\end{align*}
$$
which is [[Alternating multilinear map|alternating]] $\mathbb{Z}$-[[Multilinear map|bilinear]].
Then $c_{0}$ determines a unique [[Z2 central extension of a free abelian group]] $L$
$$
\begin{align*}
1 \to \mathbb{Z}_{2} \stackrel{\kappa}{\hookrightarrow} \hat{L} \stackrel{\pi}{\twoheadrightarrow} L \to 1
\end{align*}
$$
such that $[a,b] = \kappa^{c_{0}(\overline{a},\overline{b})}$[^not].
Let $\Delta = L_{2}$, $\hat{\Delta} = \pi^{-1}\Delta$, and define
$$
\begin{align*}
\mathfrak{g} = \mathfrak{h} \oplus \frac{\mathbb{K} \langle x_{a} \rangle _{a \in \hat{\Delta}}}{\langle x_{a}+x_{a\kappa} : a \in \hat{\Delta} \rangle }
\end{align*}
$$
where $\mathbb{K} \langle x_{a} \rangle _{a \in \hat{\Delta}}$ is a [[free module]],
whence follows $\dim \mathfrak{g} = \rank L + \abs\Delta$.
Then $\mathfrak{g}$ is a [[quadratic Lie algebra]] under the [[Multilinear map|bilinear]] bracket defined by
$$
\begin{align*}
[\mathfrak{h},\mathfrak{h}] &= 0 \\
[h, x_{a}] &= -[x_{a}, h] = \langle h, \overline{a} \rangle x_{a} \\
[x_{a}, x_{b}] &= \begin{cases}
\overline{a}  & ab = 1 \\
x_{ab} & ab \in \hat{\Delta}  \\
0  & ab \notin \hat{\Delta} \cup \{ 1,\kappa \}
\end{cases}
\end{align*}
$$
and the nonsingular bilinear form extending that of $\mathfrak{h}$ by
$$
\begin{align*}
\langle \mathfrak{h}, x_{a} \rangle  &= 0 \\
\langle x_{a}, x_{b} \rangle &= \begin{cases}
1 & ab = 1 \\
0 & ab \notin \{ 1,\kappa \}
\end{cases} 
\end{align*}
$$
for $a,b \in \hat{\Delta}$ and $h \in \mathfrak{h}$.[^1988] #m/def/lie

> [!tip]- With a nice choice of section
> Let $\varepsilon_{0} : L \times L \to \mathbb{Z}_{2}$ be a [[Multilinear map|bilinear map]] such that (cf. [[Even lattice#Associated elementary 2-group|associated elementary 2-group of an even lattice]])
> $$
> \begin{align*}
> \varepsilon_{0}(\alpha,\alpha) = \frac{1}{2} \langle \alpha,\alpha \rangle  + 2\mathbb{Z}
> \end{align*}
> $$
> then
> $$
> \begin{align*}
> \varepsilon_{0}
> (\alpha,\beta) - \varepsilon_{0}(\beta,\alpha) &= \langle \alpha,\beta \rangle  + 2\mathbb{Z} \\
> \varepsilon_{0}(\Delta,\Delta) &= 1 + 2\mathbb{Z}
> \end{align*}
> $$
> and by the [[Central group extension#Correspondence between 2-cocycles and central extensions]] we have a central extension of the above form with a $\Set$-section $s_{(-)} : L \hookrightarrow \hat{L}$ such that
> $$
> \begin{align*}
> s_{\alpha} s_{\beta} = s_{\alpha+\beta}\kappa^{\varepsilon_{0}(\alpha,\beta)}
> \end{align*}
> $$
> and in particular $s_{0}=1$.
> Denote
> $$
> \begin{align*}
> \varepsilon(\alpha,\beta) = (-1)^{\varepsilon_{0}(\alpha,\beta)}
> \end{align*}
> $$
> We then have
> $$
> \begin{align*}
> \hat{\Delta} = \{ s_{\alpha}, s_{\alpha}\kappa : \alpha \in \Delta \}
> \end{align*}
> $$
> and are free to define $x_{\alpha} = x_{s_{\alpha}}$ for $\alpha \in \Delta$,
> and the commutation relations become
> $$
> \begin{align*}
> [\mathfrak{h},\mathfrak{h}] &= 0 \\
> [h,x_{\alpha}] &= -[x_{\alpha},h] = \langle h,\alpha \rangle x_{\alpha} \\
> [x_{\alpha},x_{\beta}] &= \begin{cases}
> \varepsilon(\alpha,-\alpha)\alpha & \langle \alpha,\beta \rangle =-2  \\
> \varepsilon(\alpha,\beta)x_{\alpha+\beta}  & \langle \alpha,\beta \rangle =-1 \\
> 0 & \langle \alpha,\beta \rangle \geq 0
> \end{cases}
> \end{align*}
> $$
> for $a,\beta \in \Delta$
> and the nonsingular bilinear form is given by
> $$
> \begin{align*}
> \langle \mathfrak{h}, x_{a} \rangle &= \langle x_{a}, \mathfrak{h} \rangle = 0 \\
> \langle x_{\alpha},x_{\beta} \rangle &= \begin{cases}
> \varepsilon(\alpha,-\alpha) & \alpha + \beta = 0 \\
> 0 & \alpha + \beta \neq 0
> \end{cases}
> \end{align*}
> $$

> [!missing]- Proof of quadratic Lie algebra
> It is clear that the bracket is alternating on $\mathfrak{h}$.
> For some $a \in \hat{\Delta}$, we have $\overline{aa} \in L_{4}$ so $[x_{a},x_{a}] = 0$.
> Thus the bracket is alternating.
> 
> To prove that $\mathfrak{g}$ is a Lie algebra, it is sufficient to prove the [[Lie algebra#^Jacobi]]
> $$
> \begin{align*}
> J =[y_{1},[y_{2},y_{3}]]+[y_{2},[y_{3},y_{1}]]+[y_{3},[y_{1},y_{2}]] = 0
> \end{align*}
> $$
> for $y_{1},y_{2},y_{3} \in \mathfrak{h} \cup \{ x_{a} : a \in \hat{\Delta} \}$.
> Clearly if $y_{1},y_{2},y_{3} \in \mathfrak{h}$ the identity holds.
> If $y_{1},y_{2} \in \mathfrak{h}$ and $y_{3} = x_{a}$
> $$
> \begin{align*}
> J=
> &= [y_{1},\langle y_{2}, \overline{a} \rangle x_{a} ] + [y_{2}, - \langle y_{1}, \overline{a} \rangle x_{a} ] \\
> &= \langle y_{2},\overline{a} \rangle \langle y_{1}, \overline{a} \rangle x_{a} - \langle y_{1},\overline{a} \rangle\langle y_{2},\overline{a} \rangle x_{a} \\
> &= 0
> \end{align*}
> $$
> If $y_{1} \in \mathfrak{h}$, $y_{2}=x_{a}$, and $y_{3}=x_{b}$
> $$
> \begin{align*}
> J 
> &= [y_{1},[x_{a},x_{b}]] - \langle y_{1}, \overline{b} \rangle [x_{a},x_{b}] - \langle y_{1},\overline{a} \rangle [x_{a},x_{b}]
> \end{align*}
> $$
> where in case $ab \in \hat{\Delta}$,
> $$
> \begin{align*}
> J = \left( \langle y_{1}, \overline{ab} \rangle - \langle y_{1}, \overline{b}  \rangle - \langle y_{1},\overline{a} \rangle  \right)[x_{a},x_{b}] = 0 
> \end{align*}
> $$
> in case $ab = 1$, $\overline{a} + \overline{b} = 0$ and thus
> $$
> \begin{align*}
> J = [y_{1},\overline{a}] - \langle y_{1}, \overline{b} \rangle \overline{a} - \langle y_{1},\overline{a} \rangle \overline{a} = 0
> \end{align*}
> $$
> anf case $ab \notin \hat{\Delta} \cup \{ 1,\kappa \}$, we have $[x_{a},x_{b}] = 0$ and thus $J= 0$.
> Finally consider the case
> $$
> \begin{align*}
> y_{1} &= x_{a} & y_{2} &= x_{b} & y_{3} &= x_{c}
> \end{align*}
> $$
> where in case $\overline{abc} \notin \Delta \cup \{ 0 \}$,
> $$
> \begin{align*}
> [x_{a}, [x_{b}, x_{c}]]
> \end{align*}
> $$

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §6.2, 126

  [^not]: where we denote $\pi x = \overline{x}$.

#
---
#state/develop | #lang/en | #SemBr
