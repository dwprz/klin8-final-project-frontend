function validation(schema, data) {
  try {
    schema.parse(data);
    return { status: 200, message: "success" };
  } catch (error) {
    return { status: 400, message: "input is invalid" };
  }
}

export default validation;
