---
tags:
  - public
alias:
  - "#state/stub"
  - "#state/develop"
  - "#state/tidy"
---
[[My style guide]]
# Tag Glossary

==SUPER== refers to a tag with child-tags, 
whereas ==ABSTRACT== refers specifically to a super-tag that is never intended to be used as a tag itself.

- `#state` ==ABSTRACT== — Used to classify the state of a note.
	Every normal note should have one of its subtags.
- `#modelnote` — A note I'm proud of and would like the world to see.
- `#SemBr` — A note with semantic breaks.
	See [[Semantic Breaks]].
- `#journal` ==SUPER== — A journal entry. 
	Pretty much only daily notes should have these.
	- `/angst` — Extra angsty journal content.
	- `/stub` — A stub [^1]
	- `/unfinished` — A journal entry which should be added to later.
- `#dream-journal` — A journal entry that contains a dream.
- `#origin` ==SUPER== — A note imported directly from an external source.
	It may be altered after.
	- `/typora` — Imported from old [[Typora]] notes.
- `#MOC` ==SUPER== — A [[Map of Content|Map of Content]].
	- `/stub` — A stub [^1]
- `#source` ==ABSTRACT== — Used to classify a source's type.
	See [[Sources MOC]].
- `#reads` ==ABSTRACT== — Used to record the number of reads of a source, 
	and whether it is currently in the process of being read.
	See [[Sources MOC]].
- `#quote` — The note contains a quote.
	should be placed next to the quote itself.
- `#to` ==ABSTRACT== — Marks a note as waiting for some action.
	- `/adopt` — Note is currently an orphan and is in need of a [[Breadcrumb]].
	- `/simplify` — Note is overly complex and should be simplified to a more useful form.
	- `/split` — Note is too big and should be split into smaller, atomic notes.
- `#does-not-compute` — I'm using someone else's example here and I don't understand it yet.
- `#university` ==ABSTRACT== — University-related stuff.
	- `/unit` — An MOC-like note for a particular unit.
- `#document` — A standalone markdown document.
- `#lang` ==ABSTRACT== — Note contains written (non-example) passages in the specified language (below).
	  - [`/[ISO 639-1]`](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) Language code indicating the language used, e.g. `#lang/de` for German.
- `#flashcards` ==ABSTRACT== — Specified that flashcards are contained in a note for use with the [[Spaced repetition]] plugin.
- `#oldcards` ==ABSTRACT== — Flashcards retired from review
- `#review` — Specifies a note should be periodically reviewed, using the [[Spaced repetition]] plugin.
- `#zerotag` ==SUPER== — Used for [[Deleting tags with `zerotag`]].
  - `/zerotag` — Used for deleting a subtag.
- `#m` ==ABSTRACT== — Formal mathematical stuff
  - `/def` ==SUPER== — Definition. 
    Subtags may be used for categorization.
    Note that foundational axioms, e.g. those of [[ZFC]], are also categorized as definitions.
  - `/thm` ==SUPER== — Theorem.
    Subtags may be used for categorization
- `#h` ==SUPER== — Historical event. Subtags are used for creating timelines.
- `#wikicontrib` — Contains a suggestion for a Wikipedia contribution.
- `#public` — I intend to publish this note.
- `#category` — This note defines a [[category]]
- `#monoidal-category` ==SUPER== — This note defines a [[Monoidal category]]. 
  The rational for this not being a subtag is that I might want to have multiple monoidal structures on a single category, in which case I wouldn't want multiple appearances in the glossary.
  - `/strict` — The monoidal category is strict
  - `/cartesian` — The monoidal category is a [[Cartesian category]].

[^1]: A stub refers to a small, incomplete note. Term stolen from [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Stub).

---
#state/tidy | #lang/en | #SemBr 