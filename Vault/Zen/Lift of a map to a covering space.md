---
aliases:
  - unique lift
tags:
  - public
---
[[Covering]]
# Lift of a map to a covering space

Let $X$ and $Y$ be a topological spaces, 
$p : \tilde{X} \twoheadrightarrow X$ be a [[covering]] of $X$ with $\tilde{X}$,
and  $f : Y \to X$ be a continuous map.
A **lift** $\tilde{f}$ of $f$ is any function so that $p \tilde{f} = f$, #m/def/topology 
i.e. the following diagram commutes in $\Top$:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMiwyLCJYIl0sWzIsMCwiXFx0aWxkZSBYIl0sWzAsMiwiWSJdLFsyLDAsImYiXSxbMSwwLCJwIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsMSwiXFx0aWxkZSBmIl1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20%7B%5Ctilde%20X%7D%20%5C%5C%0A%09%5C%5C%0A%09Y%20%5C%26%5C%26%20X%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22p%22%2C%20two%20heads%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Ctilde%20f%7D%22%2C%20from%3D3-1%2C%20to%3D1-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMiwyLCJYIl0sWzIsMCwiXFx0aWxkZSBYIl0sWzAsMiwiWSJdLFsyLDAsImYiXSxbMSwwLCJwIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsMSwiXFx0aWxkZSBmIl1d" /></p>

Lifts fill a fundamental role in [[Homotopy theory MOC]],
in particular they allow for the computation of the [[Fundamental group]].
Their usefulness follows from the main theorem below.

## Main theorem

Let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X, x_{0})$ be a [[Covering|connected covering]],
$(Y, y_{0})$ be a [[Connectedness|connected]] and [[Local (path) connectedness|locally path-connected]][^path] space,
and $f : (Y,y_{0}) \to (X,x_{0})$ be a morphism in $\Top_{•}$.
Then there exists a lift $\tilde{f} : (Y, y_{0}) \to (\tilde{X}, \tilde{x}_{0})$ of $f$ iff #m/thm/topology 
$$
\begin{align*}
\pi_{1}f (\pi_{1} (Y, y_{0})) \sube \pi_{1} p (\pi_{1}(\tilde{X}, \tilde{x}_{0}))
\end{align*}
$$
i.e. the image of $\pi_{1}f$ is a subset of the image[^char] of $\pi_{1}p$, where $\pi_{1}$ is the [[Fundamental group]] functor.
Furthermore if $\tilde{f}$ exists it is unique.

[^path]: And thus path-connected, since [[Locally path connected spaces have identical connected and path-connected components|A locally path-connected space is path-connected iff it is connected]] 
[^char]: In [[@looseAlgebraischeTopologie2010|Algebraische Topologie]] wird dies als die _charakteristische Untergruppe_ bezeichnet (p. 91).

> [!tip]+ Construction of lift
> A lift $\tilde{f} : (Y,y) \to (\tilde{X}, \tilde{x}_{0})$ of $f: (Y,y) \to (X, x_{0})$ is constructed as follows:
> For each $y \in Y$, by path-connectedness there exists a path $\omega : \mathbb{I} \to Y$ from $y_{0}$ to $y$.
> Then define a path $\alpha = f\omega$ in $X$, which by [[#Second lemma Lifts of paths]] has a unique lift $\tilde{\alpha}$ with $\tilde{\alpha}(0) = \tilde{x}_{0}$.
> Then let $\tilde{f}(y) = \tilde{\alpha}(1)$.

The proof involves four lemmas, each relying on the previous:
Uniqueness may be proven immediately,
then we prove the special cases of lifts of paths and lifts of homotopies of paths,
and then the requirement given for the fundamental group.

### First lemma: Uniqueness

Let $p : \tilde{X} \twoheadrightarrow X$ be a [[Covering|connected covering]],
$Y$ be a [[Connectedness|connected]]  space,
$f : Y \to X$ be a continuous function,
and $\tilde{f}_{1},\tilde{f}_{2} : Y \to \tilde{X}$ be lifts of $x$.
Then $\tilde{f}_{1} = \tilde{f}_{2}$ iff $\tilde{f}_{1}(y_{0}) = \tilde{f}_{2}(y_{0})$ for some $y_{0} \in Y$. #m/thm/topology 

> [!check]- Proof
> The reverse direction is obvious.
> For the forward direction, consider the set
> $$
> \begin{align*}
> M = \{ y \in Y : \tilde{f}_{1}(y) = \tilde{f}_{2}(y) \}
> \end{align*}
> $$
> Let $y \in Y$, $x = f(y) \in X$, and $U \sube X$ be an evenly covered open neighbourhood of $x$.
> Let $\tilde{U}_{1}, \tilde{U}_{2} \sube \tilde{X}$ be the sheets over $U$ containing $\tilde{f}_{1}(y)$ and $\tilde{f}_{2}(y)$ respectively.
> Then $V = \tilde{f}_{1}^{-1}(\tilde{U}_{1}) \cap \tilde{f}_{2}^{-1}(\tilde{U}_{2})$ is an open neighbourhood of $y$, and
> $$
> \begin{align*}
> \tilde{f}_{1} \restriction V &= (p \restriction \tilde{U}_{1})^{-1} \circ (f \restriction V) \\
> \tilde{f}_{2} \restriction V &= (p \restriction \tilde{U}_{2})^{-1} \circ (f \restriction V)
> \end{align*}
> $$
> Now if $\tilde{f}_{1}(y) = \tilde{f}_{2}(y)$, then $\tilde{U}_{1} = \tilde{U}_{2}$ and consequently
> $$
> \begin{align*}
> \tilde{f}_{1} \restriction V 
> = (p \restriction \tilde{U}_{1})^{-1} \circ (f \restriction V)
> = (p \restriction \tilde{U}_{2})^{-1} \circ (f \restriction V) = \tilde{f}_{2} \restriction V
> \end{align*}
> $$
> Thus $M$ is the union of all $V$ obtained from $y$ with $\tilde{f}_{1}(y) = \tilde{f}_{2}(y)$ and is thus open.
> Now if $\tilde{f}_{1}(y) \neq \tilde{f}_{2}(y)$, then $\tilde{U}_{1} \neq \tilde{U}_{2}$ and consequently $\tilde{f}_{1}(z) \neq \tilde{f}_{2}(z)$ for all $z \in V$.
> Thus $Y \setminus M$ is the union of all $V$ obtained from $y$ with $\tilde{f}_{1}(y) \neq \tilde{f}_{2}(y)$ and is thus open.
> Therefore $M$ is clopen and nonempty ($y_{0} \in M$),
> so since $Y$ is [[Connectedness|connected]], $M = Y$.
> Hence $\tilde{f}_{1} = \tilde{f}_{2}$.
> <span class="QED"/>

### Second lemma: Lifts of paths

Let $p : \tilde{X} \twoheadrightarrow X$ be a [[Covering|connected covering]] and $\alpha : \mathbb{I} \to X$ be a [[continuous path]] from $x_{0} = \alpha(0)$.
For each $\tilde{x}_{0} \in p^{-1} \{ x_{0} \}$ there exists exactly one lifted path $\tilde{\alpha} : \mathbb{I} \to \tilde{X}$ from $\tilde{\alpha}(0) = \tilde{x}_{0}$. #m/thm/topology 

> [!check]- Proof
> Uniqueness follows from [[#First lemma Uniqueness]], but is also self-evident in the following argument.
> For each $x \in X$, let $U_{x}$ be an evenly covered open neighbourhood of $x$.
> Then $\{ U_{x} \}_{x \in X}$ is an open cover of $X$,
> and $\{ \alpha^{-1}(U_{x}) \}_{x \in X}$ is an open cover of $\mathbb{I}$.
> Using a [[Lebesgue number]] $\mathbb{I}$ may be evenly subdivided with
> $$
> \begin{align*}
> 0 = t_{0} < \cdots < t_{k} = 1
> \end{align*}
> $$
> so that $\alpha [t_{i-1}, t_{i}] \sube U_{x_{i}}$ where $x_{i} \in X$ for all $1 \leq i \leq k$.
> Now consider a lift $\tilde{\alpha} : \mathbb{I} \to \tilde{X}$.
> Clearly $\tilde{\alpha} \restriction [t_{i-1}, t_{i}] = (p \restriction \tilde{U}_{i})^{-1} \circ (\alpha \restriction [t_{i-1}, t_{i}])$,
> where $\tilde{U}_{i}$ is the sheet over ${U}_{x_{i}}$ containing $\alpha(t_{i-1})$.
> Thus if $\tilde{\alpha}(0) = \tilde{x}_{0}$ is set, $\tilde{\alpha}$ is unique and well-defined.
> <span class="QED"/>

### Third lemma: Lifts of homotopies of paths

Let $p : \tilde{X} \twoheadrightarrow X$ be a [[Covering|connected covering]] and $\alpha_{0}, \alpha_{1} : \mathbb{I} \to X$ be [[continuous path|continuous paths]] with the same endpoints $x_{0}, x_{1}$ [[Homotopy of paths|homotopic to one another]] via $A : \mathbb{I}^2 \to X: (t,s) \mapsto \alpha_{s}(t)$.
Let $\tilde{x}_{0} \in p^{-1} \{ x_{0} \}$ and $\tilde{\alpha}_{0}, \tilde{\alpha}_{1} : \mathbb{I} \to \tilde{X}$ be the unique lifts of $\alpha_{0},\alpha_{1}$ respectively with $\tilde{\alpha}_{0}(0) = \tilde{\alpha}_{1}(0) = \tilde{x}_{0}$.
Then there exists a unique lift $\tilde{A} : \tilde{\alpha}_{0} \simeq \tilde{\alpha}_{1}$ of the homotopy $A$,
and in particular $\tilde{\alpha}_{0}(1) = \tilde{\alpha}_{1}(1)$. #m/thm/homotopy 

> [!check]- Proof
> First, notice that if a lift $\tilde{A} : \mathbb{I}^2 \to \tilde{X}$ of $A : \mathbb{I}^2 \to X$ with $A(0,0) = \tilde{x}_{0}$ exists,
> it is necessarily unique (by [[#First lemma Uniqueness]])
> and a homotopy from $\tilde{\alpha}_{0}$ to $\tilde{\alpha}_{1}$:
> Clearly $p\tilde{A}(0,s) = {x}_{0}$ and $p \tilde{A}(1,s) = x_{1}$ for all $s \in \mathbb{I}$,
> and since $p^{-1}\{ x_{0} \}$ and $p^{-1} \{ x_{1} \}$ are discrete,
> both $\tilde{A}(0,s)$ and $\tilde{A}(1,s)$ must be constant for all $s \in \mathbb{I}$,
> so $\tilde{A}(0,s) = \tilde{x}_{0}$ and we let $\tilde{A}(1,s) = \tilde{x}_{1}$.
> By construction $\tilde{A}$ is a homotopy from $\tilde{A}(-,0)$ to $\tilde{A}(-,1)$,
> but $\tilde{A}(-,s)$ is a lift of $\alpha_{s}$ with $\tilde{A}(0,s) = 0$ for each $s \in \mathbb{I}$,
> thus by uniqueness $\tilde{A}(-,s) = \tilde{\alpha}_{s}$ in particular for $s=0,1$,
> and hence $\tilde{A}$ is the desired homotopy.
> 
> For existence we use a similar construction to above:
> Using a [[Lebesgue number]] argument $\mathbb{I}^2$ may be subdivided into a grid with
> $$
> \begin{align*}
> 0 = t_{0} < &\dots < t_{k} = 1 \\
> 0 = s_{0} < &\dots < s_{k} = 1
> \end{align*}
> $$
> so that for each square $Q_{ij} = [t_{i},t_{i+1}] \times [s_{j}, s_{j+1}]$ with $0 \leq i \leq k-1$,
> its image $A(Q_{ij})$ is contained entirely within an evenly covered open set $U_{ij}$ in $X$,
> i.e. $A(Q_{ij}) \sube U_{ij}$.
> Now consider a lift $\tilde{A} : \mathbb{I}^2 \to \tilde{X}$.
> If the bottom left corner $\tilde{A}(t_{i},s_{j})$ is set,
> then clearly $\tilde{A} \restriction Q_{ij} = (p \restriction \tilde{U}_{ij})^{-1} \circ (A \restriction Q_{ij})$, where $\tilde{U}_{ij}$ is the sheet over $U_{ij}$ containing $\tilde{A}(t_{i}, s_{j})$.
> Then by [[#Second lemma Lifts of paths]] the edges automatically agree,
> thus by starting with $\tilde{A}(0, 0) = \tilde{x}_{0}$ we obtain a well-defined, unique lift $\tilde{A}$ of $A$.
> <span class="QED"/>

### Fourth lemma: Condition for the existence of a lift

Let $p : (\tilde{X}, \tilde{x}_{0}) \twoheadrightarrow (X, x_{0})$ be a [[Covering|connected covering]],
$(Y, y_{0})$ be a [[Path connectedness|path-connected]] space,
and $f : (Y,y_{0}) \to (X,x_{0})$ be a morphism in $\Top_{•}$.
If a lift $\tilde{f} : (Y, y_{0}) \to (\tilde{X}, x_{0})$ exists, then
$\pi_{1}f (\pi_{1} (Y, y_{0})) \sube \pi_{1} p (\pi_{1}(\tilde{X}, \tilde{x}_{0}))$. #m/thm/homotopy 

> [!check]- Proof
> Since $p \tilde{f} = f$, it follows from functor properties of the [[Fundamental group]] that $(\pi_{1}p)(\pi_{1}\tilde{f}) = \pi_{1}f$,
> and thus the image of $\pi_{1}f$ must be contained within the image of $\pi_{1}p$.
> <span class="QED"/>

### Proof of main theorem

The forward direction follows from [[#Fourth lemma Condition for the existence of a lift]].

> [!check]- Proof the construction is well-definined
> It remains to show that $\tilde{\alpha}(1)$ is independent from the choice of path $\omega$.
> To this end let $\nu : \mathbb{I} \to Y$ be a path from $y_{0}$ to $y$.
> Then $\overline{\omega} \odot \nu$ is a continuous loop with basepoint $y_{0}$.
> Since $f \circ (\overline{\omega} \odot \nu)$ is guaranteed a lift by [[#Second lemma Lifts of paths]],
> it follows $\pi_{1}f [\overline{\omega} \odot \nu] \in \pi_{1}p(\pi_{1}(\tilde{X},\tilde{x}_{0}))$,
> and thus there exists a continuous loop $\tilde{\mu} : \mathbb{I} \to \tilde{X}$ with basepoint $\tilde{x}_{0}$ such that $\pi_{1}f [\overline{\omega} \odot \nu] = \pi_{1}p[\tilde{\mu}]$.
> Let $\alpha = f \circ \omega$, $\beta = f \circ \nu$, and $\mu = p \circ \tilde{\mu}$,
> so $[\alpha]^{-1} \odot [\beta] = [\mu]$ and thus $\beta \simeq \alpha \odot \mu$.
> Then if $\tilde{\alpha}$ and $\tilde{\beta}$ are the lifts of $\alpha$ and $\beta$ respectively with $\tilde{\alpha}(0) = \tilde{\beta}(0) = \tilde{y}_{0}$,
> then $\tilde{\alpha} \odot \tilde{\mu}$ is the lift of $\alpha \odot \mu$.
> Hence by [[#Third lemma Lifts of homotopies of paths]], $\tilde{\beta} \simeq \tilde{a} \odot \tilde{\mu}$,
> and in particular $\tilde{\beta}(1) = \tilde{\alpha} \odot \tilde{\mu} (1) = \tilde{\alpha}(1)$.
> Hence $\tilde{\alpha}(1)$ is the same regardless of the selected path $\omega$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
