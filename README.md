# "ChatGPT" API Server with Next.js
- via OpenAI's official text completion API
- using "text-davinci-003"
- not free, but you have some free credits to try it out
- need OPENAI_API_KEY
- Powered by [transitive-bullshit/chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

To deploy your instance of this API with Vercel, either click this button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftlylt%2Fchatgpt-nextjs-server&env=OPENAI_API_KEY&envDescription=This%20is%20the%20API%20Key%20needed%20to%20access%20OpenAI's%20completion%20API&envLink=https%3A%2F%2Fhelp.openai.com%2Fen%2Farticles%2F4936850-where-do-i-find-my-secret-api-key)

or follow these steps:
- clone/fork this repository
- import this project into Vercel
- enter the environment variable OPENAI_API_KEY = your_openai_api_key
- API will be available at https://your-vercel-project-name.vercel.app/api/chat

## API usage

- POST to https://your-vercel-project-name.vercel.app/api/chat
```json
{
    "message": "Hello, how are you?"
}
```
e.g. curl
```bash
curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
    "message": "Can you chat?"
}' \
 'https://your-vercel-project-name.vercel.app/api/chat'
```

- Response
```json
{
    "response": "I can chat, but I'm not sure what you mean."
}
```