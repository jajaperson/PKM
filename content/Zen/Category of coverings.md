---
categoryName: category of coverings
mathLink: $\Cov_{X}$
object: "[[covering]] of $X$"
morphism: "[[Category of coverings|covering morphism]]"
aliases:
  - covering morphism
  - category of pointed coverings
tags:
  - category
  - public
---
[[Covering]]
# Category of coverings

Given a topological space $X$, the **category of coverings** $\Cov_{X}$ over $X$ is a category where #m/def/homotopy 

- Each object $p \in \Cov_X$ is a [[covering]] $p : \tilde{X} \twoheadrightarrow X$ where $\tilde{X}$ is some covering space
- Each morphism $f \in \Cov_X(p,q)$ is a map such that the following diagram commutes in $\Top$:


<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgnIl0sWzIsMiwiWCJdLFswLDIsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMSwyLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiZiJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B%5Ctilde%20X%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B%5Ctilde%20X'%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20X%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22q%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-1%2C%20to%3D1-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXHRpbGRlIFgiXSxbNCwwLCJcXHRpbGRlIFgnIl0sWzIsMiwiWCJdLFswLDIsInAiLDIseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMSwyLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMSwiZiJdXQ==" /></p>

Such an $f$ is sometimes referred to as a **covering morphism**.
Two coverings $p,q$ of $X$ are called **equivalent** iff they are isomorphic in $\Cov_X$

## Category of coverings with basepoint

The category of coverings with basepoint $\Cov_{(X,x_{0})}$ is defined similarly

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCkiXSxbNCwwLCIoXFx0aWxkZSBYJywgXFx0aWxkZSB4XzAnKSJdLFsyLDIsIihYLCB4XzApIl0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInEiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJmIl1d%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%7B(%5Ctilde%20X%2C%20%5Ctilde%20x_0)%7D%20%5C%26%5C%26%5C%26%5C%26%20%7B(%5Ctilde%20X'%2C%20%5Ctilde%20x_0')%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7B(X%2C%20x_0)%7D%0A%09%5Carrow%5B%22p%22'%2C%20two%20heads%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22q%22%2C%20two%20heads%2C%20from%3D1-5%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22%2C%20from%3D1-1%2C%20to%3D1-5%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCIoXFx0aWxkZSBYLCBcXHRpbGRlIHhfMCkiXSxbNCwwLCIoXFx0aWxkZSBYJywgXFx0aWxkZSB4XzAnKSJdLFsyLDIsIihYLCB4XzApIl0sWzAsMiwicCIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDIsInEiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJlcGkifX19XSxbMCwxLCJmIl1d" /></p>

Since any $f \in \Cov_{(X,x_{0})}(p,q)$ is a [[Lift of a map to a covering space|lift]] of $p$ over $q$ there exists at most one. 

Moreover for connected and locally path-connected coverings,
there exists exactly one $f \in \Cov_{(X,x_{0})}(p,q)$ iff $\mathrm{im}(\pi_{1}q) \sube \mathrm{im}(\pi_{1}p)$.
Thus $\Cov_{(X,x_{0})}$ is a [[thin category]] or preorder.

## Further terminology

- An [[automorphism]] in $\Cov_{X}$ is called a [[Deck transformation]]

## Properties

- Every covering morphism is a lift of a covering
- [[Locally path-connected, connected covering morphism is a covering]]
- [[Equivalence of coverings criterion]]

#
---
#state/tidy | #lang/en | #SemBr
