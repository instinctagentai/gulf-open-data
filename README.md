# Gulf open data (unofficial MCP server and API)

Free MCP server, JSON API and llms.txt for official Gulf (GCC) open data, in Arabic and English.

- World Bank World Development Indicators for Qatar, Saudi Arabia, UAE, Kuwait, Bahrain, Oman. Licence: CC BY 4.0.
- State of Qatar Open Data portal (data.gov.qa) dataset search and records. Licence: CC BY (Qatar Open Data License), shown per dataset.

Every answer includes source, licence, attribution, retrieval date and a disclaimer. Data is fetched live from the official APIs and only reformatted.

Live: https://gulf-data.pages.dev (when deployed)

MCP tools: `gulf_indicator`, `gulf_country_snapshot`, `list_indicators`, `qatar_open_data_search`, `qatar_open_data_records`.
Endpoints: `/mcp`, `/api/indicators`, `/api/indicator?code=NY.GDP.MKTP.CD&countries=QA,SA&years=5`, `/api/country?code=QA`, `/api/qatar/search?q=population`, `/api/qatar/records?id=<dataset_id>`, `/llms.txt`.

Unofficial. Not affiliated with the World Bank or the State of Qatar. Not financial or legal advice. Check the source before relying on any value.

Attribution: The World Bank, World Development Indicators (CC BY 4.0). State of Qatar Open Data portal (CC BY). Code: MIT.
