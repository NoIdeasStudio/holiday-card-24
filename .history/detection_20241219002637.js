// const videoElement = document.querySelector('.input_video');

// function resizeVideo() {
//   const windowWidth = window.innerWidth;
//   const windowHeight = window.innerHeight;

//   // Calculate the aspect ratio of the video (assuming the video has its natural width and height)
//   const videoAspectRatio = videoElement.videoWidth / videoElement.videoHeight;

//   // Apply resizing logic only for window widths under 1024px
//   if (windowWidth <= 1024) {
//     // Window is smaller than or equal to 1024px

//     // Check aspect ratio of video and adjust size based on window size
//     if (windowWidth / windowHeight > videoAspectRatio) {
//       // Window is wider than video (video fits width)
//       videoElement.style.width = '100vw';
//       videoElement.style.height = 'auto';
//     } else {
//       // Window is taller than video (video fits height)
//       videoElement.style.height = '100vh';
//       videoElement.style.width = 'auto';
//     }
//   } else {
//     // For windows above 1024px, reset to default behavior (you can choose not to resize)
//     videoElement.style.width = 'auto';
//     videoElement.style.height = 'auto';
//   }
// }

// // Call resize function on window resize
// window.addEventListener('resize', resizeVideo);

// // Initial call to set the video size when the page loads
// resizeVideo();


// // Initial call to set the video size when the page loads
// resizeVideo();


// // Initial resize when page loads
// resizeVideo();
// const canvasElement = document.querySelector('.output_canvas');
// const canvasCtx = canvasElement.getContext('2d');

// const handsModel = new Hands({
//   locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
// });

// handsModel.setOptions({
//   maxNumHands: 1,
//   modelComplexity: 1,
//   minDetectionConfidence: 0.5,
//   minTrackingConfidence: 0.5
// });

// // Function to clear existing landmarks (if any)
// function clearLandmarks() {
//   const existingLandmarks = document.querySelectorAll('.landmark');
//   existingLandmarks.forEach(landmark => landmark.remove());
// }

// // Function to position a div at a given landmark position with unique class
// function positionLandmarkDiv(landmark, id, className, text) {
//   const landmarkDiv = document.getElementById(id) || document.createElement('div');
//   landmarkDiv.id = id;

//   // Assign a unique class based on the type of landmark (wrist, mcp, tip)
//   landmarkDiv.classList.add('landmark-div', className); // Add both the shared and unique class
//   document.body.appendChild(landmarkDiv);

//   const x = landmark.x * canvasElement.width;
//   const y = landmark.y * canvasElement.height;

//   // Adjust for the mirrored canvas (flip effect)
//   const adjustedX = canvasElement.width - x; // Mirror the x-coordinate

//   // Use transform: translate() for smoother movement
//   landmarkDiv.style.transform = `translate(${adjustedX}px, ${y}px)`;

//   // Set the text content of the div
//   landmarkDiv.textContent = text;
// }

// // Function to handle the results from the model
// function onResults(results) {
//   // Resize canvas to match the window dimensions
//   clearLandmarks();
  
//   canvasElement.width = window.innerWidth;  // Set internal width based on window size
//   canvasElement.height = window.innerHeight;  // Set internal height based on window size

//   // Flip the canvas horizontally
//   canvasCtx.scale(-1, 1);  // Horizontal flip for mirror effect
//   canvasCtx.translate(-canvasElement.width, 0); // Correct translation

//   canvasCtx.fillStyle = '#FF0000';  // Solid gray color
//   canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

//   if (results.multiHandLandmarks) {
//     // Loop through each detected hand
//     results.multiHandLandmarks.forEach((landmarks, handIndex) => {
//       // Extract wrist landmark (index 0)
//       const wrist = landmarks[0]; // Wrist is at index 0 in the landmarks array
//       const wristDivId = `wrist-div-${handIndex}`;
//       positionLandmarkDiv(wrist, wristDivId, `wrist-${handIndex}`, "f");
      

// // Handle MCP points (indices 1, 5, 9, 13, 17) individually
// const mcp1 = landmarks[1];
// const mcpDivId1 = `mcp-div-${handIndex}-1`;
// positionLandmarkDiv(mcp1, mcpDivId1, `mcp-${handIndex}-1`, "a");

// const mcp2 = landmarks[5];
// const mcpDivId2 = `mcp-div-${handIndex}-2`;
// positionLandmarkDiv(mcp2, mcpDivId2, `mcp-${handIndex}-2`, "b");

// const mcp3 = landmarks[9];
// const mcpDivId3 = `mcp-div-${handIndex}-3`;
// positionLandmarkDiv(mcp3, mcpDivId3, `mcp-${handIndex}-3`, "c");

// const mcp4 = landmarks[13];
// const mcpDivId4 = `mcp-div-${handIndex}-4`;
// positionLandmarkDiv(mcp4, mcpDivId4, `mcp-${handIndex}-4`, "d");

// const mcp5 = landmarks[17];
// const mcpDivId5 = `mcp-div-${handIndex}-5`;
// positionLandmarkDiv(mcp5, mcpDivId5, `mcp-${handIndex}-5`, "e");

// // Handle finger tip points (indices 4, 8, 12, 16, 20) individually
// const tip1 = landmarks[4];
// const tipDivId1 = `tip-div-${handIndex}-1`;
// positionLandmarkDiv(tip1, tipDivId1, `tip-${handIndex}-1`, "1");

// const tip2 = landmarks[8];
// const tipDivId2 = `tip-div-${handIndex}-2`;
// positionLandmarkDiv(tip2, tipDivId2, `tip-${handIndex}-2`, "2");

// const tip3 = landmarks[12];
// const tipDivId3 = `tip-div-${handIndex}-3`;
// positionLandmarkDiv(tip3, tipDivId3, `tip-${handIndex}-3`, "3");

// const tip4 = landmarks[16];
// const tipDivId4 = `tip-div-${handIndex}-4`;
// positionLandmarkDiv(tip4, tipDivId4, `tip-${handIndex}-4`, "4");

// const tip5 = landmarks[20];
// const tipDivId5 = `tip-div-${handIndex}-5`;
// positionLandmarkDiv(tip5, tipDivId5, `tip-${handIndex}-5`, "5");


      
//     });
//   }

//   // Request the next animation frame for smoother updates
//   requestAnimationFrame(() => onResults(results));
// }

// // Set up the camera
// const camera = new Camera(videoElement, {
//   onFrame: async () => {
//     await handsModel.send({ image: videoElement });
//   },
//   width: window.innerWidth,
//   height: window.innerHeight
// });

// camera.start();

// // Set the hands model to use the onResults function
// handsModel.onResults(onResults);



const videoElement = document.querySelector('.input_video');
const animationContainer = document.getElementById('animationContainer');
let trackedPositions = [];
let isRecording = false;
let recordingData = [];
let animationDivs = [];

// Set up the video and canvas resize
function resizeVideo() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const videoAspectRatio = videoElement.videoWidth / videoElement.videoHeight;

  if (windowWidth <= 1024) {
    if (windowWidth / windowHeight > videoAspectRatio) {
      videoElement.style.width = '100vw';
      videoElement.style.height = 'auto';
    } else {
      videoElement.style.height = '100vh';
      videoElement.style.width = 'auto';
    }
  } else {
    videoElement.style.width = 'auto';
    videoElement.style.height = 'auto';
  }
}

window.addEventListener('resize', resizeVideo);
resizeVideo();

// MediaPipe Hands model initialization
const handsModel = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

handsModel.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

// Clear existing landmark elements
function clearLandmarks() {
  animationDivs.forEach(div => div.remove());
  animationDivs = [];
}

// Function to record and position landmarks
function positionLandmarkDiv(landmark, id, className, text) {
  const landmarkDiv = document.createElement('div');
  landmarkDiv.id = id;
  landmarkDiv.classList.add('landmark-div', className);
  animationContainer.appendChild(landmarkDiv);

  const x = landmark.x * animationContainer.offsetWidth;
  const y = landmark.y * animationContainer.offsetHeight;

  landmarkDiv.style.transform = `translate(${x}px, ${y}px)`;
  landmarkDiv.textContent = text;

  if (isRecording) {
    recordingData.push({ id, x, y });
  }
}

// Handle the results from MediaPipe Hands
function onResults(results) {
  clearLandmarks();
  if (results.multiHandLandmarks) {
    results.multiHandLandmarks.forEach((landmarks, handIndex) => {
      landmarks.forEach((landmark, i) => {
        const landmarkDivId = `${handIndex}-${i}`; // Unique ID for each landmark
        positionLandmarkDiv(landmark, landmarkDivId, `landmark-${handIndex}-${i}`, `${i}`);
      });
    });
  }
}

// Generate CSS animation for the recorded landmarks
function generateCSSAnimation() {
  const keyframes = recordingData.map((position, index) => {
    return `${index * 0.1}s { 
      #${position.id} {
        transform: translate(${position.x}px, ${position.y}px);
      }
    }`.join('\n');
  });

  const animationName = 'landmarkAnimation';
  const animationDuration = `${recordingData.length * 0.1}s`;

  const cssAnimation = `
    @keyframes ${animationName} {
      ${keyframes}
    }

    .landmark-div {
      animation: ${animationName} ${animationDuration} linear infinite;
    }
  `;

  const style = document.createElement('style');
  style.textContent = cssAnimation;
  document.head.appendChild(style);
}

// Start recording the positions of the landmarks
function startRecording() {
  isRecording = true;
  recordingData = []; // Reset recording data
  clearLandmarks();
  console.log('Recording started...');
  document.getElementById('startRecordingButton').disabled = true;
  document.getElementById('stopRecordingButton').disabled = false;
}

// Stop recording and create the animation
function stopRecording() {
  isRecording = false;
  console.log('Recording stopped...');
  document.getElementById('startRecordingButton').disabled = false;
  document.getElementById('stopRecordingButton').disabled = true;

  // Generate CSS animation based on recorded data
  generateCSSAnimation();
}

// Start hand tracking via camera
function startHandTracking() {
  const video = document.querySelector('video');
  video.play();
  const camera = new Camera(video, {
    onFrame: async () => {
      await handsModel.send({ image: video });
    },
    width: 640,
    height: 480,
  });
  camera.start();
}

// Event listeners for buttons
document.getElementById('startRecordingButton').addEventListener('click', startRecording);
document.getElementById('stopRecordingButton').addEventListener('click', stopRecording);

// Start hand tracking when the page loads
startHandTracking();



function calculateDayOfYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1); // January 1st of the current year
  const diff = today - startOfYear; // Difference in milliseconds
  const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in one day

  return Math.floor(diff / oneDay) + 1; // Day number, add 1 to start from Day 1
}

// Function to check for leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Get the current year and set the total days (365 or 366 based on leap year)
const today = new Date();
const totalDays = isLeapYear(today.getFullYear()) ? 366 : 365;

