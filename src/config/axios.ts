import axios from 'axios';

const wikiBaseUrl = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php?'
});

export default wikiBaseUrl;
