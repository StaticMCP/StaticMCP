# What is StaticMCP?

StaticMCP is an approach to serving AI model context that combines the power of the Model Context Protocol (MCP) with the simplicity and performance of static file hosting. Instead of running complex server applications, StaticMCP pre-generates all responses as static JSON files that can be served from any CDN or static hosting provider.

Think of it as "static site generation for AI context" – just as modern websites are pre-built into HTML files for lightning-fast delivery, StaticMCP pre-builds all your model context into optimized JSON files.

## Why StaticMCP?

### 🚀 **Blazing Fast Performance**
With zero runtime computation, StaticMCP delivers the fastest possible response times. Every request is served instantly from pre-generated files.

### 💰 **Dramatically Lower Costs**
Eliminate server infrastructure entirely. Host your entire MCP service on free or ultra-low-cost static hosting platforms like Vercel, Netlify, or GitHub Pages.

### 📦 **Dead Simple Deployment**
No Docker containers, no server management, no complex CI/CD pipelines. Just upload files to any static host and you're live.

### 🌍 **Unlimited Scalability**
Leverage CDN edge caching for global performance. Your MCP service automatically scales to handle millions of requests without any additional infrastructure.

### 🔧 **Developer Friendly**
Build with any language or tool you prefer. Python scripts, Bash commands, or full-fledged build systems – if it can generate JSON, it can power StaticMCP.

## 🌐 Zero Infrastructure Required

Use our hosted bridge at `https://bridge.staticmcp.com` - no servers to run, no containers to manage.

[Get Started →](/docs/bridge#hosted-bridge-service)

## Perfect For

- **Personal AI Assistants**: Expose your resume, projects, and knowledge base
- **Documentation Sites**: Make your project docs queryable by AI models
- **Dataset APIs**: Provide searchable access to static datasets
- **Knowledge Bases**: Serve curated information collections
- **Portfolio Sites**: Let AI models explore your work and achievements

## How It Works

StaticMCP follows a simple file-based architecture inspired by static site generators:

1. **Pre-Generation Phase**: Use any tool to generate static JSON files from your data sources
2. **File Structure**: Organize files following the StaticMCP standard directory layout
3. **Deployment**: Upload to any static hosting provider
4. [**Bridge Server**](/docs/bridge): A lightweight proxy translates MCP requests to file paths

```
staticmcp-site/
  ├── mcp.json                 # Main manifest
  ├── resources/               # Pre-built resource responses  
  │     ├── README.md.json
  │     └── docs.json
  └── tools/                   # Pre-built tool responses
        └── search/
              ├── javascript.json
              └── python.json
```

## Real-World Example

Instead of running a database-backed server to serve your project documentation, you could:

1. Run a script that crawls your docs and generates search responses
2. Upload the resulting JSON files to a CDN
3. Point your AI model to `https://staticmcp.com/mcp`
4. Get instant, cached responses worldwide

## Get Started

Ready to try StaticMCP? Here are your next steps:

- **📖 Deep Dive**: Read the [RFC specification](/docs/rfc) for complete technical details
- **📏 Build Standard**: Follow the [StaticMCP Standard](/docs/standard) for maximum compatibility
- **🛠️ Implementation**: Check out example generators and tools
- **💬 Community**: Join discussions about StaticMCP patterns and best practices

## The Future of AI Context

StaticMCP represents a fundamental shift toward treating AI context as a first-class web resource. By embracing static generation principles, we can build more resilient, performant, and cost-effective AI integrations that scale effortlessly with the modern web.

Whether you're building personal AI tools or enterprise-scale context services, StaticMCP offers a path to simpler, faster, and more reliable AI model integration.

---

*StaticMCP builds upon the [Model Context Protocol](https://modelcontextprotocol.io) standard developed by Anthropic, extending it with static generation capabilities for modern web deployment.*