import { base_api_url } from "@/config/config";
import LatestNewsClient from "./LatestNewsClient"; // Import Client Component

const fetchLatestNews = async () => {
    try {
        const res = await fetch(`${base_api_url}/api/news/get-recent-news`, {
            next: { revalidate: 5 }, // ISR (Incremental Static Regeneration)
        });
        const data = await res.json();
        return data.news || [];
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};

const LatestNews = async () => {
    const recentNews = await fetchLatestNews(); // Fetch news on the server

    return <LatestNewsClient recentNews={recentNews} />;
};

export default LatestNews;
