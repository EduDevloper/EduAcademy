fetch('courses.json')
  .then(response => response.json())
  .then(courses => {
    const courseContainer = document.getElementById('course-container');

    courses.forEach(course => {
      const card = document.createElement('div');
      card.classList.add('course-card');

      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h3>${course.title}</h3>
      `;

      courseContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading courses:', error));
