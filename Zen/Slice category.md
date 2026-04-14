---
tags:
  - public
---
[[Category theory MOC]]
# Slice category

Let $\cat C$ be a [[category]] and $C \in \Ob \cat C$.
The **slice category** $\cat C / C$ is defined as follows:[^2010] #m/def/cat 

- $f \in\ob (\cat C / C)$ for $X \in \Ob \cat C$ and $f \in \cat C(X,C)$.
- $a \in \cat C / C ((X,f), (X',f'))$ is a morphism $a \in \cat C(X,X')$ such that the following diagram commutes:

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCIoWCxmKSJdLFsyLDAsIihYJyxmJykiXSxbMSwxLCJDIl0sWzAsMSwiYSJdLFswLDIsImYiLDJdLFsxLDIsImYnIl1d%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%7B(X%2Cf)%7D%20%26%26%20%7B(X'%2Cf')%7D%20%5C%5C%0A%09%26%20C%0A%09%5Carrow%5B%22a%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D1-1%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7Bf'%7D%22%2C%20from%3D1-3%2C%20to%3D2-2%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCIoWCxmKSJdLFsyLDAsIihYJyxmJykiXSxbMSwxLCJDIl0sWzAsMSwiYSJdLFswLDIsImYiLDJdLFsxLDIsImYnIl1d" /></p>


[^2010]: 2010\. [[Sources/@awodeyCategoryTheory2010|Category theory]], p. 16

Typically the objects are referred to by the morphism (e.g. $f$) only. 
A slice category is a special case of a [[Comma category]].

## Properties
- There exists a functor $U : \cat C / C \to \cat C$ that forgets the base object.

#
---
#state/develop | #lang/en | #SemBr
