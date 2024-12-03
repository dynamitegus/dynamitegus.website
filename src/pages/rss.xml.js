import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'dynamitegus | Blog',
        description: 'dynamitegus\'s blog its blogging time',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}