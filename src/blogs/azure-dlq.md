---
title: "Stop Using the Azure Portal to Clear Your DLQ (Do This in Python Instead)"
date: "2026-05-21"
description: "Clear you DLQ fastest way possible."
tags: ["DevOps", "Azure", "Python"]
cover: "https://i.imgflip.com/ascvow.jpg"
---

You select the dead-lettered messages in the Azure Portal... 

You hit "Resend"... 

You take a sip of coffee, expecting the queue to drain.... 

Then, you watch in horror as every single message fails again. Congratulations, your DLQ is now twice as big.

<p align="center"> 
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hxNXh0dHlhcWxza3IzdDNiNHc2Z2dwNWQ4M2IwajF1NjRweDh5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iJJ6E58EttmFqgLo96/giphy.gif" alt="The Desription" width="200" height="240"> 
</p>

## The Root Cause: Custom Properties

I've recently come across such issue with my azurr portal. After an hour of debugging, i found the culprit: malformed custom properties. Azure's native UI doesn't let you inject these in bulk. The portal gives you exactly one highly depressing option: fix and send them manually. One. By. One.

## The Portal UI is a Trap

If you rely on the Azure interface to fix this, your night looks like this:

- Copying the DLQ message body to your clipboard.

- Manually adding the required custom properties to the message envelope.

- Hitting send.

- Waiting to see if it processes.

- Repeating this 500 times while questioning your life choices.

Trust me, I know exactly how it feels to stay awake all night doing mindless data entry to clear a queue. We aren't doing that anymore. Code is superior.


![hacking](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjgwOWJqY2JnczZhMXB1cGFjc2NzY2JkdDJ2bWQ2YW9sZTF6MmdoYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13HgwGsXF0aiGY/giphy.gif)

## The Hero Code!

Instead of clicking until your mouse breaks, we can solve this with Python.

I wrote a modular script that automatically reads from the DLQ, injects the exact custom properties your consumer is crying about, and resends the payload to the active queue.

To run this, you just need to dig a few connection strings out of the Azure Portal and drop them into your .env file.

Here is the engine that does the heavy lifting:

> code is yet to come(so please hold on.)