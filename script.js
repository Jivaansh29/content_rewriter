async function processText() {
  const text = document.getElementById("inputText").value;
  const operation = document.getElementById("operation").value;
  const optionValue = document.getElementById("optionValue").value;

  const endpoint = operation === "rewrite" ? "rewrite" : "translate";
  const body = operation === "rewrite"
    ? { text, style: optionValue }
    : { text, language: optionValue };

  const response = await fetch("http://localhost:5000/api/" + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.result || "Error processing request.";
}
