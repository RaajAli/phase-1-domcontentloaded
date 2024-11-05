document.addEventListener('DOMContentLoaded', () => {
    const initialText = document.querySelector('p').textContent;
    if (initialText === "JavaScript is so cool. It lets me add text to my page programmatically.")
        document.querySelector('p').textContent = "This is really cool!";
});

//= #1 line sets up an event listener on the document that waits for the DOMContentLoaded event, which fires when the initial HTML document has been
//= completely loaded and parsed. It ensures that the JavaScript code only runs after the DOM is fully available.

//= #2 line selects the first <p> (paragraph) element on the page and gets its textContent, storing it in the initialText variable.
//= textContent returns the text inside the <p> element, without any HTML tags.

//= #3-4 line: the if statement checks if initialText matches the specific string "JavaScript is so cool. It lets me add text to my page programmatically."
//= If this condition is true, it updates the text content of the same <p> element to "This is really cool!"

//= Summary: This code waits until the page has fully loaded, then checks if the first <p> element contains a specific text. If the condition is met,
//= it changes the paragraph’s content to "This is really cool!". This allows the code to dynamically alter page content based on an initial state.