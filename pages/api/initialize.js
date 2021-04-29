import { withSentry } from "@sentry/nextjs";

function handler(req, res) {
  res.status(200).json({
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

export default withSentry(handler);
