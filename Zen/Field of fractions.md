---
tags:
  - public
---
[[Integral domain]]
# Field of fractions

Given an [[integral domain]] $D$, the **field of fractions** $\Frac D$ is the smallest [[field]] into which it can be [[Embedding|embedded]]. #m/def/ring 
Let $D^* = D \setminus \{ 0 \}$.
Then for any $n,m \in D$ and $d,b \in D^*$,
then $\frac{n}{d}, \frac{m}{b} \in \Frac D$ with

1. $$
  \begin{align*}
  \frac{n}{d} = \frac{m}{b} \iff nb = md
  \end{align*}
  $$
2. $$
  \begin{align*}
  \frac{n}{d} + \frac{m}{b} = \frac{nb + md}{db}
  \end{align*}
  $$
3. $$
  \begin{align*}
  \frac{n}{d} \cdot \frac{m}{b} = \frac{nm}{db}
  \end{align*}
  $$

which may be constructed as a quotient of the set $D \times D^*$.
We have the embedding
$$
\begin{align*}
\iota_{D} : D &\hookrightarrow \Frac D \\
n &\mapsto \frac{ns}{s}
\end{align*}
$$
for any $s \in D$.

> [!missing]- Proof of universal property
> #missing/proof

## Universal property

The **field of fractions** of $D$ is a pair consisting of a [[field]] $\Frac D$ and injective [[ring homomorphism]] $\iota : D \hookrightarrow \Frac D$
such that given any field $K$ and injective ring homomorphism $f : D \to K$
there exists a unique ring homomorphism $\bar f : \Frac D \to K$ so that the following diagram commutes

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJEIl0sWzIsMiwiSyJdLFsyLDAsIlxcb3BlcmF0b3JuYW1le0ZyYWN9RCJdLFswLDIsIlxcaW90YV9EIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMiwxLCJcXGV4aXN0cyEgXFxiYXIgZnYiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMCwxLCJmIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09D%20%5C%26%5C%26%20%7B%5Coperatorname%7BFrac%7DD%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20K%0A%09%5Carrow%5B%22%7B%5Ciota_D%7D%22%2C%20hook%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20hook%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7B%5Cexists!%20%5Cbar%20fv%7D%22%2C%20dashed%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJEIl0sWzIsMiwiSyJdLFsyLDAsIlxcb3BlcmF0b3JuYW1le0ZyYWN9RCJdLFswLDIsIlxcaW90YV9EIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XSxbMiwxLCJcXGV4aXN0cyEgXFxiYXIgZnYiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMCwxLCJmIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJ0b3AifX19XV0=" /></p>


#
---
#state/tidy | #lang/en | #SemBr
