import type { Handle, RequestHandler } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve})=>{
    /*if(event.url.pathname.startsWith('/search/anime')){
        return new Response("custom response")
    }*/

    const response = await resolve(event)
    console.log("chamou")

    return response
}