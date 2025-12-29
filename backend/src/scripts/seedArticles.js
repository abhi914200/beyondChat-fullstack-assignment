import axios from 'axios';
import scrapeOldestArticles from '../services/scraper';

const seed = async () => {
  const articles = await scrapeOldestArticles();

  for (const article of articles) {
    await axios.post("http://localhost:5000/api/articles", {
      ...article,
      content: "To be scraped",
    });
  }

  console.log("Articles seeded");
};

seed();
