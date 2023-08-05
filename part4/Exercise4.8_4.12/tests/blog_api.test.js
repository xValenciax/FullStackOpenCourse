const mongoose = require('mongoose');
const supertest = require('supertest');
const Blog = require('../models/Blog');
const app = require('../app');

const api = supertest(app);

const initialBlogs = [
	{
		title: 'React patterns',
		author: 'Michael Chan',
		url: 'https://reactpatterns.com/',
		likes: 7,
	},
	{
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
	},
];

beforeEach(async () => {
	await Blog.deleteMany({});

	let blogObj = new Blog(initialBlogs[0]);
	await blogObj.save();
	blogObj = new Blog(initialBlogs[1]);
	await blogObj.save();
});

describe('api', () => {
	test('correct amount of blogs returned in JSON  format', async () => {
		const blogs = await api
			.get('/api/blogs')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(blogs.body).toHaveLength(initialBlogs.length);
	});

	test('id property is defined', async () => {
		const blogs = await Blog.find({});
		const blogToCheck = blogs[0];

		expect(blogToCheck.id).toBeDefined();
	});

	test('new note is added', async () => {
		const newBlog = {
			title: 'First class tests',
			author: 'Robert C. Martin',
			url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
			likes: 10,
		};

		await api
			.post('/api/blogs')
			.send(newBlog)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		const notesAtEnd = await Blog.find({});
		expect(notesAtEnd).toHaveLength(initialBlogs.length + 1);

		const titles = notesAtEnd.map((b) => b.title);
		expect(titles).toContain(newBlog.title);
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});
