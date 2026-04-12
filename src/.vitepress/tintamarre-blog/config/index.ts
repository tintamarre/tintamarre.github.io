import path from 'node:path'
import { writeFileSync } from 'node:fs'
import {
  type PageData,
  type SiteConfig,
  type TransformPageContext,
  type UserConfig,
  defineConfigWithTheme,
} from 'vitepress'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import { Feed } from 'feed'
import { createContentLoader } from 'vitepress'
import type { TintamarreBlogThemeConfig } from './theme-types'

// import { genFeed } from './genFeed'

export async function genFeed(
  siteConfig: SiteConfig<TintamarreBlogThemeConfig>
): Promise<void> {
  const blogConfig = siteConfig.site.themeConfig.blog ?? {}
  const feedConfig = blogConfig.feed ?? {}
  const baseUrl = feedConfig.baseUrl ?? 'localhost/blog'

  const feed = new Feed({
    title: feedConfig.title ?? blogConfig.title ?? '',
    description: feedConfig.description ?? blogConfig.description ?? '',
    id: feedConfig.id ?? baseUrl,
    link: feedConfig.link ?? baseUrl,
    language: feedConfig.language ?? 'en',
    image: feedConfig.image ?? '',
    favicon: feedConfig.favicon ?? `${baseUrl}/favicon.ico`,
    copyright: feedConfig.copyright ?? '',
  })

  const pattern = `${blogConfig?.postsPath ?? '/blog/posts'}/**/*.md`
  const output = feedConfig.outputPath ?? '/feed.rss'

  const posts = await createContentLoader(pattern, {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined,
        },
      ],
      date: frontmatter.date,
    })
  }

  writeFileSync(path.join(siteConfig.outDir, output), feed.rss2())
}

export async function processData(
  pageData: PageData,
  ctx: TransformPageContext,
  aside = 'left',
  sidebar = false
) {
  const config = ctx?.siteConfig?.site?.themeConfig as TintamarreBlogThemeConfig
  const postsPattern = config.blog?.postsPath ?? 'blog/posts'
  const authorsPattern = config.blog?.authorsPath ?? 'blog/authors'

  if (pageData.relativePath.includes(postsPattern)) {
    pageData.frontmatter.blog = 'post'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
  if (pageData.relativePath.includes(authorsPattern)) {
    pageData.frontmatter.blog = 'author'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
}

/**
 * Type config helper
 */
export function defineConfig(config: UserConfig<TintamarreBlogThemeConfig>) {
  const userMarkdownConfig = config.markdown?.config
  const userViteConfig = config.vite ?? {}
  const userOptimizeDeps = userViteConfig.optimizeDeps ?? {}
  const userOptimizeDepsExclude = userOptimizeDeps.exclude ?? []

  return defineConfigWithTheme<TintamarreBlogThemeConfig>({
    vite: {
      ...userViteConfig,
      optimizeDeps: {
        ...userOptimizeDeps,
        exclude: [...userOptimizeDepsExclude, 'tintamarre-blog'],
      },
    },
    buildEnd: genFeed,
    async transformPageData(pageData, ctx) {
      await processData(pageData, ctx)
    },
    ...config,
    markdown: {
      ...config.markdown,
      config(md) {
        userMarkdownConfig?.(md)
        installNoTocFilter(md)
      },
    },
  })
}

function installNoTocFilter(md: MarkdownIt) {
  const renderTocBody = md.renderer.rules.toc_body

  if (!renderTocBody) {
    return
  }

  md.renderer.rules.toc_body = (tokens, idx, options, env, self) => {
    return renderTocBody(filterNoTocHeadings(tokens), idx, options, env, self)
  }
}

function filterNoTocHeadings(tokens: Token[]) {
  const filtered = [] as Token[]

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index]

    if (token.type === 'heading_open' && hasClass(token, 'no-toc')) {
      index += 2
      continue
    }

    filtered.push(token)
  }

  return filtered
}

function hasClass(token: Token, className: string) {
  return (token.attrGet('class') ?? '').split(/\s+/).includes(className)
}
