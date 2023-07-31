import retoolAppMap from "../../components/lib/AppMap";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.RETOOL_API_KEY}`,
        "Content-type": "application/json",
      };

      const body = {
        landingPageUuid: retoolAppMap[req.body.retoolAppName],
        groupIds: [process.env.RETOOL_GROUP_ID],
        externalIdentifier: req.body.data.user.email,

        userInfo: {
          firstName: req.body.data.user.name,
          email: req.body.data.user.email,
        },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };

      const url = `${process.env.RETOOL_URL}/api/embed-url/external-user`;

      fetch(url, options)
        .then((response) => {
          return response.json(); // Return the Promise from response.json()
        })
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((e) => console.log("error", e.message));
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}
