import { Buffer } from 'node:buffer';

const buf = Buffer.from('hello world', 'utf8');

export function onRequest(context) {
    return new Response(buf.toString('hex'))
  }