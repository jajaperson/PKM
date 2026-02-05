import { CSLEntry } from "biblatex-csl-converter"

import { QuartzComponent, QuartzComponentConstructor } from "quartz/components/types"

interface CSLAuthor {
  given: string
  family: string
}

const LitNote: QuartzComponent = (props) => {
  const cit = props.fileData.entry as CSLEntry

  const title = cit.title as string
  const authors = (cit.author ?? []) as CSLAuthor[]

  return (
    <article class="popover-hint">
      <span>{authors.map((a) => `${a.given} ${a.family}`).join(" • ")}</span>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {typeof cit.DOI === "string" ? (
        <a href={`https://doi.org/${cit.DOI}`}>{cit.DOI}</a>
      ) : typeof cit.ISBN === "string" ? (
        <a
          href={
            typeof cit.URL === "string"
              ? cit.URL
              : `https://en.wikipedia.org/wiki/Special:BookSources/${cit.ISBN.split(" ")[0]}`
          }
        >
          {cit.ISBN.split(" ")[0]}
        </a>
      ) : typeof cit.URL === "string" ? (
        <a href={cit.URL} class="external">
          {cit.URL}
        </a>
      ) : null}
      {typeof cit["container-title"] === "string" ? (
        <p>
          in <em dangerouslySetInnerHTML={{ __html: cit["container-title"] }}></em>
        </p>
      ) : null}
      {typeof cit.abstract === "string" ? (
        <blockquote dangerouslySetInnerHTML={{ __html: cit.abstract }}></blockquote>
      ) : null}
      {/* <p>
                {JSON.stringify(cit)}
            </p> */}
    </article>
  )
}

export default (() => LitNote) satisfies QuartzComponentConstructor
