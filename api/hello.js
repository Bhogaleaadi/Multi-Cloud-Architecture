export default function handler(req, res) {
  // Always set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  return res.status(200).json({
    message: "Hello from Vercel Cloud!",
    cloud: "Vercel",
    status: "Multi-cloud integration working!"
  });
}
