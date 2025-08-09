---
sidebar_position: 2
---

# Standard

## 1. Manifest Standard (mcp.json)

This should be consistent with the existing MCP specifications for the manifest.

```json
{
  "protocolVersion": "YYYY-MM-DD",       // REQUIRED: Protocol version date
  "serverInfo": {                        // REQUIRED: Server information
    "name": "string",                    // Human-readable server name
    "version": "semver"                  // Server version
  },
  "capabilities": {                      // REQUIRED: Capabilities object
    "resources": [                       // REQUIRED: Array of resource definitions
      {
        "uri": "resume://info",          // REQUIRED: Resource URI
        "name": "Personal Information",  // REQUIRED: Human-readable name
        "description": "Description",    // REQUIRED: Resource description  
        "mimeType": "application/json"   // REQUIRED: MIME type
      }
    ],
    "tools": [                           // REQUIRED: Array of tool definitions
      {
        "name": "tool_name",             // REQUIRED: Tool name
        "description": "Tool purpose",   // REQUIRED: Tool description
        "inputSchema": {                 // REQUIRED: Input schema
          "type": "object",
          "properties": {
            "param1": {"type": "string"} // Parameter definitions
          },
          "required": ["param1"]         // Required parameters
        }
      }, {
        "name": "multi_param_tool_name",             // REQUIRED: Tool name
        "description": "Tool purpose",   // REQUIRED: Tool description
        "inputSchema": {                 // REQUIRED: Input schema
          "type": "object",
          "properties": {
            "param1": {"type": "string"}, // Parameter definitions
            "param2": {"type": "string"} // Parameter definitions
          },
          "required": ["param1", "param2"]         // Required parameters
        }
      }
    ]
  }
}
```

## 2. Directory Structure Standard

```
staticmcp-root/
  ├── mcp.json                      # REQUIRED: Main manifest
  ├── resources/                    # REQUIRED: Resource files
  │     └── {encoded-uri}.json
  └── tools/                        # REQUIRED: Tool directories
        ├── {tool_name}/
        │     └──{param1}.json
        └── {multi_param_tool_name}/
              ├──{param1}
              │     └──{param2}.json
              └──{param2}           # OPTIONAL: if params are interchangeable
                    └──{param1}.json
```

### File Naming

For the example URIs:

1. Remove everything before `://` (inclusive)
2. `/` refers to directory
3. Keep simple URIs as-is

Example mappings:

- `resume://info` → `info.json`
- `resume://experiences` → `experiences.json`
- `resume://skills` → `skills.json`

## 3. Resource File Response

```json
{
  "uri": "resume://info",                           // REQUIRED: Resource URI
  "mimeType": "application/json",                   // REQUIRED: Content type
  "text": "{\n  \"name\": \"John Doe\",\n  ...\n}"  // REQUIRED: Content
}
```

## 4. Tool Response

```json
{
  "content": [                        // REQUIRED: Response body
    {
      "type": "text",                 // REQUIRED: Content type
      "text": "[\n  {\n    \"id\": \"rust\",\n    ...\n  }\n]" 
    }
  ],
}
```
