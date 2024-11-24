interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Conité GBODOGBE', // Site author
	title: 'Exploring Innovations and Challenges in Artificial Intelligence and Data Science', // Site title.
	description: " Hi, I’m a passionate student specializing in Data Science and Artificial Intelligence.With a strong academic foundation and hands-on experience, I enjoy exploring and discussing the latest innovations in AI, machine learning, and data-driven technologies. This blog is my space to share insights, experiments, and learnings from topics like natural language processing, neural networks, ethical AI, and much more.  Whether it’s breaking down complex concepts, discussing practical applications, or exploring the challenges of AI, I aim to make these ideas accessible and engaging for everyone curious about the world of data science. Join me as we uncover the exciting possibilities of AI and its impact on the future!", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
