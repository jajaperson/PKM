---
date: 2026-07-06
tags:
  - public
---
[[Displayed category theory MOC]]
# Cartesian fibration

Let $\cat E \liesover \cat B$ be a [[displayed category]].
A <dfn>cartesian lift</dfn> of a morphism $f : x \to y$ at some $y'$ over $y$ consists of an object $f^*y' \in \cat B_{x}$ and a [[cartesian morphism]] $\pi^*_\imp{y'} f' : f^* y \to_{f} y'$.
Such a cartesian lift is unique up to unique isomorphism.

> [!check]- Proof of uniqueness
> One can show that if $f' : x' \to_{f} y'$ is cartesian then there is a unique vertical isomorphism $\varphi : x' \cong_{x} f^* y'$ such that $(\pi_{y'} f) \varphi = f'$.
> This is done by feeding $u = x$, $m = \id_{x}$, and $h' = f$ into the definition of a cartesian morphism.
> Repeating this argument gives a vertical morphism in the opposite direction, and shows that the composition of these two must be the vertical identity morphism. <span class="QED"/>

We say that $\cat E \liesover \cat B$ is a <dfn>cartesian fibration</dfn> over $\cat B$ iff there is a cartesian lift for every bottom-right corner.
Often this notion is simply referred to as a <dfn>fibration</dfn>, since [it coïncides with Grothendieck’s notion](https://www.jonmsterling.com/frct-002B/).

## Functoriality

A cartesian fibration $\cat E \liesover \cat B$ captures the notion of a [[Notions of 2-functor|2-functorial]] family of categories $\opn{fib}(\cat E): \underline{\op{\cat B}} \to \mathfrak{Cat}$,
taking

- an object $x \in \cat B$ to the [[fibre category]] $\cat E_{x}$;
- an morphism $f \in \cat B(x,y)$ to $f^* : \cat E_{y} \to \cat E_{x}$;

where $f^* : \cat E_{y} \to \cat E_{x}$ is the <dfn>base change functor</dfn> taking

- an displayed object $y' \in \cat E_{y}$ to the domain $f^* y'$ of the cartesian lift of $f$ at $y$;
- a vertical morphism $v : y'' \to_{y} y'$ to the unique vertical morphism $f^* v : f^* y'' \to_{x} f^* y'$ making
  
  ![[fibration-base-change-morphism.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMCw0LCJ4Il0sWzIsNCwieSJdLFsyLDIsInknIl0sWzIsMCwieScnIl0sWzAsMiwiZl4qeSciXSxbMCwwLCJmXip5JyciXSxbMywyLCJ2Il0sWzIsMSwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFswLDEsImYiLDJdLFs0LDAsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbNCwyLCJcXHBpX3t5J31eKmYiLDFdLFs1LDQsImZeKnYiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSwzLCJcXHBpX3t5Jyd9XipmIl0sWzQsMSwiIiwwLHsic3R5bGUiOnsibmFtZSI6ImNvcm5lciJ9fV1d]]
  
  commute (using the fact $\pi^*_{y'}f$ is cartesian).

> [!check]- Functoriality of $f^*$
> The diagram above commutes for $v = \id'_{y'}$ and $f^* \id'_{y'} = \id'_{x'}$.
> One can similarly show that $f^* (w v) = (f^* w) (f^* v)$. <span class="QED"/>


> [!check]- 2-functoriality $\mathrm{fib}(\cat E) : \underline{\op{\cat B}} \to \mathfrak{Cat}$
> The [[Notions of 2-functor#^compositor]] for $x, y, z \in \cat B_{0}$ has components which are themselves [[natural isomorphism|natural isomorphisms]], namely
> $$
> \begin{align*}
> \gamma_{f,g} : f^* g^* \Rightarrow (g f)^* : \cat E_{z} \to \cat E_{y}
> \end{align*}
> $$
> for $x \xrightarrow f y \xrightarrow g z$ in $\cat B$.
> These are constructed using the fact that the [[Cartesian morphism#^P1|composite of cartesian morphisms is cartesian]]
> and the uniqueness of cartesian lifts:
> In the diagram
> 
> ![[cartesian-fibration-compositor.svg#invert|c|https://q.uiver.app/#q=WzAsMTIsWzIsNSwieCJdLFs0LDUsInkiXSxbNCwzLCJnXip6JyJdLFs0LDEsImdeKnonJyJdLFsyLDMsImZeKmdeKnonIl0sWzIsMSwiZl4qZ14qeicnIl0sWzYsNSwieiJdLFs2LDMsInonIl0sWzYsMSwieicnIl0sWzAsMiwiKGdmKV4qeiciXSxbMCwwLCIoZ2YpXip6JyciXSxbMCw0LCJ4Il0sWzIsMSwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFswLDEsImYiLDJdLFs0LDAsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbNCwyLCJcXHBpXipmIiwyXSxbNSwzLCJcXHBpXipmIl0sWzEsNiwiZyIsMl0sWzcsNiwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFsyLDcsIlxccGleKiBnIiwyXSxbMyw4LCJcXHBpXipnIl0sWzgsNywidiJdLFszLDIsImdeKnYiLDFdLFs1LDQsImZeKmdeKiB2IiwyXSxbMTAsOSwiKGdmKV4qdiIsMl0sWzEwLDgsIlxccGleKihnZikiLDAseyJjdXJ2ZSI6LTJ9XSxbOSw3LCJcXHBpXiooZmcpIiwwLHsiY3VydmUiOi0yfV0sWzUsMTAsIihcXGdhbW1hX3tmLGd9KV97eicnfSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDksIihcXGdhbW1hX3tmLGd9KV97eid9IiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzExLDAsIiIsMSx7ImxldmVsIjoyLCJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzksMTEsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XV0=]]
> 
> we see that both $\pi^*_{z'}(fg)$ and $\pi^*_{g^* z'} f$ are cartesian lifts of $gf$,
> therefore they must be related by an isomorphism $(\gamma_{f,g})_{z'}$.
> Uniqueness arguments show that the entire diagram commutes, and we see that $\gamma_{f,g}$ is natural.
> Since $\underline{\cat B^\mathrm{op}}$ is [[Locally discrete bicategory|locally discrete]], naturality of $\gamma$ is free.
> 
> The [[Notions of 2-functor#^unitor]] for $x \in \cat B_{0}$ is a [[natural isomorphism]]
> $$
> \begin{align*}
> \nu :  1_{\cat E_{x}} \Rightarrow  (1_{x})^* : \cat E_{x} \to \cat E_{x}.
> \end{align*}
> $$
> This can be obtained quite directly from the diagram
> 
> ![[cartesian-fibration-unitor.svg#invert|c|https://q.uiver.app/#q=WzAsMTAsWzIsNSwieCJdLFs0LDUsIngiXSxbNCwzLCJ4JyJdLFsyLDMsIigxX3gpXip4JyJdLFs0LDEsIngnJyJdLFsyLDEsIigxX3gpXip4JyciXSxbNiwyXSxbMCwyLCJ4JyJdLFswLDQsIngiXSxbMCwwLCJ4JyciXSxbMiwxLCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzAsMSwiIiwyLHsibGV2ZWwiOjIsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMywwLCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzMsMiwiXFxwaV97eCd9XioxX3giLDFdLFszLDEsIiIsMCx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFs0LDIsInYiXSxbNSwzLCIoMV94KV4qdiIsMl0sWzUsNCwiXFxwaV4qX3t4Jyd9MV94Il0sWzcsMiwiIiwxLHsiY3VydmUiOi0yLCJsZXZlbCI6Miwic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFswLDgsIiIsMix7ImxldmVsIjoyLCJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzcsOCwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs5LDcsInYiLDJdLFs0LDksIiIsMix7ImN1cnZlIjoyLCJsZXZlbCI6Miwic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFs3LDMsIlxcbnVfe3gnfSIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs5LDUsIlxcbnVfe3gnJ30iLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=]]
> 
> which constructs $\nu_{x'}$ using the cartesian lift of $1_{x}$ as the universal factoring of the displayed identity.
> The inverse is given by the cartesian lift itself, and we also witness naturality.
> 
> Let $a \xrightarrow f b \xrightarrow g c \xrightarrow h d$ in $\cat B$.
> Unwrapping the [[Notions of 2-functor#^hexagon]], the left hand side reads
> $$
> \begin{align*}
> f^* g^* h^* 
> \xRightarrow {\gamma_{f,g} \circ h^*} 
> (gf)^* h^*
> \xRightarrow {\gamma_{gf,h}} (h (g f))^*
> \xRightarrow{\alpha^*}
> ((hg)f)^* 
> : \cat E_{d} \to \cat E_{a}
> \end{align*}
> $$
> where $\alpha$ is the unique witness that $h(gf) = (hg)f$ in $\cat B$; and the right hand side reads
> $$
> \begin{align*}
> f^*  g^* h^* \xRightarrow{\id} f^* g^* h^* \xRightarrow{f^* \circ \gamma_{f,g}} f^*(hg)^* \xRightarrow{\gamma_{f,hg}} ((hg)f)^*
> : \cat E_{d} \to \cat E_{a}.
> \end{align*}
> $$
> Let $d'$ be an object over $d$. 
> Then at $d'$ the left hand side is constructed by the diagram
> 
> ![[cartesian-fibration-2-associativity-left.svg#invert|c|https://q.uiver.app/#q=WzAsMTEsWzYsOCwiZCJdLFs2LDYsImQnIl0sWzQsOCwiYyJdLFsyLDgsImIiXSxbMCw4LCJhIl0sWzQsNCwiaF4qZCciXSxbMiwyLCJnXipoXipkJyJdLFswLDAsImZeKmdeKmheKmQnIl0sWzAsMiwiKGdmKV4qaF4qZCciXSxbMCw0LCIoaChnZikpXipkJyJdLFswLDYsIigoaGcpZileKmQnIl0sWzEsMCwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs0LDMsImYiLDJdLFszLDIsImciLDJdLFsyLDAsImgiLDJdLFs3LDYsIlxccGleKmYiXSxbNiw1LCJcXHBpXipnIl0sWzUsMSwiXFxwaV4qIGgiXSxbMTAsNCwiIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs5LDEwLCJcXGFscGhhXipfe2QnfSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs4LDksIihcXGdhbW1hX3tnZixofSlfe2QnfSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs3LDgsIihcXGdhbW1hX3tmLGd9KV97aF4qIGQnfSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsxMCwxLCJcXHBpXiooKGhnKWYpIiwyXSxbOSwxLCJcXHBpXiooaChnZikpIiwwLHsibGFiZWxfcG9zaXRpb24iOjQwfV0sWzgsNSwiXFxwaV4qKGdmKSIsMl1d]]
> 
> and so it is the unique factorization of $(\pi^*h)(\pi^*g)(\pi^* f)$ via the cartesian morphism $\pi^*((hg)f)$.
> Similarly, the right hand side is constructed by the diagram
> 
> ![[cartesian-fibration-2-associativity-right.svg#invert|c|https://q.uiver.app/#q=WzAsMTIsWzYsOCwiZCJdLFs2LDYsImQnIl0sWzQsOCwiYyJdLFsyLDgsImIiXSxbMCw4LCJhIl0sWzQsNCwiaF4qZCciXSxbMiwyLCJnXipoXipkJyJdLFswLDAsImZeKmdeKmheKmQnIl0sWzAsMiwiZl4qZ14qaF4qZCciXSxbMCw0LCJmXiooaGcpXiogZCciXSxbMCw2LCIoKGhnKWYpXipkJyJdLFsyLDQsIihoZyleKmQnIl0sWzEsMCwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFs0LDMsImYiLDJdLFszLDIsImciLDJdLFsyLDAsImgiLDJdLFs1LDEsIlxccGleKiBoIl0sWzYsNSwiXFxwaV4qZyJdLFs3LDYsIlxccGleKmYiXSxbNyw4LCIiLDIseyJsZXZlbCI6Miwic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFs4LDksImZeKlxcZ2FtbWFfe2csZn0iLDJdLFs5LDEwLCJcXGdhbW1hX3tmLGhnfSIsMl0sWzEwLDQsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbMTAsMSwiXFxwaV4qKChoZylmKSIsMl0sWzExLDEsIlxccGleKihoZykiLDIseyJsYWJlbF9wb3NpdGlvbiI6NDB9XSxbOSwxMSwiXFxwaV4qZiIsMl0sWzYsMTEsIihcXGdhbW1hX3tnLGh9KV97ZCd9Il0sWzgsNiwiXFxwaV4qZiJdXQ==]]
> 
> so it is must be the same unique factorization.
> Therefore the hexagon holds.
> 
> Now let $x \xrightarrow f y$ in $\cat B$ and $y'$ be an object over $y$.
> The nontrivial path of the left of the [[Notions of 2-functor#^unitality]] reads
> $$
> \begin{align*}
> f^* 
> \xRightarrow{\nu \circ f^*} (1_{x})^* f^* 
> \xRightarrow{\gamma_{x,f}} (f \, 1_{x})^* \xRightarrow{\rho^*} f^* : \cat E_{y} \to \cat E_{x}
> \end{align*}
> $$
> where $\rho$ is the unique witness that $f 1_x = f$ in $\cat B$.
> Then at $y'$ this path is constructed from 
> 
> ![[cartesian-fibration-2-unitality-left.svg#invert|c|https://q.uiver.app/#q=WzAsOCxbMCw4LCJ4Il0sWzQsOCwieSJdLFswLDYsImZeKiB5JyJdLFs0LDYsInknIl0sWzAsNCwiKGZcXCwxX3gpXip5JyJdLFswLDIsIigxX3gpXiogZl4qIHknIl0sWzAsMCwiZl4qIHknIl0sWzIsMiwiZl4qIHknIl0sWzMsMSwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoibWFwcyB0byJ9fX1dLFsyLDAsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbMiwzLCJcXHBpXipmIl0sWzQsMiwiXFxyaG9eKl97eSd9IiwyXSxbNSw0LCIoXFxnYW1tYV97eCxmfSlfe3knfSIsMl0sWzYsNSwiXFxudV97Zl4qIHknfSIsMl0sWzQsMywiXFxwaV4qKGYgXFwsIDFfeCkiXSxbNywzLCJcXHBpXipmIl0sWzUsNywiXFxwaV4qMV95IiwyXSxbNiw3LCIiLDAseyJsZXZlbCI6Miwic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFswLDEsImYiLDJdXQ==]] 
> 
> so it uniquely factors $\pi^* f$ via the cartesian morphism $\pi^*f$,
> so it is equal to the trivial path.
> Similarly, the nontrivial path on the right of the [[Notions of 2-functor#^unitality]] reads
> 
> $$
> \begin{align*}
> f^* \xRightarrow{f^* \circ \nu} f^* \, (1_{y})^* \xRightarrow{\gamma_{f,y}} (1_{y} \,f)^* \xRightarrow{\lambda^*} f^*
> \end{align*}
> $$
> 
> where $\lambda$ is the unique witness that $1_{y}\,f = f$.
> Then at $y'$ this path is constructed from
> 
> ![[cartesian-fibration-2-unitality-right.svg#invert|c|https://q.uiver.app/#q=WzAsOSxbMCw4LCJ4Il0sWzQsOCwieSJdLFs0LDYsInknIl0sWzAsNiwiZl4qeSciXSxbMCw0LCIoMV95XFwsZileKnknIl0sWzAsMiwiZl4qICgxX3kpXiogeSciXSxbMCwwLCJmXip5JyJdLFsyLDQsIigxX3kpXip5JyJdLFsyLDIsInknIl0sWzAsMSwiZiIsMl0sWzMsMiwiXFxwaV4qZiJdLFsyLDEsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Im1hcHMgdG8ifX19XSxbMywwLCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJtYXBzIHRvIn19fV0sWzQsMywiXFxsYW1iZGFeKl97eSd9IiwyXSxbNCwyLCJcXHBpXiooMV95IGYpIiwxLHsibGFiZWxfcG9zaXRpb24iOjQwfV0sWzcsMiwiXFxwaV4qMV95Il0sWzUsNywiXFxwaV4qZiJdLFs1LDQsIihcXGdhbW1hX3tmLHl9KV97eSd9IiwyXSxbNiw1LCJmXipcXG51X3t5J30iLDJdLFs4LDcsIlxcbnVfe3knfSJdLFs2LDgsIlxccGleKmYiXSxbMiw4LCIiLDAseyJjdXJ2ZSI6MywibGV2ZWwiOjIsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XV0=]]
> 
> so it uniquely factors $1_{y'} \pi^*f$ via the cartesian morphism $\pi^*f$,
> so it is equal to the trivial path. 
> <span class="QED"/>

The [[Grothendieck construction]] goes the other way, from 2-functorial families of categories to cartesian fibrations.

## See also

- [[Isofibration]], where we are only guaranteed lifts for isomorphisms in $\cat B$.

#
---
#state/develop | #lang/en | #SemBr

[^1]: Parts of this proof are taken from the [1Lab](https://1lab.dev/Cat.Displayed.Cartesian.Indexing.html).
