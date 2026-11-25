# BiSECt Lab website

Source of <https://bisect-group.github.io>. Jekyll site with a custom theme.

## Edit content

| What | Where |
| --- | --- |
| Home, People, Research, Publications, News pages | `_pages/` (front matter sets `layout`, `permalink`, `nav`, `nav_order`) |
| Members | `_data/people.yml` (photos in `assets/img/people/`) |
| Research | `_data/research.yml` |
| News items | `_news/YYYY-MM-slug.md` |
| Papers | `_bibliography/papers.bib` |

People fields:

- `name`, `role`
- `group`: `current` or `alumni`
- `photo`: path such as `assets/img/people/name.webp`, or `null` to show an initial
- `bio`: Markdown text
- `links`: `email`, `github`, `scholar`, `orcid`, or `website`
- `todo`: an internal note. The site never shows it.

Research fields:

- `themes`: a list of short labels
- `cards`: a list of `title`, `tag`, `summary`, and `links` (each link has `label` and `url`)

News fields:

- `date`: the full date, for example `2026-09-15`. The site shows the month and year.
- `title`: the bold heading
- The body is Markdown.

Optional bib fields: `abbr` (venue pill), `html` (project page), `pdf`, `doi`, `code`, `arxiv`, `note`, `selected={true}` (show on Home).

## Build locally

```bash
bundle install
bundle exec jekyll serve
```

Use Ruby 4.0. The site opens at <http://localhost:4000>.

## Deploy

A push to `main` runs `.github/workflows/deploy.yml`. It builds the site with Ruby 4.0 and publishes `_site` to the `gh-pages` branch. GitHub Pages serves `gh-pages`.

`gh-pages` is generated. Never edit it by hand. Each deploy replaces its whole content, so it cannot hold preview folders.

The Actions tab shows each run. After a green run, Pages can take a few minutes to update.

## Logos and icons

Logos are in `assets/img/logos/`.

The tab icon files are `favicon.ico`, `favicon-32.png`, `favicon-192.png`, and `apple-touch-icon.png`. `_includes/head.html` links the first, second, and fourth.

## Theme

- Layouts are in `_layouts/`, partials in `_includes/`, and styles in `assets/css/site.css`.
- Fonts (Inter, Source Serif 4) are in `assets/fonts/` with their licences. The site loads no external resources.
- Dark mode follows the system setting. The header button overrides it.

## Licence

The MIT licence in `LICENSE` covers this repository.
