// This file looks in the /posts/ directory for markdown files, and re-compiles all posts to HTML.
// The posts are then imported into index.json.js, which exposes them as a JSON api

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
const fs = require("fs");
const path = require("path");
const marked = require("marked");
const matter = require("gray-matter");
const dateFns = require('date-fns')
const readingTime = require('reading-time')

const prism = require("prismjs");

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, "src/routes/blog/posts");

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
	const html = linkRenderer.call(renderer, href, title, text);

	if (href.indexOf("/") === 0) {
		// Do not open internal links on new tab
		return html;
	} else if (href.indexOf("#") === 0) {
		// Handle hash links to internal elements
		const html = linkRenderer.call(renderer, "javascript:;", title, text);
		return html.replace(
			/^<a /,
			`<a onclick="document.location.hash='${href.substr(1)}';" `
		);
	}

	return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
	const parser = prism.languages[language] || prism.languages.html;
	const highlighted = prism.highlight(code, parser, language);
	return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

const posts = fs
	.readdirSync(POSTS_DIR)
	.filter(fileName => /\.md$/.test(fileName))
	.map(fileName => {
		const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
		const { data, content } = matter(fileMd);
		const { title, date } = data;
		const slug = fileName.split(".")[0];

		const html = marked(content);
		const readingStats = readingTime(content)
		const printReadingTime = readingStats.text
		const printDate = dateFns.format(new Date(date), "MMMM d, yyyy")

		return {
			title: title || slug,
			slug,
			html,
			date,
			printDate,
			printReadingTime
		};
	});

posts.sort((a, b) => {
	const dateA = new Date(a.date);
	const dateB = new Date(b.date);

	if (dateA > dateB) return -1;
	if (dateA < dateB) return 1;
	return 0;
});

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
