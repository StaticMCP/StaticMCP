# StaticMCP

**Static Model Context Protocol** - Serve AI model context with the simplicity and performance of static files.

## What is StaticMCP?

StaticMCP transforms the way we serve AI model context by pre-generating all responses as static JSON files. Instead of running complex server applications, you can deploy your entire MCP service to any static hosting platform like Vercel, Netlify, or GitHub Pages.

Think of it as "static site generation for AI context" – just as modern websites are pre-built into HTML files for lightning-fast delivery, StaticMCP pre-builds all your model context into optimized JSON files.

## Why Choose StaticMCP?

- **🚀 Blazing Fast** - Zero runtime computation, instant responses from CDN edge
- **💰 Ultra Low Cost** - Deploy to free static hosting, eliminate server costs
- **📦 Simple Deploy** - Just upload files, no containers or server management
- **🌍 Global Scale** - Automatic CDN distribution and unlimited scalability
- **🔧 Any Language** - Build with Python, Bash, Node.js, or any tool you prefer

## File Structure

StaticMCP follows a simple, predictable structure:

```
staticmcp-site/
  ├── mcp.json                     # Server manifest and capabilities
  ├── resources/                   # Pre-built resource responses
  │     ├── README.md.json         # Individual resource files
  │     └── docs_api.json
  └── tools/                       # Pre-built tool responses
        └── search/
              ├── rust.json        # Tool call responses
              ├── javascript.json
              └── index.json       # Available parameters
```

## Perfect For

- **Personal AI Assistants** - Expose your resume, projects, and knowledge
- **Documentation Sites** - Make project docs queryable by AI models  
- **Knowledge Bases** - Serve curated information collections
- **Dataset APIs** - Provide searchable access to static datasets
- **Portfolio Sites** - Let AI models explore your work and achievements

## Real-World Example

Instead of running a database-backed server for your documentation:

1. **Generate**: Run a script that crawls your docs and creates search responses
2. **Deploy**: Upload the JSON files to a CDN  
3. **Use**: Point your AI model to `https://your-docs.staticmcp.com`
4. **Scale**: Get instant, cached responses worldwide

## Learn More

- **🌐 [Full Documentation](https://staticmcp.com)** - Complete guide and examples
- **📋 [RFC Specification](https://staticmcp.com/docs/rfc)** - Technical implementation details  
- **📏 [Standard](https://staticmcp.com/docs/standard)** - Official StaticMCP standard for tool builders

## Community & Ecosystem

StaticMCP is designed to be an open ecosystem. We encourage the development of:

- **Generators** for different data sources (Git repos, APIs, databases)
- **Bridge servers** for different deployment platforms  
- **Templates** for common use cases
- **Tools** for validation, optimization, and deployment

## Contributing

StaticMCP is an open standard. Contributions to the specification, reference implementations, and ecosystem tools are welcome.

## Architecture Benefits

StaticMCP leverages proven web architecture patterns:

- **JAMstack Philosophy** - Pre-build everything for maximum performance
- **CDN-First** - Global edge caching out of the box
- **Git-Based Workflow** - Version control your AI context like code
- **HTTP Standards** - Full compatibility with existing web infrastructure

## License

The StaticMCP specification is open source. Individual implementations may have their own licenses.

---

**Ready to get started?** Visit [staticmcp.com](https://staticmcp.com) for complete documentation, examples, and tools.