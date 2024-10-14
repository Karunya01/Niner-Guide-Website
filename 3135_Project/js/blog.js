"use strict";

const blogs = [
  {title: 'Summer Tours',
   date: new Date(2024, 6, 12),
   content: 'Summer tours will start on 6/18 and will go on till 7/28. Please sign up for Summer Tours if you are interested. You will get paid per hour for this comittment.'},
  {title: 'Fall 2024 Tours',
  date: new Date(2024, 6, 19),
  content: 'Please check your emails to see Tour timings in the fall and make sure to sign up for those as well. Make sure to submit your preferred times by 7/10 so that we can plan your schedules for next semester. '}
]

blogs.forEach(blog=>{
  addEntry(blog);
});

/**
 * This function creates a DOM elment with information from the blog object, and adds the element into the DOM.
 * @param {*} blog - a blog element
 */
function addEntry(blog) {
  const postsContainer = document.querySelector('.posts');

  const article = document.createElement('article');
  article.classList.add('post');
  postsContainer.appendChild(article);

  const h3 = document.createElement('h3');
  h3.textContent = blog.title;
  h3.classList.add('blog-header');
  article.appendChild(h3);

  const dateOfBlog = document.createElement('p');
  dateOfBlog.classList.add('date');
  dateOfBlog.textContent = blog.date.toLocaleDateString();
  article.appendChild(dateOfBlog);

  const contentOfBlog = document.createElement('p');
  contentOfBlog.textContent = blog.content;
  article.appendChild(contentOfBlog);

  
}

