import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import BlogPanel from "../components/blog/BlogPanel";
import BlogSearch from "../components/blog/BlogSearch";
import BlogSidePanel from "../components/blog/BlogSidePanel";
import BlogTags from "../components/blog/BlogTags";
import Navbar from "../components/navbar/Navbar";

const Blog = () => {
	const [searchField, setSearchField] = useState("");
	const [searchAuthor, setSearchAuthor] = useState("");
	const handleSearchChange = (event) => {
		setSearchField(event.target.value);
		setSearchAuthor(event.target.value);
	};
	return (
		<>
			{/* <Navbar/> */}
			<Nav />
			<motion.div
				className="blog-container"
				initial={{ x: "-100vw" }}
				animate={{ x: "0" }}
				transition={{ type: "spring", stiffness: 120, duration: 1 }}
			>
				<Grid container spacing={2}>
					<Grid item xs={2}>
						<BlogSidePanel />
					</Grid>
					<Grid item xs={7}>
						<div>
							<BlogPanel
								searchField={searchField}
								searchAuthor={searchAuthor}
							/>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div>
							<BlogTags />
							<BlogSearch onSearchChange={handleSearchChange} />
						</div>
					</Grid>
				</Grid>
			</motion.div>
		</>
	);
};

export default Blog;
