// Show current time
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText =
      "🕒 " + now.toLocaleTimeString();
  }
  
  setInterval(updateTime, 1000);
  
  // Button interaction
  function deployMessage() {
    alert("🚀 Deployment pipeline triggered successfully!");
  
    document.getElementById("status").innerText =
      "Deployment Status: 🔄 IN PROGRESS...";
  }