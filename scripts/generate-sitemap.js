const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    'src/text/es/blog/**/*.mdx',
    'src/text/en/blog/**/*.mdx',
    '!pages/_*.js',
    '!pages/api',
    '!pages/blog/*.js',
    '!pages/en/blog/*.js',
    '!pages/es/blog/*.js',
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('src/text/es/blog', '/es/blog')
                  .replace('src/text/en/blog', '/en/blog')
                  .replace('index', '');

                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://dazu.ma${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
