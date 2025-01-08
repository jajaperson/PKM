---
tags:
  - public
aliases:
  - $\mathbb Z$-natural Heisenberg algebra
  - $\mathbb Z + \frac{1}{2}$-natural Heisenberg algebra
---
[[Heisenberg algebra]]
# Natural Heisenerg algebras

Let $\mathfrak{h}$ be an [[Abelian Lie algebra|abelian]] [[Bilinear form#^nondegenerate]] finite-dimensional [[quadratic Lie algebra]] over $\mathbb{K}$[^char],
and $\mathfrak{g}_{\mathbb{Z}} = \tilde{\mathfrak{h}}$ and $\mathfrak{g}_{\mathbb{Z} + \frac{1}{2}} = \tilde{\mathfrak{h}}[-1]$ denote [[Affine Lie algebra|untwisted]] and [[Twisted affine Lie algebra|twisted affine Lie algebras]] respectively, which are each [[Triangular Lie algebra|triangular]].
Then the [[Commutator ideal|commutator ideals]][^1]
$$
\begin{align*}
\hat{\mathfrak{h}}_{\mathbb{Z}} = \mathfrak{g}_{\mathbb{Z}}' = \tilde{\mathfrak{h}}' &=_{\Vect_{\mathbb{K}}} \mathbb{K}c \oplus \bigoplus_{n \in \mathbb{Z} \setminus \{ 0 \}} \mathfrak{h} \otimes t^n \\
\hat{\mathfrak{\mathfrak{h}}}_{\mathbb{Z} + \frac{1}{2}} = \mathfrak{g}_{\mathbb{Z} + \frac{1}{2}}' = \tilde{\mathfrak{h}}[-1]' &=_{\Vect_{\mathbb{K}}} \mathbb{K}c \oplus
\bigoplus _{n \in \mathbb{Z} + \frac{1}{2}} \mathfrak{h}\otimes t^n = \hat{\mathfrak{h}}[-1]
\end{align*}
$$
define [[Heisenberg algebra|Heisenberg algebras]],
called the $\mathbb{Z}$- and $\left( \mathbb{Z}+\frac{1}{2} \right)$-**natural Heisenberg algebras**[^name] induced by $\mathfrak{h}$. #m/def/lie
For $Z = \mathbb{Z}$ or $Z = \mathbb{Z} + \frac{1}{2}$, we have the commutation relations
$$
\begin{align*}
[c, \hat{\mathfrak{h}}_{Z}] &= 0 \\
[x \otimes t^m, y \otimes t^n] &= \langle x , y \rangle m \delta_{m+n}c
\end{align*}
$$
for $x,y \in \mathfrak{h}$ and $m,n \in Z \setminus \{ 0 \}$.[^1988]

  [^1]: Note that the even subspace of $\mathfrak{h}$ under $\vartheta=-1$ is trivial, so the [[Twisted affine Lie algebra#^decomposition]] matches the above.
  [^char]: $\operatorname{char} \mathbb{K} = 0$
  [^name]: This is my own terminology, FLM do not give a name for these constructions.

## Modules

### Heisenberg modules

Let $Z = \mathbb{Z}$ or $Z = \mathbb{Z} + \frac{1}{2}$ and $k \in \mathbb{K}$.
The $\hat{\mathfrak{h}}_{Z}$-[[Heisenberg module]] is then isomorphic as a $\mathbb{K}$-[[graded vector space]]
$$
\begin{align*}
M(k) \cong_{\cat{Gr}_{\mathbb{K}}{\Vect}_{\mathbb{K}}} S^\bullet(\hat{\mathfrak{h}}_{Z})
\end{align*}
$$
In addition $S^\bullet(\hat{\mathfrak{h}}_{Z})$ is a $\mathbb{K}$-[[Graded module|graded]] [[Simple module|irreducible]] $\mathfrak{g}_{Z}$ [[Module over a Lie algebra|module]] where $d$ acts as a [[degree operator]],
and if $Z = \mathbb{Z}$, $\mathfrak{h} = \mathfrak{h}\otimes t^0$ act trivially.[^2]

> [!note]- Notation
> In the case $k = 1$, for $h \in \mathfrak{h}$ and $v \in S^\bullet(\hat{\mathfrak{h}}_{Z}^{-})$
> $$
> \begin{align*}
> h(n) v = (h \otimes t^n) \odot  v
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> [g(m), h(n)] &= \langle g,h \rangle m \delta_{n+n} \\
> [d, h(n)] &= nh(n)
> \end{align*}
> $$
> for $g,h \in \mathfrak{h}$ and $m,n \in Z$.[^1988b]

### Triangular modules

Defining the linear form
$$
\begin{align*} 
\lambda : \mathfrak{g}_{Z}^0 &\to \mathbb{K} \\ 
 c &\mapsto 1 \\
d &\mapsto 0 \\
\mathfrak{h} &\mapsto 0 \qquad(Z = \mathbb{Z})
\end{align*}
$$
Then then the [[triangular module]] and [[Heisenberg module]] $M(\lambda) = M(1)$ as $\mathfrak{g}_{Z}$-modules.
Thus given the involutive [[antiautomorphism]]
$$
\begin{align*}
\omega : c &\mapsto c \\
d &\mapsto d \\
h \otimes t^n &\mapsto h \otimes t^{-n} \qquad(h \in \mathfrak{h})
\end{align*}
$$
there exists a unique [[Contravariant form on a triangular module|contravariant form]]
$$
\begin{align*}
b : S^\bullet(\hat{\mathfrak{h}}_{Z}^{-}) \times S^\bullet(\hat{\mathfrak{h}}_{Z}^{-}) \to \mathbb{K}
\end{align*}
$$
with the properties
$$
\begin{align*}
(d \odot  v, w) &= (v,d \odot w) \\
((h \otimes t^n) \odot  v, w) &= (v, (h \otimes t^{-n}) \odot w) \\
(1,1) &= 1
\end{align*}
$$
for $h \in \mathfrak{h}$, $n \in Z$, and $v,w \in S^\bullet(\hat{\mathfrak{h}}_{Z}^{-})$.
The first conditions implies that $b(v,w) =0$ if $v,w$ are homogenous of different degrees.[^1988a]


  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.7, pp. 24–25
  [^2]: This works because $\tilde{\mathfrak{h}}= (\tilde{\mathfrak{h}} \rtimes \mathbb{K}d) \times \mathfrak{h}$.
  [^1988a]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.8, pp. 29–30
  [^1988b]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9, p. 34

### Natural module $M_{\alpha}$
Let $Z = \mathbb{Z}$ or $Z = \mathbb{Z} + \frac{1}{2}$ and let $S^\bullet(\hat{\mathfrak{h}}_{Z}^{-})$ denote the $\mathfrak{g}_{Z}$- and $\hat{\mathfrak{h}}_{Z}$-module $M(1)$.
Let $\alpha \in \mathfrak{h}$, $\mu \in \mathbb{K}$,
and $\mathbb{K}v_{\alpha}$ be a 1-dimensional $\mathfrak{g}_{Z}$-module defined by
$$
\begin{align*}
h \odot  v_{\alpha} &= \langle h,\alpha \rangle  v_{\alpha} & h &\in \mathfrak{h} \\
h \odot  v_{\alpha} &= 0 & h &\in \hat{\mathfrak{g}}_{Z} \\
d \odot  v_{\alpha} &= \mu v_{\alpha}
\end{align*}
$$
We define the **natural $\mathfrak{g}_{Z}$-module** $M_{\alpha}$ to be the [[tensor product of graded vector spaces]][^1988c]
$$
\begin{align*}
M = S^\bullet(\hat{\mathfrak{h}}_{Z}^{-}) \otimes_{\mathbb{K}} \mathbb{K}v_{\alpha}
\end{align*}
$$
with the $\mathfrak{g}_{Z}$-action given by the [[Tensor product of Lie algebra representations]]
$$
\begin{align*}
h \odot  (f \otimes v_{\alpha}) = (h \odot f) \otimes v_{\alpha} + f \otimes (h \odot  v_{\alpha})
\end{align*}
$$
In the case $\alpha = 0$ or $Z = \mathbb{Z} + \frac{1}{2}$[^redund] this amounts to a [[shifted graded module]] by $\mu$.
If $Z = \mathbb{Z}$
$$
\begin{align*}
M_{\alpha} = \Ind^{\mathfrak{g}_{Z}}_{\mathfrak{g}_{Z}^0 \oplus \mathfrak{g}_{Z}^+} \mathbb{K}v_{\alpha}
\end{align*}
$$
Conventionally we will take[^p41]
$$
\begin{align*}
\mu = \begin{cases}
-\frac{1}{2} \langle \alpha,\alpha \rangle + \frac{1}{24}\dim \mathfrak{h}  & Z= \mathbb{Z} \\ \\
-\frac{1}{48} \dim \mathfrak{h} & Z = \mathbb{Z} + \frac{1}{2}
\end{cases}
\end{align*}
$$

  [^p41]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9, p. 41

> [!note]- Notation
> For $h \in \mathfrak{h}$ and $v \in M$
> $$
> \begin{align*}
> h(n) v = (h \otimes t^n) \odot  v
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> [g(m), h(n)] &= \langle g,h \rangle m \delta_{m+n} \\
> [d, h(n)] &= nh(n)
> \end{align*}
> $$
> for $g,h \in \mathfrak{h}$ and $m,n \in Z$.


  [^redund]: Since in either of these cases $\mathbb{K}v_{\alpha}$ carries a trivial representation of $\mathfrak{g}_{Z}$. In fact, FLM only define $M$ this way for $Z = \mathbb{Z}$ and do not use a tensor product construction for $Z = \mathbb{Z} + \frac{1}{2}$.
  [^1988c]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9 pp. 34–35

#### Virasoro representation
Letting $\{ h_{i} \}_{i=1}^{\dim \mathfrak{h}}$ be an orthonormal basis of $\mathfrak{h}$, extending the ground field if necessary, we define the following (basis-independent) operators on $M_{\alpha}$
$$
\begin{align*}
L(n) &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{k \in Z} h_{i}(n-k) h_{i}(k) & n \in \mathbb{Z} \\
L(0) &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{k \in Z} h_{i}(-\abs k)h_{i}(\abs k) + \beta_{0} \dim \mathfrak{h}
\end{align*}
$$
where
$$
\begin{align*}
\beta_{0} = \begin{cases}
0 & Z = \mathbb{Z} \\
\frac{1}{16} & Z = \mathbb{Z} +\frac{1}{2}
\end{cases}
\end{align*}
$$
Then
$$
\begin{align*}
\varphi : \mathfrak{v} &\to \End_{\mathbb{K}}M \\
L_{n} &\mapsto L(n) \\
c &\mapsto \dim \mathfrak{h}
\end{align*}
$$
is a [[Graded module|graded]] [[Lie algebra representation|representation]] of the [[Virasoro algebra]] $\mathfrak{v}$.[^1988d]

> [!check]- Proof
> For $h \in \mathfrak{h}$, $m \in \mathbb{Z}$, and $k \in Z$,
> it follows from the commutation relations on $M$ that
> $$
> \begin{align*}
> [L(m), h(k)] &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{\ell \in Z} [h(k) , h_{i}(m-\ell)h_{i}(\ell)] \\
> &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{\ell \in Z} 
> 
> [h(k), h_{i}(m-\ell)]h_{i}(\ell) -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{\ell \in Z}  h_{i}(m-\ell)[h(k), h_{i}(\ell)] \\
> &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{\ell \in Z} \langle h, h_{i} \rangle k\delta_{k+m-\ell} h_{i}(\ell) - \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{\ell \in Z} h_{i}(m-\ell)\langle h,h_{i} \rangle k \delta_{k+\ell} \\
> &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} k \langle h,h_{i} \rangle h_{i}(k+m) - \frac{1}{2}\sum_{i=1}^{\dim \mathfrak{h}}k \langle h,h_{i} \rangle h_{i}(k+m) \\
> &= -kh(k+m)
> \end{align*}
> $$
> 
> Hence for $m,n \in \mathbb{Z}$ with $n \neq 0$ and $m+n \neq 0$,
> $$
> \begin{align*}
> [L(m), L(n)]
> &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}}\sum_{k \in Z}  \left[ L(m), h_{i}(n-k)h_{i}(k) \right] \\
> &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}}\sum_{k \in Z} h_{i}(n-k)[L(m), h_{i}(k)] + \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}}\sum_{k \in Z} [L(m),h_{i}(n-k)] h_{i}(k) \\
> &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}}\sum_{k \in Z} (kh_{i}(n-k) h_{i}(k+m) + (n-k)h_{i}(m+n-k)h_{i}(k)) \\ 
> 
> &= -\frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}}\sum_{k \in Z} ((k-m)h_{i}(n-k+m) h_{i}(k) + (n-k)h_{i}(m+n-k)h_{i}(k)) \\ 
> &=(m-n) L(m+n)
> \end{align*}
> $$
> The only remaining case is essentially that $n \neq 0$ and $m + n = 0$, since the $n=0$ case may be reduced to either zero or another case by the alternating property.
> In this case, from the expression
> $$
> \begin{align*}
> L(-m) = \frac{1}{2} \sum_{i = 1}^{\dim \mathfrak{h}} \left( \sum_{k \in Z : k \leq m} h_{i}(k-m)h_{i}(-k) + \sum_{k \in Z: k > m} h_{i}(-k)h_{i}(k-m) \right) 
> \end{align*}
> $$
> it follows
> $$
> \begin{align*}
> [L(m), L(-m)] &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \begin{pmatrix} \sum_{k \in Z: k \leq m} [L(m), h_{i}(k-m)h_{i}(-k) ] \\+ \sum_{z \in Z : k > m} [L(m), h_{i}(-k)h_{i}(k-m)] \end{pmatrix} \\
> &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \begin{pmatrix} \sum_{k \in Z: k \leq m} ([L(m), h_{i}(k-m) ]h_{i}(-k) + h_{i}(k-m)[L(m), h_{i}(-k) ]) \\+ \sum_{z \in Z : k > m} ([L(m), h_{i}(-k)]h_{i}(k-m)+h_{i}(-k) [L(m), h_{i}(k-m)]) \end{pmatrix} \\
> &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \begin{pmatrix} \sum_{k \in Z: k \leq m} ((m-k)h_{i}(k) h_{i}(-k) + kh_{i}(k-m)h_{i}(m-k)) \\+ \sum_{z \in Z : k > m} (kh_{i}(m-k)h_{i}(k-m)+(m-k) h_{i}(-k) h_{i}(k)) \end{pmatrix} \\
> &= \frac{1}{2} \sum_{i=1}^{\dim \mathfrak{h}} \begin{pmatrix} \sum_{k \in Z: k \leq m} (m-k)h_{i}(k) h_{i}(-k) + \sum_{k \in Z: k \leq 0} (m+k)h_{i}(k)h_{i}(-k) \\+ \sum_{z \in Z : k > 0} (m+k)h_{i}(-k)h_{i}(k)+\sum_{z \in Z : k > m}(m-k) h_{i}(-k) h_{i}(k) \end{pmatrix} \\ 
> &= 2mL(0) + \gamma_{m,-m}
> \end{align*}
> $$
> where $\gamma_{m,-m}$ is some constant which we get from the $\beta_{0}$ term and reversing the order of some $h_{i}(-k)h(k)$ where necessary.[^vir]
> 
> We will compute $\gamma_{m,-m}$ using the application of of $[L(m), L(-m)]$ to a [[Vacuum space|vacuum vector]] of $M$, e.g. $v_{\alpha}$.
> We note the following facts:
> From [[#Triangular modules|above]] there is a unique [[Contravariant form on a triangular module|contravariant form]] such that $(v_{\alpha}, v_{\alpha}) = 1$ and
> $$
> \begin{align*}
> (h(n)v, w) &= (v, h(-n)w) \\
> (d v,w) &= (v,dw)\end{align*}
> $$
> for $h \in \mathfrak{h}$, $n \in Z$, and $v,w \in M$.
> It follows by the definition of $L(n)$ that
> $$
> \begin{align*}
> (L(n)v,w) = (v,L(-n)w)
> \end{align*}
> $$
> for $n \in \mathbb{Z}$ and $v, w \in M$.
> We also have
> $$
> \begin{align*}
> \sum_{i=1}^{\dim \mathfrak{h}} h_{i}(0)^2 v_{\alpha} = \langle \alpha, h_{i} \rangle \langle \alpha,h_{i} \rangle v_{\alpha} = \langle \alpha,\alpha \rangle v_{\alpha}
> \end{align*}
> $$
> Now consider the case $m > 0$. Then
> $$
> \begin{align*}
> \gamma_{m,-m} &= (v_{\alpha} , \gamma_{m ,- m} v_{\alpha}) \\
> &= (v_{\alpha} , ([L(m), L(-m)] - 2mL(0)) v_{\alpha}) \\
> &= (v_{\alpha} , (L(m) L(-m) - 2mL(0)) v_{\alpha}) \\
> &= (L(-m)v_{\alpha},L(-m)v_{\alpha} ) -2m(v_{\alpha}, L(0)v_{\alpha}) \\
> &= \frac{1}{4} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{j=1}^{\dim \mathfrak{h}} \left( \sum_{k \in Z: 0\leq k\leq m} h_{i}(k-m)h_{i}(-k)v_{\alpha}, \sum_{\ell \in Z: 0 \leq \ell \leq m} h_{j}(\ell-m)h_{j}(-\ell)v_{\alpha} \right) 
> \\
> &\mathrel{\phantom{=}} \mathop{-} m \left( v_{\alpha}, \sum_{i=1}^{\dim \mathfrak{ h}} h_{i}(0)^2 v_{\alpha} \right) [0 \in Z] - 2m\beta_{0} \dim \mathfrak{h} 
> \\
> &= \frac{1}{4} \sum_{i=1}^{\dim \mathfrak{h}}  \left( v_{\alpha}, \left( \sum_{k \in Z: 0\leq k\leq m} h_{i}(k)h_{i}(m-k) \right)\left( \sum_{\ell \in Z: 0 \leq \ell \leq m} h_{i}(\ell-m)h_{i}(-\ell) \right)v_{\alpha} \right) 
> \\
> &\mathrel{\phantom{=}} \mathop{-} m \langle \alpha,\alpha \rangle [0 \in Z] - 2m\beta_{0} \dim \mathfrak{h} 
> \end{align*}
> $$
> where we have used an [[Iverson bracket]] and the fact that for $i \neq j$ we can commute the positively graded operators to annihilate $v_{\alpha}$.
> Now consider each of the terms
> $$
> \begin{align*}
> \eta_{m,i,k,\ell} = \left( v_{\alpha}, h_{i}(k)h_{i}(m-k)h_{i}(\ell-m)h_{i}(-\ell)v_{\alpha} \right) 
> \end{align*}
> $$
> where $0 \leq k, \ell \leq m$,
> so that
> $$
> \begin{align*}
> \gamma_{m,-m} = \frac{1}{4} \sum_{i=1}^{\dim \mathfrak{h}} \sum_{k \in Z : 0 \leq k \leq m} \sum_{\ell \in Z : 0 \leq \ell \leq m} \eta_{m,i,k,\ell} - m \langle \alpha,\alpha \rangle [0 \in Z] - 2m\beta_{0} \dim \mathfrak{h} 
> \end{align*}
> $$
> We have the following cases
> 
> - $\eta_{m,i,k,\ell} = 0$ for $\ell \notin \{ k, m-k \}$, since we may again commute and annihilate;
> - $\eta_{m,i,k,\ell} = m(v_{\alpha}, h_{i}(0)^2 v_{\alpha})$ for $k \in \{ 0,m \}$ whence $\ell \in \{ 0,m \}$;[^hint]
> - $\eta_{m,i,k,\ell} = 1$ otherwise
> 
> Thus
> $$
> \begin{align*}
> \gamma_{m,-m} &= \frac{1}{4} \sum_{i=1}^{\dim \mathfrak{ h}} \left( \sum_{k \in \{ 0,m \} \cap Z} \sum_{\ell \in \{ 0,m \}  \cap Z} m(v_{\alpha}, h_{i}(0)^2 v_{\alpha}) + \sum_{k \in Z : 0 < k < m} \sum_{\ell \in \{ k, m-k \}}1  \right) \\
> &\mathrel{\phantom =} \mathop- m \langle \alpha,\alpha \rangle [0 \in Z] - 2m\beta_{0} \dim \mathfrak{h} \\
> &= m\langle \alpha,\alpha \rangle [0 \in Z] + \frac{1}{4} (\dim \mathfrak{h})\abs{ \{ (k,\ell) \in Z^2 : 0 < k < m, \ell \in \{ k, m-k \} \} } 
> \\
> &\mathrel{\phantom =} \mathop- m \langle \alpha,\alpha \rangle [0 \in Z] - 2m\beta_{0} \dim \mathfrak{h} 
> \\
> &= \frac{1}{4} (\dim \mathfrak{h})\abs{ \{ (k,\ell) \in Z^2 : 0 < k < m, \ell \in \{ k, m-k \} \} } - 2m\beta_{0} \dim \mathfrak{h} \\
> &= \frac{1}{2}(\dim \mathfrak{h})\left( \sum_{k \in Z: 0 < k < m} k(m-k) - 4m\beta_{0} \right) \\
> &= \frac{\dim \mathfrak{h}}{12}(m^3 - m)
> \end{align*}
> $$
> as required. <span class="QED"/>

In fact, the choice $\varphi(c) = \dim \mathfrak{h}$ and $\mathfrak{p}= \mathbb{K}d_{-1} + \mathbb{K}d_{0} + \mathbb{K}d_{1}$ being trivial uniquely determine the central term in the commutation relations for the [[Virasoro algebra]].
Letting $L_{n}' = L_{n} - \frac{1}{24}\delta_{n}c$, the above choice of $\mu$ gives
$$
\begin{align*}
L_{0}'\odot  v = -  d \odot  v
\end{align*}
$$
for $v \in M_{\alpha}$.
The $L(0)$-eigenvalue of a homogenous element $v \in M_{\alpha}$ is termed the **weight** and denoted $\wt v$ so that
$$
\begin{align*}
\deg v = -\wt v + \frac{1}{24} \dim \mathfrak{h}
\end{align*}
$$
and
$$
\begin{align*}
\wt v_{\alpha} = \begin{cases}
\frac{1}{12} \langle \alpha,\alpha \rangle  & Z = \mathbb{Z}  \\
\frac{1}{16} \dim \mathfrak{h}  & Z = \mathbb{Z}+\frac{1}{2}
\end{cases}
\end{align*}
$$

  [^1988d]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.9 pp. 35–42. This seems to be the first theorem in the book.
  [^vir]: It should already be clear at this point that $L(n)$ exhibit _a_ central extension of the Witt algebra, which must be equivalent to the [[Virasoro algebra]]. It turns out that the Virasoro algebra, and these operators, are engineered precisely so that $\gamma_{m,-m}$ gives the right coëfficient.
  [^hint]: In this calculation, keep the canonical realization of the Heisenberg commutation relations in mind.

#
---
#state/tidy | #lang/en | #SemBr
