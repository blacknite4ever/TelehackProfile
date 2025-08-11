// --- Start of Web 1.0 Style Script ---

// Clean up any old elements from previous scripts, like the canvas
const oldCanvas = document.querySelector('canvas');
if (oldCanvas) {
  oldCanvas.remove();
}

// Set the body styles
document.body.style.backgroundColor = '#333';
document.body.style.backgroundImage = "url('https://esperanto-panorama.net/bildoj/fono.jpg')";
document.body.style.backgroundRepeat = 'repeat';
document.body.style.color = '#33db04';
document.body.style.fontFamily = "'Times New Roman', serif";
document.body.style.textAlign = 'center';

// Create a new style element to define classes and insert it into the head
const style = document.createElement('style');
style.textContent = `
  h1 {
    color: #00ffff; /* Classic light blue heading */
    font-family: 'Courier New', Courier, monospace;
    border-bottom: 2px solid #00ffff;
    padding-bottom: 10px;
    margin: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #000; /* Black container */
    border: 2px solid ##33db04;
    box-shadow: 5px 5px 0 #666;
  }

  a {
    color: #00ff00; /* Classic green links */
  }

  .footer {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px dashed #fff;
    font-size: 0.8em;
  }

  .counter {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
`;
document.head.appendChild(style);

// Find the pre tag and the h1 tag
const pre = document.querySelector('pre');
const h1 = document.querySelector('h1');

// Create the main container div
const container = document.createElement('div');
container.classList.add('container');

// Only move h1 and pre if they exist to prevent errors
if (h1) {
  container.appendChild(h1);
}
if (pre) {
  container.appendChild(pre);
  // Apply styles to the pre tag
  pre.style.whiteSpace = 'pre-wrap';
  pre.style.textAlign = 'left';
  // Explicitly set the font and color to override any other styles
  pre.style.color = '##33db04';
  pre.style.fontFamily = "'Times New Roman', serif";
}

// Append the container to the body
document.body.appendChild(container);

// Create the footer div with visitor counter and HTML checkmark
const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = `
  <p>This page has been visited <span class="counter" id="visitor-count">0</span> times.</p>
  <p>
    <img src="https://www.w3.org/Icons/valid-html401-blue.png" alt="Valid HTML 4.01" />
    <br>
     <img src="https://blacknite4ever.github.io/TelehackProfile/images/pick_of_the_week.gif" alt="telnet" height="31" width="88">
    <img src="https://blacknite4ever.github.io/TelehackProfile/images/telnet.gif" alt="telnet" height="31" width="88">
    <img src="https://blacknite4ever.github.io/TelehackProfile/images/e-dos.gif" alt="e-dos" height="31" width="88">
    <img src="https://blacknite4ever.github.io/TelehackProfile/images/gateway_2000.gif" alt="gateway_2000" height="31" width="88">
    <img src="https://blacknite4ever.github.io/TelehackProfile/images/keep.gif" alt="keep" height="31" width="88">
  </p>
  <p>This page was last updated: August 10, 2025</p>
`;
container.appendChild(footer);

// Generate a random number for the visitor counter
const visitorCount = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
document.getElementById('visitor-count').textContent = visitorCount;

// --- End of Web 1.0 Style Script ---
