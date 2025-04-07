// Netlify function to handle form submissions
exports.handler = async function(event, context) {
  // Only process POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Parse the form data
    const params = new URLSearchParams(event.body);
    const formData = {};

    for (const [key, value] of params) {
      formData[key] = value;
    }

    console.log("Form submission received:", formData);

    // Redirect to success page
    return {
      statusCode: 302,
      headers: {
        Location: "/success/",
      },
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (err) {
    console.log("Error processing form:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process form submission" }),
    };
  }
};
