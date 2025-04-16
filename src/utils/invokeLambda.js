import { SignatureV4 } from "@smithy/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@smithy/protocol-http";

const AWS_ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY;
const AWS_SECRET_KEY = import.meta.env.VITE_AWS_SECRET_KEY;
const AWS_REGION = "eu-west-2";
const SERVICE = "lambda";
const LAMBDA_URL = "https://rcp2odnhwedd3w6svizsy7j5uy0pifvo.lambda-url.eu-west-2.on.aws";
// const LAMBDA_URL = "https://neqvdnjvytc32xonoaogpw3oua0qgdhb.lambda-url.eu-west-2.on.aws"

export default async function invokeLambda(body) {
  if (!AWS_ACCESS_KEY || !AWS_SECRET_KEY) {
    throw new Error("Missing AWS credentials");
  }
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const signed = await signer.sign(requestToSign);

  const response = await fetch(LAMBDA_URL, {
    method: "POST",
    headers: signed.headers,
    body: JSON.stringify(body),
    mode: "cors",
  });


  if (!response.ok) {
    const errText = await response.text();
    throw new Error(errText);
  }

  return await response.json();
}
