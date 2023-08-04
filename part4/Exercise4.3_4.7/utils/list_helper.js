const _ = require('loadsh');

const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	const reducer = (sum, blogPost) => {
		return sum + blogPost.likes;
	};

	return blogs.length ? blogs.reduce(reducer, 0) : 0;
};

const favoriteBlog = (blogs) => {
	if (!blogs.length) return null;

	let fav_blog = blogs[0];
	blogs.forEach(
		(blog) => (fav_blog = blog.likes >= fav_blog.likes ? blog : fav_blog)
	);

	let { title, author, likes } = fav_blog;
	return {
		title,
		author,
		likes,
	};
};

const mostBlogs = (blogs) => {
	if (!blogs.length) return null;

	const blogs_by_author = _.countBy(blogs, 'author');
	let no_blogs = _.map(blogs_by_author);
	const max_no_blogs = _.max(no_blogs);
	let author_with_most_blogs = null;
	_.each(blogs_by_author, (value, key) => {
		if (value === max_no_blogs && !author_with_most_blogs)
			author_with_most_blogs = key;
	});

	return {
		author: author_with_most_blogs,
		blogs: max_no_blogs,
	};
};

const mostLikes = (blogs) => {
	if (!blogs.length) return null;

	const author_by_likes = _.groupBy(blogs, 'author');

	let likes_sum_per_author = [];
	_.each(author_by_likes, (value, key) => {
		likes_sum_per_author.push([key, _.sumBy(value, 'likes')]);
	});

	const author_with_max_likes = _.maxBy(likes_sum_per_author, function (item) {
		return item[1];
	});

	return {
		author: author_with_max_likes[0],
		likes: author_with_max_likes[1],
	};
};

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes,
};
