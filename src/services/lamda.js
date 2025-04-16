import invokeLambda from "../utils/invokeLambda";

const lambdaService = {
  createZohoAccount: async (body) => {
    return await callLambdaFunction("create_zoho_contact", body);
  },

  validateEmail: async (email) => {
    return await callLambdaFunction("validate_email", { email });
  },

  incrementNumber: async () => {
    return await callLambdaFunction("increment_number");
  },
};

export default lambdaService;

async function callLambdaFunction(operation, body = {}) {
  try {
    const response = await invokeLambda({
      operation,
      ...(operation === "create_zoho_contact" ? { data: body.data } : body),
    });

    return response;
  } catch (error) {
    throw error
  }
}
