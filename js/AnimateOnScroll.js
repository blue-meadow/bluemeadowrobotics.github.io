// Any object with this name in its class list will be given the AnimateOnScroll behavior.
const queryClassName = "AnimateOnScroll";
const toggleClassName = "animate__animated";

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // const square = entry.target.querySelector(queryClassName);

    if (entry.isIntersecting) {
      entry.target.classList.add(toggleClassName);
	    return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    entry.target.classList.remove(toggleClassName);
  });
});

var elements = document.getElementsByClassName(queryClassName);
console.log(elements);
observer.observe(document.getElementsByClassName(queryClassName));
