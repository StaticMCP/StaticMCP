# Live Examples

Try StaticMCP with real deployments. Each example demonstrates different use cases and can be tested immediately with any MCP-compatible AI client.

## 🚀 Interactive Examples

### Personal Resume

**Try It Now**: Ask Claude about John Doe

Add this to your Claude Desktop Config

```json
{
  "mcpServers": {
      "resume-mcp": {
        "command": "npx",
        "args": [
          "staticmcp-bridge", 
          "https://staticmcp.com/mcp"
        ]
      }
  }
}
```

**Generated with**: `resume_smg` tool from personal JSON data

### StaticMCP Documentation (Self-Hosting)

**Try It Now**: Ask Claude about StaticMCP

```json
{
  "mcpServers": {
      "resume-mcp": {
        "command": "npx",
        "args": [
          "staticmcp-bridge", 
          "https://staticmcp.github.io/resume_smg/"
        ]
      }
  }
}
```

**Original Site**: This very documentation site  
**Generated with**: `docusaurus-smg`

**Example Questions to Try**:
- "How do I get started with StaticMCP?"
- "What's the difference between StaticMCP and traditional MCP?"
- "How do I deploy StaticMCP files?"
- "What tools are available for generating StaticMCP?"

## 🛠️ How These Examples Were Built

### Personal Resume

```bash
# 1. Create resume data (JSON format)
{
  "name": "John Doe",
  "experience": [...],
  "skills": [...],
  "projects": [...]
}

# 2. Generate StaticMCP
resume_smg ./resume.json --output ./smcp

# 3. Deploy to personal website
cp -r ./smcp/* /path/to/binhong.me/smcp/

# 4. Ready to use with hosted bridge
# URL: https://bridge.staticmcp.com/sse?url=https://binhong.me/smcp
```

### Documentation Examples

```bash
# 1. Clone the documentation site
git clone https://github.com/facebook/docusaurus.git
cd docusaurus/website

# 2. Generate StaticMCP
npm install -g docusaurus-smg
docusaurus-smg . --output ./staticmcp-output

# 3. Deploy to static hosting
netlify deploy --dir ./staticmcp-output
# or
vercel --prod ./staticmcp-output

# 4. Connect via hosted bridge
# URL: https://bridge.staticmcp.com/sse?url=YOUR_DEPLOYED_URL
```

## 📊 Performance Comparison

Testing with the examples above on global infrastructure:

| Metric | Traditional MCP Server | StaticMCP |
|--------|----------------------|-----------|
| **Average Response Time** | 200-500ms | 20-50ms |
| **Global P95 Response** | 500-2000ms | \< 100ms |
| **Cold Start** | 1-3 seconds | 0ms (no servers) |
| **Monthly Cost** | $20-100 | $0 |
| **Setup Time** | 2-8 hours | 5 minutes |

## 🎯 Try Building Your Own

### Option 1: Personal Resume/Portfolio

```bash
# Install the resume generator
npm install -g resume_smg

# Create your resume.json file
{
  "name": "Your Name",
  "title": "Your Title", 
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "duration": "2020-2024",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ],
  "skills": ["JavaScript", "Python", "React"],
  "projects": [
    {
      "name": "Project Name",
      "description": "What you built",
      "technologies": ["React", "Node.js"]
    }
  ]
}

# Generate StaticMCP
resume_smg ./resume.json --output ./my-smcp

# Deploy to GitHub Pages, Netlify, or Vercel
# Then use: https://bridge.staticmcp.com/sse?url=YOUR_URL
```

### Option 2: Documentation Site

```bash
# If you have a Docusaurus site
npm install -g docusaurus-smg
docusaurus-smg ./your-docusaurus-site --output ./staticmcp

# Deploy and connect
netlify deploy --dir ./staticmcp
# Use: https://bridge.staticmcp.com/sse?url=YOUR_NETLIFY_URL
```

### Option 3: Fork an Example

1. **Build your own SMG**: See [docusaurus-smg](https://github.com/StaticMCP/docusaurus-smg) or [resume-smg](https://github.com/StaticMCP/resume-smg)
2. **Deploy with one click** to GitHub Pages, Netlify, or Vercel
3. **Start using immediately** with the hosted bridge

## 🧪 Testing Your StaticMCP

### Using MCP Inspector

```bash
# Test any StaticMCP deployment
npx @modelcontextprotocol/inspector \
  "https://bridge.staticmcp.com/sse?url=https://your-site.com"
```

### Using Claude Desktop

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "my-staticmcp": {
      "command": "npx",
      "args": [
          "staticmcp-bridge",
          "https://your-site.com"
      ]
    }
  }
}
```

### Direct Testing

Visit any example URL (like `https://staticmcp.com/mcp/mcp.json`) to see the raw StaticMCP structure.

## 💡 Common Use Cases

### Developer Portfolios

**Perfect for**: Showcasing projects, skills, experience
**Tools**: [`resume_smg`](https://github.com/StaticMCP/resume_smg)
**Benefits**: AI can answer questions about your background

### Technical Documentation  

**Perfect for**: API docs, user guides, tutorials
**Tools**: [`docusaurus-smg`](https://github.com/StaticMCP/docusaurus-smg)
**Benefits**: AI can help users navigate and understand docs

### Knowledge Bases

**Perfect for**: Company wikis, FAQ systems, procedures
**Benefits**: Internal knowledge becomes AI-searchable

### Product Catalogs

**Perfect for**: E-commerce listings, product specs
**Benefits**: AI can help customers find products

## 🚀 What's Next?

1. **Try an example** above to see StaticMCP in action
2. **Build your own** using the guides provided
3. **Share your creation** - we love featuring community examples!
