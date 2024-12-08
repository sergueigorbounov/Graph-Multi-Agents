const logsDiv = document.getElementById('logs');

const fetchLogs = async () => {
  try {
    const response = await fetch('http://localhost:3001/logs'); // Adjust the URL if needed
    const logs = await response.json();

    // Update the logs div with fetched logs
    logsDiv.textContent = logs.join('\n');
    logsDiv.scrollTop = logsDiv.scrollHeight; // Auto-scroll to the bottom
  } catch (error) {
    console.error('Error fetching logs:', error);
    logsDiv.textContent += '\nError fetching logs. Check the console for details.';
  }
};

// Fetch logs every 5 seconds
setInterval(fetchLogs, 5000);

// Fetch logs immediately on page load
fetchLogs();
