import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request})=>{
    return new Response(JSON.stringify(await request.json()))
}