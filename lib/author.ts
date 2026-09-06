import{env}from"cloudflare:workers";import{getChatGPTUser}from"@/app/chatgpt-auth";
export async function getAuthor(){const user=await getChatGPTUser();const authorEmail=(env as unknown as{AUTHOR_EMAIL?:string}).AUTHOR_EMAIL;if(!user||!authorEmail||user.email.toLowerCase()!==authorEmail.toLowerCase())return null;return user}
