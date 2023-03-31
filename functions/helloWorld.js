import buffer from "node:buffer";

export function onRequest(context) {
    return new Response("Hello, world!")
  }