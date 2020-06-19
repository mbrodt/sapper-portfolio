const fetch = require("node-fetch");
const base64 = require("base-64");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const errorGen = (msg) => {
    return { statusCode: 500, body: msg };
  };
  try {
    const { email, tagId } = JSON.parse(event.body);
    if (!email) {
      return errorGen("Missing Email");
    }
    const subscriber = {
      email_address: email,
      status: "subscribed",
    };

    const contactResponse = await submitApiRequest(
      "https://us10.api.mailchimp.com/3.0/lists/78a6bdab58/members/",
      subscriber
    );
    const data = await contactResponse.json();

    const tagResponse = await submitApiRequest(
      `https://us10.api.mailchimp.com/3.0/lists/78a6bdab58/segments/${tagId}/members`,
      subscriber
    );

    // The response might return 400, if the email already exists. But we can still add the correct tag for this request, so we shouldn't send back an error.
    // if (!response.ok) {
    //   // NOT res.status >= 200 && res.status < 300
    //   return { statusCode: data.status, body: data.detail };
    // }
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "You've signed up to the mailing list!",
        detail: data,
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};

const submitApiRequest = async (url, data) => {
  const creds = `any:${process.env.MAILCHIMP_KEY}`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Basic ${base64.encode(creds)}`,
    },
    body: JSON.stringify(data),
  });
};
