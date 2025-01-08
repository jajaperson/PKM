---
tags:
  - public
aliases:
  - "#monoidal-category"
---
[[Category theory MOC]]
# Monoidal category

A **monoidal category** is the vertical [[Categorification]] of a [[monoid]]. #m/def/cat 
Explicitly, a monoidal category $\cat C$ is equipped with[^1978]
1. a [[functor]] $(\otimes) : \cat C \times \cat C \to \cat C$ called the **tensor product**;
2. an object $1 \in \cat C$ called the **tensor unit**;
3. a [[Natural equivalence|natural isomorphism]] with components $\alpha_{x,y,z} : (x \otimes y) \otimes z \to x \otimes (y \otimes z)$ in [[Functor category|$\cat C^{\cat C \times \cat C \times \cat C}$]] called the **associator**;
4. a [[Natural equivalence|natural isomorphism]] with components $\lambda_{x} : 1 \otimes x \to x$ in [[Endofunctor category|$\cat C^{\cat C}$]] called the **left-unitor**; and
5. a [[Natural equivalence|natural isomorphism]] with components $\rho: x \otimes 1 \to x$ in [[Endofunctor category|$\cat C^{\cat C}$]] called the **right-unitor**; 

satisfying the so-called **triangle identity**

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMyxbMCwwLCIoeCBcXG90aW1lcyAxKSBcXG90aW1lcyB5Il0sWzEsMSwieCBcXG90aW1lcyB5Il0sWzIsMCwieCBcXG90aW1lcyAoMSBcXG90aW1lcyB5KSJdLFswLDIsIlxcYWxwaGFfe3gsMSx5fSJdLFswLDEsIlxccmhvX3ggXFxvdGltZXMgXFxvcGVyYXRvcm5hbWV7aWR9X3kiLDJdLFsyLDEsIlxcb3BlcmF0b3JuYW1le2lkfV94IFxcb3RpbWVzIFxcbGFtYmRhX3kiXV0%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%7B(x%20%5Cotimes%201)%20%5Cotimes%20y%7D%20%26%26%20%7Bx%20%5Cotimes%20(1%20%5Cotimes%20y)%7D%20%5C%5C%0A%09%26%20%7Bx%20%5Cotimes%20y%7D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Bx%2C1%2Cy%7D%7D%22%2C%20from%3D1-1%2C%20to%3D1-3%5D%0A%09%5Carrow%5B%22%7B%5Crho_x%20%5Cotimes%20%5Coperatorname%7Bid%7D_y%7D%22'%2C%20from%3D1-1%2C%20to%3D2-2%5D%0A%09%5Carrow%5B%22%7B%5Coperatorname%7Bid%7D_x%20%5Cotimes%20%5Clambda_y%7D%22%2C%20from%3D1-3%2C%20to%3D2-2%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsMyxbMCwwLCIoeCBcXG90aW1lcyAxKSBcXG90aW1lcyB5Il0sWzEsMSwieCBcXG90aW1lcyB5Il0sWzIsMCwieCBcXG90aW1lcyAoMSBcXG90aW1lcyB5KSJdLFswLDIsIlxcYWxwaGFfe3gsMSx5fSJdLFswLDEsIlxccmhvX3ggXFxvdGltZXMgXFxvcGVyYXRvcm5hbWV7aWR9X3kiLDJdLFsyLDEsIlxcb3BlcmF0b3JuYW1le2lkfV94IFxcb3RpbWVzIFxcbGFtYmRhX3kiXV0=" /></p>

and **pentagon identity**

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%5Cusetikzlibrary%7Bcalc%7D%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNSxbMCwzLCIodyBcXG90aW1lcyAoeCBcXG90aW1lcyB5KSkgXFxvdGltZXMgeiJdLFsyLDMsIncgXFxvdGltZXMgKCh4IFxcb3RpbWVzIHkpIFxcb3RpbWVzIHopIl0sWzAsMSwiKCh3IFxcb3RpbWVzIHgpIFxcb3RpbWVzIHkpIFxcb3RpbWVzIHoiXSxbMiwxLCJ3IFxcb3RpbWVzICh4IFxcb3RpbWVzICh5IFxcb3RpbWVzIHopKSJdLFsxLDAsIih3IFxcb3RpbWVzIHgpIFxcb3RpbWVzICh5IFxcb3RpbWVzIHopIl0sWzAsMSwiXFxhbHBoYV97dyx4IFxcb3RpbWVzIHksen0iXSxbMiwwLCJcXGFscGhhX3t3LHgseX0gXFxvdGltZXMgXFxvcGVyYXRvcm5hbWV7aWR9X3giLDJdLFsxLDMsIntcXG9wZXJhdG9ybmFtZXtpZH1feH0gXFxvdGltZXMgXFxhbHBoYV97eCx5LHp9IiwyXSxbMiw0LCJcXGFscGhhX3t3IFxcb3RpbWVzIHgseSx6fSJdLFs0LDMsIlxcYWxwaGFfe3cgLHgseSBcXG90aW1lcyB6fSJdXQ%3D%3D%0A%5C%5B%5Cbegin%7Btikzcd%7D%0A%09%26%20%7B(w%20%5Cotimes%20x)%20%5Cotimes%20(y%20%5Cotimes%20z)%7D%20%5C%5C%0A%09%7B((w%20%5Cotimes%20x)%20%5Cotimes%20y)%20%5Cotimes%20z%7D%20%26%26%20%7Bw%20%5Cotimes%20(x%20%5Cotimes%20(y%20%5Cotimes%20z))%7D%20%5C%5C%0A%09%5C%5C%0A%09%7B(w%20%5Cotimes%20(x%20%5Cotimes%20y))%20%5Cotimes%20z%7D%20%26%26%20%7Bw%20%5Cotimes%20((x%20%5Cotimes%20y)%20%5Cotimes%20z)%7D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Bw%20%2Cx%2Cy%20%5Cotimes%20z%7D%7D%22%2C%20from%3D1-2%2C%20to%3D2-3%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Bw%20%5Cotimes%20x%2Cy%2Cz%7D%7D%22%2C%20from%3D2-1%2C%20to%3D1-2%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Bw%2Cx%2Cy%7D%20%5Cotimes%20%5Coperatorname%7Bid%7D_x%7D%22'%2C%20from%3D2-1%2C%20to%3D4-1%5D%0A%09%5Carrow%5B%22%7B%5Calpha_%7Bw%2Cx%20%5Cotimes%20y%2Cz%7D%7D%22%2C%20from%3D4-1%2C%20to%3D4-3%5D%0A%09%5Carrow%5B%22%7B%7B%5Coperatorname%7Bid%7D_x%7D%20%5Cotimes%20%5Calpha_%7Bx%2Cy%2Cz%7D%7D%22'%2C%20from%3D4-3%2C%20to%3D2-3%5D%0A%5Cend%7Btikzcd%7D%5C%5D%0A#invert" alt="https://q.uiver.app/#q=WzAsNSxbMCwzLCIodyBcXG90aW1lcyAoeCBcXG90aW1lcyB5KSkgXFxvdGltZXMgeiJdLFsyLDMsIncgXFxvdGltZXMgKCh4IFxcb3RpbWVzIHkpIFxcb3RpbWVzIHopIl0sWzAsMSwiKCh3IFxcb3RpbWVzIHgpIFxcb3RpbWVzIHkpIFxcb3RpbWVzIHoiXSxbMiwxLCJ3IFxcb3RpbWVzICh4IFxcb3RpbWVzICh5IFxcb3RpbWVzIHopKSJdLFsxLDAsIih3IFxcb3RpbWVzIHgpIFxcb3RpbWVzICh5IFxcb3RpbWVzIHopIl0sWzAsMSwiXFxhbHBoYV97dyx4IFxcb3RpbWVzIHksen0iXSxbMiwwLCJcXGFscGhhX3t3LHgseX0gXFxvdGltZXMgXFxvcGVyYXRvcm5hbWV7aWR9X3giLDJdLFsxLDMsIntcXG9wZXJhdG9ybmFtZXtpZH1feH0gXFxvdGltZXMgXFxhbHBoYV97eCx5LHp9IiwyXSxbMiw0LCJcXGFscGhhX3t3IFxcb3RpbWVzIHgseSx6fSJdLFs0LDMsIlxcYWxwaGFfe3cgLHgseSBcXG90aW1lcyB6fSJdXQ==" /></p>

Together these diagrams ensure that the operation of $(\otimes)$ is unital associative up to natural isomorphism.

## Further terminology

Let $(\cat C, \otimes, \alpha, \lambda, \rho)$ be a monoid category.

- Iff all the natural isomorphisms $\alpha,\lambda,\rho$ are the [[identity natural transformation]], then $\cat C$ is said to be a [[Strict monoidal category]], which is a [[monoid object]] in [[Category of small categories]].
- Iff $(\otimes)$ is the [[Products and coproducts|categorical product]] then $\cat C$ is said to be a [[Cartesian category]].
- Iff $\cat C$ has an [[Closed category|internal hom-functor]] in a compatible way it is a [[Closed monoidal category]].


  [^1978]: 1978\. [[Sources/@maclaneCategoriesWorkingMathematician1978|Categories for the working mathematician]]

## Properties

- One can define a [[Monoid object]]

## Other perspectives

A monoidal category may be viewed as

- A single-object [[bicategory]]

## Examples

```dataview
TABLE without id
  ("[[" + file.path + "|" + categoryName + "]]") as name,
  default(symbol, mathLink) as symbol,
  object,
  morphism,
  tensorProduct as product,
  tensorUnit as unit,
  arguments,
  filter(file.etags, (x) => startswith(x, "#monoidal-category/")) as also
FROM #monoidal-category
```



#
---
#state/develop | #lang/en | #SemBr
