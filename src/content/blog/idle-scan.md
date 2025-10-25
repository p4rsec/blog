---
title: "IDLE scan"
pubDate: 2025-10-25
description: "A stealth technique for port scanning that evades detection by using a zombie host to probe target ports."
author: "p4rsec"
---

An IDLE scan is a stealth port scanning technique that leverages a "zombie" host with predictable IP ID sequences to probe target ports without directly interacting with them. Unlike traditional scans where your own IP address is visible in firewall logs, an IDLE scan makes the zombie host appear as the scanning source, providing anonymity and helping evade intrusion detection systems.

In this post, we'll explore how to implement an IDLE scan from scratch, understanding the underlying TCP/IP mechanisms that make this technique possible.
