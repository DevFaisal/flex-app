import { SignatureV4 } from "@smithy/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@smithy/protocol-http";

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY;
const AWS_SECRET_KEY = import.meta.env.VITE_AWS_SECRET_KEY;
const AWS_REGION = "eu-west-2";
const SERVICE = "lambda";
const LAMBDA_URL = "https://24zmed2fik5extu2pos5tu6vru0kwebh.lambda-url.eu-west-2.on.aws/";


export default async function invokeLambda() {
    const urlObj = new URL(LAMBDA_URL);
  
    const signer = new SignatureV4({
      credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
      },
      region: AWS_REGION,
      service: SERVICE,
      sha256: Sha256,
    });
  
    const requestToSign = new HttpRequest({
      method: "POST",
      protocol: "https:",
      hostname: urlObj.hostname,
      path: "/",
      headers: {
        host: urlObj.hostname,
        "content-type": "application/json",
      },
    });
  
    const signed = await signer.sign(requestToSign);
  
    const response = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: signed.headers,
    });
  
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }
  
    return await response.json();
  }
  