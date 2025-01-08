---
tags:
  - public
---
[[Naïve set theory MOC]]
# Canonical decomposition

Let $f : A \to B$ be a [[function]] and $a \sim b \iff f(a) = f(b)$.
Then we have the **canonical decomposition** #m/thm/set/naïve 

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNCxbMCwwLCJBIl0sWzIsMCwiQS97XFxzaW19Il0sWzQsMCwiXFxtYXRocm17aW19XFwsZiJdLFs2LDAsIkIiXSxbMiwzLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFswLDEsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsIlxcYmFyIGYiLDAseyJjdXJ2ZSI6LTF9XSxbMiwxLCIiLDEseyJjdXJ2ZSI6LTF9XSxbMCwzLCJmIiwyLHsiY3VydmUiOjJ9XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09A%20%5C%26%5C%26%20%7BA%2F%7B%5Csim%7D%7D%20%5C%26%5C%26%20%7B%5Cmathrm%7Bim%7D%5C%2Cf%7D%20%5C%26%5C%26%20B%0A%09%5Carrow%5Btwo%20heads%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20curve%3D%7Bheight%3D12pt%7D%2C%20from%3D1-1%2C%20to%3D1-7%5D%0A%09%5Carrow%5B%22%7B%5Cbar%20f%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-3%2C%20to%3D1-5%5D%0A%09%5Carrow%5Bcurve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-5%2C%20to%3D1-3%5D%0A%09%5Carrow%5Bhook%2C%20from%3D1-5%2C%20to%3D1-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNCxbMCwwLCJBIl0sWzIsMCwiQS97XFxzaW19Il0sWzQsMCwiXFxtYXRocm17aW19XFwsZiJdLFs2LDAsIkIiXSxbMiwzLCIiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFswLDEsIiIsMCx7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsIlxcYmFyIGYiLDAseyJjdXJ2ZSI6LTF9XSxbMiwxLCIiLDEseyJjdXJ2ZSI6LTF9XSxbMCwzLCJmIiwyLHsiY3VydmUiOjJ9XV0=" /></p>

where $\bar f$ is a [[Surjectivity, injectivity, and bijectivity|bijection]].[^2009]

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter2009|Algebra: Chapter 0]], §I.2.8, p. 15

#
---
#state/develop | #lang/en | #SemBr 