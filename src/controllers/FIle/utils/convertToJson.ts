import xmlParser, { processors } from "xml2js";
import fs from "fs";

export async function convertToJson(path: string) {
  const wpSampleXML = fs.readFileSync(path, "utf8");

  return await xmlParser.parseStringPromise(wpSampleXML, {
    tagNameProcessors: [nameToLowerCase],
    attrNameProcessors: [nameToLowerCase],
    attrValueProcessors: [
      nameToLowerCase,
      processors.parseBooleans,
      processors.parseNumbers,
    ],
    valueProcessors: [
      nameToLowerCase,
      processors.parseBooleans,
      processors.parseNumbers,
    ],
    emptyTag: null,
    explicitArray: false,
  });
}
function nameToLowerCase(name: string) {
  return name.toLowerCase();
}
