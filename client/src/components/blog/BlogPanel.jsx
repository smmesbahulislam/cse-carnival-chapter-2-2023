import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog.css";

const blog_data = [
	{
		title: "Corona",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		img_author: "images/user_image.jpg",
		date: "12/12/2021",
		author: "John Doe",
		tags: ["tag1", "tag2", "tag3"],
	},
	{
		title: "Blog Title",
		description:
			"Lorem samina dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		img_author: "images/user_image.jpg",
		date: "12/12/2021",
		author: "Nick Doe",
		tags: ["tag1", "tag2", "tag3"],
	},
];

const BlogPanel = ({ searchField, searchAuthor }) => {
	// const [blog_data, setBlogData] = useState([]);

	// const fetchAllBlogData = async () => {
	// 	try {
	// 		const res = await axios.get(
	// 			`${process.env.REACT_APP_API}/api/v1/blog/all-blog`
	// 		);
	// 		setBlogData(res.data.blogs);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchAllBlogData();
	// }, []);

	const newSearchField = blog_data.filter((data) => {
		const lowerDescription = data?.description.toLowerCase();
		const lowerTitle = data?.title.toLowerCase();
		const lowerAuthor = data.author.toLowerCase();

		return (
			lowerDescription.includes(searchField?.toLowerCase()) ||
			lowerTitle.includes(searchField?.toLowerCase()) ||
			lowerAuthor.includes(searchAuthor?.toLowerCase())
		);
	});

	// const handleUpVoteClick = async (id) => {
	// 	// console.log(id);
	// 	try {
	// 		const res = await axios.put(
	// 			`${process.env.REACT_APP_API}/api/v1/blog/upvote-blog/${id}`
	// 		);
	// 		const updatedBlog = res.data.blog;

	// 		// Update the state with the modified blog data
	// 		setBlogData((prevBlogData) => {
	// 			// Create a copy of the previous state
	// 			const updatedBlogData = [...prevBlogData];

	// 			// Find the index of the blog with the matching id
	// 			const index = updatedBlogData.findIndex((blog) => blog._id === id);

	// 			if (index !== -1) {
	// 				// Increment the upvote count for the found blog
	// 				updatedBlogData[index] = updatedBlog;

	// 				// Return the updated state
	// 				return updatedBlogData;
	// 			}

	// 			// If the blog with the given id was not found, return the previous state
	// 			return prevBlogData;
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const handleDownVoteClick = async (id) => {
	// 	try {
	// 		const res = axios.put(
	// 			`${process.env.REACT_APP_API}/api/v1/blog/downvote-blog/${id}`,
	// 			{}
	// 		);
	// 		const updatedBlog = res.data.blog;

	// 		// Update the state with the modified blog data
	// 		setBlogData((prevBlogData) => {
	// 			// Create a copy of the previous state
	// 			const updatedBlogData = [...prevBlogData];

	// 			// Find the index of the blog with the matching id
	// 			const index = updatedBlogData.findIndex((blog) => blog._id === id);

	// 			if (index !== -1) {
	// 				// Increment the upvote count for the found blog
	// 				updatedBlogData[index] = updatedBlog;

	// 				// Return the updated state
	// 				return updatedBlogData;
	// 			}

	// 			// If the blog with the given id was not found, return the previous state
	// 			return prevBlogData;
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="blog">
			{newSearchField.map((data) => (
				<div>
					<div className="blog-section">
						<div>
							<h1>{data.title}</h1>
							<div className="author-tags">
								<div
									className="blog-author"
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										width: "100%",
									}}
								>
									<div className="blog-author-img-info">
										<div className="blog-author-img">
											<img
												// src={`http://localhost:8000/${data?.doctorId?.profilePhoto}`}
												src="images/user_image.jpg"
												alt="author"
											/>
										</div>

										<div className="blog-author-info">
											<span className="author">{data.author}</span>
											<span className="date">
												{/* {data.createdAt.toLocaleString()} */}
												{/* {new Date(data.createdAt).toLocaleDateString("en-GB")} */}
												26/12/2021
											</span>
										</div>
									</div>

									<div className="tags">
										{data.tags.map((tag) => (
											<span
												className="tag"
												style={{
													backgroundColor:
														tag === "tag1"
															? "#8884d8"
															: tag === "tag2"
															? "#82ca9d"
															: tag === "tag3"
															? "#ffc658"
															: "#ff7300",
												}}
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
						<div>
							<p className="description">{data.description}</p>
						</div>
						<div className="blog-image">
							<img
								// src={
								// 	data.blogPhoto
								// 		? `${process.env.REACT_APP_API}/${data.blogPhoto}`
								// 		: "images/blog_image.jpg"
								// }
								src="images/blog_image.jpg"
								alt="blog_image"
							/>
						</div>
					</div>
					<div className="up-down">
						<div className="up">
							<ArrowUpwardIcon
								sx={{
									color: "green",
									fontSize: "33px",
									cursor: "pointer",
								}}
							/>
							{/* <span>{data.upVote.length}</span> */}
							<span>90</span>
						</div>
						<div className="down">
							<ArrowDownwardIcon
								sx={{
									color: "crimson",
									fontSize: "33px",
									cursor: "pointer",
								}}
							/>
							{/* <span>{data.downVote.length}</span> */}
							<span>41</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogPanel;
