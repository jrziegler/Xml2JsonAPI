import xmlParser from "xml2js";
import fs from "fs";

export async function convertToJson(path: string) {
  const wpSampleXML = fs.readFileSync(path, "utf8");
  return await xmlParser.parseStringPromise(wpSampleXML);
}
