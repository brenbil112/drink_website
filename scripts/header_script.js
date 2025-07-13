document.querySelectorAll('a.coming-soon').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Future feature, coming soon !');
    });
  });