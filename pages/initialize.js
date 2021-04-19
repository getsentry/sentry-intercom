export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  req.json({
    canvas: {
      content: {
        components: [
          {
            type: "button",
            label: "Click Me!",
            style: "primary",
            id: "url_button",
            action: { type: "submit" },
          },
        ],
      },
    },
  });
}
