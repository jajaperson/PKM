---
tags:
  - public
---
[[Complete metric space]]
# Metric completion

The **completion** $\overline{X}$ of a [[metric space]] $X$ may be thought of as the smallest possible metric space _containing_ $X$ but with all limits added, #m/def/anal i.e. a [[complete metric space]].
This notion is made rigorous by the [[#universal property]], which ensures uniqueness up to unique isomorphism.

## Universal property

The metric completion is characterized up to unique isomorphism in [[Category of metric spaces and isometries]] by the following universal property:

$\overline{X}$ is complete.
If $Y$ is a complete metric space and $f \in \cat{IsoMet}(X,Y)$ such that $f(X)$ is dense in $Y$,
then there exists a unique isometry $\bar{f} \in \cat{IsoMet}(\overline{X}, Y)$ such that $f = \bar f \iota$,
i.e. the following diagram commutes
<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJYIl0sWzIsMCwiXFxiYXIgWCJdLFsyLDIsIlkiXSxbMCwxLCJcXGlvdGEiXSxbMSwyLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMiwiZiIsMl1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09X%20%5C%26%5C%26%20%7B%5Cbar%20X%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20Y%0A%09%5Carrow%5B%22%5Ciota%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJYIl0sWzIsMCwiXFxiYXIgWCJdLFsyLDIsIlkiXSxbMCwxLCJcXGlvdGEiXSxbMSwyLCJcXGJhciBmIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMiwiZiIsMl1d" /></p>

This of course forms a [[Free-forgetful adjunction]] into the [[Subcategory|full subcategory]] of complete metric spaces and isometries.

## Construction

Let $\tilde{X}$ denote the set of all [[Cauchy sequence|Cauchy sequences]] on $X$,
For any sequences $x_{•},y_{•} \in \tilde{X}$,
let
$$
\begin{align*}
x_{•} \sim y_{•} \iff \lim_{ n \to \infty } d(x_{n},y_{n}) = 0
\end{align*}
$$
which defines an [[equivalence relation]].
The completion $\overline{X}$ is the quotient $\tilde{X}/{\sim}$
with a metric $d$ given by
$$
\begin{align*}
d([x_{•}],[y_{•}]) = \lim_{ n \to \infty } d(x_{n},y_{n})
\end{align*}
$$
and $\iota(x) =[(x,x,x,\dots )]$.

> [!missing]- Validity of construction
> First we will show that $\sim$ indeed defines an [[equivalence relation]].
> [[Equivalence relation#^E1]] and [[Equivalence relation#^E2]] are clear,
> and [[Equivalence relation#^E3]] follows from [[Metric space#^M2]]:
> If $x_{•} \sim y_{•}$ and $y_{•} \sim z_{•}$,
> then $\lim_{ n \to \infty }d(x_{n},z_{n}) \leq \lim_{ n \to \infty }(d(x_{n},y_{n})+d(y_{n},z_{n}))\leq 0$
> so $x_{•} \sim z_{•}$.
> 
> Next we show that the metric on $\overline{X}$ is well-defined.
> Let $x_{•} \sim \xi_{•}$ and $y_{•} \sim \eta_{•}$.
> Then by the [[Metric space#^M2]]
> $$
> \begin{align*}
> d([x_{•}], [y_{•}]) 
> &= \lim_{ n \to \infty } d(x_{n},y_{n}) \\
> &\leq \lim_{ n \to \infty } \left ( d(\xi_{n},\eta_{n} )
> + d(x_{n},\xi_{n} ) + d(y_{n},\eta_{n})
> \right) \\
> &= \lim_{ n \to \infty } d(\xi_{n},\eta_{n}) \\
> &= d([\xi_{•},\eta_{•}])
> \end{align*}
> $$
> but by symmetry the reverse inequality holds too,
> so $d([x_{•}], [y_{•}]) = d([\xi_{•},\eta_{•}])$.
> [[Metric space#^M1]] and [[Metric space#^M3]] follow immediately.
> For [[Metric space#^M3]] note
> $$
> \begin{align*}
> d([x_{•}], [y_{•}]) &= \lim_{ n \to \infty } d(x_{n},y_{n}) \\
> &\leq \lim_{ n \to \infty } \left( d(x_{n},z_{n})+d(z_{n},y_{n}) \right) \\
> &= d([x_{•}], [z_{•}]) + d([z_{•}], [y_{•}])
> \end{align*}
> $$
> as required.
> 
> Now we need to show that the given construction is indeed complete.
> We make the following observations
> 
> - Let $\overline{x} \in \overline{X}$. If $x_{\bullet} \in \overline{x}$, then so too is every subsequence $x_{n_{\bullet}} \in \overline{x}$.
> - Let $x_{\bullet} \in \overline{x} \in \overline{X}$.
>   Since $x_{\bullet}$ is Cauchy, for every $\epsilon>0$ there exists a subsequence $x_{n_{\bullet}}$ such that $d(x_{n_{k}},x_{n_{\ell}}) < \epsilon$ for all $k,\ell \in \mathbb{N}$.
> 
> Let $\overline{x}_{\bullet}$ be a Cauchy sequence in $\overline{X}$.
> For each $n \in \mathbb{N}$,
> we fix a representative $x_{n,\bullet} \in \overline{x}_{n}$ in $X$ such that for all $k,\ell \in \mathbb{N}$ we have $d(x_{n,k},x_{n,\ell}) < \frac{1}{n}$.
> Since $\overline{x}_{\bullet}$ is Cauchy, 
> for every $j \in \mathbb{N}$
> there exists an $N_{j} \in \mathbb{N}$
> such that for all $m,n,k \geq N_{j}$
> we have $d(x_{n,k},x_{m,k}) < \frac{1}{j}$
> (using that sufficiently large $m,n$ have $\lim_{ k \to \infty } d(x_{m,k},y_{n,k}) < \frac{1}{j}$).
> Now let $\lambda_{j}= x_{N_{j},N_{j}}$ which is Cauchy in $X$,
> since
> for any $\ell \in \mathbb{N}$ if $i,j \geq \ell$ and thus $N_{i}, N_{j} \geq N_{\ell}$ we have
> $$
> \begin{align*}
> d(\lambda_{i},\lambda_{j}) 
> &= d(x_{N_{i},N_{i}},x_{N_{j},N_{j}}) \\
> &\leq d(x_{N_{i},N_{i}}, x_{N_{i},N_{j}}) + d(x_{N_{i},N_{j}},x_{N_{j},N_{j}}) \\
> &\leq \frac{1}{i} + \frac{1}{\ell} 
> \leq \frac{2}{\ell}
> \end{align*}
> $$
> We claim $\overline{x} = [\lambda_{\bullet}]$ is the limit of $\overline{x}_{\bullet}$.
> 
> Let $j \in \mathbb{N}$ and $n \geq \max\{ N_{j},j \}$. Then
> $$
> \begin{align*}
> d(\overline{x}_{n},\overline{x}) 
> &= \lim_{ k \to \infty }  d(x_{n,k},\lambda_{k}) \\
> &= \lim_{ k \to \infty } d(x_{n,k},x_{N_{k},N_{k}}) \\
> &\leq \lim_{ k \to \infty } \left( d(x_{n,N_{k}},x_{N_{k},N_{k}}) + d(x_{n,k},x_{n,N_{k}}) \right) \\
> &\leq \frac{1}{j} + \frac{1}{n} \leq \frac{2}{j}
> \end{align*}
> $$
> so $\overline{x}_{\bullet} \to \overline{x}$.
> 
> It remains to show that $\overline{X}$ satisfies the [[#universal property]].
> Let $Y$ be a complete metric space and $f \in \cat{IsoMet}(X,Y)$.

## Related

- [[Banach completion]]
- [[Hilbert completion]]

#
---
#state/tidy | #lang/en | #SemBr
