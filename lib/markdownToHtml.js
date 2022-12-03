import { Octokit } from 'octokit'

export default async function markdownToHtml(text) {
    const octokit = new Octokit({
        auth: process.env.GH_TOKEN
    })
    try {
        const res = await octokit.request('POST /markdown', { text })
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}
