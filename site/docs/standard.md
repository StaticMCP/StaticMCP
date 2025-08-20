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

## 3. Filename Encoding Convention

### Basic Rules

1. **Unicode normalization**: Decompose accented characters (é → e, ñ → n)
2. **Lowercase conversion**: All characters converted to lowercase
3. **Safe character set**: Keep only a-z, 0-9, -, _
4. **Space handling**: Convert spaces to underscores (_)
5. **Invalid characters**: Replace all other characters with underscores (_)
6. **Length limit**: Maximum 200 characters (leaving room for .json extension)

### Long Filename Handling

When encoded filename exceeds 200 characters:
- Take first 183 characters of encoded name
- Append _ + 16-character hex hash of original title
- Format: `{first_183_chars}_{16_hex_hash}`
- Hash is generated from the original (pre-encoded) title for consistency

### Examples

- `"Hello World"` → `"hello_world"`
- `"François Mitterrand"` → `"francois_mitterrand"`
- `"COVID-19 pandemic"` → `"covid-19_pandemic"`
- `"José María Aznar"` → `"jose_maria_aznar"`
- `"King George III"` → `"king_george_iii"`

### Implementation Reference

```javascript
function encodeStaticMcpFilename(title) {
  // Unicode normalization (remove accents)
  const normalized = title.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Lowercase + safe characters only
  const safe = normalized.toLowerCase()
    .replace(/[^a-z0-9\-_]/g, '_')
    .replace(/\s+/g, '_');

  // Handle long filenames
  if (safe.length <= 200) return safe;

  const hash = hashFunction(title).toString(16).padStart(16, '0');
  return safe.substring(0, 183) + '_' + hash;
}
```

This ensures consistent, predictable filenames across all StaticMCP implementations.

## 4. Resource File Response

```json
{
  "uri": "resume://info",                           // REQUIRED: Resource URI
  "mimeType": "application/json",                   // REQUIRED: Content type
  "text": "{\n  \"name\": \"John Doe\",\n  ...\n}"  // REQUIRED: Content
}
```

## 5. Tool Response

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
