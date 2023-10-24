document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('createButton');
    const blogForm = document.getElementById('blogForm');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const authorInput = document.getElementById('author');
    const imageInput = document.getElementById('image');
    const saveButton = document.getElementById('saveButton');
    const blogList = document.getElementById('blogList');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalContentInput = document.getElementById('modal-content-input');
    const modalAuthorInput = document.getElementById('modal-author-input');
    const modalUpdateButton = document.getElementById('modal-update-button');
    const modalCancelButton = document.getElementById('modal-cancel-button');

    // Load existing blogs from local storage or initialize an empty array
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Function to save the blogs array to local storage
    const saveBlogsToLocalStorage = () => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    };

    // Function to display blogs from the array
    const displayBlogs = () => {
        blogList.innerHTML = '';
        blogs.forEach((blog, index) => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
                <p>Author: ${blog.author}</p>
                <img src="${blog.image}" alt="Blog Image">
                <p>Created: ${blog.date}</p>
                <button class="update-button" data-index="${index}">Update</button>
            `;
            blogList.appendChild(blogCard);
        });

        // Add event listeners to update buttons
        const updateButtons = document.querySelectorAll('.update-button');
        updateButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                openModal(index);
            });
        });
    };

    // Function to open the modal for updating a blog
    const openModal = (index) => {
        modalContentInput.value = blogs[index].content;
        modalAuthorInput.value = blogs[index].author;
        modal.style.display = 'flex';

        modalUpdateButton.onclick = () => {
            const updatedContent = modalContentInput.value;
            const updatedAuthor = modalAuthorInput.value;
            if (updatedContent.trim() !== '' && updatedAuthor.trim() !== '') {
                blogs[index].content = updatedContent;
                blogs[index].author = updatedAuthor;
                saveBlogsToLocalStorage();
                displayBlogs();
                modal.style.display = 'none';
            }
        };

        modalCancelButton.onclick = () => {
            modal.style.display = 'none';
        };
    };

    createButton.addEventListener('click', () => {
        blogForm.style.display = 'block'; // Show the form
    });

    saveButton.addEventListener('click', () => {
        const title = titleInput.value;
        const content = contentInput.value;
        const author = authorInput.value;
        const image = imageInput.files[0];
        const date = new Date().toLocaleString();

        const newBlog = {
            title: title,
            content: content,
            author: author,
            image: URL.createObjectURL(image),
            date: date,
        };

        blogs.push(newBlog);
        saveBlogsToLocalStorage();
        displayBlogs();

        titleInput.value = '';
        contentInput.value = '';
        authorInput.value = '';
        imageInput.value = '';
        blogForm.style.display = 'none'; // Hide the form
    });

    displayBlogs();
});



/*CARD-LAYOUT*/

document.addEventListener("DOMContentLoaded", function () {
  const blogSection = document.getElementById("blogSection");

  // Fetch JSON data from blogs.json
  fetch("blogs.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const blogImage = document.createElement("img");
        blogImage.src = blog.imageUrl;
        blogImage.classList.add("blog-image");
        blogImage.alt = "";

        const blogTitle = document.createElement("h1");
        blogTitle.classList.add("blog-title");
        blogTitle.textContent = blog.title;
        blogTitle.style.cursor = "pointer"; // Add pointer cursor on hover

        const blogContent = document.createElement("p");
        blogContent.classList.add("blog-overview");
        blogContent.textContent = blog.content;
        blogContent.style.display = "none"; // Initially hide the content

        const blogAuthorDate = document.createElement("p");
        blogAuthorDate.classList.add("blog-author-date");
        blogAuthorDate.textContent = `Author: ${blog.author} | Date: ${blog.creationDate}`;
        blogAuthorDate.style.display = "none"; // Initially hide the author and date

        let isExpanded = false;

        // Toggle content visibility when clicking the title
        blogTitle.addEventListener("click", () => {
          if (isExpanded) {
            blogContent.style.display = "none";
            blogAuthorDate.style.display = "none";
            isExpanded = false;
          } else {
            blogContent.style.display = "block";
            blogAuthorDate.style.display = "block";
            isExpanded = true;
          }
        });

        blogCard.appendChild(blogImage);
        blogCard.appendChild(blogTitle);
        blogCard.appendChild(blogAuthorDate);
        blogCard.appendChild(blogContent);

        blogSection.appendChild(blogCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});


