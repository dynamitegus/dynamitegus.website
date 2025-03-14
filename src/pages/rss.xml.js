import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { getCollection } from 'astro:content';

export async function GET(context) {
    return rss({
        title: 'dynamitegus | Blog',
        description: 'dynamitegus\'s blog its blogging time',
        site: context.site,
        items: await pagesGlobToRssItems(getCollection("blog")),
        customData: `<language>en-us</language>`,
    });
}