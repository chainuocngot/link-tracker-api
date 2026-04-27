const axios = require("axios")

async function sendDiscordClickNotification({ link, event }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return
  }

  const timestamp = new Date(event.clickedAt).toISOString()
  const content = {
    username: "Sticker Track Bot",
    embeds: [
      {
        title: "New Wrapped Link Click",
        color: 15277667,
        fields: [
          { name: "Link Name", value: link.name || "N/A", inline: true },
          { name: "Slug", value: link.slug || "N/A", inline: true },
          {
            name: "Total Clicks",
            value: String((link.clickCount || 0) + 1),
            inline: true,
          },
          { name: "Target URL", value: link.targetUrl || "N/A" },
          {
            name: "IP Address",
            value: event.ipAddress || "Unknown",
            inline: true,
          },
          {
            name: "Clicked At",
            value: timestamp,
            inline: true,
          },
        ],
        footer: {
          text: (event.userAgent || "Unknown agent").slice(0, 200),
        },
      },
    ],
  }

  await axios.post(webhookUrl, content, {
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

module.exports = {
  sendDiscordClickNotification,
}
