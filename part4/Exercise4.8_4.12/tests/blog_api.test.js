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
	test('blogs are returned with correct amount and JSON format', async () => {
		const blogs = await api
			.get('/api/blogs')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(blogs.body).toHaveLength(initialBlogs.length);
	});

	test('verify the id property', async () => {
		const blogs = await Blog.find({});
		const blogToCheck = blogs[0];

		expect(blogToCheck.id).toBeDefined();
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});
